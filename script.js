const d = new Date();
let hour = d.getHours();

let tag = document.getElementsByTagName("h1")[0];
let background = document.body.style;

function func(hour) {
    if (hour >= 0 && hour <= 12) {
        tag.innerHTML = "Good Morning!";
        background.backgroundColor = "Wheat";
    }

    else if (hour >= 12 && hour <= 18) {
        tag.innerHTML = "Good Afternoon!";
        background.backgroundColor = "Purple";
    }

    else if (hour >= 18 && hour <= 24) {
        tag.innerHTML = "Good Night!";
        background.backgroundColor = "Black";
    }
}

func(hour);