// social media model with from json and to json method

import 'package:starter_mobile/features/teamMembers/domain/entities/social_media_entity.dart';

class SocialMediaModel extends SocialMediaEntity {
  SocialMediaModel({
    required String linkedIn,
    required String facebook,
    required String instagram,
  }) : super(
          linkedIn: linkedIn,
          facebook: facebook,
          instagram: instagram,
        );

  factory SocialMediaModel.fromJson(Map<String, dynamic> json) {
    return SocialMediaModel(
        linkedIn: json['linkedin'],
        facebook: json['facebook'],
        instagram: json['instagram']);
  }

  Map<String, dynamic> toJson() {
    return {
      'linkedIn': linkedIn,
      'facebook': facebook,
      'instagram': instagram,
    };
  }
}
