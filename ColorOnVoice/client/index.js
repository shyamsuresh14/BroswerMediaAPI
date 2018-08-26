var allCssColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

/*function set() {
    var b = this.document.getElementById("button");
    if(b.value === 'Start'){
        b.innerHTML = '<span style="color:red">Stop</span>';
        b.value = 'Stop';
    }
    else{
        b.innerHTML = '<span style="color:green">Start</span>';
        b.value = 'Start';
    }
    console.log("Value: " + b.value);
}*/

function convert(){
    var text = document.getElementById("vin");
    
    if('webkitSpeechRecognition' in window){
        var speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = "en-IN";
        speechRecognizer.start();
        console.log("Started")
        var finalTexts = "";
        
        speechRecognizer.onresult = function(event){
            var interimTexts = "";
            for(var i = event.resultIndex; i < event.results.length; i++){
                var texts = event.results[i][0].transcript;
                texts.replace("\n", "<br/>");
                if(event.results[i].isFinal){
                    finalTexts += texts;
                }
                else{
                    interimTexts += texts;
                }
            }
            text.innerHTML = finalTexts + '<span style="color:#999">' + interimTexts + '</span>';
            finalTexts.split(" ").forEach(changeColor);
        }
    }
    else{
        text.innerHTML = 'This web browser does not support speech recognition! Try out a different one.';
    }
}


function changeColor(item, index){
    item = item.charAt(0).toUpperCase() + item.slice(1);
    if(inArray(item)){
        console.log(item + ":" + 'true');
        var div = document.getElementById("cbox");
        div.style.backgroundColor = item;
    }
    else 
        console.log(item + ":" + 'false');
}

function inArray(item){
    for(var i = 0; i < allCssColors.length; i++){
        if(allCssColors[i] === item)
            return true;
    }
    return false;
}

