let buttons = document.querySelectorAll('.button');

let randomBtn = document.querySelector('#randomBtn');
let mitchellBtn = document.querySelector('#mitchellBtn');
let bridsonBtn = document.querySelector('#bridsonBtn');


function btnPress(event) {
    const points = document.querySelectorAll('.point');
    for (const point of points) {
        point.remove();
    }
    
    for (const btn of buttons) {
        btn.classList.remove('is-black');
        btn.classList.remove('is-primary');
        if (btn.getAttribute('id') === event.target.id) {
            btn.classList.add('is-black');
        } else {
            btn.classList.add('is-primary');
        }
    }
}

function renderPoint(x, y) {
    const chart = document.querySelector('#chart-area');
    const point = document.createElement('div');
    point.setAttribute('id', 'point');
    point.className = "point";
    point.style.left = `${x}px`;
    point.style.top = `${y}px`;
    chart.appendChild(point);
}

// Uniform Random Sampling 
function randomAlgo() {
    for (let i = 0; i < 2000; i++) {
        const x = Math.floor((Math.random() * 795) + 2);
        const y = Math.floor((Math.random() * 295) + 2);
        console.log(`(${x}, ${y})`);
        renderPoint(x , y);
    };
}

// Mitchell's Best-Candidate Algorithm
function mitchellAlgo() {
    const startPointX = Math.floor((Math.random() * 795) + 2);
    const startPointY = Math.floor((Math.random() * 295) + 2);
    renderPoint(startPointX, startPointY);

    const numCandidates = 10;
    

}


// Bridson's Algorithm

randomBtn.addEventListener("click", (event) => {
    btnPress(event);
    randomAlgo();
});

mitchellBtn.addEventListener("click", (event) => {
    btnPress(event);
    mitchellAlgo();
});

bridsonBtn.addEventListener("click", (event) => {
    btnPress(event);
    // bridsonAlgo();
});