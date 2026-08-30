//input ki value event se nikal jaigi
const form = document.querySelector('form')
//const height =parseInt(document.querySelector('#height').value)
//This is a wrong usecase and will give you empty values as it runs as soon as page is loaded
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (isNaN(height) || height < 0) {
        results.innerHTML = "Please give a valid height"
    }

    else if (isNaN(weight) || weight < 0) {
        results.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
         
        if (bmi < 18.6) {
            results.innerHTML = `Your BMI is ${bmi}<br>You are Under weight`
        }

        else if (bmi < 24.9) {
            results.innerHTML = `Your BMI is ${bmi}<br>You are Normal weight`
        }

        else {
            results.innerHTML = `Your BMI is ${bmi}<br>You are Over weight`
        }
    }
})