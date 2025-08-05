
window.onload = function(){
    let player = document.getElementById("player"),
        play = document.getElementById("play");
        var source = document.createElement('source');
        var video = document.getElementById('video');

        var image = document.getElementById('load');
        var sourceImg = document.createElement('sourceImg');

    var vidPlaying = false; 

    playGoodbye.addEventListener("click",playButGoodbye);

    playThanks.addEventListener("click",playButThanks);

    playHello.addEventListener("click",playButHello);

    playWelcome.addEventListener("click",playButWelcome);

    playWant.addEventListener("click",playButWant);

    playHelp.addEventListener("click",playButHelp);

    function playButHelp(){
      video.src = "animations/Can i help you.mp4";
      video.play();
    }
    function playButHello(){
      video.src = "animations/thanks.mp4";
      video.play();
    }
    function playButGoodbye(){
      video.src = "animations/goodbye.mp4";
      video.play();
    }
    function playButThanks(){
      video.src = "animations/thanks.mp4";
      video.play();
    }
    function playButWant(){
      video.src = "animations/wantPaper.mp4";
      video.play();
    }
    function playButWelcome(){
      video.src = "animations/welcome.mp4";
      video.play();
    }
    
   
    //code for search bar
    const fullButtonList = ["Hello", "Welcome", "Goodbye", "Thank you", "Do you want paper", "Can I help you?"];
    const shortButtonList = ["hello", "welcome", "goodbye", "thanks", "wantPaper", "Can i help you"];

    //changes the colors of all buttons
    document.getElementById("button").bgcolor= "#724E91" ;

    search.addEventListener("typing", searchFunc);
    
    //buttons
    var inp = document.getElementById("search");

    function searchFunc(){
      var inp = document.getElementById("search");
      var txt = inp.textContent.toLowerCase();
      for(i in buttonList){
          if(i.textContent.toLowerCase().contains(txt)){
            i.bgcolor = "#E54F6D";

          }
          else{
            document.getElementsByTagName(i).bgcolor= "#724E91";
            
          }
      }
      searchBut.addEventListener("submit", searchFunc);
      document.getElementById("error").textContent= "done" ;

    }
  }