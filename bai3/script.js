const cardProduct =[
    {
        cardImage: "./Ellipse1.png",
        cardName: "Lelah Nichols",
        cardPlace: "Troy, MI",
        cardHobby1: "clothes",
        cardHobby2: "stem",
        cardHobby3: "",
        cardHobby4: "",
        cardHobby5: "",
    },
    {
        cardImage: "./Ellipse2.png",
        cardName: "Jesus Weiss",
        cardPlace: "Fort Worth, TX",
        cardHobby1: "headset",
        cardHobby2: "gadget",
        cardHobby3: "speed",
        cardHobby4: " winter",
        cardHobby5: "",
    },
    {
        cardImage: "./Ellipse3.png",
        cardName: "Annie Rice",
        cardPlace: "Austin, TX",
        cardHobby1: "road",
        cardHobby2: "mountain",
        cardHobby3: "trip",
        cardHobby4: " earth",
        cardHobby5: "nature",
    },
    {
        cardImage: "./Ellipse4.png",
        cardName: "Robert Brower",
        cardPlace: "Cincinnati, OH",
        cardHobby1: "Maintenance",
        cardHobby2: "gears",
        cardHobby3: "frames",
        cardHobby4: " repair",
        cardHobby5: "",
    },
    {
        cardImage: "./Ellipse5.png",
        cardName: "Amy Campbell",
        cardPlace: "Warrior, AL",
        cardHobby1: "music",
        cardHobby2: "disks",
        cardHobby3: "",
        cardHobby4: "",
        cardHobby5: "",
    },
    {
        cardImage: "./Ellipse6.png",
        cardName: "Anthony S. Morin",
        cardPlace: "Lyndhurst, NJ",
        cardHobby1: "vintage",
        cardHobby2: "electric",
        cardHobby3: "",
        cardHobby4: "",
        cardHobby5: "",
    },

];

const sectionDown = document.getElementById("section-down");
let stringHTML ="";

for(let card of cardProduct) {
    stringHTML += `
    <div class="section-down" id="section-down">
                <div class="card">
                    <div class="avatar">
                        <img src=${card.cardImage} width="70px" height="70px" alt="anh 1">
                    </div>
                    <div class="describle">
                        <h3 class="name">${card.cardName}</h3>
                        <h5 class="place">${card.cardPlace}</h5>
                        <button class="btn">${card.cardHobby1}</button>
                        <button class="btn">${card.cardHobby2}</button>
                        <button class="btn">${card.cardHobby3}</button>
                        <button class="btn">${card.cardHobby4}</button>
                        <button class="btn">${card.cardHobby5}</button>
                    </div> 
                </div>
    </div>
    `
}
sectionDown.innerHTML = stringHTML;


