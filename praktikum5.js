//mengubah Track
function updateTrack(){
    const track = prompt('Masukkan Track Baru: ');
    TRK.textContent = track;
};
const TRK = document.querySelector('.track');
TRK.addEventListener('click', updateTrack);