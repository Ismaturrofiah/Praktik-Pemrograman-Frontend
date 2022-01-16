<?php
    $koneksi = mysqli_connect("localhost","root","","frontend");
    if (mysqli_connect_errno()) {
        echo "Koneksi database gagal : " . mysqli_connect_errno();}
    $total = mysqli_query($koneksi, "SELECT SUM(total) FROM hitung_harga_motor");
    while($fetch = mysqli_fetch_array($total)){
    $totalsemua = $fetch['SUM(total)'];
?>
    <h5>Total semua pembelian</h5>
    <h5><?="Rp " . number_format($totalsemua,2,',','.');?></h5>
<?php
}
?>