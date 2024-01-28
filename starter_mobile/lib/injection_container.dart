import 'package:get_it/get_it.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:starter_mobile/features/auth/data/datasources/auth_local_data_source.dart';
import 'package:starter_mobile/features/auth/data/datasources/auth_remote_data_source.dart';
import 'package:starter_mobile/features/auth/data/repository/auth_repository_impl.dart';
import 'package:starter_mobile/features/auth/domain/repository/auth_repository.dart';
import 'package:starter_mobile/features/auth/domain/usecases/login_user.dart';
import 'package:starter_mobile/features/auth/presentation/bloc/bloc/login_bloc.dart';

final sl = GetIt.instance;

Future<void> init() async {
  final sharedPreferences = await SharedPreferences.getInstance();
  sl.registerLazySingleton<SharedPreferences>(() => sharedPreferences);

  // Blocs registration
  sl.registerFactory(() => LoginBloc(sl()));

  // Use cases registration
  sl.registerLazySingleton(() => LoginUser(sl()));

  //  // Repository registration
  sl.registerLazySingleton<AuthRepository>(() => AuthRepositoryImpl(
      authRemoteDataSource: sl(), authLocalDataSource: sl()));

  // Data sources registration
  sl.registerLazySingleton<AuthRemoteDataSource>(
      () => AuthRemoteDataSourceImpl());
  sl.registerLazySingleton<AuthLocalDataSource>(
      () => AuthLocalDataSourceImpl(sharedPreferences: sl()));
}
