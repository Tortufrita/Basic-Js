// fizz buzz - 100 numeros

// 3 6 9 12 ... fizz

// 5 10 15 20 25 ... buzz

// 15 30 45 FIZZBUZZ!

for(let i = 1; 1 < 100; i++ ) {
    if (i % 15 === 0 ) {
        console.log(`${i} FIZZ BUZZ!`)
    } else if( i % 3 === 0) {
        console.log(`${i} Fizz`)
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`)
    }
}