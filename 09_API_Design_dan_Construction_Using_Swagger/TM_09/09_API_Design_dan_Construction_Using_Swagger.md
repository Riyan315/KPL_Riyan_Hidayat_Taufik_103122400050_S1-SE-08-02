# Tugas Mandiri 09 : API_Design_dan_Construction_Using_Swagger
---
Nama : Riyan Hidayat Taufik
Kelas : SE 08-02
Nim : 103122400050

---
## Soal 
Tugasmu adalah membuat API yang terdiri dari satu endpoint saja, yaitu POST /. Ketika kita melakkukan POST, formatnya adalah seperti di bawah ini.

---
## Kode Sumber
saya menulis kode saya ada di [index.js](index.js)
---
## Output
hasil output dari pengetesan sebagai berikut ![ouput.png
](output.png)
---
## Deskripsi
API ini merupakan layanan sederhana berbasis Node.js yang digunakan untuk permainan tebak angka acak. API memiliki satu endpoint yaitu POST / yang menerima input berupa nama dan angka tebakan dalam format JSON. Sistem akan menghasilkan angka tetap berdasarkan nama pengguna sehingga setiap nama selalu memiliki angka yang konsisten pada setiap request. API kemudian membandingkan angka tebakan dengan angka yang dihasilkan dan memberikan respons apakah tebakan benar, terlalu tinggi, atau terlalu rendah. Implementasi dilakukan tanpa menggunakan pustaka tambahan, hanya memanfaatkan modul bawaan Node.js dan logika perhitungan dari nama pengguna.

