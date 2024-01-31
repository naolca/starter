// socialMedia entity with fields linkedIn, facebook and instagram
import 'package:equatable/equatable.dart';

class SocialMediaEntity extends Equatable {
  final String linkedIn;
  final String facebook;
  final String instagram;

  SocialMediaEntity({
    required this.linkedIn,
    required this.facebook,
    required this.instagram,
  });

  @override
  List<Object?> get props => [linkedIn, facebook, instagram];
}
