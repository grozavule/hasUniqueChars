//Given a word, return true if that word contains only unique characters. Return false otherwise.

const hasUniqueChars = (word) => {
    /*
    //break up the word into an array of its letters
    let letters = word.split('');
    //loop through the letters
    for(let i = 0; i < letters.length; i++)
    {
        console.log(word.substr(i));
        //if the current letter, letters[i], isn't skipped over when looking for duplicate characters, 
        //the function will always return false
        //this if statement checks if the word from the next letter to the end of the string includes letters[i]
        if(word.substr(i + 1).includes(letters[i]))
        {
            return false;
        }
    }
    return true;
    */
   
    let set = new Set(word);
    return set.size === word.length;

    /*
    console.log(word);
    if(word.length > 1)
    {
        let letter = word.charAt(0);
        word = word.substr(1);
        if(word.includes(letter))
        {
            return false;
        }
        else
        {
            return hasUniqueChars(word);
        }
    }
    return true;
    */
}

console.log(hasUniqueChars('Hello'));