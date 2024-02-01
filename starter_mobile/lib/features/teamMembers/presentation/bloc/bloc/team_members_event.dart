part of 'team_members_bloc.dart';

@immutable
sealed class TeamMembersEvent {}

class GetTeamMembersEvent extends TeamMembersEvent {}
