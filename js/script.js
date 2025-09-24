AOS.init({
  duration: 3000, // durasi animasi
  once: true, // animasi hanya sekali muncul
});

const targetEmail = "roisulhikamidn@gmail.com";

document.getElementById("sendBtn").addEventListener("click", function (e) {
  e.preventDefault(); // supaya tombol tidak reload halaman

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validasi
  if (!username || !email || !phone || !message) {
    alert("Semua field harus diisi!");
    return;
  }

  // Bangun subject & body untuk email
  const subject = `Pesan dari ${username}`;
  const body = `Nama: ${username}\nEmail: ${email}\nPhone: ${phone}\n\nPesan:\n${message}`;

  // Buka mail client
  window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});
