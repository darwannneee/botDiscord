# Introduction

**botDiscord** dibuat menggunakan npm DiscordJs, dibuatnya Repository ini bertujuan untuk jika ada orang yang ingin Belajar Membuat Bot Discord tidak perlu susah untuk pasang ini itu, cukup download atau Clone Repository ini dan ubah API-KEY, bot Discord anda sudah siap di jalankan.

Oiya, botDiscord ini tentu saja masih Versi awal, jadi masih jauh dari kata Full Version Bot pada umumnya, Ya tentu saja ini hanya untuk bahan pembelajaran untuk membuat Bot Discord Sederhana.

Untuk full dokumentasi kalian bisa cek langsung web DiscordJs :
Website : https://discordjs.guide/



# Tutorial 

 1. Jika kalian belum punya akun Bot Discord kalian, daftar dulu di https://discord.com/developers/applications/ buat akun Bot Discord kalian, untuk nama Bot terserah kalian, jika sudah pergi ke bagian BOT dan Add Bot, setelah di Add nanti akan muncul nama Bot anda dan Token botnya, simpan baik-baik Token Bot tersebut, Tutorial lengkap cara mendapatkan Token Bot : https://tintaresah.com/cara-mendapatkan-token-discord/#:~:text=Setelah%20Anda%20membuat%20bot%2C%20Anda,menemukan%20token%20Discord%20bot%20Anda.
 2. Clone / Download Zip Repository ini, untuk Clone / Download ada di bagian tombol Code
 3. Buka file config.js
 4. ubah Key-API 
`<?php { "token": "Paste KEY-API Discord Disini", "prefix": "!"
} ?>`
5. Jika sudah di ubah, Lanjut untuk Menambahkan bot anda ke Group Discord yg anda inginkan, Caranya ikuti di bagian langkah Inviting Your Bot  : https://discordpy.readthedocs.io/en/stable/discord.html
Note : Yang di ceklis hanya send Message saja, yang lainnya tidak perlu
6. Jika sudah tinggal Jalankan bot kalian dengan buka Terminal di VisualStudio kalian dan ketikkan `node index.js` nanti akan muncul `Logged in NamaDiscordAnda` jika sudah begitu berarti akun Bot kalain siap digunakan.
7. Ketikan ping di Grup dan bot akan Membalas dengan Pong!
8. Untuk ubah Command kalian bisa Cek `index.js`

**Bot Discord Berhasil di Buat**, jika ada kesalahan bisa Chat Pembuat
**Note**: Untuk sekarang hanya bisa Command ping di bales Pong untuk Dokumentasi lengkapnya kalian bisa kunjungi website DiscordJs, atau Tunggu Next Update dari Repository ini
