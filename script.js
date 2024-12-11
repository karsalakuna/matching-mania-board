document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('start-button').addEventListener('click', function() {
        window.location.href = 'instructions.html'; // Arahkan ke halaman instruksi
    });
});

// Event listener untuk tombol "Mulai Kuis"
document.getElementById('start-quiz').addEventListener('click', function() {
    // Sembunyikan instruksi dan tombol mulai
    document.querySelector('.container h3').style.display = 'none'; // Menyembunyikan judul instruksi
    document.querySelector('.container p').style.display = 'none'; // Menyembunyikan paragraf instruksi
    document.querySelector('.container ol').style.display = 'none'; // Menyembunyikan daftar instruksi
    this.style.display = 'none'; // Menyembunyikan tombol mulai
    startCountdown(30); // Memulai countdown
});


function startCountdown(duration) {
    let timer = duration, seconds;
    const countdownElement = document.getElementById("countdown");
    countdownElement.style.display = 'block';
    
    const countdownSound = new Audio('aset/countdown.mp3');

    const interval = setInterval(function () {
        seconds = parseInt(timer % 60, 10); 

        countdownElement.textContent = seconds + " detik tersisa";

        countdownSound.play();

        if (--timer < 0) {
            clearInterval(interval);
            countdownElement.textContent = "Waktu Habis! Selamat kamu sudah menyelesaikan bagian pertama.";
            const timeUpSound = new Audio('aset/YOUWIN.mp3');
            timeUpSound.play();
            showNextGameOptions();
        }
    }, 1000);
}

function showNextGameOptions() {
    const nextGameDiv = document.getElementById("next-game")
    nextGameDiv.style.display = 'block';

    // Event listeners for the buttons
    document.getElementById('yes-button').addEventListener('click', function() {
        window.location.href = 'https://karsalakuna.github.io/matchingsmania/'; // Ganti dengan link game berikutnya
    });

    document.getElementById('no-button').addEventListener('click', function() {
        nextGameDiv.style.display = 'none'; // Sembunyikan pilihan
        // Anda bisa menambahkan tindakan lain di sini jika diperlukan
    });
}


