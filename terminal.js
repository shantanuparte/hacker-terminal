console.log("Working ")


const user_name = localStorage.getItem("userId")

const greet_user = document.getElementById("greet")

greet_user.textContent = `Hello ${user_name}`



