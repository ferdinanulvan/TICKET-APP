alert("Aplikasi Ticket!");

const MinUmur = 13;

const Nama = prompt(`Masukkan Nama Anda!`);
const Umur = prompt(`Masukkan Umur Anda!`);

if (Umur > MinUmur) {
    const Studio = prompt(`Pilih Studio (A,B,C) :`).toUpperCase();
    if (Studio == "A" || Studio == "B" || Studio == "C"){
        alert(`Ticket ${Nama}, Studio ${Studio}, Umur ${Umur}`);
    }else{
        alert(`Pilihan Studio Tidak Valid!!`);
    }
}else if(Umur <= MinUmur && Umur > 0){
    alert(`Maaf, Anda tidak boleh masuk Studio \n karena umur anda masih dibawah ${MinUmur} tahun!`)
}else{
    alert(`Umur tidak valid!!`)
}
