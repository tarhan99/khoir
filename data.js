const nama = "dea afrizal";
let usia = 50;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;
    
    if (usia > 10 && usia < 18) {
        generasi = "anda dewasa";
    }
    else if (usia > 18 && usia < 30) {
        generasi = "anda remaja";
    }
    else if (usia > 30) {
        generasi = "anda tua";
    }
    else if (usia > 2 && usia < 10) {
        generasi = "anda anak-anak";
    }
    else {
        generasi = "kamu bayi";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);
generateBiodata();