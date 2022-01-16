<?php
    $koneksi = mysqli_connect("localhost","root","","frontend");
    if (mysqli_connect_errno()) {
        echo "Koneksi database gagal : " . mysqli_connect_errno();}
    $hapus = mysqli_query($koneksi, "DELETE FROM hitung_harga_motor");
?>