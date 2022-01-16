<?php
    $koneksi = mysqli_connect("localhost","root","","frontend");
    if (mysqli_connect_errno()) {
        echo "Koneksi database gagal : " . mysqli_connect_errno();}
    $jumlah = $_POST['jumlah'];
    $nama = $_POST['nama_motor'];
    $data = mysqli_query($koneksi, "SELECT * FROM hitung_harga_motor WHERE nama_motor = '" . $nama . "'");
    $hasil = mysqli_fetch_array($data);
    $total_harga = $hasil['harga_motor'] * $jumlah;
    $tambahlist = mysqli_query($koneksi, "UPDATE `hitung_harga_motor` SET `total` = '" . $total_harga . "', `jumlah` = '" . $jumlah . "' WHERE `nama_motor` = '" . $nama . "'");
    if ($tambahlist) { ?>
        <table border="1" class="table">
            <tr>
                <th>Nama Motor</th>
                <th>Harga Motor</th>
                <th>Jumlah</th>
                <th>Total</th>
            </tr>
            <?php
            $koneksi = mysqli_connect("localhost","root","","frontend");
            if (mysqli_connect_errno()) {
                echo "Koneksi database gagal : " . mysqli_connect_errno();}
            $no = 1;
            $data = mysqli_query($koneksi, "SELECT * FROM hitung_harga_motor");
            while ($hasil = mysqli_fetch_array($data)) {
                $patok = $hasil['nama_motor'];
            ?>
                <tr>
                    <td><?= $hasil['nama_motor']; ?></td>
                    <td><?= $hasil['harga_motor']; ?></td>
                    <input id="<?= $no++; ?>" type="hidden" value="<?= $jumlah; ?>">
                    <td><input type="number" min="1" class="form-control" name="jumlah" id="jumlah<?= $patok; ?>" value="<?= $hasil['jumlah']; ?>" onkeyup='kolom("<?= $patok; ?>")'></td>
                    <td><?= $hasil['total']; ?></td>
                </tr>
            <?php
            }
            ?>
        </table>
<?php
    }
?>