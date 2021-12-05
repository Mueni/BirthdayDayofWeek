

//akan names
var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleAkanNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"]

// Calculate day of week formula

const DayOfWeek = () => {
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var dayOfMonth = parseInt(document.getElementById("date").value);

    var day = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7;
    console.log(Math.floor(day));

    return (Math.floor(day));
}

