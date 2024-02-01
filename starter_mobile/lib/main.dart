import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_mobile/features/auth/presentation/bloc/bloc/login_bloc.dart';
import 'package:starter_mobile/features/auth/presentation/pages/home_page.dart';
import 'package:starter_mobile/features/auth/presentation/pages/login_page.dart';
import 'package:starter_mobile/features/teamMembers/presentation/bloc/bloc/team_members_bloc.dart';
import 'package:starter_mobile/injection_container.dart' as di;
import 'package:starter_mobile/injection_container.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await di.init(); // Initialize dependency injection

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: MultiBlocProvider(
        providers: [
          BlocProvider<LoginBloc>(
            create: (context) => sl<LoginBloc>(),
          ),
          BlocProvider<TeamMembersBloc>(
            create: (context) => sl<TeamMembersBloc>(),
          ),
        ],
        child: HomePage(key: UniqueKey()),
      ),
    );
  }
}
