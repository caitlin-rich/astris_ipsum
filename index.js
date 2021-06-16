//Dictionaries of Words

const trekWords = ['boldly', 'cardassian', 'enterprise', 'vulcan', 'earl grey', 'coffee', 'viewscreen', 'lcars', 'pointed ears', 'alpha', 'beta', 'gamma', 'delta', 'quadrant', 'voyager', 'defiant', 'deep space nine', 'spaceship', 'stars', 'space station', 'janeway', 'picard', 'sisko', 'burnham', 'kirk', 'archer', 'first officer', 'captain', 'engineering', 'operations', 'red shirt', 'astrometrics', 'command', 'blue', 'gold', 'red', 'red alert', 'phasers', 'set to stun', 'borg', 'klingon', 'andorian', 'tellarite', 'romulan', 'human', 'dolar', 'sit', 'amet', 'consectetur', 'adipeiscing', 'elit', 'etiam', 'ultricies', 'ex', 'id', 'ad', 'morbi', 'tristique', 'denectus', 'et', 'et', 'nec', 'orci', 'aliquam', 'facilisis', 'ipsum', 'tincidunt', 'dilithium', 'isoliner', 'warp', 'frontier', 'power', 'couplings', 'jeffries', 'console']

const klingonWords = ['Jelik', 'jat\'y\'lyn', 'Jelik', 'jinaq', 'k\'adio', 'ka\'vek', 'kesh', 'kellicam', 'khiGos', 'korut', 'pekt', 'kolat chack tabak', 'kortar', 'kos\'karii', 'kyamo', 'Len\'mat', 'makh\'Cha', 'matleh', 'worf', 'martok', 'b\'elanna', 'mauk-to\'Vor', 'sto-vo\'Kor', 'mekvak', 'mok', 'mokTah', 'naDev ghoS', 'par\'Mach', 'par\'Mach\'kai', 'ouee naGah', 'petaQ', 'po\'tajg', 'Nuq\'nuh', 'qu\'valth', 'shuVak', 'sliVak', 'soh-chim', 'soweeTa', 'SuH', 'Suvwl', 't\'gla', 'tohzah', 'toruk doh', 'vang ghaH', 'tan', 'yej rhin', 'yiGhom aH', 'yinTahg', 'adanji', 'baH', 'baktag', 'bat\'leth', 'Bekk', 'cha\'Dich', 'Cho\'echu', 'DaH', 'deLak doh', 'd\'akturak', 'd\'blok', 'Dhak\'tah', 'Fek\'lhr', 'tagh', 'Forshak', 'ghoptu', 'ghos', 'gik\'tal', 'he\'HimaH', 'grethor', 'Ha\'DlbaH', 'Hijol', 'Hechu\'ghos', 'hur\'q', 'posuere', 'enim', 'metus', 'sit', 'amet', 'rutrum', 'diu', 'convallis', 'nisi', 'ligula', 'portitor', 'quam', 'curabiter', 'conubia', 'viverra', 'bibendum', 'libero', 'etiam']

const vulcanWords = ['abmarkan', 'abomseya', 'aborau', 'abrash', 'eiktra', 'ashayam', 'spock', 'tuvok', 'vorik', 'taurik', 'michael', 'abru-mal-hinek', 'abru-nalatra', 'afersu', 'afsakau', 'ah', 'Ah\'rak', 'ahkhan', 'ahm', 'akali', 'alem-masu', 'aluk-kum-fak', 'an-prele', 'ashaya', 'ashau', 'ausham', 'bahan', 'bar-got', 'batai', 'besan', 'betaya', 'beyik', 'bikuv', 'bezhun-thekek', 'bol-tav', 'bolaya', 'c\'hik', 'cha', 'chakh', 'chkariya', 'czar\'ak', 'chorka', 'da-kuvau', 'da-fek', 'nel', 'dafel', 'dahrik', 'dash-pim-tersayek', 'dator', 'din-tor', 'dirik', 'donku', 'dungau-sarlah-nash-veh', 'dvatai', 'dvunei', 'dzhinaya', 'eik-morik', 'eikan', 'eik-vath', 'eik-mor-lap', 'ek\'', 'el\'mish', 'eimvuvak', 'eshikh', 'etwei', 'fa-wak-glansu', 'faf-kur', 'fah-yat', 'fal', 'fam-ketak-has', 'fan-veh', 'feihan', 'fiterpaya', 'fnalan', 'fupas', 'gad-ha-gel', 'galu-thorshek', 'galupik', 'gla-tor-dular', 'glu-masutra-vel', 'guhfik', 'guhsh', 'guvik', 'ha-fek', 'ha\'su', 'hakausu', 'hal-tor', 'haya', 'haseret', 'has-hassu', 'hesvulaya', 'igen-wesh-sahriv', 'ihnik', 'ihsek-kesek', 'im-tukh', 'ip-sut', 'is-fam', 'izh-hal-tor', 'jasif', 'jarel', 'ka-zehlik sayek', 'kadvin', 'kae', 'kafeh', 'kaht', 'kaiden', 'kai-ros']

//Generates the paragraphs - sentence functionality coming soon!! 

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
        } else {
          paragraph.push(randomWord)  
        }      
      }
      let joined = paragraph.join(' ') + '.'
      allParagraph.push(joined)
      paragraph = []
    }

    document.getElementById('ipsum').innerHTML = allParagraph.join('<br><br>')

  }


//Integration with HTML

let dictionaryChoice = trekWords;
let submitButton = document.getElementById('paragraphsubmit')

//Radio buttons to determine choice of language

    const standard = document.getElementById('standardbox')
    const klingon = document.getElementById('klingonbox')
    const vulcan = document.getElementById('vulcanbox')



    let radios = document.querySelectorAll('input[type=radio][name="language"]');
    radios.forEach(radio => radio.addEventListener('change', function(){
      if (radio.id === standard.id){
        dictionaryChoice = trekWords;
      }
      if (radio.id === klingon.id){
        dictionaryChoice = klingonWords;
      }
      if (radio.id === vulcan.id){
        dictionaryChoice = vulcanWords;
      }
    }));


//Submits user request for amount of paragraphs and generates text
submitButton.addEventListener('click', function(){


    let input = parseInt(document.getElementById('amtparagraphs').value)

    if (typeof input === 'number') {
       paragraphGenerator(input, dictionaryChoice)
    }   else {
        document.getElementById('ipsum').innerHTML = "Please enter a number."
    }

   
})