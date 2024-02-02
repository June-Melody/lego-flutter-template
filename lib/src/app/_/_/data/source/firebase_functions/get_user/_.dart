import 'package:firebase_dynamic_links/firebase_dynamic_links.dart';

import '../../../../../../../util/start_app.dart';

import '../../../../../../../util/config/firebase_function.dart';
import 'package:cloud_functions/cloud_functions.dart';

import '../../../../domain/entity/firebase_functions/get_user/request_dto/dto.dart';
import '../../../../domain/entity/firebase_functions/get_user/response_dto/dto.dart';

class GetUserFirebaseFunctions {
  Future<GetUserFirebaseFunctionsResponseDTO?> call(
      GetUserFirebaseFunctionsRequestDTO requestDTO,
      {String? region}) async {
    HttpsCallable callable;

    log("callFunction:GetUser");

    try {
      late FirebaseFunctions functions;
      if (region == null) {
        if (FireFunctionConfig.region == "") {
          functions = FirebaseFunctions.instance;
        } else {
          functions =
              FirebaseFunctions.instanceFor(region: FireFunctionConfig.region);
        }
      } else {
        functions = FirebaseFunctions.instanceFor(region: region);
      }
      if (FireFunctionConfig.isEmulatorMode) {
        functions.useFunctionsEmulator(FireFunctionConfig.emulatorHostString,
            FireFunctionConfig.emulatorHost);
      }
      callable = functions.httpsCallable("GetUser");

      HttpsCallableResult resp = await callable.call(requestDTO.toString());
      return GetUserFirebaseFunctionsResponseDTO.fromString(
          resp.data as String);
    } catch (e) {
      e.printError();
      return null;
    }
  }
}
