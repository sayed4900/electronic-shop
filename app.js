const link = document.getElementsByClassName("link");
let currentValue = 1;

function activeLink() {
    for (l of link) {
        l.classList.remove("active");
    }

    event.target.classList.add("active");
    currentValue = event.target.value;
}

function backBtn() {
    if (currentValue > 1) {
        for (l of link) {
            l.classList.remove("active");
        }
        currentValue--;
        link[currentValue - 1].classList.add("active");
    }
}
function nextBtn() {
    if (currentValue < 1) {
        for (l of link) {
            l.classList.remove("active");
        }
        currentValue++;
        link[currentValue - 1].classList.add("active");
    }
}

const mainImg = document.getElementById("mainImg");

const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
    console.log("1");
};
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
    console.log("2");
};

smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
    console.log("3");
};
