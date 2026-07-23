document.addEventListener('DOMContentLoaded', () => {
    // Configuración global de Vega para la infografía móvil
    const vegaOptions = {
        renderer: 'svg',
        actions: false, // Forzar ocultar acciones
        width: "container" // Responsivo al ancho de la tarjeta
    };

    // Montar el Mapa de Calor (Vis 1)
    vegaEmbed('#vis1', 'data/heatmap_standalone.json', vegaOptions)
        .then(result => console.log('Heatmap cargado exitosamente.'))
        .catch(console.error);

    // Montar el Gráfico de Barras (Vis 2)
    vegaEmbed('#vis2', 'data/barras_standalone.json', vegaOptions)
        .then(result => console.log('Bar Chart cargado exitosamente.'))
        .catch(console.error);

    // Montar el Bump Chart (Vis 3)
    vegaEmbed('#vis3', 'data/bump_chart_standalone.json', vegaOptions)
        .then(result => console.log('Bump Chart cargado exitosamente.'))
        .catch(console.error);
});
