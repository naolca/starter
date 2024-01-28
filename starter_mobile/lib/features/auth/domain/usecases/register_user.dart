import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import 'package:starter_mobile/features/auth/domain/entities/auth_entity.dart';
import 'package:starter_mobile/features/auth/domain/repository/auth_repository.dart';
import 'package:starter_mobile/shared/entities/login_result_entity.dart';
import 'package:starter_mobile/shared/entities/register_result_entity.dart';

class RegisterUser {
  final AuthRepository authRepository;

  RegisterUser(this.authRepository);

  Future<Either<Failure, RegisterResultEntity>> registerUser(authEntity) async {
    return await authRepository.registerUser(authEntity);
  }
}
