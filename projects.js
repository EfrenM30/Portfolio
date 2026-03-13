const flipButtons = document.querySelectorAll(".flip-btn");
const backs = document.querySelectorAll(".card-back");

flipButtons.forEach(button => {

    button.addEventListener("click", function(){

        const box = this.closest(".boxes");
        box.classList.toggle("flip");

    });

});

backs.forEach(back => {

    back.addEventListener("click", function(){

        const box = this.closest(".boxes");
        box.classList.remove("flip");

    });

});