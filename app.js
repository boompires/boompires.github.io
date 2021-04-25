brainImg = document.getElementById('brainImg');
let rotation = 0;

function rotateImg() {
  rotation += 90;
  if (rotation >= 360) {
    rotation = 0;
  }
  console.log(rotation);
  brainImg.style.transform = `rotate(${rotation}deg)`;
}
