function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    if(weight > 0 && height > 0){	
    var finalBmi = weight/(height/100*height/100)
    document.bmiForm.bmi.value = finalBmi
    if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "Sa oled alakaalus."
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "Sa oled perfektses kaalus."
    }
    if(finalBmi > 25){
    document.bmiForm.meaning.value = "Sa oled ülakaalus."
    }
    }
    else{
    alert("Palun täida kõik lüngad!")
    }
}