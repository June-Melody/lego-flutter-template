import '../../../../../../../util/start_app.dart';
import '../../../../data/repository/firebase_functions/get_user/impl.dart';
import '../../../entity/firebase_functions/get_user/request_dto/dto.dart';
import '../../../entity/firebase_functions/get_user/response_dto/dto.dart';
import '../../../repository/firebase_functions/get_user/interface.dart';

class _GetUserFirebaseFunctionsUseCase {
  Future<GetUserFirebaseFunctionsResponseDTO?> call(
      GetUserFirebaseFunctionsRequestDTO obj) async {
    return await GetUserFirebaseFunctionsRepo.call(obj);
  }

  final GetUserFirebaseFunctionsRepoInterface GetUserFirebaseFunctionsRepo;

  _GetUserFirebaseFunctionsUseCase(this.GetUserFirebaseFunctionsRepo);
}

class GetUserFirebaseFunctionsUseCase {
  static final _GetUserFirebaseFunctionsUseCase useCase =
      _GetUserFirebaseFunctionsUseCase(GetUserFirebaseFunctionsRepo());
}
