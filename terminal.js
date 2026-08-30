console.log("Working ")


const user_name = localStorage.getItem("userId")

const greet_user = document.getElementById("greet")

greet_user.textContent = `Hello ${user_name}`

const now = new Date
const for_time = new Intl.DateTimeFormat(
    'en-US',{
        hour:'2-digit',
        minute:'2-digit',
        hour12: true
    }
).format(now)


console.log(for_time)

const time = document.getElementById("time_p")

time.innerHTML = `${for_time}`


