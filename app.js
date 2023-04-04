const API_KEY = ‘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’
const submitButton = document.querySelector(‘#submit’)
const outPutElement = document.querySelector (‘#output’)
const inputElement = document.querySelector(‘input’)
const historyElement = document.querySelector(‘.history’)
const buttonElement = document.querySelector (‘button’) 

function changeInput(value) {
       const inputElement = document.querySelector (‘input’)
       inputElement.value = value
}

async function getMessage () {
       const.log (‘clicked’)
       const options = {
           method: ‘POST’, 
           headers: {
                  ‘Authorization’: ‘Bearer $ {API_KEY}’,
                  ‘Content-Type’: ‘application/json’

},
body: JSON.stringify ({

        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: inputElement.value }],
        max_tokens: 100
)} 

}

       try {
          const response = await fetch(‘https://api.openai.com/vi/chat/completions’, options)  
          const data = await response. json () 
          console.log (data)
          outPutElement.textContent = data.choises [0]. message.content
          if (data.choises [0]. message.content && inputElement.value) {
               const pElement = document.createElement (‘p’)   
               pElement.textContent = inputElement.value 
               pElement.addEventListener(‘click’, () => changeInput (pElement.textContent))       
               historyElement.append( pElement)   
               
}
 } catch (error) {
       console.error (error) 
   }

}

submitButton.addEventListener (‘click’, getMessage)

function clearIput() {
        inputElement.value = ‘’
}  

buttonElement.addEventListener(‘click’, clearInput)

