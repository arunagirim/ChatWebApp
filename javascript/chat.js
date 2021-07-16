const form = document.querySelector(".typing-area"),
    inputField = form.querySelector(".input-field"),
    sendBtn = form.querySelector("button"),
    chatBox = document.querySelector(".chat-box");

form.onsubmit = (e) => {
    e.preventDefault();   //preventing form from submitting
}


sendBtn.onclick = () => {
        // console.log("Continue button");
    
    //Starting Ajax
    let xhr = new XMLHttpRequest();  //Creating XML object
    xhr.open("POST","php/insert-chat.php",true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                inputField.value = "";  //once message inserted into database then leave blank the input field
            }
        }
    }
    // We have to send the form data through ajax to php
     //Creating new formData Objects
    let formData = new FormData(form);
    //Sending the form data to php
    xhr.send(formData);     

}


setInterval(() => {
    //Lets start Ajax
    let xhr = new XMLHttpRequest();  //Creating XML object
    xhr.open("POST","php/get-chat.php",true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                chatBox.innerHTML = data;
            }
        }
    }
    // We have to send the form data through ajax to php
     //Creating new formData Objects
    let formData = new FormData(form);
    //Sending the form data to php
    xhr.send(formData); 
}, 500); //This functions runs frequently after 500ms