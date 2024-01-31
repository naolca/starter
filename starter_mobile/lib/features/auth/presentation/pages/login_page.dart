// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'package:google_fonts/google_fonts.dart';
import 'package:starter_mobile/features/auth/domain/entities/auth_entity.dart';
import 'package:starter_mobile/features/auth/presentation/bloc/bloc/login_bloc.dart';
import 'package:starter_mobile/features/auth/presentation/pages/home_page.dart';

class LoginPage extends StatelessWidget {
  LoginPage({super.key});
  final TextEditingController usernameController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.blue,
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
                      return Container(
                        child: Text(
                          'A2SV',
                          style: GoogleFonts.pacifico(
                            textStyle: const TextStyle(
                              color: Colors.white,
                              fontSize: 40,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      );
                    } else if (state is LoginLoading) {
                      return Container(
                        height: 40,
                        alignment: Alignment.center,
                        child: const CircularProgressIndicator(
                          valueColor:
                              AlwaysStoppedAnimation<Color>(Colors.white),
                        ),
                      );
                    } else if (state is LoginSuccess) {
                      WidgetsBinding.instance.addPostFrameCallback((_) {
                        Navigator.pushReplacement(
                            context,
                            MaterialPageRoute(
                              builder: (context) => HomePage(),
                            ));
                      });
                      return const Text('Login Success');
                    } else if (state is LoginFailure) {
                      return const Text('Login Failure');
                    } else {
                      return const Text('Login Unknown');
                    }
                  },
                ),
                SizedBox(
                  height: 16.0,
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Column(children: [
                    TextFormField(
                      decoration: InputDecoration(
                        hintText: 'Username or Email',
                        hintStyle: const TextStyle(color: Color(0xFF767676)),
                        filled: true, // Add this line
                        fillColor: const Color(
                            0xFFEFF3F9), // Add your desired background color

                        border: OutlineInputBorder(
                          borderSide: const BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: const BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderSide: const BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(10),
                        ),
                      ),
                      controller: usernameController,
                      // ... rest of your TextFormField code
                    ),
                    const SizedBox(height: 16),
                    TextFormField(
                      decoration: InputDecoration(
                        hintText: 'Password',
                        hintStyle: const TextStyle(color: Color(0xFF767676)),
                        filled: true, // Add this line
                        fillColor: const Color(
                            0xFFEFF3F9), // Add your desired background color

                        border: OutlineInputBorder(
                          borderSide: const BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: const BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderSide: const BorderSide(color: Colors.white),
                          borderRadius: BorderRadius.circular(10),
                        ),
                      ),
                      controller: passwordController,
                      obscureText: true,
                      // ... rest of your TextFormField code
                    ),
                    const SizedBox(height: 16),
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        minimumSize: const Size(double.infinity, 50),
                        primary: Colors.blue,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                      ),
                      onPressed: () async {
                        // Handle login button press
                        // await reference.set({
                        //   'title': 'My Awesome Photo',
                        //   'likes': 0,
                        //   'comments': 0,
                        // }).asStream();
                        final username = usernameController.text;
                        final password = passwordController.text;
                        loginDispatcher(context, username, password); // P
                        // Emit login event to the bloc
                      },
                      child: const Text('Log In'),
                    ),
                    const SizedBox(height: 16),
                  ]),
                )
              ],
            ),
          )),
        ));
  }

  void loginDispatcher(BuildContext context, String username, String password) {
    BlocProvider.of<LoginBloc>(context).add(
      LoginRequest(
        AuthEntity(
          email: username,
          password: password,
        ),
      ),
    );
  }
}
