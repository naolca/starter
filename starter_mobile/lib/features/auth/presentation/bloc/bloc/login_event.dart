part of 'login_bloc.dart';

@immutable
abstract class LoginEvent extends Equatable {
  const LoginEvent();

  @override
  List<Object> get props => [];
}

class LoginRequest extends LoginEvent {
  final AuthEntity authEntity;

  LoginRequest(this.authEntity);

  @override
  List<Object> get props => [authEntity];
}
