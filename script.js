
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa fa-remove')
}) 
    
//Typing Effect
let typed = new Typed('.auto-input',{
    strings: ['Software Developer!','Data Analyst!','UI Designer!','Android App Developer!'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})