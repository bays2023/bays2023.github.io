//let seed = prompt('Please enter in a seed for the RNG')
let generate_random_number = new Math.seedrandom(seed);

function randInt(low, high){
	var ret = Math.abs(generate_random_number.int32()) % high;
	if(ret < low){ return randInt(low, high); }
	return ret;
}

function submitMaterial(){
	var choiceRange = document.getElementById("material-selector").value;
	alert(choiceRange);
	document.getElementByID("submitMaterial").style.visibility = 'hidden';
}

//alert(randInt(1,10));
//alert(randInt(1,10));
