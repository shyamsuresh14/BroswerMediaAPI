window.onload = function(){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || 
    navigator.oGetUserMedia;
    
    if(this.navigator.getUserMedia){
        this.navigator.getUserMedia({video:true}, handleVideo, videoError);
    }

    function handleVideo(stream){
        this.document.querySelector('#vid').src = window.URL.createObjectURL(stream);
    }
    
    function videoError(){
        alert('There is some problem');
    }
    /*var constraints = {audio:true, video: true};
    navigator.mediaDevices.getUserMedia(constraints).then(function(){
        var vid = document.querySelector('video');
        vid.srcObject = MediaStream;
        vid.play(); 
    }).catch(function(err){
        console.log("Error encountered" + err.message);
    });*/
}

