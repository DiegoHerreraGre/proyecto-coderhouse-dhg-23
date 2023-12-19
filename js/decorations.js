let cardTitles = document.getElementsByClassName('card-title');

for (let i = 0; i < cardTitles.length; i++)  {
    cardTitles[i].addEventListener("mouseover",function(e) {
        e.target.style.color = "red";
    });

    cardTitles[i].addEventListener("mouseout",function(e) {
        e.target.style.color = "black";
    });
};

let containerMouse1 = document.getElementsByClassName("card-desc")[0];
let containerMouse2 = document.getElementsByClassName("card-desc-2")[1];
let containerMouse3 = document.getElementsByClassName("card-desc-3")[2];
let containerMouse4 = document.getElementsByClassName("card-desc-4")[3];

if (containerMouse1 = containerMouse1.addEventListener("click",function(e) {
    e.preventDefault();
    e.target.innerHTML = "You clicked me!";
}));

