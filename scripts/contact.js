document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const statusDiv = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            statusDiv.textContent = '';
            statusDiv.style.color = '#333';

            const scriptURL = 'https://script.google.com/a/macros/ucausa.org/s/AKfycbzL9Nk2En1GPV4GpsqY3NCl7ZSxjeBfoaCRtjtGQRdyAkwwbK6VtR6F6rEkeKwe52hZ/exec';
            const formData = new FormData(form);

            fetch(scriptURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            })
            .then(() => {
                statusDiv.textContent = 'Thank you! Your feedback has been submitted.';
                statusDiv.style.color = 'green';
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                statusDiv.textContent = 'Error submitting feedback. Please try again.';
                statusDiv.style.color = 'red';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
        });
    }
});