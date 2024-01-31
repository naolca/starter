import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import 'package:starter_mobile/features/auth/domain/repository/auth_repository.dart';
import 'package:starter_mobile/shared/entities/login_result_entity.dart';

class LoginUser {
  final AuthRepository authRepository;

  LoginUser(this.authRepository);

  Future<Either<Failure, LoginResultEntity>> loginUser(authEntity) async {
    print("the data in usecase");
    return await authRepository.loginUser(authEntity);
  }
}
