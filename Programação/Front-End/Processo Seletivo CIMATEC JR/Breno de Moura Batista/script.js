let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){     
    nextImage(); 
}, 4000) 


function nextImage(){     
    count++;
    if(count>6){         
        count = 1;
    }  

    document.getElementById("radio"+count).checked = true;

}

const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

const parentContainer2 =  document.querySelector('.read-more-container2');

parentContainer2.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn2 = current.className.includes('read-more-btn2');

    if(!isReadMoreBtn2) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text2');

    currentText.classList.toggle('read-more-text2--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

const parentContainer3 =  document.querySelector('.read-more-container3');

parentContainer3.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn3 = current.className.includes('read-more-btn3');

    if(!isReadMoreBtn3) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text3');

    currentText.classList.toggle('read-more-text3--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

const parentContainer4 =  document.querySelector('.read-more-container4');

parentContainer4.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn4 = current.className.includes('read-more-btn4');

    if(!isReadMoreBtn4) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text4');

    currentText.classList.toggle('read-more-text4--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

const parentContainer5 =  document.querySelector('.read-more-container5');

parentContainer5.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn5 = current.className.includes('read-more-btn5');

    if(!isReadMoreBtn5) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text5');

    currentText.classList.toggle('read-more-text--show5');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

const parentContainer6 =  document.querySelector('.read-more-container6');

parentContainer6.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn6 = current.className.includes('read-more-btn6');

    if(!isReadMoreBtn6) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text6');

    currentText.classList.toggle('read-more-text6--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})
