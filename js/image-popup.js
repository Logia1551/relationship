// Tambahkan HTML modal
document.body.innerHTML += `
<div id="imageModal" class="modal">
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <img class="modal-image" id="modalImage">
        <div class="modal-details">
            <h3 id="modalTitle"></h3>
            <p id="modalDescription"></p>
            <p id="modalLocation"></p>
            <p id="modalDate"></p>
        </div>
    </div>
</div>`;

// Data gambar
const imageDetails = {
    'img/1.jpg': {
        title: 'Moment 1',
        description: 'Kenangan pertama kita di Aero X Space',
        location: 'Aero X Space',
        date: '29 November 2024'
    },
    'img/2.jpg': {
        title: 'Moment 2',
        description: 'Kenangan kedua kita di Aero X Space',
        location: 'Aero X Space',
        date: '29 November 2024'
    },
    // Lanjutkan untuk gambar 3-6 dengan format yang sama
};

// Event listeners
document.querySelectorAll('.tm-slider-img-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.querySelector('img').src;
        const details = imageDetails[imgSrc.split('/').slice(-2).join('/')];
        
        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('modalTitle').textContent = details.title;
        document.getElementById('modalDescription').textContent = details.description;
        document.getElementById('modalLocation').textContent = `Lokasi: ${details.location}`;
        document.getElementById('modalDate').textContent = `Tanggal: ${details.date}`;
        
        document.getElementById('imageModal').style.display = 'block';
    });
});

// Close modal
document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('imageModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target.className === 'modal') {
        document.getElementById('imageModal').style.display = 'none';
    }
});