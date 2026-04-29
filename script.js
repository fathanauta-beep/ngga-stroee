let selectedProduct = "";
let whatsappNumber = "628970237556"; // GANTI NOMOR WA KAMU DI SINI

function showDetail(title, desc, priceSharing, pricePrivate) {
    selectedProduct = title;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = desc;
    document.getElementById('priceSharing').innerText = priceSharing;
    document.getElementById('pricePrivate').innerText = pricePrivate;
    
    document.getElementById('step1').style.display = "block";
    document.getElementById('step2').style.display = "none";
    document.getElementById('menuModal').style.display = "flex";
    document.body.style.overflow = "hidden";
}

function selectPackage(type) {
    document.getElementById('step1').style.display = "none";
    document.getElementById('step2').style.display = "block";
    document.getElementById('selectedPack').innerText = type;
    
    let message = `Halo Ngga Store, saya mau beli ${selectedProduct} paket ${type}`;
    let encodedMsg = encodeURIComponent(message);
    document.getElementById('waLink').href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
}

function backToStep1() {
    document.getElementById('step1').style.display = "block";
    document.getElementById('step2').style.display = "none";
}

function closeModal() {
    document.getElementById('menuModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('menuModal')) { closeModal(); }
}