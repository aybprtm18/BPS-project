
document.getElementById('pengaduanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const kategori = document.getElementById('kategori').value;
    const isi = document.getElementById('isi').value;

    const row = `<tr><td>${nama}</td><td>${kategori}</td><td>${isi}</td></tr>`;
    document.getElementById('laporanBody').innerHTML += row;

    document.getElementById('pengaduanForm').reset();
});
