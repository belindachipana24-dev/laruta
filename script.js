function consultarMovilidad(sentidoDeseado) {
    const pantalla = document.getElementById('pantallaApp');
    pantalla.innerHTML = `<p style="color: #a8e063;">Rastreando unidades en sentido ${sentidoDeseado}...</p>`;
    
    setTimeout(() => {
        const minutos = Math.floor(Math.random() * 7) + 2; 
        const placa = "V" + Math.floor(Math.random() * 899 + 100);
        pantalla.innerHTML = `
            <p style="color: var(--verde-claro); font-weight: bold; font-size: 1.2rem;">¡Unidad Encontrada!</p>
            <p>Placa: <strong>${placa}</strong> | Sentido: <strong>${sentidoDeseado}</strong></p>
            <p style="margin-top: 0.5rem; font-size: 1.1rem;">Llega a tu paradero en: <strong style="color: #fff; background: #134e13; padding: 2px 8px; border-radius: 6px;">${minutos} min</strong></p>
        `;
    }, 900);
}
