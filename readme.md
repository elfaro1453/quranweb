# Quran Web

Aplikasi Quran Web ini adalah hasil belajar kelas [Belajar Fundamental Front-End Web Development](https://www.dicoding.com/academies/163).

Persyaratan submisi yang harus dipenuhi adalah :

  1. Menggunakan sintaks ES6
  2. [Menerapkan Web Component](../tree/master/src/scripts/components)
  3. [Menggunakan Node Package Manager](../blob/master/package.json)
  4. Menerapkan Webpack
  5. [Asynchronous JavaScript Request](../blob/master/src/views/index.js)

## Cara Menjalankan Project ini di Local Development

Project ini mendukung package manager `npm` maupun `yarn`, sebaiknya gunakan salah satu saja.

  1. Pastikan anda menggunakan [NodeJs terbaru](https://nodejs.org/en/download/)
  2. Download Project ini, bisa menggunakan `git clone` atau unduh zip (kemudian extract zipnya)
  3. Buka terminal / cmd di dalam folder project, jalankan `npm install` atau `yarn`
  4. Update dependensi dengan perintah `npm run ncu-npm` atau `yarn run ncu-yarn`
  5. Jalankan aplikasi dengan perintah `npm run start-dev` atau `yarn run start-dev`
  6. Buka `http://localhost:8080/` di browser

## Web API Yang Digunakan

Web API Quran berasal dari [QuranApi.idn.sch.id](https://quranapi.idn.sch.id/), namun dikarenakan CORS saya atur same-site (hanya diperbolehkan di top domain yang sama), maka project ini hanya bisa dijalankan di local development, versi online project ini bisa dikunjungi di [fahru.idn.sch.id](https://fahru.idn.sch.id/)

## Apa yang Bisa Dipelajari

Selain kriteria submisi diatas, dari project ini bisa dipelajari tentang :

### Solusi CORS Error

CORS blocking pada Web API mengakibatkan data json tidak bisa difetch, hal ini bisa diatasi dengan menggunakan [devServer.proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy), pengaturan devServer.proxy terdapat di [webpack.dev.js](../blob/master/webpack.dev.js).

### Penamaan File Output Webpack Module

[Gunakan contenthash untuk penamaan file untuk cache yang lebih baik di production](https://github.com/webpack/webpack.js.org/issues/2096).

### TailWindCSS

Optimisasi [TailWindCSS](https://tailwindcss.com/) seperti purge bermanfaat untuk mengurangi ukuran file css, ditambah dengan optimasi menggunakan kombinasi plugin MiniCssExtractPlugin dan CssMinimizerPlugin menghasilkan output file css kecil.

### Optimasi Kompresi File

File output dapat secara otomatis dikompresi menggunakan CompressionPlugin, plugin ini akan menghasilkan 2 file baru, yang telah dikompresi dengan algoritma Gzip dan yang telah dikompresi Brotli.

### Integrasi ESLint

Integrasi Eslint memudahkan developer untuk menulis kode sesuai dengan format aturan yang direkomendasikan oleh komunitas.

Baiklah mungkin itu saja yang bisa saya jelaskan pada project ini, mohon maaf jika ada kekurangan. Semoga bermanfaat !
