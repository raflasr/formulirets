document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let errorMessages = '';
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validasi nama
    if (name === '') {
        errorMessages += 'Nama harus diisi.<br>';
    }

    // Validasi email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        errorMessages += 'Email harus diisi.<br>';
    } else if (!emailPattern.test(email)) {
        errorMessages += 'Format email tidak valid.<br>';
    }

    // Validasi nomor telepon
    if (phone === '') {
        errorMessages += 'Nomor telepon harus diisi.<br>';
    }

    // Validasi pesan
    if (message === '') {
        errorMessages += 'Pesan harus diisi.<br>';
    }

    // Tampilkan error atau kirim data
    const errorContainer = document.getElementById('errorMessages');
    if (errorMessages) {
        errorContainer.innerHTML = errorMessages;
    } else {
        errorContainer.innerHTML = '';
        alert('Formulir berhasil dikirim!');
        // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
    }
});
