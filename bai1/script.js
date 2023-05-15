function sumNguyenTo() {
	
    var a = parseInt($('#a').val());
    var b = parseInt($('#b').val());
    var sum = 0;

    for (var i = a; i <= b; i++) {
        var isPrime = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
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