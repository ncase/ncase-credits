// Assumes credits is 700px x 400px

// DOM manip after DOM's loaded
setTimeout(()=>{

    let thanksContainer = document.querySelector("#thanks");

    // Dancing hearts
    let placeHeart = (style)=>{
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style = style;
        thanksContainer.appendChild(heart);
        return heart;
    };
    let hearts = [
        placeHeart('top:0; left:0'),
        placeHeart('top:0; right:0'),
        placeHeart('bottom:0; left:0'),
        placeHeart('bottom:0; right:0')
    ];

    // Calculate height of the peeps
    let peepsContainer = document.querySelector("#peeps"),
        peepsHeight = peepsContainer.getBoundingClientRect().height,
        peepsY = 0; // and scroll y anim

    // Scroll down (& anim hearts)
    window.scrollTo(0,0);
    let timer = 2,
        prevTimer = 1.9;
    let anim = ()=>{

        // Scroll
        peepsContainer.style.top = (-1*peepsY)+"px";
        peepsY += 2;
        if(peepsY>=peepsHeight) peepsY=0; // return!

        // Heart dance
        timer += 1/60;
        if(prevTimer<1 && timer>=1){
            hearts[0].setAttribute('lean','left');
            hearts[1].setAttribute('lean','right');
            hearts[2].setAttribute('lean','right');
            hearts[3].setAttribute('lean','left');
        }
        if(prevTimer<2 && timer>=2){
            hearts[0].setAttribute('lean','right');
            hearts[1].setAttribute('lean','left');
            hearts[2].setAttribute('lean','left');
            hearts[3].setAttribute('lean','right');
        }
        if(timer>=2) timer=0; // loop
        prevTimer = timer; // next

        // Loop
        requestAnimationFrame(anim);
    };
    requestAnimationFrame(anim);

},1);