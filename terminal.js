const { jsx } = require("react/jsx-runtime")

console.log("Working ")


const user_name = localStorage.getItem("userId")

const greet_user = document.getElementById("greet")

greet_user.textContent = `@Hello ${user_name}`

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


const form = document.getElementById("terminal_form")
const input = document.getElementById("terminal_input")
const output = document.getElementById("terminal_output")


function print(text){
    const line = document.createElement("div")
    line.textContent = text

    output.appendChild(line)

    output.scrollTop = output.scrollHeight

}

function printCommand(command){
    const line = document.createElement("div")
    line.innerHTML = `<span class="prompt">&gt;</span> ${command}`

    output.appendChild(line)

}

form.addEventListener("submit", function(event){
    event.preventDefault()

    const command = input.value.trim()

    if(command === ""){
        return
    }

    printCommand(command)

    input.value = ""

    handleCommand(command)

})

function handleCommand(command){
    
    switch(command.toLowerCase()){

        case "help":
            print("Avaliable commands: ")
            print("  help       -Slow avaliable commands")
            print("  clear      -Clear terminal")
            print("  about      -About NightTerminal")
            print("  echo       -Print text");
            print("  date      -Show current date")
            print("   time      -Show current time")
            print("  whoami     -Show User name")
            break

        case "clear":
             output.innerHTML = ""
             break

        case "about":
            print("NightTerminal")
            print("A Web-Based terminal interface")
            break

        case "time":
            print(new Intl.DateTimeFormat('en-US',{hour:'2-digit',minute:'2-digit', hour12:true}).format(new Date()))
            break

        case "date":
            print(new Date().toLocaleDateString())
            break

        case "whoami":
            print(user_name)
            break
        default:
            if (command.startsWith("echo")){

                const text = command.substring(5)
                print(text)

            }
            else{
                print(`Command not found: ${command}`)
            }
    }
}

