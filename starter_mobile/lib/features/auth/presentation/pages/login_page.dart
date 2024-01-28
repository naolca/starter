// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_mobile/features/auth/presentation/bloc/bloc/login_bloc.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: SingleChildScrollView(
          child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            BlocBuilder<LoginBloc, LoginState>(
              builder: (context, state) {
                if (state is LoginInitial) {
                  return const Text('Login Initial');
                } else if (state is LoginLoading) {
                  return const CircularProgressIndicator();
                } else if (state is LoginSuccess) {
                  return const Text('Login Success');
                } else if (state is LoginFailure) {
                  return const Text('Login Failure');
                } else {
                  return const Text('Login Unknown');
                }
              },
            )
          ],
        ),
      )),
    ));
  }
}
