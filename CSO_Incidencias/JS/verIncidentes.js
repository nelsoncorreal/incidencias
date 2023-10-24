// Cargar incidentes desde el archivo JSON
fetch('incidentes.json')
    .then(response => response.json())
    .then(incidentes => {
        const container = document.getElementById('incidentesContainer');
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
    })
    .catch(error => {
        console.error("Hubo un error cargando los incidentes:", error);
    });
