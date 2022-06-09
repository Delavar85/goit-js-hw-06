const form = document.querySelector('.login-form')
const registerCallback = (event) => {
    event.preventDefault()
    const { elements: { email, password } } = event.currentTarget
    if (email.value === "" || password.value === "") {
       return alert('Усі поля повинні бути заповнені!')
    }
    const registrInfo = { email:email.value, password:password.value};
    console.log(registrInfo)
    event.currentTarget.reset();
}
form.addEventListener('submit', registerCallback);