const tag = document.querySelector(".tag");
const target = document.querySelector(".target");
const horizontal = document.querySelector(".horizontal");
console.log(horizontal);
const vertical = document.querySelector(".vertical");



document.addEventListener('mousemove', (e) => {
    
    const x = e.clientX;
    const y = e.clientY;

    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    // img.style.left = `${x-60}px`;
    // img.style.top = `${y-60}px`;


    horizontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;

    


    tag.innerHTML = `${x}, ${y}`;
    // console.log(`${x}, ${e.clientY}`);
});