var numer = Math.floor(Math.random()*3)+1;

function back_slaider()
{
	$("#change").fadeOut(500);
}

function change_slaid()
{
	
	if(numer>3) numer=1;
	var png = "<img src=\"t"+numer+".png\"/>";
	document.getElementById("change").innerHTML = png;
	

	$("#change").fadeIn(500);
	numer++; 
	setTimeout("change_slaid()",5000);
	setTimeout("back_slaider()",4500);
}

 //var rase = document.getElementById("rase");
 //var text = rase.options[rase.selectedIndex].value;
 //var origin = document.getElementById("origin");
// var male = document.getElementById("male");
 
 //console.log(document.getElementById("rase"));
// console.log(document.getElementById("origin"));
 //console.log(document.getElementById("male"));
 

 

 //}

//document.getElementById("krok").innerHTML= text
//1. mamy obraz nr 1
//2. obraz nr.1 idzie w lewo i zanika na koncu diva
//3. obraz nr 2 pojawia sie przyklejony do niego 
//4. powtarzamy sekwencję do nr3 
//5 po nr 3 zapentlamy by nr 1 sie pojawiał

//var age = "76";
//function age()
//{
//	if //pobrana rasa// == "Człowiek" then age= 15 + losowaliczba z 10
	//	else pobrana liczba == "Elfy" then age=30 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 
	//	else pobrana liczba == "Niziołki" then age= 15 + losZk10 +losZk10 +losZk10 +losZk10 +losZk10 ,
	//	else age= 15+ losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 +losZk10 
	//	document.getElementById("age").innerHTML = age + "Lat";
//}




