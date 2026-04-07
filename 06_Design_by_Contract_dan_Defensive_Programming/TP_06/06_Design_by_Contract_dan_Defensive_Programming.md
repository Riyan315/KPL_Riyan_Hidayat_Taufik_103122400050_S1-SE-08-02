# Tugas Mandiri 06:Design_by_Contract_dan_Defensive_Programming
---
Nama : Riyan Hidayat Taufik
Kelas : SE 08-02
Nim : 103122400050

---
## Soal
Menurutmu, kapankah kita saatnya menggunakan asersi atau eksepsi untuk fungsi seperti ini di atas? Apakah kita harus sepenuhnya asersi, atau sepenuhnya eksepsi? Lakukan riset dan berikan jawabannya dalam bentuk esai minimal 300 kata.

---
## Deskripsi
Dalam pengembangan perangkat lunak, khususnya pada fungsi sederhana seperti divide(a, b), penggunaan asersi dan eksepsi sering jadi pertanyaan penting. Sebenarnya, kita tidak harus memilih salah satu secara mutlak, karena keduanya punya fungsi yang berbeda dan bisa saling melengkapi.

Asersi biasanya digunakan untuk memastikan bahwa kondisi internal program berjalan sesuai dengan yang diharapkan. Artinya, asersi ini lebih ke “penjaga” logika dari sisi programmer. Kalau sampai asersi gagal, itu menandakan ada bug dalam kode yang kita buat. Karena itu, asersi sering digunakan saat proses development untuk membantu debugging dan memastikan alur program sudah benar.

Di sisi lain, eksepsi digunakan untuk menangani kondisi yang memang bisa terjadi saat program dijalankan, terutama yang berasal dari luar sistem. Contohnya seperti input dari user yang tidak valid atau pembagian dengan nol. Dengan adanya eksepsi, program tidak langsung berhenti, tapi bisa menangani error tersebut dengan lebih baik, misalnya dengan menampilkan pesan error ke user.

Kalau dikaitkan dengan fungsi divide(a, b), pemilihan antara asersi atau eksepsi tergantung dari konteks penggunaannya. Jika fungsi tersebut hanya digunakan secara internal dan inputnya sudah terjamin benar, maka asersi bisa digunakan sebagai pengaman tambahan. Namun, jika fungsi tersebut berhubungan dengan input dari user, maka eksepsi lebih cocok karena kondisi error memang mungkin terjadi.

Jadi, kesimpulannya kita tidak perlu memilih salah satu saja. Justru, penggunaan asersi dan eksepsi secara bersamaan akan membuat program lebih aman, mudah dipahami, dan juga lebih tahan terhadap error.