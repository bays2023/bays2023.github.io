let generate_random_number = new Math.seedrandom('josh');

function randInt(low, high){
	var ret = Math.abs(generate_random_number.int32()) % high;
	if(ret < low){ return randInt(low, high); }
	return ret;
}

alert(randInt(1,10));
alert(randInt(1,10));
