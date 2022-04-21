document.addEventListener('DOMContentLoaded', () => {
    const imgGaleria = document.querySelectorAll('.imagenes');
    M.Materialbox.init(imgGaleria, {
        inDuraton: 500,
        outDuration:500,
    });
});