/* Se conecta con crud.html | login.html */
function login() {
    //capturo el user / password
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    const loginRequest = {
        username: username,
        password: password
    };

    //fetch al server con los datos por POST
    fetch(`http://localhost:8080/webapp/api/auth` ,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(loginRequest)
    })
    .then(Response => {
        if (Response.status !== 201) {
            throw new Error('username/password invalid')
        }
        //return Response.json(); //Parsea la respuesta como JSON
    })
    .then(data => {
        //Guarda en local la respuesta
        localStorage.setItem('USUARIO', username);

        //Redirigir a la pagina | window es objeto del navegador
        window.location.href = './crud.html';
    });
    //.catch(error =>{
     //   alert(error.message);
    //});  
}

function logout() {
    localStorage.removeItem('USUARIO');
    window.location.href ='/';
}

function isLogged() {
    //1- busco en localstorage
    const usuarioEnLocalStorage = localStorage.getItem('USUARIO');
    //verifico si existe el usuario
    if (!usuarioEnLocalStorage) {
        window.location.href = '/';
    }
}

//isLogged();
