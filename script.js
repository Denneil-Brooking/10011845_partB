//var homes
let input = document.querySelector("#input");
let c = document.querySelector("#C");
let f = document.querySelector("#F");
let radio = document.querySelectorAll('input[name="temp"]');
console.log("pass start vars")

//Function to check & post results
let Convert = (e) => {
    console.log("Pass open function")
    let num = parseInt(input.value);
    let num1 = Math.round(num * 9 / 5) + 32;
    let num2 = Math.round((num - 32) * 5 / 9);
    console.log("Pass function vars")
    //Switch case to change between °C & °F
    switch (e.value) {
        //case 1 holds conversion of °C to°F
        case ("1"):
            console.log("1 pass")
            document.getElementById("result").innerHTML = num + "°C " + " = " + num1 + "°F ";
            console.log(num + "°C" + " = " + num1 + "°F");
            break;
            //case 2 holds conversion of °F to °C
        case ("2"):
            console.log("2 pass")
            document.getElementById("result").innerHTML = num + "°F " + " = " + num2 + "°C ";
            console.log(num + "°F " + " = " + num2 + "°C ");
            break;
            //default case incase none of the above is selected
        default:
            console.log("hit default");
            document.getElementById("result").innerHTML = "FAILED";
            break;
    }
}
//
for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('change', (e) => {
        Convert(e.target);
        e.preventDefault()
        console.log("pass radio")
    })
}