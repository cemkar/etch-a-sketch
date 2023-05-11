/*
    when the program loads in it will grab the etch-board and create pixels within the board
*/
var DOCUMENT_TIMER;
window.onload = function() {
    generatePixels((1/32)*100);
    

};
function generatePixels(pixelSize){
    var size; 
    switch(pixelSize){
        case 6.25:
            size = 256;
            break;
        case 3.25:
            size = 1024;
            break;
        case 1.56:
            size = 4096;
            break;
        default:
            size = 1024;
            break;
    }
    const pixel = [];
    var board = document.querySelector('.etch-board');
    board.innerHTML = "";
    
    for(let i = 0; i < size; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].style.flexBasis = pixelSize + "%";
        pixel[i].style.paddingBottom = pixelSize + "%"; 
        board.appendChild(pixel[i]);
        
    }

    DOCUMENT_TIMER = setInterval(function(){
        for(let i = 0; i < size; i++) {
            pixel[i].addEventListener('mousemove' , function(event){
                if(event.buttons == 1)
                {
                    etch(pixel[i]);
                }
                
            });
        }
    }, 250);

}

function clear() {
    clearInterval(DOCUMENT_TIMER);
}

// function that changes the background color
function etch(element, size)
{
    element.style.backgroundColor = "#141414";
}


function disableSettings(menu, settings) {

    let board = document.querySelector('.etch-board');
    settings.style.display = "none";
    var checkForMouse = setInterval(function(){
        menu.addEventListener("mouseleave", function(event){ 
                 menu.style.cssText = `
                    display:none;
                 `;
                 settings.style.display = "block";
                clearInterval(checkForMouse);
        })
    },250);

}

function enableSettings() {
    let settings = document.getElementById('settings');
    settings.style.display = "none"; 

    let menu = document.createElement('div');

    const menuStyle = `
        animation: popUp 0.45s ease-out forwards;
        position:fixed;
        border-radius:8px;
        background:#f2f2f2;
        top:5%;
        left:5%;
        height:85%;
        width:90%;
        box-shadow:0px 2px 8px #242424;
        transition-property:width, height;
    `;
    menu.style.cssText = menuStyle;
    const menuContents = `
        <h1 class="menuTitle">Settings </h1>
        <div class="menuSettings">
            <button onclick="generatePixels(6.25); clear();">16x16</button>
            <button onclick="generatePixels(3.25); clear();">32x32</button>
            <button onclick="generatePixels(1.56); clear();">64x64</button>
        </div>
        <div class="menuSettings">
            <button>Black & White</button>
            <button>Rainbow Mode</button>
        </div>
        
    `;


    menu.innerHTML = menuContents;
    
    document.body.appendChild(menu);
    var audio = new Audio("menu-sound-two.mp3");
    audio.play();
    disableSettings(menu, settings);

}
