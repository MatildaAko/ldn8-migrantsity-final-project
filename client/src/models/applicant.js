export class Applicant {
  constructor(
    id,
    user_id,
    title,
    first_name,
    surname,
    gender_id,
    sex_orient_id,
    city_id,
    email,
    phone,
    currently_work,
    right_to_work,
    cv,
    gap_reasons,
    supp_statement,
    dbs_work,
    dbs_convictions,
    disability,
    age_band_id,
    ethnic_group_id,
    ethnic_other,
    religion_id,
    identify,
    caring,
    skills,
    education
  ) {
    this.id = id;
    this.user_id = user_id;
    this.title = title;
    this.first_name = first_name;
    this.surname = surname;
    this.gender_id = gender_id;
    this.sex_orient_id = sex_orient_id;
    this.city_id = city_id;
    this.email = email;
    this.phone = phone;
    this.currently_work = currently_work;
    this.right_to_work = right_to_work;
    this.cv = cv;
    this.gap_reasons = gap_reasons;
    this.supp_statement = supp_statement;
    this.dbs_work = dbs_work;
    this.dbs_convictions = dbs_convictions;
    this.disability = disability;
    this.age_band_id = age_band_id;
    this.ethnic_group_id = ethnic_group_id;
    this.ethnic_other = ethnic_other;
    this.religion_id = religion_id;
    this.identify = identify;
    this.caring = caring;
    this.skills = skills;
    this.education = education;
  }
}