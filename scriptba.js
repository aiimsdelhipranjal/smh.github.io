document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // You can add code here to handle the form submission
        // and send the data to your backend for processing
        // Example: sendFormDataToBackend(formData);
    });
});
