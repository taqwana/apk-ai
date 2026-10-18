# Kantor Anggrek (aplikasi Android)

Dashboard penyiraman anggrek 8 zona: gauge sensor di atas, animasi kantor/denah di bawah.
Aplikasi dibungkus dengan Capacitor, jadi isinya sama dengan www/index.html.

## Cara A: build APK tanpa Android Studio (GitHub Actions)
1. Buat repositori baru di GitHub, lalu unggah seluruh isi folder ini (termasuk folder .github).
2. Buka tab Actions, pilih "Build APK", klik Run workflow.
3. Setelah selesai (sekitar 5 menit), unduh artifact "kantor-anggrek-apk" berisi app-debug.apk.
4. Kirim APK ke HP, buka, dan izinkan "install dari sumber tidak dikenal".

## Cara B: build di komputer (Android Studio + Node.js 18 atau lebih baru)
    npm install
    npx cap add android
    npx cap sync android
    npx cap open android
Di Android Studio: Build > Build APK(s). Hasilnya ada di android/app/build/outputs/apk/debug/.

## Menyambungkan ke sistem penyiraman
- Buka aplikasi, pilih sumber data "MQTT", isi alamat broker WebSocket, lalu Hubungkan.
- Broker publik/cloud: wss://alamat-broker:8884/mqtt
- Broker di jaringan lokal (Mosquitto): ws://192.168.x.x:9001 (HP dan broker harus satu jaringan, listener WebSocket harus aktif).
- Format topik ada di panel "Format topik MQTT" di dalam aplikasi.

## Mengubah tampilan atau gerak karakter
Edit www/index.html (bagian CONFIG, POS, AKSI), lalu build ulang.
Ikon aplikasi masih bawaan Capacitor; ganti lewat folder android/app/src/main/res.
