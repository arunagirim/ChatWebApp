const form = document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e) => {
    e.preventDefault();
}

continueBtn.onclick = ()=>{
    // console.log("Continue button");
    
    //Starting Ajax
    let xhr = new XMLHttpRequest();  //Creating XML object
    xhr.open("POST","php/login.php",true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                console.log(data);
                if (data == "success") {
                    location.href = "users.php";
                } else {
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    // We have to send the form data through ajax to php
     //Creating new formData Objects
    let formData = new FormData(form);
    //Sending the form data to php
    xhr.send(formData);     

}