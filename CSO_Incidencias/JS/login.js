// Función para manejar el proceso de inicio de sesión
function loginFunction() {
    // Obtener el valor de usuario y contraseña ingresados
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Usamos fetch para obtener los datos del archivo login.json
    fetch('BD/login.json')
        .then(response => response.json())
        .then(data => {
            // Comparamos si las credenciales ingresadas son las mismas que las almacenadas en login.json
            if (username === data.username && password === data.password) {
                // Si las credenciales son válidas, se redirige a incidentes.html
                window.location.href = "incidentes.html";
            } else {
                // Si las credenciales no son válidas, muestra un mensaje de error
                document.getElementById("errorMessage").textContent = "Invalid credentials!";
            }
        })
        // En caso de error al obtener los datos, se imprime un mensaje en la consola
        .catch(error => {
            console.error("There was an error!", error);
        });
}
