let about = document.querySelector('.navigation span:first-of-type');
let AboutpopupCard = document.querySelector('.popupCard:first-of-type');
let loginForm = document.querySelector( 'div.popupCard.form');
let email = document.querySelector('#email');   
let password = document.querySelector('#password');
let successPopup = document.querySelector('.success');
let blackBG = document.querySelector('.blackBG');
let login = document.querySelector('.navigation span:nth-of-type(2)'); 

function enableBg(){
    blackBG.classList.remove('hidden');
    blackBG.classList.add('active');
}
function disableBg(){
    blackBG.classList.remove('active');
    blackBG.classList.add('hidden');
}

about.addEventListener('click',()=>{
    if(AboutpopupCard.classList.contains('active')){
        disableBg();
        AboutpopupCard.classList.remove('active');
        AboutpopupCard.classList.add('hidden');
    }
    else{
        enableBg();
        AboutpopupCard.classList.remove('hidden');
        AboutpopupCard.classList.add('active');
    }
});

login.addEventListener('click',()=>{

    if(loginForm.classList.contains('active')){
        disableBg();
        loginForm.classList.remove('active');
        loginForm.classList.add('hidden');
    }
    else{
        enableBg();
        loginForm.classList.remove('hidden');
        loginForm.classList.add('active');
    }
})


loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formEmail = email.value;
    let formPass = password.value;
    if(formEmail === 'ghadi@gmail.com' && formPass === '123'){
        loginForm.classList.remove('active');
        loginForm.classList.add('hidden');
        successPopup.classList.remove('hidden');
        successPopup.classList.add('active');
        enableBg();
    }
    else{
        alert('Wrong Credentials');
        password.value = '';
    }
});



blackBG.addEventListener('click',()=>{
    //disable the success popup
    successPopup.classList.remove('active');
    successPopup.classList.add('hidden');
    //diable the about us card
    AboutpopupCard.classList.remove('active');
    AboutpopupCard.classList.add('hidden');
    //disable the form
    loginForm.classList.remove('active');
    loginForm.classList.add('hidden');
    //disable the bg
    disableBg();
});
