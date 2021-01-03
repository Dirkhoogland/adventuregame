var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var item1 = false 
var item2 = false
var title = document.getElementById("title");
var description = document.getElementById("description");

button2.innerHTML = "begin spel"

button2.addEventListener("click", function(){ 
	button1.style.display = "inline-block";
	button3.style.display = "inline-block";
	button2.style.display = "none"
	button1.innerHTML = "ga naar links naar een brede kamer"
	button3.innerHTML = "ga naar rechts naar een  kleine kamer"
	description.innerHTML = "je staat in een grote lege kamer met twee duren aan de linker en rechter kant van de kamer"
	title.innerHTML = "start/begin"
});


function room3(item1, item2){
	button2.style.display = "inline-block"
	button1.innerHTML = "pak item1 op"
	button2.innerHTML = "ga terug"
	button3.innerHTML = "ga door een lange verlichte gang"
	description.innerHTML = "je komt in een kleine kamer met een tafel op de tafel ligt item1 ook zie je een lange verlichte gang"
	title.innerHTML = "kleine kamer"
};


function room2(item1, item2){
	button2.style.display = "inline-block";
	button1.innerHTML = "ga naar links de kamer in"
	button3.innerHTML = "ga naar rechts de lange gang in"
	button2.innerHTML = "ga terug"
	description.innerHTML = "je komt een brede grote kamer binnen, met een deur en een gang aan de noordelijkse kant van de kamer de gang is lang en verlicht, en de deur zit er groot en zwaar uit"
	title.innerHTML = "de brede kamer"
};


function room4(item1, item2){
	if (item1 = false) {
		alert("game over");

	}
	else{
		button1.innerHTML = "loop de volgende kamer in"
		button2.innerHTML = "ga terug"
		desciption.innerHTML = "je er bleek een val in de kamer te zijn die je onklaar heb gemaakt door item1"
	} 

}

function room5(item1, item2){
	button1.innerHTML = "je ziet een kleinere gang en gaat er in"
	button3.innerHTML = "je vind een voorwerp item2"
	button2.innerHTML = "ga terug"
	description.innerHTML = "je komt in een iets kleinere rommelige kamer"
	title.innerHTML = "de rommelige kamer"

}

function room6 (item1, item2){

	if (item2 = false) {alert("game over"); }

	else{
		alert("je heb de uitgang gevonden met behulp van item2");
	}

}

function room7 (item1, item2){
	button1.innerHTML = "je ziet een andere gang en gaat er in"
	button3.innerHTML = "je ziet een dichte deur en probeert hem open te maken" 
	button2.innerHTML = "ga terug"
	description.innerHTML = "je komt in een iets grotere kamer met een kleed en een paar kasten in met een gang en een deur"
	title.innerHTML = "de hal"

 }

 function room8 (item1, item2){
	button1.innerHTML = "je ziet een brede gang en gaat er in"
	button3.innerHTML = "je ziet iets waar je item 2 kan gebruiken"
	button2.innerHTML = "ga terug"
	description.innerHTML = "je komt in een iets lange kamer met een zij kamer erbij"
	title.innerHTML = "de zij kamer"

 }

 function room9 (item1, item2){
	button1.innerHTML = "je ziet een donkere gang en gaat er in"
	button3.innerHTML = "kijk rond"
	button2.innerHTML = "ga terug"
	description.innerHTML = "je ziet vrij weinig in deze kamer omdat her donker en rommelig is "
	title.innerHTML = "de rommelige gang"

 }

 function room10 (item1, item2){
 if (item1 = true){ alert("je heb de uitgang gevonden");}

 else {alert("je bent in een val gelopen en kan niet meer verder");}
 }