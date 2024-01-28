import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import 'package:starter_mobile/features/auth/model/repository/auth_repository.dart';
import 'package:starter_mobile/shared/entities/login_result_entity.dart';

class LoginUser {
  final AuthRepository authRepository;

  LoginUser(this.authRepository);

  Future<Either<Failure, LoginResultEntity>> loginUser(authEntity) async {
    return await authRepository.loginUser(authEntity);
  }
}
