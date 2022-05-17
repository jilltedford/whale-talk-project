// This variable will be translated into whale talk
let input = 'If I were an animal, I would be an orca.';

// Whales only speak in vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Store the vowels from the input string in a variable
let resultArray = [];

for (let i = 0; i < input.length; i++) {

    input = input.toLowerCase();

    // Whales double their e's...
    if (input[i] === 'e') {

        resultArray.push(input[i]);

    }

    // ... and they double their u's
    if (input[i] === 'u') {

        resultArray.push(input[i]);

    }

    for (let j = 0; j < vowels.length; j++) {

        if (input[i] === vowels[j]) {

            resultArray.push(input[i]);

        }
    }
}

// Proper whale language is one string in all caps. Sing the output out loud! "IIEEEEAAIAIOUUEEAOA" 
console.log(resultArray.join('').toUpperCase());
