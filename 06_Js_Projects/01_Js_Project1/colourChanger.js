// Selects ALL elements having class="button"
const buttons = document.querySelectorAll('.button')

// Selects the <body> element
const body = document.querySelector("body")

// forEach() loops through every button
buttons.forEach(function(button) {

    // Adds a click event listener to each button
    button.addEventListener('click', function(e) {

        // Prints the complete event object
        console.log(e)

        // Prints the element that was actually clicked
        console.log(e.target)

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id ;//gives color name
        }
         if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id ;//gives color name
        }
         if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id ;//gives color name
        }
         if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id ;//gives color name
        }

    })

})