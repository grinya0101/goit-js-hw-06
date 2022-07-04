const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);





function onFormSubmit (event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const {
        elements: { email, password }
      } = event.currentTarget;
    
    
    if (email.value === "" || password.value === "") {
         alert('Заполни все поля формы');
      }
       
      console.log(formData)
      event.currentTarget.reset()

   
}


