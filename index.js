// global variables
var gender;
var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var CC, YY, MM, DD;
// akan names
var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleAkanNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"]

// Validation
const DateValidation = () => {
    if (DD == null || DD < 1 || DD > 31 || DD == undefined) {
        alert("Invalid Date");
        document.getElementById('date').value = null;
        document.getElementById('date').style.border = ("1px solid red");
        return false;
    }
    else {
        return true;
    }

}

const MonthValidation = () => {
    if (MM == null || MM < 1 || MM > 12 || MM == undefined) {
        alert("Invalid Date");
        document.getElementById('month').value = null;
        document.getElementById('month').style.border = ("1px solid red");
        return false;
    }
    else {
        return true;
    }
}


// Calculate day of week formula

const DayOfWeek = () => {
    CC = parseInt(document.getElementById("century").value); //century
    YY = parseInt(document.getElementById("year").value); // year
    MM = parseInt(document.getElementById("month").value); // month
    DD = parseInt(document.getElementById("date").value); // date of the month
    
    var dateValidation = DateValidation();
    var monthValidation = MonthValidation();

    if(dateValidation == true && monthValidation == true){
        var day = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
        console.log(Math.floor(day));
    
        return (Math.floor(day));
    }
    else {
        return false
    }

}

//gender Function
const GetGender = () => {
    var selectedGender = document.querySelector('input[name="gender"]:checked').value;
    
    if(selectedGender == "male") {
        gender = "male";
    } else {
        gender = "female";
    }

    console.log(gender);

}


const GetYourAkan = () => {
    var dayOfWeek = DayOfWeek();
    GetGender();

    var maleName = maleAkanNames[dayOfWeek];
    var bornDay = Days[dayOfWeek];

    var femaleName = femaleAkanNames[dayOfWeek];

    //comparing days and gender to assign akan names
    if(dayOfWeek == undefined || dayOfWeek == null || dayOfWeek == false) {
        document.getElementById("bornDay").innerHTML = null;
        document.getElementById("akanName").innerHTML = "Not able to show akan name now kindly check if fields are filled correctly"
    }
    else {
        if(gender == "female") {
            document.getElementById("bornDay").innerHTML = bornDay;
            document.getElementById("akanName").innerHTML = femaleName;
        } else {
            document.getElementById("bornDay").innerHTML = bornDay;
            document.getElementById("akanName").innerHTML = maleName; 
        }
    }


}