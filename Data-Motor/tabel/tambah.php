<!DOCTYPE html>
<?php
    $data = $_POST['select'];
    $koneksi = mysqli_connect("localhost","root","","frontend");
    if (mysqli_connect_errno()) {
        echo "Koneksi database gagal : " . mysqli_connect_errno();}
    $cari_harga = mysqli_query($koneksi, "SELECT * FROM `data_motor` WHERE nama_motor = '".$data."'");
    $pecah = mysqli_fetch_array($cari_harga);
    $harga = $pecah['harga'];
    $insert = mysqli_query($koneksi, "INSERT INTO `hitung_harga_motor` (`nama_motor`, `harga_motor`) VALUES ('".$data."', '".$harga."')");
?>