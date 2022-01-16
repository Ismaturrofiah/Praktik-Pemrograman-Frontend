alert("Ayo hitung wetonmu!");

var Kode;

var tanggal = prompt("Tanggal berapa kamu lahir?", 0)
var tanggal_ = parseInt(tanggal)
var bulan = prompt("Pada bulan ke berapa kamu lahir?").toLocaleUpperCase()
var tahun = prompt("Tahun berapa kamu lahir?")
var tahun_ = parseInt(tahun)

if (tahun % 4 == 0) {
    if (bulan == "JANUARI") {
        Kode = tanggal_
    }
    if (bulan == "FEBRUARI") {
        Kode = 31 + tanggal_
    }
    if (bulan == "MARET") {
        Kode = 31 + 29 + tanggal_
    }
    if (bulan == "APRIL") {
        Kode = 31 + 29 + 31 + tanggal_
    }
    if (bulan == "MEI") {
        Kode = 31 + 29 + 31 + 30 + tanggal_
    }
    if (bulan == "JUNI") {
        Kode = 31 + 29 + 31 + 30 + 31 + tanggal_
    }
    if (bulan == "JULI") {
        Kode = 31 + 29 + 31 + 30 + 31 + 30 + tanggal_
    }
    if (bulan == "AGUSTUS") {
        Kode = 31 + 29 + 31 + 30 + 31 + 30 + 31 + tanggal_
    }
    if (bulan == "SEPTEMBER") {
        Kode = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + tanggal_
    }
    if (bulan == "OKTOBER") {
        Kode = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + tanggal_
    }
    if (bulan == "NOVEMBER") {
        Kode = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + tanggal_
    }
    if (bulan == "DESEMBER") {
        Kode = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + tanggal_
    }
} else if (bulan == "JANUARI") {
    Kode = tanggal_
} else if (bulan == "FEBRUARI") {
    Kode = 31 + tanggal_
} else if (bulan == "MARET") {
    Kode = 31 + 28 + tanggal_
} else if (bulan == "APRIL") {
    Kode = 31 + 28 + 31 + tanggal_
} else if (bulan == "MEI") {
    Kode = 31 + 28 + 31 + 30 + tanggal_
} else if (bulan == "JUNI") {
    Kode = 31 + 28 + 31 + 30 + 31 + tanggal_
} else if (bulan == "JULI") {
    Kode = 31 + 28 + 31 + 30 + 31 + 30 + tanggal_
} else if (bulan == "AGUSTUS") {
    Kode = 31 + 28 + 31 + 30 + 31 + 30 + 31 + tanggal_
} else if (bulan == "SEPTEMBER") {
    Kode = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + tanggal_
} else if (bulan == "OKTOBER") {
    Kode = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + tanggal_
} else if (bulan == "NOVEMBER") {
    Kode = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + tanggal_
} else if (bulan == "DESEMBER") {
    Kode = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + tanggal_
}

var hitungtahun = (tahun_ - 1) / 4
var flor = Math.floor(hitungtahun)
var round = Math.round(hitungtahun)
var hitunghari = (tahun_ + Kode + flor) % 7
var pembulatanhari = Math.floor(hitunghari)

var hari = "Minggu"

switch (pembulatanhari) {
    case 0:
        hari = "Jumat";
        break;
    case 1:
        hari = "Sabtu";
        break;
    case 2:
        hari = "Minggu";
        break;
    case 3:
        hari = "Senin";
        break;
    case 4:
        hari = "Selasa";
        break;
    case 5:
        hari = "Rabu";
        break;
    case 6:
        hari = "Kamis";
        break;
}

var pasaran
var neptu

var harijawa = tahun_ + Kode + flor
var pembulatanjawa = Math.floor(harijawa)
var hitungtanggal = tanggal_ - 1
var jml = pembulatanjawa + hitungtanggal
var akhir = jml % 5

switch (akhir) {
    case 0:
        pasaran = "Legi";
        neptu = 5;
        break;
    case 1:
        pasaran = "Pahing";
        neptu = 9
        break;
    case 2:
        pasaran = "Pon";
        neptu = 7
        break;
    case 3:
        pasaran = "Wage";
        neptu = 4
        break;
    case 4:
        pasaran = "Kliwon";
        neptu = 8
        break;

}

document.writeln("Weton dari " + tanggal_ + " " + bulan + " " + tahun_ + " : " + hari + " " + pasaran);
