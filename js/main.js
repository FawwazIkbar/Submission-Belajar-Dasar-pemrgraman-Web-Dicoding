document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active"); // Tambahkan atau hapus kelas 'active'

  // Jika navLinks aktif, atur max-height
  if (navLinks.classList.contains("active")) {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px"; // Atur max-height ke tinggi konten
  } else {
    navLinks.style.maxHeight = "0"; // Kembali ke 0 saat tidak aktif
  }
});
// Menyembunyikan dropdown jika klik di luar elemen
document.addEventListener("click", function (event) {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.getElementById("hamburger");

  // Jika klik terjadi di luar hamburger dan navLinks
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove("active"); // Hapus kelas 'active'
    navLinks.style.maxHeight = "0"; // Kembalikan max-height ke 0
  }
});
