const video = document.getElementById("video");

Promise.all([
 faceapi.nets.tinyFaceDetector.loadFromUri(
 "https://cdn.jsdelivr.net/npm/face-api.js/weights"
 )
])
.then(startCamera);


function startCamera(){

navigator.mediaDevices.getUserMedia({
 video:{facingMode:"user"}
})
.then(stream=>{

video.srcObject = stream;

document.getElementById("status").innerHTML =
"✅ Camera hoạt động - AI đang khởi động";

})
.catch(error=>{

document.getElementById("status").innerHTML =
"❌ Lỗi camera: "+error;

});

}


video.addEventListener("play",()=>{

setInterval(async()=>{

const result =
await faceapi.detectSingleFace(
video,
new faceapi.TinyFaceDetectorOptions()
);


if(result){

document.getElementById("status").innerHTML =
"😀 Đã phát hiện khuôn mặt";

}

},1000);

});
