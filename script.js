window.onload = async () => {
    const response = await fetch('/barberos');
    const barberos = await response.json();
    
    const contenedor = document.getElementById('barberos');
    barberos.forEach(barbero => {
        const barberoDiv = document.createElement('div');
        barberoDiv.innerHTML = `
            <img src="${barbero.foto}" alt="${barbero.nombre}">
            <h2>${barbero.nombre}</h2>
            <button onclick="verHoras('${barbero._id}')">Ver Horas</button>
        `;
        contenedor.appendChild(barberoDiv);
    });
};

function verHoras(barberoId) {
    // Aquí agregarías la lógica para mostrar las horas disponibles y permitir reservar
}

function mostrarUbicacion() {
    // Mostrar la ubicación de la barbería (puedes integrar Google Maps aquí)
}

// Enviar la reserva al backend de Netlify o Vercel
fetch('https://glowing-torrone-23470f.netlify.app', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ barbero: '1', hora: '10:00' })
})
.then(response => response.json())
.then(data => {
    alert(data.message);
});
