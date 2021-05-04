
function calculateFibonacci (num) {
    if (typeof num !== 'number') throw 'Must provide a number';
    if (isNaN(num)) throw 'Must provide a number';
    if (num === 0) {return 0} 
    if (num < 0) {return 0}
    if (num == 1) {return 1}
    return calculateFibonacci (num - 1) + calculateFibonacci (num - 2)
}

function checkPrime (fib) {
    if (typeof fib !== 'number') throw 'Must provide a number';
    if (isNaN(fib)) throw 'Must provide a number';
    if (fib < 2) return false
    if (fib == 2) return true
    if (fib % 2 == 0) return false
    for (let i = 2; i < fib; i++) {
        if (fib % i == 0) {
            return false
        } 
    }
    return true
}


$('#myForm').submit((event) => {
    event.preventDefault();
    const index = parseInt($('#inputNumber').val())
    if (!isNaN(index) && typeof index == 'number') {

        $('#error').hide();
        const fibonacci = calculateFibonacci (index)
        const isPrime = checkPrime(fibonacci)
        let li = ""
        if (isPrime) {
            li = `<li class =is-prime> The Fibonacci of ${index} is ${fibonacci} </li>`
        } else {
            li = `<li class =not-prime> The Fibonacci of ${index} is ${fibonacci} </li>`
        } 
        $('#results').append(li);
    } else {
      $('#error').show();
      $('#error').html('You must enter an input value');
      
    }

  
  });