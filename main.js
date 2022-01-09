Webcam.set({
    width:350, 
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5.version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R9x08v4hH/model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');

}

prediction_1=results[0].label;
prediction_2=results[1].label;

function speak (){
var synth=window.speechSynthesis;
speak_data_1 = "The First prediction is "+prediction_1;
speak_data_2 = "And the second prediction is "+prediction_2;
var utterThis = new SpeechSynthesisUtterance( speak_data_1+speak_data_2);
synth.speak(utterThis);
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify( img,gotResult);

}

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion name").innerHTML=results[0].label;
        document.getElementById("result_emotion name 2").innerHTML=results[1].label;
        speak();
        prediction_1=results[0].label;
prediction_2=results[1].label;
        

        if (results[0].label=="happy"){
            document.getElementById("update_emoji").innerHTML= '&#128521';  
    }

    
        if (results[0].label=="sad"){
            document.getElementById("update_emoji").innerHTML= '&#128531';  
    }
    
    if (results[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML= '&#128520';  
}
if (results[1].label=="happy"){
    document.getElementById("update_emoji 2").innerHTML= '&#128521';  
}


if (results[1].label=="sad"){
    document.getElementById("update_emoji 2").innerHTML= '&#128531';  
}

if (results[1].label=="angry"){
document.getElementById("update_emoji 2").innerHTML= '&#128520';  
}
    }

}
