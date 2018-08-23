navigator.getUserMedia = navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || 
    navigator.oGetUserMedia;
    
if(navigator.getUserMedia){
   navigator.getUserMedia({video:true}, handleVideo, videoError);
}

function handleVideo(stream){
    document.querySelector('#vid').src = window.URL.createObjectURL(stream);
}
    
function videoError(){
    alert('There is some problem');
}
