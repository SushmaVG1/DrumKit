var f = function clicked(i)
{
    switch(i[1]){
        case "S" : 
            var audio = new Audio("sounds/audio"+ i[0] +".mp3");
            audio.play();
            break;
        case "U" : 
            var audio = new Audio("sounds/audio"+ i[0] +".mp3");
            audio.play();
            break;
        case "S" : 
            var audio = new Audio("sounds/audio"+ i[0] +".mp3");
            audio.play();
            break;
        case "H" : 
            var audio = new Audio("sounds/audio"+ i[0] +".mp3");
            audio.play();
            break;
        case "M" : 
            var audio = new Audio("sounds/audio"+ i[0] +".mp3");
            audio.play();
            break;
        case "A" : 
            var audio = new Audio("sounds/audio"+ i[0] +".mp3");
            audio.play();
            break;
        case "G" : 
            var audio = new Audio("sounds/audio"+ i[0] +".mp3");
            audio.play();
            break;
        default:
            console.log("");
    }
}
for(var i=0; i<7; i++)
{
    document.querySelectorAll("input")[i].addEventListener("click", f.bind(null,[i,document.querySelectorAll("input")[i].getAttribute("value")]));
}
document.addEventListener("keypress",function(event)
{    
    switch(event.key){
        case "S" : 
            var audio = new Audio("sounds/audio"+ 0 +".mp3");
            audio.play();
            break;
        case "U" : 
            var audio = new Audio("sounds/audio"+ 1 +".mp3");
            audio.play();
            break;
        case "S" : 
            var audio = new Audio("sounds/audio"+ 2 +".mp3");
            audio.play();
            break;
        case "H" : 
            var audio = new Audio("sounds/audio"+ 3 +".mp3");
            audio.play();
            break;
        case "M" : 
            var audio = new Audio("sounds/audio"+ 4 +".mp3");
            audio.play();
            break;
        case "A" : 
            var audio = new Audio("sounds/audio"+ 5 +".mp3");
            audio.play();
            break;
        case "G" : 
            var audio = new Audio("sounds/audio"+ 6 +".mp3");
            audio.play();
            break;
        case "s" : 
            var audio = new Audio("sounds/audio"+ 0 +".mp3");
            audio.play();
            break;
        case "u" : 
            var audio = new Audio("sounds/audio"+ 1 +".mp3");
            audio.play();
            break;
        case "s" : 
            var audio = new Audio("sounds/audio"+ 2 +".mp3");
            audio.play();
            break;
        case "h" : 
            var audio = new Audio("sounds/audio"+ 3 +".mp3");
            audio.play();
            break;
        case "m" : 
            var audio = new Audio("sounds/audio"+ 4 +".mp3");
            audio.play();
            break;
        case "a" : 
            var audio = new Audio("sounds/audio"+ 5 +".mp3");
            audio.play();
            break;
        case "g" : 
            var audio = new Audio("sounds/audio"+ 6 +".mp3");
            audio.play();
            break;
        default:
            console.log("");
    }
})