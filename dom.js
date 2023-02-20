let input = '';

//let word = document.getElementById("user-input");

const userInput = document.getElementById('userInput');
const button = document.getElementById('button')
const reset = document.getElementById('reset')
const textOutput = document.getElementById('textOutput')
console.log(button);

userInput.addEventListener('keyup', (event) => {
    input = event.target.value
    console.log(input);
})

button.addEventListener('click', (event) => {
    let words = input.split(' ')
    let newWord = words.map(word => pigLatin(word)).join(' ')
    //input = event.target.value
    // console.log(pigLatin(input));
    textOutput.innerText = newWord
})

reset.addEventListener('click', (event) => {
    userInput.value = '';
    textOutput.innerText = '';
    input = '';
    console.log('click', event);
})




const pigLatin = (word) => {

    word = word.trim().toLowerCase();

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let letter = 0; letter < word.length; letter++) {

        if (vowels.includes(word[0])) {
            // return word + "yay";
            let newWord = word + "yay"
            return newWord;
        } else if ((!vowels.includes(word[0])) && (!vowels.includes(word[1]))) {
            let newWord = word.slice(2) + word.slice(0, 2) + "ay";
            return newWord
        } else {
            let newWord = word.slice(1) + word.slice(0, 1) + "ay";
            return newWord
        }

    }
}