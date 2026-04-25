# Tugas Mandiri 08 : Runtime_Configuration_dan_Internationalization
---
Nama : Riyan Hidayat Taufik
Kelas : SE 08-02
Nim : 103122400050

---
## Soal 
Pada tugas ini kamu akan membuat program yang menampilkan kurs rupiah (IDR) terhadap renminbi luar Tiongkok (CNH) dan euro (EUR). Gunakan link API ini untuk mengambil data.

Tantangan

Simpanlah URL API ke dalam .env sebagai BASE_API

Gunakan Intl untuk memformat nilai mata uang dan waktu kamu mengambil data kurs.

Hapus pesan promosi dotenv
Ujilah dengan Rp25000, Rp50000, dan Rp100000.



---
## Kode Sumber
saya menulis kode saya ada di [index.js](index.js)
---
## Output
hasil output dari pengetesan sebagai berikut ![output.png
](output.png)

---
## Deskripsi
Penugasan ini bertujuan untuk mengimplementasikan runtime configuration dan internationalization (i18n) dalam aplikasi JavaScript berbasis Node.js. Program mengambil data nilai tukar mata uang secara real-time dari API eksternal yang disimpan dalam file .env untuk menjaga fleksibilitas konfigurasi.

Aplikasi kemudian mengonversi nilai Rupiah (IDR) ke mata uang asing (CNH dan EUR), serta menampilkan hasilnya dengan format yang sesuai standar lokal menggunakan Intl.NumberFormat dan toLocaleDateString. Selain itu, digunakan .gitignore untuk menghindari penyertaan file sensitif dan tidak diperlukan seperti node_modules dan .env ke dalam repository.

