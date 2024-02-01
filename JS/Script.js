function replacename() {
    let name = prompt("Hello, What's your name?");
    document.getElementById("name").innerHTML = name;
}

replacename();


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("Slideshow");

    if (n > imgList.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = imgList.length;
    }

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}
setInterval(function () {
    plusDivs(1);
}, 2000);



const inputName = document.getElementById("name-input");
const inputEmail = document.getElementById("email-input");

const button = document.getElementById ("tombol kirim");

button.addEventListener ("click", function (){
    let nama = inputName.value;
    let email = inputEmail.value;

    if (!nama) {
    const nameError= document.getElementById("name-error");
    nameError.classList.add ("error-message");
    
    nameError.innerText = "Input your Name !"
}
if (!email) {
    const  emailError = document.getElementById("email-error");
    emailError.classList.add ("error-message");

    emailError.innerText ="Input your Email !"

    
} else{
        const continueMessage = document.getElementById("continue");
        continueMessage.classList.add("approve");
        continueMessage.innerText = "data telah diterima, kami akan mengirim notifikasi email jika ada produk baru di website kami";
    }
})