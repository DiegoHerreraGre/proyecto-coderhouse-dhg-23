let cardTitles = document.getElementsByClassName('card-title');

for (let i = 0; i < cardTitles.length; i++)  {
    cardTitles[i].addEventListener("mouseover",function(e) {
        e.target.style.color = "red";
    });

    cardTitles[i].addEventListener("mouseout",function(e) {
        e.target.style.color = "black";
    });
};