

function WrongLetters({wrongLetters}) {
  return (
   <>
   <div className="wrong-letters-container">
    <div id="wrong-letters">
      {/* to check the length of the wrongLetters, if there are any letters in wrongLetters array, it displays Wrong in the UI */}
    {wrongLetters.length > 0  && <p>Wrong</p> }
    {/* wrongLetters ma vako each letter lai euta span element ma mapping garxa */}
    {/* reduce function ko kaam, yo case ma chai, eutai array ma concatenate garxa */}
    {/* reduce function le duita parameters linxa, euta callback function ra euta initial value, .reduce(function, initial value) */}
    {wrongLetters.map((letter, index) => <span key={index}>{letter}</span>).reduce((previous, current) => previous === null ? [current] : [previous, ', ', current], null)}

    </div>
   </div>
   </>
  );
}

export default WrongLetters;