let button=document.getElementById("button")
let plusOne=1
let h1=document.getElementById("h1")
let input=document.getElementById("input")
let words=["sun","toyota","supra","nissan","gtr","ford","escort"]
let secret=words[Math.floor(Math.random()*7)]
let shifr=document.getElementById("shifr")
let img=document.getElementById("img")
let imgnumber=0
let letters=document.getElementById("letters")
let bukvi=""
let newbutton=document.getElementById("newbutton")
let settings=document.getElementById("settings")
let multi=document.getElementById("multi")
let single=document.getElementById("single")
let modal=document.getElementsByClassName("modal")[0]
let wordmodal=document.getElementsByClassName("modal")[1]
let ok=document.getElementById("ok")
let modalinput=document.getElementById("modalinput")
let modal2=document.getElementById("modal2")






input.select()
shifr.innerHTML="*".repeat(secret.length)
button.onclick=function  (event) {
    // предотвратить обновление страницы
    event.preventDefault();
    input.select()
    bukvi=bukvi+input.value+", "
    // input.value = буква из инпута
    letters.innerHTML="used letters: "+bukvi
    // в консоли выводится буква из инпута
    console.log(input.value);
    if (secret.includes(input.value)) {
        console.log("doğru");
        let newshifr=""
        for(let i=0; i<secret.length; i=i+1){
            console.log(secret[i]);
            if (secret[i]==input.value) {
                console.log("verno")
                newshifr=newshifr+input.value
            }
            else{
                console.log("ne verno")
                newshifr=newshifr+shifr.innerHTML[i]
            }
        }
        console.log(newshifr);
        shifr.innerHTML=newshifr
        if (newshifr==secret) {
            h1.innerHTML="you win"
            button.disabled=true
        }
    }
    else{
        imgnumber=imgnumber+1
        console.log("yanlış")
        img.src="hangman"+imgnumber+".png"
        if (imgnumber==6) {
         button.disabled=true
        console.log("game over")
        h1.innerHTML="try again :/"
        h1.innerHTML="Try again :/ Secret word was: "+secret
        }
    }

}
newbutton.onclick=function (event) {
    console.log(input.value)
    console.log("oyun başladı")
    event.preventDefault();
    newgame()
    
}
settings.onclick=function (event) {
    console.log(input.value)
    console.log("hello world");
    // ? event.preventDefault(); nujen dla tavo ştop ne abnavlalas straniça
    event.preventDefault();
    modal.style.transform= "translateY(0)"
}
modal.onclick=function (event) {
    console.log("moodal closs")
    console.log(input.value)
    event.preventDefault();
    modal.style.transform="translateY(-100%)"
}
multi.onclick=function (event){

    console.log(input.value)
    console.log("multiplayer")
    event.preventDefault();
    wordmodal.style.transform="translateY(0)"   
}
single.onclick=function (event){
    console.log(input.value)
    console.log("singleplayer")
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    event.preventDefault(); 
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    secret=words[Math.floor(Math.random()*7)]
    newgame()
}
function newgame() {
    h1.innerHTML="hangman"
    img.src="hangman0.png"
    button.disabled=false
    letters.innerHTML="goood luck"
    imgnumber=0

    shifr.innerHTML="*".repeat(secret.length)
    bukvi=""
    input.value=""
}
ok.onclick=function (event){
    event.preventDefault();
    //! dla tavo ştobı vıvesti slova iz inputa  
    console.log(modalinput.value);
    modal2.style.transform="translateY(100%)"
    secret = modalinput.value
    newgame()
    
}





// for(let i=1000; i>600; i=i-100){
//  console.log(i);
// }
// for(let i=1; i<4; i=i+1){
//     console.log("rabbit "+i)
// }