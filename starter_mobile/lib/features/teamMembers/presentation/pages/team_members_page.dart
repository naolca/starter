// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:starter_mobile/features/teamMembers/presentation/bloc/bloc/team_members_bloc.dart';
import 'package:starter_mobile/features/teamMembers/presentation/components/team_member_card.dart';

import '../../../../injection_container.dart';

class TeamMembersPage extends StatelessWidget {
  TeamMembersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => TeamMembersBloc(sl()),
      child: Scaffold(
        appBar: AppBar(
          title: Text('MyWidget'),
        ),
        body: Center(child: BlocBuilder<TeamMembersBloc, TeamMembersState>(
          builder: (context, state) {
            if (state is TeamMembersInitial) {
              BlocProvider.of<TeamMembersBloc>(context)
                  .add(GetTeamMembersEvent());
              return Container(
                child: Text('A2SV'),
              );
            } else if (state is TeamMembersLoading) {
              return Container(
                height: 40,
                alignment: Alignment.center,
                child: const CircularProgressIndicator(
                  valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
                ),
              );
            } else if (state is TeamMembersLoaded) {
              final teamMembers = state.teamMembers;
              return ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: teamMembers.length,
                itemBuilder: (context, index) {
                  return TeamMemberCard(teamMemberEntity: teamMembers[index]);
                },
              );
              return const Text('TeamMembers Success');
            } else if (state is TeamMembersFailure) {
              return const Text('TeamMembers Failure');
            } else {
              return Container();
            }
          },
        )),
      ),
    );
  }
}
