const butt = document.getElementById("input_button");

function when_clicked(){
    const input = document.getElementById("input_user_name")
    const input_value = input.value
    if (input_value == ""){
        alert("Name cannot be empty")
        return
    }
    localStorage.setItem("userId",input_value)
    console.log("Clicked", input_value);
    console.log(butt)

    window.location.href = "terminal.html"
}

butt.addEventListener("click", when_clicked);


