const ratings = document.querySelectorAll ("li");
const button = document.querySelector("button")
let selectedRating; //2

console.log(ratings);

function selectRating(e) {
    if (selectedRating !== undefined) {
        ratings[selectedRating - 1].classList.remove("active");
    }

    e.target.classList.add("active");
    selectedRating = Number(e.target.innerText);
}

ratings.forEach(function (elem) {
    elem.addEventListener("click", selectRating);
});

function submitRating() {
    if (selectedRating !== undefined) {
    document.getElementById("initial-view").classList.add("hide");
    document.getElementById("final-view").classList.remove("hide");
    document.getElementById("final-view").style.animation = "fadeIn 1s ease-in forwards";
    document.getElementById("selected-rating").innerText = selectedRating;
    }
}



button.addEventListener("click",submitRating);