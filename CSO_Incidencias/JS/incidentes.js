let incidentes = [];

/**
 * Agrega un nuevo incidente al arreglo 'incidentes' y llama a la función mostrarIncidentes para visualizarlo en el DOM.
 */
function agregarIncidente() {
    const nombre = document.getElementById('nombre').value;
    const lugar = document.getElementById('lugar').value;
    const incidenteDesc = document.getElementById('incidente').value;
    const color = document.getElementById('color').value;

    // Verificación de campos vacíos
    if(!nombre || !lugar || !incidenteDesc) {
        alert('Por favor, complete todos los campos antes de enviar.');
        return;
    }

    const fecha = new Date();
    const fechaHora = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

    const incidente = {
        nombre,
        lugar,
        incidente: incidenteDesc,
        color,
        fechaHora
    };

    incidentes.push(incidente);
    mostrarIncidentes();

    // Limpiar campos después de agregar el incidente
    document.getElementById('nombre').value = '';
    document.getElementById('lugar').value = '';
    document.getElementById('incidente').value = '';
    document.getElementById('color').value = 'rojo';

    // Mostrar un mensaje de confirmación
    alert('¡Incidente enviado con éxito!');
}

/**
 * Muestra todos los incidentes en el DOM.
 */
function mostrarIncidentes() {
    const container = document.getElementById('incidentesContainer');
    container.innerHTML = ''; // limpiar container

    incidentes.forEach(incidente => {
        const incidenteDiv = document.createElement('div');
        incidenteDiv.className = 'incidente';
            
        incidenteDiv.innerHTML = `
            <h2>Reportado por: ${incidente.nombre}</h2>
            <p><strong>Lugar:</strong> ${incidente.lugar}</p>
            <p><strong>Incidente:</strong> ${incidente.incidente}</p>
            <p><strong>Riesgo:</strong> <span style="color:${incidente.color}">${incidente.color}</span></p>
            <p><strong>Fecha y Hora:</strong> ${incidente.fechaHora}</p>
            <hr>
        `;

        container.appendChild(incidenteDiv);
    });
}

mostrarIncidentes();
