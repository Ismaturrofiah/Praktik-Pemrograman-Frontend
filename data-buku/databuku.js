var dataKode = [];
var dataJudul = [];
var dataPenulis = [];
var dataTahun = [];
var action = [];
var nomor = 0;
var pilihan = null;

function tabel() {
    var text = document.getElementById("listBuku");

    text.innerHTML = "<tr><th>Kode</th> <th>Judul</th> <th>Penulis</th> <th>Tahun Terbit</th> <th>Keterangan</th></tr>"

    for (let i = 0; i < dataKode.length; i++) {
        var Edit = '<button type="button" class="btn btn btn-outline-primary" onclick="edit(' + i + ')" value="edit" name="edit">Edit</button>';
        var Hapus = '<button type=button" class="btn btn btn-outline-danger" onclick="hapus(' + i + ')" value="hapus" name="hapus">Hapus</button>';
        nomor = i + 1;
        text.innerHTML += "<tr><td>" + dataKode[i] + "</td> <td>" + dataJudul[i] + "</td> <td>" + dataPenulis[i] + "</td> <td>" + dataTahun[i] + "</td> <td>" + Edit + " " + Hapus + "</td></tr>";
    }
}

function tambah() {
    var kodeBuku = document.querySelector('input[name=kode]');
    dataKode.push(kodeBuku.value);
    tabel();
    kodeBuku.value = "";

    var judulBuku = document.querySelector('input[name=judul]');
    dataJudul.push(judulBuku.value);
    tabel();
    judulBuku.value = "";

    var penulisBuku = document.querySelector('input[name=penulis]');
    dataPenulis.push(penulisBuku.value);
    tabel();
    penulisBuku.value = "";

    var tahunTerbit = document.querySelector('input[name=tahun]');
    dataTahun.push(tahunTerbit.value);
    tabel();
    tahunTerbit.value = "";
}

function hapus(id) {
    dataKode.splice(id, 1);
    tabel();

    dataJudul.splice(id, 1);
    tabel();

    dataPenulis.splice(id, 1);
    tabel();

    dataTahun.splice(id, 1);
    tabel();
}

function edit(id) {
    var dataKode2 = prompt("Edit", dataKode[id]);
    dataKode[id] = dataKode2;
    tabel();

    var dataJudul2 = prompt("Edit", dataJudul[id]);
    dataJudul[id] = dataJudul2;
    tabel();

    var dataPenulis2 = prompt("Edit", dataPenulis[id]);
    dataPenulis[id] = dataPenulis2;
    tabel();

    var dataTahun2 = prompt("Edit", dataTahun[id]);
    dataTahun[id] = dataTahun2;
    tabel();
}

tabel();