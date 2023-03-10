const parentButton = document.querySelector('.button');
const text = document.querySelector('#text');
const msg = document.querySelector('.msg');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');


//To Upper-case
btn1.addEventListener('click', e => {
    e.preventDefault();
    
    if (text.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter field';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const resulT = `${text.value}`;
        const capreSult = `${resulT}`.toUpperCase();

        text.value = capreSult;
        
    }
})

//To lower-case
btn2.addEventListener('click', e => {
    e.preventDefault();
    
    if (text.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter field';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const resulT = `${text.value}`;
        const lowcasereSult = `${resulT}`.toLowerCase();

        text.value = lowcasereSult;
        
    }
})

//To Title-case
btn3.addEventListener('click', e => {
    e.preventDefault();
    
    if (text.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter field';

        setTimeout(() => msg.remove(), 3000);
    } else {
        function titleCase(string){
            const sentence = string.toLowerCase().split(' ');
            for( let i = 0; i < sentence.length; i++){
                sentence[i] = sentence [i][0].toUpperCase() + sentence[i].slice(1);
            }
            return sentence.join(' ');

          }
          
          const resulT = `${text.value}`;
          
           const tiTleCase = titleCase(resulT);
           text.value = tiTleCase;
          
    }
})

// To sentence-Case

btn4.addEventListener('click', e => {
    e.preventDefault();
    
    if (text.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter field';

        setTimeout(() => msg.remove(), 3000);
    } else {
        
        const resulT = `${text.value}`;
        const toSsenteceCase = resulT[0].toUpperCase() + resulT.slice(1).toLowerCase();
        text.value = toSsenteceCase; 
    } 
})
// To Capitalized
btn5.addEventListener('click', e => {
    e.preventDefault();
    
    if (text.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter field';

        setTimeout(() => msg.remove(), 3000);
    } else {

const resulT = `${text.value}`;
const capitalizedString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const word = resulT.split(' ').map(capitalizedString);
const capitalizeSentence = word.join(' ');
text.value = capitalizeSentence;
}
})

// To inverseCase
btn6.addEventListener('click', e => {
    e.preventDefault();
    
    if (text.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter field';

        setTimeout(() => msg.remove(), 3000);
    } else {
        function iNVERSECASE(string){
            const sentence = string.toUpperCase().split(' ');
            for( let i = 0; i < sentence.length; i++){
                sentence[i] = sentence [i][0].toLowerCase() + sentence[i].slice(1);
            }
            return sentence.join(' ');

          }
          
          const resulT = `${text.value}`;
          
           const iVERSECASE = iNVERSECASE(resulT);
           text.value = iVERSECASE;
          
    }
})

//To Alternating Case
btn7.addEventListener('click', e => {
    e.preventDefault();
    
    if (text.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter field';

        setTimeout(() => msg.remove(), 3000);
    } else { 
        const alternateCase = function (s) {
            const chars = s.toLowerCase().split("");
            for (let i = 0; i < chars.length; i += 2) {
              chars[i] = chars[i].toUpperCase();
            }
            return chars.join("");
    
        }
        const resulT = `${text.value}`;

        const alTERnate = alternateCase(resulT);
        text.value = alTERnate;

}
})
