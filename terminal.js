console.log("Working ")


const user_name = localStorage.getItem("userId")

const greet_user = document.getElementById("greet")

greet_user.textContent = `Hello ${user_name}`

const now = new Date
const curent_time = now.toLocaleDateString()


console.log(curent_time)

