
const video = document.getElementById("video");

navigator.mediaDevices
.getUserMedia({
    video:{
        facingMode:"user"
    }
})
.then(stream=>{

    video.srcObject = stream;

    document.getElementById("status").innerHTML =
    "✅ Camera đang hoạt động";

})
.catch(error=>{

    document.getElementById("status").innerHTML =
    "❌ Lỗi camera: " + error;

});
