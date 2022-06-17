function start_listening(){
    navigator.mediaDevices.getUserMedia({audio : true});
    sound_model=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lIkSXm8bb/model.json", sound_model_ready);
}

function sound_model_ready(){
    console.log("model is ready");
    sound_model.classify(get_result);
}

function get_result(e,r){
     if(e){
         console.error(e);
     }
     else{
         console.log(r);
         sound_name=r[0].label;
         sound_accuracy=(r[0].confidence*100).toFixed(2);
         document.getElementById("display_sound").innerHTML="I can hear " + sound_name;
         document.getElementById("sound_accuracy").innerHTML="accuracy: "+ sound_accuracy+ "%";
         red=Math.floor(Math.random()*256);
        green=Math.floor(Math.random()*256);
        blue=Math.floor(Math.random()*256);
        document.getElementById("display_sound").style.color="rgb(" + red + "," +green +"," + blue+ ")";
        document.getElementById("sound_accuracy").style.color="rgb(" + red + "," +green +"," + blue+ ")";

        

        if(sound_name=="mooing"){
            document.getElementById("img_1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnMv1ueB_VDNN2G6Z6eJ9ckNwJmenikXjww&usqp=CAU";
            }

            if(sound_name=="barking"){
                document.getElementById("img_1").src="https://image.shutterstock.com/image-vector/cute-fun-dog-cartoon-260nw-350881304.jpg";
                }


                if(sound_name=="meowing"){
                    document.getElementById("img_1").src="https://static.vecteezy.com/system/resources/previews/002/787/924/original/cute-cat-paws-up-over-wall-cartoon-illustration-vector.jpg";
                    }


                    if(sound_name=="roar"){
                        document.getElementById("img_1").src="https://static.vecteezy.com/system/resources/previews/005/162/478/original/cartoon-happy-lion-isolated-on-white-background-free-vector.jpg";
                        }

                    
     }
}