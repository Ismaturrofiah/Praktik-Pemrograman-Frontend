var jumlah = document.getElementById('jumlah');
var hitung = document.getElementById('hitung');
var hapus = document.getElementById('hapus');
var totalsemua = document.getElementById('totalsemua');

function performReset() {
    document.getElementById("Cariid").value = "";
    document.getElementById("Carinama").value = "";
    document.getElementById("Cariharga").value = "";
    document.getElementById("Caritahun").value = "";
    cariTabel(event, 0);
}

function cariTabel(event, index) {
    var cari = event.target.value.toUpperCase();
    var rows = document.querySelector("#tabel tbody").rows;
    for (var i = 0; i < rows.length; i++) {
        var id = rows[i].cells[0].textContent.toUpperCase();
        var nama = rows[i].cells[1].textContent.toUpperCase();
        var harga = rows[i].cells[2].textContent.toUpperCase();
        var tahun = rows[i].cells[3].textContent.toUpperCase();
        if ((id.indexOf(cari) > -1 && index == 0) || (nama.indexOf(cari) > -1 && index == 1) || (harga.indexOf(cari) > -1 && index == 2) || (tahun.indexOf(cari) > -1 && index == 3)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

document.querySelectorAll('input.cari').forEach(function(el, idx) {
    el.addEventListener('keyup', function(e) {
        cariTabel(e, idx);
    }, false);
});

function sendData() {
    var select = document.getElementById("select").value;
    var httpr = new XMLHttpRequest();
    httpr.open("POST", "tabel/tambah.php", true);
    httpr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpr.onreadystatechange = function() {
        if (httpr.readyState == 4 && httpr.status == 200) {}
    }
    httpr.send("select=" + select);
}

function kolom(kolom) {
    var tabel2 = document.getElementById('tabel2');
    console.log(kolom);
    var jumlah = document.getElementById("jumlah" + kolom).value;
    console.log(jumlah);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "tabel/jumlah.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            tabel2.innerHTML = xhr.responseText;
        }
    }
    xhr.send("nama_motor=" + kolom + "&jumlah=" + jumlah);
}

hitung.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            totalsemua.innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'tabel/totalsemua.php', true);
    xhr.send();
});

hapus.addEventListener('click', function() {
    var tanya = confirm("Hapus Transaksi?");
    if (tanya == true) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                window.location = "../TugasUTS_V3420042/index.php";
            }
        }
        xhr.open('GET', 'tabel/hapus.php', true);
        xhr.send();
    }
});