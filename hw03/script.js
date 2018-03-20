var quest = +prompt("Сколько вам лет?");
var modul = quest % 10;




if(quest < 5){
	if(quest == 0){
		alert("Ой батюшки, такого быть не может!");
	}else if(quest == 1){
		alert("Вам " + quest + " год!");
	}else{
		alert("Вам " + quest + " года!");
	}
}else if(quest >= 5 && quest <= 20){
	alert("Вам " + quest + " лет!");
}else if(quest < 125){
	if(modul < 5){
		if(modul == 1){
			alert("Вам " + quest + " год!");
		}else if(modul == 0){
			alert("Вам " + quest + " лет!");
		}else{
			alert("Вам " + quest + " года!");
		}
	}else if(modul >= 5 && modul <= 9){
		alert("Вам " + quest + " лет!");
	}	
}else{
	if(quest != quest){
		alert("Можно вводить только числа!")
	}else{
		alert("Такого быть не может, ведь рекорд долголетия, на данный момент, всего 122 года)")
	}
}


		
	

