window.onload= function () {
       //variaveis de elementos
    let title = document.querySelector("#title");
    let previousButton = document.querySelector( "#previous-button");
    let playButton = document.querySelector("#play-button")
    let nextButton = document.querySelector("#next-button")

 
   

   //funções
     function changeTitle(value) {
    title.inerText = value;
}


    previousButton.onclick = function() {
        console.log("previous button clicked");
    }

    playButton.onclick = function() {
        console.log("play button clicked")
    }

    nextButton.onclick = function() {
        console.log("next button clicked")
    }


    changeTitle("Mariana");
    console.log(title);




    


}


