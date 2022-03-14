function sommenombrespremiers(a, b) {
	var aPrime = true;
	var bPrime = true;

	for (var i = 2; i < a; i++) {
		if (a % i === 0) {
			aPrime = false;
			break;
		}
	}
	for (var i = 2; i < b; i++) {
		if (b % i === 0) {
			bPrime = false;
			break;
		}
	}

	if (aPrime && bPrime) {
		return a + b;
	} else {
		return false;
	}
}

console.log(sommenombrespremiers(3, 5));

