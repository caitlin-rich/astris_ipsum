let trekWords = ['boldly', 'cardassian', 'enterprise', 'vulcan', 'earl grey', 'coffee', 'viewscreen', 'lcars', 'pointed ears', 'alpha', 'beta', 'gamma', 'delta', 'quadrant', 'voyager', 'defiant', 'deep space nine', 'spaceship', 'stars', 'space station', 'janeway', 'picard', 'sisko', 'burnham', 'kirk', 'archer', 'first officer', 'captain', 'engineering', 'operations', 'red shirt', 'astrometrics', 'command', 'blue', 'gold', 'red', 'red alert', 'phasers', 'set to stun', 'borg', 'klingon', 'andorian', 'tellarite', 'romulan', 'human', 'dolar', 'sit', 'amet', 'consectetur', 'adipeiscing', 'elit', 'etiam', 'ultricies', 'ex', 'id', 'ad', 'morbi', 'tristique', 'denectus', 'et', 'et', 'nec', 'orci', 'aliquam', 'facilisis', 'ipsum', 'tincidunt']

let klingonWords = ['Jelik', 'jat\'y\'lyn', 'Jelik', 'jinaq', 'k\'adio', 'ka\'vek', 'kesh', 'kellicam', 'khiGos', 'korut', 'pekt', 'kolat chack tabak', 'kortar', 'kos\'karii', 'kyamo', 'Len\'mat', 'makh\'Cha', 'matleh', 'worf', 'martok', 'b\'elanna', 'mauk-to\'Vor', 'sto-vo\'Kor', 'mekvak', 'mok', 'mokTah', 'naDev ghoS', 'par\'Mach', 'par\'Mach\'kai', 'ouee naGah', 'petaQ', 'po\'tajg', 'Nuq\'nuh', 'qu\'valth', 'shuVak', 'sliVak', 'soh-chim', 'soweeTa', 'SuH', 'Suvwl', 't\'gla', 'tohzah', 'toruk doh', 'vang ghaH', 'tan', 'yej rhin', 'yiGhom aH', 'yinTahg', 'adanji', 'baH', 'baktag', 'bat\'leth', 'Bekk', 'cha\'Dich', 'Cho\'echu', 'DaH', 'deLak doh', 'd\'akturak', 'd\'blok', 'Dhak\'tah', 'Fek\'lhr', 'tagh', 'Forshak', 'ghoptu', 'ghos', 'gik\'tal', 'he\'HimaH', 'grethor', 'Ha\'DlbaH', 'Hijol', 'Hechu\'ghos', 'hur\'q', 'posuere', 'enim', 'metus', 'sit', 'amet', 'rutrum', 'diu', 'convallis', 'nisi', 'ligula', 'portitor', 'quam', 'curabiter', 'conubia', 'viverra', 'bibendum', 'libero', 'etiam']

const paragraphGenerator = (num = 1, dictionary = trekWords) => {

    let allParagraph = []
    let paragraph = []
    
    for (i = 0; i < num; i++){
      for (let i = 0; i < 100; i++){
        let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]

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

let dictionaryChoice = trekWords;

var checkbox = document.querySelector("input[name=klingon]");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        dictionaryChoice = klingonWords;
    } else {
        dictionaryChoice = trekWords;
    }
});

submitButton.addEventListener('click', function(){


    let input = parseInt(document.getElementById('amtparagraphs').value)

    if (typeof input === 'number') {
       paragraphGenerator(input, dictionaryChoice)
    }   else {
        document.getElementById('ipsum').innerHTML = "Please enter a number."
    }

   
})