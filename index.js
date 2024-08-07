/*
Greetings to whomever was curious about this code.

I know it is a horrible idea to manually encode the breakpoints and verses, but I made this site in a school computer lab in about half an hour in 2022, and I do not wish to refactor at this time.


Thank you,

Joshua Bays
*/

let seed = prompt('Please enter in a seed for the RNG')
//seed = 'josh';
let generate_random_number = new Math.seedrandom(seed);
var verseList = [];
var index = 0;
var verse = "";
var showingVerse = 0;

function randInt(low, high){
	var ret = Math.abs(generate_random_number.int32()) % high;
	if(ret < low){ return randInt(low, high); }
	return ret;
}

function getMaterial(){
	var choiceRange = document.getElementById("material-selector").value.slice(1);
	document.getElementById("material-selector").style.visibility = 'hidden';
	document.getElementById("quoteBtn").style.visibility = 'hidden';
	document.getElementById("bequotedBtn").style.visibility = 'hidden';
	document.getElementById("verseCorrect").style.visibility = 'visible';
	document.getElementById("remaining").style.display = 'block';
	//document.getElementById("verseIncorrect").style.visibility = 'visible';
	var refMin = parseInt(choiceRange.split(",")[0]) - 1;
	var refMax = parseInt(choiceRange.split(",")[1]) - 1;
	for(var i = refMin; i <= refMax; i++){ verseList.unshift(masterList[i]);}
	//document.getElementById("remaining").innerHTML = "Remaining: " + refMax - refMin;
}

function quoteBtn(showVerse){
	showingVerse = showVerse; getMaterial();
	if(showingVerse){ document.getElementById("verse").style.visibility = 'visible'; }
	index = randInt(0, verseList.length);
	document.getElementById("title").innerHTML = verseList[index][1];
	if(showingVerse){ document.getElementById("verse").innerHTML = verseList[index][2]; }
	document.getElementById("remaining").innerHTML = "Remaining: " + (verseList.length - 1);
}

function verseResult(correct){
	if(correct){
		verseList.splice(index, 1);
		if(verseList.length == 0){
			document.getElementById("title").innerHTML = "You are finished!";
			document.getElementById("verseCorrect").style.visibility = 'hidden';
			document.getElementById("remaining").style.display = 'none';
			//document.getElementById("verseIncorrect").style.visibility = 'hidden';
		}
	}
	index = randInt(0, verseList.length);
	document.getElementById("title").innerHTML = verseList[index][1];
	if(showingVerse){ document.getElementById("verse").innerHTML = verseList[index][2]; }
	document.getElementById("remaining").innerHTML = "Remaining: " + (verseList.length - 1);
}
