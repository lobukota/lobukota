document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Kode Menu Mobile (Yang lama) ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-menu');

    if(mobileMenu){
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // --- 2. Kode Animasi Scroll (Baru) ---
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150; // Jarak dari bawah layar sebelum animasi mulai

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                // Opsional: Hapus 'else' ini jika ingin animasi hanya terjadi sekali
                // reveal.classList.remove('active'); 
            }
        });
    };

    // Jalankan fungsi saat di-scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Pancing fungsi sekali saat loading agar elemen paling atas langsung muncul
    revealOnScroll();
});