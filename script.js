
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-close')
}) 
    
//Typing Effect
let typed = new Typed('.auto-input',{
    strings: ['Student!','Data Analyst!','UI Designer!','Android App Developer!'],
    typedpeed:100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})