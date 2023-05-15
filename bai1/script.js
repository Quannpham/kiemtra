function sumNguyenTo() {
	
    let a = parseInt($('#a').val());
    let b = parseInt($('#b').val());
    let sum = 0;

    for (let i = a; i <= b; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i > 1) {
            sum += i;
        }
    }
    
    $('#result').text(sum);
}