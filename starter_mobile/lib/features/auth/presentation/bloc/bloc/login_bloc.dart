import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:meta/meta.dart';
import 'package:starter_mobile/features/auth/domain/entities/auth_entity.dart';
import 'package:starter_mobile/features/auth/domain/usecases/login_user.dart';

part 'login_event.dart';
part 'login_state.dart';

class LoginBloc extends Bloc<LoginEvent, LoginState> {
  final LoginUser loginUser;

  LoginBloc(this.loginUser) : super(LoginInitial()) {
    on<LoginRequest>(_handleLoginRequest);
  }

  void _handleLoginRequest(LoginRequest event, Emitter<LoginState> emit) {
    emit(LoginLoading());
    print("the data");
    print(event.authEntity);
    final result = loginUser.loginUser(event.authEntity);
    result.then((value) {
      value.fold((l) {
        emit(LoginFailure(error: l.toString()));
      }, (r) {
        emit(LoginSuccess());
      });
    });
  }
}
