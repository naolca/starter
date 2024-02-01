import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'package:starter_mobile/features/teamMembers/domain/entities/team_member_entity.dart';
import 'package:starter_mobile/features/teamMembers/domain/usecases/get_team_members_usecase.dart';

part 'team_members_event.dart';
part 'team_members_state.dart';

class TeamMembersBloc extends Bloc<TeamMembersEvent, TeamMembersState> {
  GetTeamMembers getTeamMembers;

  TeamMembersBloc(this.getTeamMembers) : super(TeamMembersInitial()) {
    on<GetTeamMembersEvent>((event, emit) async {
      emit(TeamMembersLoading());

      final teamMembers = await getTeamMembers.getTeamMembers();

      teamMembers.fold(
        (failure) => emit(TeamMembersFailure(failure.toString())),
        (teamMembers) => emit(TeamMembersLoaded(teamMembers)),
      );
    });
  }
}
