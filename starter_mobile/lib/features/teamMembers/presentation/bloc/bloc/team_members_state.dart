part of 'team_members_bloc.dart';

@immutable
sealed class TeamMembersState {}

final class TeamMembersInitial extends TeamMembersState {}

final class TeamMembersLoading extends TeamMembersState {}

final class TeamMembersLoaded extends TeamMembersState {
  final List<TeamMemberEntity> teamMembers;

  TeamMembersLoaded(this.teamMembers);
}

final class TeamMembersFailure extends TeamMembersState {
  final String message;

  TeamMembersFailure(this.message);
}
