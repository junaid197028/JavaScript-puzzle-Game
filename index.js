
function handleDragStart(e) {
    this.style.opacity = '0.4';
}

function handleDragEnd(e) { 
    this.style.opacity = '1';
}

let items = document.querySelectorAll('.containerr .box');
items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});
document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        this.style.opacity = '0.4';
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }

    function handleDragOver(e) {
        e.preventDefault();
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    let items = document.querySelectorAll('.containerr .box');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    });
});

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    
    return false;
}

//   let items = document.querySelectorAll('.containerr .box');
items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    // item.addEventListener('dragover', handleDragOver);
    // item.addEventListener('dragenter', handleDragEnter);
    // item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
    
});

function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDrop(e) {
    e.stopPropagation();

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
         
    }
    
    return false;
}


// click on resent button to reload the page 
function rldd(){
    location.reload();
}

//Clcik on start button that perform two function:One is to start countdown timer and another function is to random element 

// Random Element 

function rndm(){

    var parent = document.getElementById("box-parent");
    var divs = parent.children;                 //append all the children of parent in divs 
    var frag = document.createDocumentFragment();   //this will create virtual (Invisible HTML element) space to appand child elements
    while (divs.length) {
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    
    }
    parent.appendChild(frag); 
}

    // Countdown Timer 

    
    var i = 59;
function onTimer() {
        document.getElementById('mycounter').innerHTML = i; 
        var element = document.getElementById("mycounter");
        element.style.padding = "12px 31px";
        i--;    
        if (i < 0) {    
            document.getElementById('warnn').style.display = 'block'
            document.getElementById('box-parent').style.opacity = '0.2'
            clearInerval(i);
        }
        else {
            setTimeout(onTimer, 1000);
        }
        
}


 