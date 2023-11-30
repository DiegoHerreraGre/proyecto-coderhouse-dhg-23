const navBar = document.querySelectorAll(".blur");

navBar.forEach(element => {
    element.addEventListener("mouseleave", funBlur2);
});

function funBlur2() {
    this.classList.add("blur2");
    this.classList.remove("blur");
    
    if (this.classList.contains("blur2"))  {
        this.querySelectorAll(".blur2").forEach((element) => {
            element.blur();
        });
    }
}