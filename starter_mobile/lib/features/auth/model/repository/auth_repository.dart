import 'package:starter_mobile/features/auth/model/entities/auth_entity.dart';
import 'package:dartz/dartz.dart';
import 'package:starter_mobile/shared/entities/login_result_entity.dart';
import 'package:starter_mobile/shared/entities/register_result_entity.dart';
import '../../../../core/errors/failures.dart';

abstract class AuthRepository {
  Future<Either<Failure, LoginResultEntity>> loginUser(AuthEntity authEntity);
  Future<Either<Failure, RegisterResultEntity>> registerUser(
      AuthEntity authEntity);
  Future<void> logoutUser();
}
