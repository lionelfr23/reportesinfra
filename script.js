// Abrir el Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Cerrar el Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Guardar el reporte en Ver Reportes
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const direccion = document.getElementById('direccion').value;
    const descripcion = document.getElementById('descripcion').value;
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();

    const reporte = {
        fecha: fecha,
        hora: hora,
        descripcion: descripcion
    };

    // Crear el reporte
    const reportesList = document.getElementById('reportesList');
    const reporteItem = document.createElement('div');
    reporteItem.classList.add('reporte-item');
    reporteItem.innerHTML = `
        <p><strong>${reporte.fecha} ${reporte.hora}</strong> - ${reporte.descripcion} <span class="check-icon">✔</span></p>
    `;
    reportesList.appendChild(reporteItem);

    // Cerrar el modal y mostrar el mensaje de éxito
    closeModal('reportarModal');
    showSuccessMessage();

    // Limpiar los campos
    document.getElementById('reportForm').reset();
});

// Mostrar el mensaje de éxito
function showSuccessMessage() {
    const successMessageModal = document.getElementById('successMessageModal');
    successMessageModal.style.display = 'flex';
    setTimeout(() => {
        successMessageModal.classList.add('fade-in');
    }, 100);
    setTimeout(() => {
        closeSuccessMessage();
    }, 3000);
}

// Cerrar el mensaje de éxito
function closeSuccessMessage() {
    document.getElementById('successMessageModal').style.display = 'none';
}

// Ver Reportes
function openVerReportes() {
    const reportesList = document.getElementById('reportesList');
    if (reportesList.childElementCount > 0) {
        openModal('verReportesModal');
    } else {
        alert("No hay reportes disponibles.");
    }
}
