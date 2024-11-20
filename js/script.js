document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const ilustracionesBtn = document.getElementById('ilustraciones-btn');
    const videosBtn = document.getElementById('videos-btn');

    const ilustraciones = [
        { src: 'imagen1.jpg', alt: 'Ilustración 1' },
        { src: 'imagen2.jpg', alt: 'Ilustración 2' },
        { src: 'imagen3.jpg', alt: 'Ilustración 3' }
    ];

    const videos = [
        { src: 'video1.mp4', title: 'Video Proyecto 1' },
        { src: 'video2.mp4', title: 'Video Proyecto 2' }
    ];

    function renderGallery(items, isVideo = false) {
        gallery.innerHTML = '';
        items.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            if (isVideo) {
                const videoElement = document.createElement('video');
                videoElement.src = item.src;
                videoElement.controls = true;
                videoElement.alt = item.title;
                galleryItem.appendChild(videoElement);
            } else {
                const imgElement = document.createElement('img');
                imgElement.src = item.src;
                imgElement.alt = item.alt;
                galleryItem.appendChild(imgElement);
            }

            gallery.appendChild(galleryItem);
        });
    }

    ilustracionesBtn.addEventListener('click', () => {
        renderGallery(ilustraciones);
        ilustracionesBtn.classList.add('active');
        videosBtn.classList.remove('active');
    });

    videosBtn.addEventListener('click', () => {
        renderGallery(videos, true);
        videosBtn.classList.add('active');
        ilustracionesBtn.classList.remove('active');
    });

    // Iniciar con ilustraciones
    renderGallery(ilustraciones);
});
