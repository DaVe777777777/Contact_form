document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactLink').addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});


var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

function handleSubmit(event) {
    event.preventDefault();


    const isFormValid = true;

    if (isFormValid) {

        Swal.fire({
            icon: 'success',
            title: 'Message Successfully Sent!',
            showConfirmButton: false,
            timer: 1500
        });


        document.getElementById('contactForm').reset();
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', handleSubmit);
});