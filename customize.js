function changeColor(hue) {
      const images = document.querySelectorAll('.customizableImage');
      images.forEach(image => {
        image.style.filter = 'saturate(100%) brightness(100%) hue-rotate(' + hue + 'deg)';
      });
    }

    document.addEventListener('DOMContentLoaded', function () {
      const success = document.getElementById('success');
      const modalOverlay = document.getElementById('modalOverlay');

      success.addEventListener('click', function (event) {
        event.preventDefault();
        openModal();
      });
    });

    function openModal() {
      const modalOverlay = document.getElementById('modalOverlay');
      modalOverlay.style.display = 'flex';
    }

    function closeModal() {
      const modalOverlay = document.getElementById('modalOverlay');
      modalOverlay.style.display = 'none';
    }

    function redirectToPage() {
      const success = document.getElementById('success');
      window.location.href = success.href;
    }