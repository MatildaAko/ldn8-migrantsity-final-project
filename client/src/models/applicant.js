export class Applicant {
    constructor(id, user_id, title, first_name, surname, gender_id, sex_orient_id, city_id,
	email, phone, currently_work, right_to_work, cv, gap_reasons,
	supp_statement, dbs_work, dbs_convictions, disability, age_band_id,
	ethnic_group_id, ethnic_other, religion_id, identify, caring, skills,
    education
){
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

	this.education = [];
    }
// newEducation {
//     constructor(school, degree, field_of_study, start_date,
// 					end_date, description){
// 	this.school = school;
// 	this.degree = degree;
// 	this.field_of_study = field_of_study;
// 	this.start_date = start_date;
// 	this.end_date = end_date;
// 	this.description = description;
// }
}
// }
    // "exams" 	: [{
	// 			"title" 	: "",
	// 			"institute" 	: "",
	// 			"grade" 	: "",
	// 			"date" 		: "",
	// 			"description" 	: "",
	// 		}],
	// "qualifications" : [{
	// 			"title" 	: "",
	// 			"institute" 	: "",
	// 			"grade" 	: "",
	// 			"date" 		: "",
	// 			"description" 	: "",
	// 		}],
	// "languages" 	: [{
	// 			"language" 	: "",
	// 			"spoken" 	: "",
	// 			"written" 	: "",
	// 			"degree_of_fluency" : "",
	// 		}]
// }






// // An individual player. Holds properties and behavior for one player
// class Player {
//   constructor(name) {
//       this.name = name;
//   }
//   play() {
//     console.log(this.name, "plays")
//   }
// }

// // Class that holds a collection of players and properties and functions for the group
// class Players {
//   constructor(){
//     this.players = []
//   }
//   // create a new player and save it in the collection
//   newPlayer(name){
//     let p = new Player(name)
//     this.players.push(p)
//     return p
//   }
//   get allPlayers(){
//     return this.players
//   }
//   // this could include summary stats like average score, etc. For simplicy, just the count for now
//   get numberOfPlayers(){
//       return this.players.length
//   }
// }

// let league = new Players()
// league.newPlayer("Mark")
// league.newPlayer("Roger")

// // list all the players
// console.log(league.numberOfPlayers + " Players)
// console.log(league.allPlayers)


// // make them do something
// league.allPlayers.forEach(player => player.play())