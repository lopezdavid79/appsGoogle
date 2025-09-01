
document.addEventListener("DOMContentLoaded", function () {
    const videoModals = document.querySelectorAll('.modal');
    
    videoModals.forEach(modal => {
        const iframe = modal.querySelector('iframe');
        
        if (iframe) {
            const originalSrc = iframe.getAttribute('src');
            
            // Cuando el modal se oculta, detiene el video
            modal.addEventListener('hidden.bs.modal', function () {
                iframe.setAttribute('src', ''); 
            });

            // Cuando el modal se muestra, restaura el video
            modal.addEventListener('shown.bs.modal', function () {
                iframe.setAttribute('src', originalSrc);
            });
        }
    });
});