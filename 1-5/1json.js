
let data =[
	{
		name    : "dimar",
		age 	: 18,
		address : "Purwokerto, Banyumas, JawaTengah",
		hobbies : "Browsing Internet",
		is_married : false,
		list_school : [{
			school_name:"SMK Telkom Purwokerto",
			year_in:2017,
			year_out:2020,
			major : null
		}],
		skills 	: [
		{main:{
			HTML 	: "advanced",
			CSS 	: "advanced",
			javascript : "advanced",
			JSON	: "beginner",
			PHP 	: "beginner",
			MYSQL 	: "beginner"
		

		},

		framework:{
			Laravel : "beginner",
			jquery  : "advanced",
			reactJs : "beginner",
			bootstrap : "advanced"
		}


		}],
		interest_in_coding : true
	},
	{
		name  : "hanung",
		age 	: 19
	}


]





function returnData({_name,_age}){



for (var i = 0; i < data.length; i++) {
	if (data[i].name==_name || data[i].age == _age) {
		console.log(JSON.stringify(data[i]))
	}
	
}



return data[i];


}

//test

console.log(returnData({_name:'dimar'}));
console.log(returnData({_age:19}));
