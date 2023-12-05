

function Word({selectedWord, correctLetters}) {
  return (
    <>
        <div className="word">
          {/* splits the word into individual letter and map the individual letter in a span element */}
        {selectedWord.split('').map( (letter, index) => {
            return (
          <span className="letter" key={index}>
            {/* includes function checks if the letter is included in the correctLetters array,
            if the letter is there, it returns the letter otherwise returns an empty string. */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>)})}
        </div>
    </>
  );
}

export default Word;