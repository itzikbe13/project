
$(document).ready(function(){

	
$("button:nth(0)").click( function() {
 if (
	$(".user").val() == "" &&
	$(".id").val() == "" &&
	$(".email").val() == "" &&
	$(".birth").val() == "" &&
	$(".license").val() == "" )
	 {
		alert ("must fill all the required fields");
		}
else if (
	$(".phone").val() == "" &&
	$(".pele").val() == "" 
	) {
		alert("at least one phone must be filled");
	} else {
	alert("sign up complete..redirecting to the home page");
	
var user = $(".user").val();
var id = $(".id").val();
var email =	$(".email").val();
var phone =	$(".phone").val();
var pele = $(".pele").val();
var birth =	$(".birth").val();
var license = $(".license").val();
	
	var user1 = {
				'name': user,
				'id': id,
				'email': email,
				'phone': phone,
				'pele': pele,
				'birth': birth,
				'license': license
	};	
	var user = [];
	
	if (localStorage.getItem(email) == null) {
		localStorage.setItem(email, JSON.stringify(user1));
		} else { 
	alert("its already exists") ;
	};
	var entry = $("input:nth(1)").val();
	location.href = "#home";
	$(".entry").html("welcome " +entry);
		}
		});
	
$("button:nth(1)").click( function() {	
		var email1 = $(".login").val() ;
	if(localStorage.getItem(email1) == null) {
		alert ("user does not exist");
		} else {
		var entry = $(".login").val();
		location.href = "#home";
		$(".entry").html("welcome " +entry);
		}
	 });
	
	});

