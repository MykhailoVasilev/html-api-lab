const video = document.querySelector(&quot;video&quot;);
const audio = document.querySelector(&quot;audio&quot;);
// Управление видео
document.getElementById(&quot;playVideo&quot;).onclick = () =&gt;
video.play();
document.getElementById(&quot;pauseVideo&quot;).onclick = () =&gt;
video.pause();
document.getElementById(&quot;muteVideo&quot;).onclick = () =&gt; video.muted
= !video.muted;
// Управление аудио
document.getElementById(&quot;playAudio&quot;).onclick = () =&gt;
audio.play();
document.getElementById(&quot;pauseAudio&quot;).onclick = () =&gt;
audio.pause();
document.getElementById(&quot;muteAudio&quot;).onclick = () =&gt; audio.muted
= !audio.muted;
button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }
    button:hover {
    background-color: #45a049;
    }
    javascript
Copy code
document.getElementById("copyButton").onclick = () => {
    const text = document.getElementById("textToCopy").value;
    navigator.clipboard.writeText(text).then(() => {
        alert("Текст скопирован!");
    });
};
Пример кода:
<button id="geoButton">Определить местоположение</button>
<p id="geoOutput">Ваше местоположение: </p>
javascript
Copy code
document.getElementById("geoButton").onclick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        document.getElementById("geoOutput").innerText =
            `Широта: ${position.coords.latitude}, Долгота: ${position.coords.longitude}`;
    });
};
<button id="notifyButton">Показать уведомление</button>
javascript
Copy code
document.getElementById("notifyButton").onclick = () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Это уведомление с вашего сайта!");
        }
    });
};
