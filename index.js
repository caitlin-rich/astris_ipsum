let trekWords = ['boldly', 'cardassian', 'enterprise', 'vulcan', 'earl grey', 'coffee', 'viewscreen', 'lcars', 'pointed ears', 'alpha', 'beta', 'gamma', 'delta', 'quadrant', 'voyager', 'defiant', 'deep space nine', 'spaceship', 'stars', 'space station', 'janeway', 'picard', 'sisko', 'burnham', 'kirk', 'archer', 'first officer', 'captain', 'engineering', 'operations', 'red shirt', 'astrometrics', 'command', 'blue', 'gold', 'red', 'red alert', 'phasers', 'set to stun', 'borg', 'klingon', 'andorian', 'tellarite', 'romulan', 'human']

const paragraphGenerator = (num = 1) => {

    let allParagraph = []
    let paragraph = []
    
    for (i = 0; i < num; i++){
      for (let i = 0; i < 100; i++){
        let randomWord = trekWords[Math.floor(Math.random() * trekWords.length)]

        if (i === 0) {
          let firstLetter = randomWord[0].toUpperCase()
          let restOfLetters = randomWord.slice(1)
          paragraph.push(firstLetter + restOfLetters)
        }
          paragraph.push(randomWord)        
      }
      let joined = paragraph.join(' ') + '.'
      allParagraph.push(joined)
      paragraph = []
    }

    document.getElementById('ipsum').innerHTML = allParagraph.join('<br><br>')

  }



let submitButton = document.getElementById('paragraphsubmit')

submitButton.addEventListener('click', function(){


    let input = parseInt(document.getElementById('amtparagraphs').value)

    if (typeof input === 'number') {
       paragraphGenerator(input)
    }   else {
        document.getElementById('ipsum').innerHTML = "Please enter a number."
    }

   
})