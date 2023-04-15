const form = document.querySelector('.my-form');
const button = document.querySelector('button');
const input = document.querySelector('input')
const msg = document.querySelector('.error')
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
button.addEventListener('click',function(e){
    e.preventDefault();
  
     
     if(input.value ===""){
        msg.textContent = "Whoops! It looks like you forgot to add your email"
    }

   else if(!input.value.match(mailformat)){
        msg.textContent = 'Please enter valid email.';
        input.classList.add('add');
    }
  else{  msg.textContent = 'welcome'}
    
})