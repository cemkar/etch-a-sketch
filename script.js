/*
    when the program loads in it will grab the etch-board and create pixels within the board
*/
window.onload = function() {
    var size = 256;
    const pixel = [];
    board = document.querySelector('.etch-board');
   
    
    for(let i = 0; i < size; i++) {
        pixel[i] = document.createElement('div');
        board.appendChild(pixel[i]);
        
    }

    /*
        checks div's every 250ms to see if the mouse is hovering
    */
    setInterval(function(){
        for(let i = 0; i < size; i++) {
            pixel[i].addEventListener('mousemove' , function(){
                etch(pixel[i]);
            });
        }
    },250);
    

};


// function that changes the background color
function etch(element)
{
    element.style.backgroundColor = "#141414";
}

