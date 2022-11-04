console.log("hello")
var lightbtn = document.querySelector('#light')
var darkbtn = document.querySelector('#dark')
console.log(darkbtn)
console.log(lightbtn)

var body = document.querySelector('body')
console.log(body)
lightbtn.addEventListener('click',(e)=>{
    console.log("heyy")
body.style.background = 'white';
body.style.color = 'black';
body.style.transition = '1s ease';
})
darkbtn.addEventListener('click',(e)=>{
    console.log("work")
body.style.background = 'black';
body.style.color = 'white';
body.style.transition = '1s ease';
})
var colors = ['#42f5d4', '#f8a59', '#ddf542', '#42f551', '#c842f5']
var bubblesColors = '#'
let canvas = document.querySelector('#canvas')
function generateRandomNumber(){
    var random = Math.floor(Math.random()* colors.length)
    return random;
 }
 function makeBubbles(){
    for(var i=0; i<54; i++){
        var randomnum = generateRandomNumber()
        console.log(randomnum)
        canvas.innerHTML +=`<div class="bubble" style="background:${colors[randomnum]}"></div>`
    } 
 }
 makeBubbles()
 let start = 60;
 let time = document.querySelector("#time");
 function guesscolor(){
    let randomColorIndex = Math.floor(Math.random()*colors.length)
    guess.style.backgroundColor = colors[randomColorIndex];
 }
 guesscolor()
function timer(){
    if(start > 0){
        start--;
        time.innerHTML = start;
    }
    else{
        canvas.style.display = 'none';
        final.style.display = 'block';
        PointerEvent.innerHTML = points;
        canvas.style.backgroundColor = "#fefefe";
    }
}
setInterval(timer , 1000);
let points = 0;
canvas.addEventListener("click", function(e){
    let num = e.target.style.backgroundColor;
    console.log(num)
    if(num = guess.style.backgroundColor){
        points = points +1;
        score.innerHTML = points;
        makeBubbles();
        guesscolor();
    }
})
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    location.reload();
})

 