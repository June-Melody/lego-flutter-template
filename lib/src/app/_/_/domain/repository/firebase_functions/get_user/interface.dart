import '../../../../../../../util/start_app.dart';
import '../../../entity/firebase_functions/get_user/request_dto/dto.dart';
import '../../../entity/firebase_functions/get_user/response_dto/dto.dart';

abstract class GetUserFirebaseFunctionsRepoInterface {
  Future<GetUserFirebaseFunctionsResponseDTO?> call(
      GetUserFirebaseFunctionsRequestDTO obj);
}
