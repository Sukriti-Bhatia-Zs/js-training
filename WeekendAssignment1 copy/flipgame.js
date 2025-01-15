

let images=['./images/star-2.png','./images/multimedia.png','./images/abstract.png','./images/cents.png',
    './images/graphic-design.png','./images/star-2.png','./images/shape.png','./images/multimedia.png',
    './images/smile.png','./images/graphic-design.png','./images/abstract.png','./images/abstract-shape.png',
    './images/smile.png','./images/shape.png','./images/cents.png','./images/abstract-shape.png'];

// adding divs dynamically
const maindiv=document.getElementById("mainbody");
let flippedcards=[];
let matchedcards=0;


images.forEach((imagesrc)=>{
    // creating a card div
    const card=document.createElement("div");
    card.classList.add("card");

    // creating front facing div
    const frontcard=document.createElement("div");
    frontcard.classList.add("frontcard");
    frontcard.innerHTML='<p>?</p>';

    // creating back facing div
    const backcard=document.createElement("div");
    backcard.classList.add("backcard");

    // adding image in backcard
    const img=document.createElement("img");
    img.src=imagesrc;
    img.alt="image";
    img.classList.add("image");
    // appenging image in backcard

    backcard.appendChild(img);

    // appending both frontcard , backcard in card

    card.appendChild(frontcard);
    card.appendChild(backcard);

    //adding click listener to card
    card.addEventListener("click",()=>{

       //if card does not contain cardflip class and flippedcards length<2 then add it so that it flips

       if(!card.classList.contains("cardflip") && flippedcards.length<=2){
        card.classList.add("cardflip");

        // pushing card in flippedcard array
        flippedcards.push({card,imagesrc});

        //if flippedcards length==2
        if(flippedcards.length==2){
        
            const firstcard=flippedcards[0];
            const secondcard=flippedcards[1];
            // cards with same img
            if(firstcard.imagesrc==secondcard.imagesrc){
                // adding invisible class to both 

                setTimeout(()=>{

                    firstcard.card.classList.add("match");
                    secondcard.card.classList.add("match");

                    matchedcards++;
                    flippedcards=[];

                    // if matchedcards is equal to half of images array length means all 2 pairs matched display an alert you won
                    if(matchedcards==images.length/2){
                        setTimeout(()=>alert(" Congratulations All cards matched !!!"),500);
                    }


                },700);
                

            }
            else{
                
                setTimeout(()=>{
                    firstcard.card.classList.remove("cardflip");
                    secondcard.card.classList.remove("cardflip");
                    // empty array
                    flippedcards=[];
                },1000);
               
            }
        }

        
       }

      

    })

    // adding card to maindiv
    maindiv.appendChild(card);
})
