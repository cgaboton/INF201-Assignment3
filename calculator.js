function calculateSalary() {
    var hourlyWage = document.getElementById("hourlyWage").value;
    var hours = document.getElementById("hours").value;

    var wageNumber = parseFloat(hourlyWage);
    var hoursNumber = parseFloat(hours);

    var yearlySalary = wageNumber * hoursNumber * 52;

    document.getElementById("salaryResult").innerHTML =
        "Your salary = $" + yearlySalary.toFixed(2);
}