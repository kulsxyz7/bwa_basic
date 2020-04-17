// const cart_items = document.getElementById('cart');

// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("iPhone 11", "Gadget");
// cart_items.innerHTML = `Product: ${getProduct.name} Category: ${getProduct.category}`;


// Ambil Element
const data = document.getElementById('data');

// ES6

class Siswa {
    constructor (username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.nama_kelas);
    }
}

// let tambahSiswa = new Siswa('aingGanteng', '23asd', 'Web Design');
// tambahSiswa.gabung();

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }
    gabungPaket() {
        console.log('Hi', this.username + ' telah langganan paket ' + this.paket);
    }
}

let tambahLangganan = new Langganan('bwastudiox', 'Premium');
tambahLangganan.gabungPaket();