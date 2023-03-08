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
            document.write(sentence.join(' '));
            return sentence;
          }
          
          document.querySelector('#text');
          const resulT = `${text.value}`;
  
           titleCase(resulT);
                  
          
    }
})
