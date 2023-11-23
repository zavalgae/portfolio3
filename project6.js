/*(타이핑효과--------------------------------------------------------------)*/

const content = "Developer 김민현의 포트폴리오입니다.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 250)


/*(헤더 좌표이동--------------------------------------------------------------)*/
  {  
    let liEls = document.querySelectorAll("header > ul > li");


    let home = document.querySelector("header > ul").offsetTop;
    liEls[0].addEventListener("click",()=>{
    
        window.scrollTo({
            top:home,behavior:"smooth"     
        });  
    });

    let about = document.querySelector("main > :nth-child(2)").offsetTop;
    liEls[1].addEventListener("click",()=>{
    
        window.scrollTo({
            top:about,behavior:"smooth"     
        });  
    });

    let skill = document.querySelector("main > :nth-child(3)").offsetTop;

    liEls[2].addEventListener("click",()=>{
    
        window.scrollTo({
            top:skill,behavior:"smooth"     
        });  
    });

    let project = document.querySelector("main > :nth-child(4)").offsetTop;

    liEls[3].addEventListener("click",()=>{
    
        window.scrollTo({
            top:project,behavior:"smooth"     
        });  
    });

    let contact = document.querySelector("footer").offsetTop;

    liEls[4].addEventListener("click",()=>{
    
        window.scrollTo({
            top:contact,behavior:"smooth"     
        });  
    });

  }


