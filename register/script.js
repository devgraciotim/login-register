function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirm = element.children.passwordConfirm.value

    console.log(password)

    if (password === passwordConfirm && password !== '' && passwordConfirm !== '') {
        alert("User " + username + " registrado!")
    }
    else if (password === '' && passwordConfirm === '') {
        alert("Password não pode ser vazio")
    }
    else {
        alert("Senhas não conferem!")
    }
}