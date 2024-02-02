import '../../../../../../../util/start_app.dart';

import '../../../../domain/entity/firebase_functions/get_user/request_dto/dto.dart';
import '../../../../domain/entity/firebase_functions/get_user/response_dto/dto.dart';
import '../../../../domain/repository/firebase_functions/get_user/interface.dart';
import '../../../source/firebase_functions/get_user/_.dart';

class GetUserFirebaseFunctionsRepo
    extends GetUserFirebaseFunctionsRepoInterface {
  @override
  Future<GetUserFirebaseFunctionsResponseDTO?> call(
          GetUserFirebaseFunctionsRequestDTO obj) async =>
      await GetUserFirebaseFunctions().call(obj);
}
