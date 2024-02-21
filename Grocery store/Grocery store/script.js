
// for menubar
if (typeof window !== "undefined") {
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your login validation logic here
    // For simplicity, we'll just display an alert for demonstration purposes
    if (username === "user" && password === "password") {
        alert("Login successful!");
        window.location.href = "index.html"; 
    } else {
        alert("Login failed. Please check your credentials.");
    }
});


function searchOnChange(input) {
    // const searchTerm = input.value.toLowerCase();

    const searchTerm='';
    const arr=['Cutlery','Cool-Drinks'];
    for(i=arr[0];i<arr.length;i++)
    {
    if (searchTerm==Cutlery) {
            
        window.location.href = `cutlery.html`;
        return;
     }
     
     else {
        // Handle the case when the search term does not match any known file
        console.log('No results found for your search term:', searchTerm);
        // You can show an error message to the user or take another action.
    }
    }

    // 

}



















}