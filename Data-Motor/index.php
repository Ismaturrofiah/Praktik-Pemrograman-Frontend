<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>UTS Frontend</title>
</head>

<body>
    <div class="container">
        <br>
        <br>
        <div id='tabel'>
            <table border="1" class="table">
                <thead>
                    <tr>
                        <th><input id="cariid" class="cari" placeholder="Cari id motor"></th>
                        <th><input id="carinama" class="cari" placeholder="Cari nama motor"></th>
                        <th><input id="cariharga" class="cari" placeholder="Cari harga motor"></th>
                        <th><input id="caritahun" class="cari" placeholder="Cari tahun"></th>
                    </tr>
                    <tr>
                        <th>Id Motor</th>
                        <th>Nama Motor</th>
                        <th>Harga Motor</th>
                        <th>Tahun</th>
                    </tr>
                </thead>            

                <tbody>
                    <?php
                        $koneksi = mysqli_connect("localhost","root","","frontend");
                        if (mysqli_connect_errno()) {
                            echo "Koneksi database gagal : " . mysqli_connect_errno();}
                        $data = mysqli_query($koneksi,"select * from data_motor");
                        while($id = mysqli_fetch_array($data)) {
                            ?>
                            <tr>
                                <td> <?php echo $id['id_motor']; ?> </td>
                                <td> <?php echo $id['nama_motor']; ?> </td>
                                <td> <?php echo $id['harga']; ?> </td>
                                <td> <?php echo $id['tahun']; ?> </td>   
                            </tr>
                        <?php } ?>
                </tbody>
            </table>
        </div>
        <br>
        <br>
        <form action="" method="post">
            <select class="form-select" id="select" name="select">
                <?php 
                $koneksi = mysqli_connect("localhost", "root", "", "frontend");
                        
                if (mysqli_connect_errno()) {
                    echo "Koneksi database gagal : " . mysqli_connect_error();}
                                                
                $data = mysqli_query($koneksi, "SELECT * FROM data_motor");
                while($n = mysqli_fetch_array($data))
                { ?>
                    <option value="<?= $n['nama_motor']; ?>"> <?= $n['nama_motor']; ?> </option>;
                <?php } ?>
            </select>
            <br>
            <button class="btn btn-primary" id="tambah" value="submit" onclick="sendData()">Tambah</button>
        </form>
        <br>
        <div id="tabel2">
            <table border="2" class="table">
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
                    $data = mysqli_query($koneksi, "SELECT * FROM hitung_harga_motor");
                    while ($hasil = mysqli_fetch_array($data)) {
                        $patok = $hasil['nama_motor'];
                    ?>
                        <tr>
                            <td><?= $hasil['nama_motor']; ?></td>
                            <td><?= $hasil['harga_motor']; ?></td>
                            <td><input type="number" min="1" class="form-control" name="jumlah" id="jumlah<?= $patok; ?>" onkeyup='kolom("<?= $patok; ?>")'></td>
                            <td><?= $hasil['total']; ?></td>
                        </tr>
                    <?php
                    }
                    ?>
            </table>
        </div>
        <br>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-success" id="hitung">Hitung Harga</button>
            </div>
            <div class="col">
            <button type="button" class="btn btn-danger" id="hapus">Hapus Transaksi</button>
            </div>
            <div class="col"></div>
            <div class="col" id="totalsemua"></div>
        </div>

        <script src="script.js"></script>
    </div>
</body>

</html>
