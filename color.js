const colors= ["red", "green", "blue", "yellow", "purple", "white", "black"];

document.addEventListener('DOMContentLoaded', function()
{
    
    const btn = document.getElementById("btn");
     btn.addEventListener('click', function()
     {
         color();
     })
});


function color()
{
    number = RandomNumber();
    document.body.style.backgroundColor = colors[number];
    
    
}



function RandomNumber()
{
    return Math.floor(Math.random() * 7);
}