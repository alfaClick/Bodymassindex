document.getElementById("calculateBtn").addEventListener("click", function() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var unit = document.querySelector('input[name="unit"]:checked').value;
    var bmi, resultText;

    if (unit === "metric") {
        bmi = weight / ((height / 100) ** 2);
    } else {
        bmi = (weight / (height ** 2)) * 703;
    }

    if (!isNaN(bmi) && bmi > 0) {
        bmi = bmi.toFixed(1);
        if (bmi < 18.5) {
            resultText = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultText = "Overweight";
        } else {
            resultText = "Obese";
        }

        document.getElementById("result").innerHTML = `<h3>Your BMI is ${bmi}</h3><p>You are ${resultText}</p>`;
    } else {
        document.getElementById("result").innerHTML = `<h3>Invalid Input</h3><p>Please enter valid height and weight values.</p>`;
    }
});
document.getElementById("calculateBtn").addEventListener("click", function() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var unit = document.querySelector('input[name="unit"]:checked').value;
    var bmi, resultText, adviceText;

    if (unit === "metric") {
        bmi = weight / ((height / 100) ** 2);
    } else {
        bmi = (weight / (height ** 2)) * 703;
    }

    if (!isNaN(bmi) && bmi > 0) {
        bmi = bmi.toFixed(1);

        if (bmi < 18.5) {
            resultText = `Your BMI is ${bmi}`;
            adviceText = "You are underweight. Try to eat a balanced, calorie-rich diet to gain some healthy weight.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText = `Your BMI is ${bmi}`;
            adviceText = "You have a healthy weight. Keep maintaining your current lifestyle and diet!";
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultText = `Your BMI is ${bmi}`;
            adviceText = "You are overweight. Consider adjusting your diet and incorporating more physical activity.";
        } else {
            resultText = `Your BMI is ${bmi}`;
            adviceText = "You are obese. It's recommended to consult a healthcare provider for advice on weight management.";
        }

        document.getElementById("result").innerHTML = `<h3>${resultText}</h3><p>${adviceText}</p>`;
    } else {
        document.getElementById("result").innerHTML = `<h3>Invalid Input</h3><p>Please enter valid height and weight values.</p>`;
    }
});
