function enviarWhatsapp(nombreProducto) {
    const telefono = "51999999999"; // Cambia esto por tu número real (ej: 51 más tu número en Perú)
    const mensaje = encodeURIComponent(`¡Hola! Estoy interesado en la figura: ${nombreProducto}. ¿Sigue disponible?`);
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    
    window.open(url, '_blank');
}