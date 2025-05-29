const videoMap = {
    "Video1": "videos/Sapporo1.mp4",
    "Video2": "videos/Sapporo2.mp4",
    "Video3": "videos/Sapporo3.mp4",
    "Video4": "videos/Sapporo4.mp4",
    "Video5": "videos/Sapporo5.mp4",
    "Video6": "videos/Sapporo6.mp4",
};

const qrResult = document.getElementById("qr-result");
const videoPlayer = document.getElementById("video-player");

let lastContent = null;

function onScanSuccess(decodedText, decodedResult) {
    if (decodedText === lastContent) return; // tránh xử lý lặp lại
    lastContent = decodedText;

    qrResult.textContent = decodedText;

    if (videoMap[decodedText]) {
        videoPlayer.src = videoMap[decodedText];
        videoPlayer.style.display = "block";
        videoPlayer.play();
    } else {
        videoPlayer.pause();
        videoPlayer.style.display = "none";
        videoPlayer.src = "";
    }
}

const html5QrCode = new Html5Qrcode("reader");
html5QrCode.start(
    { facingMode: "environment" },
    {
        fps: 10,
        qrbox: { width: 250, height: 250 }
    },
    onScanSuccess
);
