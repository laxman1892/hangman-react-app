import { useEffect } from "react";

function checkWin(correctLetter, wrongLetter, word) {
  let status = 'win';

  //* the word is splitted into letters and checked to see if the letters are included in the correctLetter array
  //? if correctLetter doesn't include the letter, the status is unchanged
  word.split('').forEach(letter => {
    if (!correctLetter.includes(letter)) {
      status = '';
    }
  });

  //* if there are 6 wrong guesses the status will be updated to 'lose' and returned as a value.
  if (wrongLetter.length === 6) status = 'lose';

  return status;
}

function Popup( { correctLetters, wrongLetters, selectedWord, setPlayable, playAgain } ) {

  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  //* if checkWin has a 'win' value returned, following changes occur.
  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = '🎉🎉 You Win! 🎉🎉';
    finalMessageRevealWord = `The word was '${selectedWord}'`;
    playable = false;
  } 
  //* if checkWin has a 'lose' value returned, following changes occur.
  else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = '😢 You lost! 😢';
    finalMessageRevealWord = `The word was '${selectedWord}'`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
   <>
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2 >{finalMessage}</h2>
        <h3 >{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
   </>
  )
}

export default Popup