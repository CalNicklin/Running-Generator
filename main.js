//A JSON holds the various statement info.
const messages = {
    Statement1: ['On this', 'There was', 'Of course', 'Large train', 'Watch out'],
    Statement2: ['fine day', 'big apple', 'one shoe', 'wobbly board', 'strange leg'],
    Statement3: ['big fish', 'for all', 'nevermind', 'pile of books', 'picture frame'],
}

//generateMessage creates a random index number based on the property array length, then outputs to console
const generateMessage = () => {

    let i = Math.floor(Math.random() * messages.Statement1.length);
    let j = Math.floor(Math.random() * messages.Statement2.length);
    let k = Math.floor(Math.random() * messages.Statement3.length);

    console.log(i, j, k);
    console.log(`${messages.Statement1[i]} ${messages.Statement2[j]} ${messages.Statement3[k]}`);
}

generateMessage();
