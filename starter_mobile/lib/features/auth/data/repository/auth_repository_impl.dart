import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import 'package:starter_mobile/features/auth/data/datasources/auth_local_data_source.dart';
import 'package:starter_mobile/features/auth/data/datasources/auth_remote_data_source.dart';
import 'package:starter_mobile/features/auth/data/models/auth_model.dart';
import 'package:starter_mobile/features/auth/data/models/login_result_model.dart';
import 'package:starter_mobile/features/auth/data/models/register_result_model.dart';
import 'package:starter_mobile/features/auth/domain/entities/auth_entity.dart';
import 'package:starter_mobile/features/auth/domain/repository/auth_repository.dart';
import 'package:starter_mobile/shared/entities/login_result_entity.dart';
import 'package:starter_mobile/shared/entities/register_result_entity.dart';

class AuthRepositoryImpl implements AuthRepository {
  final AuthRemoteDataSource authRemoteDataSource;
  final AuthLocalDataSource authLocalDataSource;

  AuthRepositoryImpl(
      {required this.authRemoteDataSource, required this.authLocalDataSource});

  @override
  Future<void> logoutUser() async {
    authLocalDataSource.clearUser();
  }

  @override
  Future<Either<Failure, LoginResultEntity>> loginUser(
      AuthEntity authEntity) async {
    try {
      final authModel =
          AuthModel(email: authEntity.email, password: authEntity.password);
      final result = await authRemoteDataSource.loginUser(authModel);

      await authLocalDataSource.cacheUser(result);
      return Right(result);
    } catch (e) {
      return Left(ServerFailure());
    }
  }

  @override
  Future<Either<Failure, RegisterResultEntity>> registerUser(
      AuthEntity authEntity) async {
    try {
      RegisterResultModel result =
          await authRemoteDataSource.registerUser(authEntity as AuthModel);
      return Right(result);
    } catch (e) {
      return Left(ServerFailure());
    }
  }
}
