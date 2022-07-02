const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);





function onFormSubmit (event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    formData.forEach((email, password) =>{
        console.log('email', email);
        console.log('password', password);
        return formData.reset

    });

    const {
        elements: { email, password }
      } = event.currentTarget;
    
    
    if (email.value === "" || password.value === "") {
         alert('Заполни все поля формы');
      }

      event.currentTarget.reset()

   
}


