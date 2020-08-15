
// var test = $("<h1>")
// test.append("Hello")
var room = "map_0"
var inventory = [];
var deadFriends = 0;
var allMaps = ["map_0",
                "map_1",
                "map_2",
                "map_3",
                "map_5",
                "map_6",
                "map_7",
                "map_8",
                "map_11",
                "map_13",
                "map_14",
                "map_15",
                "map_16",
                "map_17",
                "map_18",
                "map_19",
                "map_21",
                "map_25"                                 
                ]





                var allRoomNames = [
                    "Front Door",
                    "Dining Room",
                    "Entry Way",
                    "Kitchen",
                    "Mummy Room",
                    "Hall 1",
                    "Bedroom",
                    "Closet",
                    "Bathroom",
                    "Safe Room",
                    "Hall 2",
                    "Stairs",
                    "Basement",
                    "Side Yard",
                    "Piano Room",
                    "Attic",
                    "Mausoleam",
                    "Backyard"
                    ]    
var POVstatus1= [ 
            "front_door",
            "dining_room_a",
            "Emtryway",
            "kitchen_a",
            "mummy_room_2a",
            "hall1_a",
            "bedroom_ab",
            "closet_a",
            "bathroom_a",
            "safe_room_a",
            "hall2",
            "stairs",
            "basement_a",
            "side_yard2_a",
            "piano_room_4a",
            "attic_a",
            "tomb",
            "backyard_a"

]

var currentPOV = POVstatus1.map(element => element);


var status1= [
    "The front door of the SPOOKY HOUSE",
    "A werewolf sits at the table, eating the remains of something...or someone! Strangley, he seems to be wearing a whislte around his neck.",
    "Doors to up, left, and right",
    "This kitchen is a mess. There's silverware scattered about and the stove is on! You can see a small fire from this gas stove.",
    "A Mummy starts walking toward you! Though he's a little tangled. Old gaws fill the room, covering him and the floor.",
    "A scary clown toy sits on a pedestal in the center of the room",
    "A large Coffin lays open. It is very ominous aside from a fluffy pillow inside.",
    "A skeleton jumps our from behind a vacuum cleaner! His bones creak and crack with each step as he approaches you.",
    'You sense this bathroom does not get used much. No soap, no towels, very dusty mirror. At least the toilet paper is full. ',
    "A locked Safe with a voice activated password",
    "Nothing out of the oridinary",
    "Nothing out of the ordinary",
    "You see a large blacksmith setup! The only mold you recognize looks like it would shape a bullet. Too bad there's no fire.",
    "The mausoleam is up ahead, and you can see into the piano room through a window.",
    "A vampire sits with his eyes closed, elegantly playing a piano. You think he can't see you, but he seems to be chuckling...",
    "This rundown old attic has a giant hole in the side! You feel it get colder and breezier as a ghost appears before you!",
    "This mausoleam is missing a pillar. You wonder if you could put something with a simmilar design here to make it more symmetrical.",
    "A dog sits in a doghouse, chewing on a large stick. It doesn't seem to mind you."

]


var currentStatus = status1.map(element => element);

var status2= [
    "Nothing out of the oridinary",
    "The former werewolf dead on the ground, the whistle still around his neck.",
    "Doors to up, left, and right",
    "You can see a small fire from this gas stove.",
    "You see the gaws burning up, and you notice a small sun-shaped amulet about the size of your fist emiting a bright glowing beam of light",
    "Nothing to see here",
    "A Coffin",
    "What few bones are left lay motionless on the ground in front of the vacuum cleaner.",
    'A full roll of toilet paper hangs next to a dirty toilet',
    "An open safe with a gun",
    "Nothing out of the oridinary",
    "Nothing out of the ordinary",
    "The blacksmith forge is lit! With this fire roaring you should try to forge soemthing.",
    "Nothing to see here",
    "With the vampire gone, you can see he left the piano open. It's the classical kind full of small hammers striking the strings.",
    "The empty attic has a giant hole in the side! And with the ghost gone, you now see a staff, perminatley planted in the ground, with a strange circle on top. It looks like something could fit in it.",
    "You can see reflected in the mausoleam's mirror a window into the piano room. It looks empty, but you swear you can hear music.",
    "You see the dog happily chewing on the squeaky toy, and the drool covered stick now on the ground"

]

var POVstatus2= [ 
    "front_door",
    "dining_room_b",
    "Emtryway",
    "kitchen_b",
    "mummy_room_2b",
    "hall1_b",
    "bedroom_a",
    "closet_b",
    "bathroom_c",
    "safe_room_b",
    "hall2",
    "stairs",
    "basement_b",
    "side_yard2_b",
    "piano_room_4c",
    "attic_b",
    "tomb_b",
    "backyard_b"

]




var status3= [
    "Nothing out of the oridinary",
    "The former werewold dead on the ground.",
    "Doors to up, left, and right",
    "A small flame coming from stove",
    "You see ashy remains of the Mummy",
    "Nothing to see here",
    "A Coffin with a vampire sleeping in it",
    "Leftover bones from the skeleton",
    'You see a very dusty mirror. The vampire must never use it',
    "An open, empty safe",
    "Nothing out of the oridinary",
    "Nothing out of the ordinary",
    "A Blacksmith forge, bullet mold, on fire",
    "Nothing to see here",
    "With only one hammer gone, this piano is still mostly functional.",
    "The sun shaped amulet fits perfectly in the staff! Now how was it activated again?",
    "A beam of light stemming from the attic is hitting the mausoleam.",
    "Dog with Squeky toy"

]

var POVstatus3= [ 
    "base_room",
    "dining_room_c",
    "Emtryway",
    "kitchen_b",
    "mummy_room_2c",
    "hall1_b",
    "bedroom_b",
    "closet_c",
    "bathroom_b",
    "safe_room_c",
    "hall2",
    "stairs",
    "basement_b",
    "side_yard2_d",
    "piano_room_4d",
    "attic_c",
    "tomb_d",
    "backyard_c"

]

var status4= [
    "Nothing out of the oridinary",
    "Dead Werewolf",
    "Doors to up, left, and right",
    "A small flame coming from stove",
    "Dead Mummy",
    "Nothing to see here",
    "A Coffin with a dead vampire",
    "Dead skeleton",
    'The bathroom is empty',
    "An open, empty safe",
    "Nothing out of the oridinary",
    "Nothing out of the ordinary",
    "A Blacksmith forge, bullet mold, on fire",
    "Nothing to see here",
    "Out the window you can see the tomb and the mirror reflecting the piano...and only the piano!",
    "The glowing amulet's light shines out the hole in the attic, onto the mausoleam outside.",
    "You see the mausoleam's mirror, reflecting the amulet's light",
    "Dog with Squeky toy"

]

var POVstatus4= [ 
    "base_room",
    "dining_room_c",
    "Emtryway",
    "kitchen_b",
    "mummy_room_2c",
    "hall1_b",
    "bedroom_c",
    "closet_c",
    "bathroom_d",
    "safe_room_c",
    "hall2",
    "stairs",
    "basement_b",
    "side_yard_c",
    "piano_room_4b",
    "attic_d",
    "tomb_c3",
    "backyard_c"

]


$("#screen").append("Welcome to the House of Spooky Stuff!")

var placement=-2;

// 

$("#play").click(function(event){
event.preventDefault();
    var input = $("#command").val().toLowerCase();
    $("#command").val('')
    // console.log(input)

    // console.log("IMPORTANT")
    // console.log(status1[14])
    if (input==="up" || input==="down" || input === "left"  || input === "right"){
        movePlayer(input)
    }
    else{

    
    var message = "You can't do that"
    var roomPOV = "base_room"


    switch (room) {
        case "map_0":
            if (input.includes("open")){
            message = "The door is open"
            break;
            }
            break;
        case "map_1":
            if ( (input.includes("shoot") || input.includes("gun") || input.includes("bullet") || input.includes("kill")) 
            && inventory.indexOf("Loaded_Gun")>-1 
            && currentStatus[1]===status1[1]){
            message = "You shot the werewolf! You watch as his body transforms back into a human, and you recognize him as the local dog trainer who went missing.";
            currentStatus[1] = status2[1];
            currentPOV[1] = POVstatus2[1];
            break;
            }
            else if(currentStatus[1] === status1[1] && inventory.indexOf("Loaded_Gun")===-1){
                message = "Before you could do that, the werewolf rushes you, killing one of your friends, then goes back to its meal.";
                deadFriends++;
                break;
            }
            else if (input.includes("whistle") && currentStatus[1]===status2[1]){
                currentStatus[1] = status3[1];
                currentPOV[1] = POVstatus3[1];                
                message = "You picked up the dog whistle!";
                inventory.push("Dog_Whistle");
                break;
            }
            if ((input.includes("stab") || input.includes("throw"))
            &&inventory.indexOf("Silverware")>-1){
                message = "You weren't quick enough with the silverware and the werewolf killed one of your friends! There must be a better way to weaponize these utencils!";
                deadFriends++;
                break;
            }
            break;
        case "map_3":
            if ((input.includes("silverware") || input.includes('spoon') || input.includes("fork") || input.includes("knife"))
            &&  currentStatus[3]===status1[3]){
            message = "You picked up the silverware";
            console.log("adding silverware");
            inventory.push("Silverware");
            currentStatus[3] = status2[3];
            currentPOV[3] = POVstatus2[3];    
            break;
            }
            else if ((input.includes("fire") || input.includes("light") || input.includes("torch"))
            &&  inventory.indexOf("Unlit_Torch")>-1){
            message = "You lit your torch!"
            inventory.push("Lit_Torch")
            inventory = inventory.filter(item => item!=="Unlit_Torch")            
            break;
            }            

            break;
        case "map_5":
            if ((input.includes("torch")  ||  input.includes("fire") || input.includes("light"))
            && inventory.indexOf("Lit_Torch")>-1
            && currentStatus[4] === status1[4]){
            message = "You set the mummy on fire!";
            currentStatus[4] = status2[4];
            currentPOV[4] = POVstatus2[4];
            break;
            }
            else if (currentStatus[4] === status1[4]){
                message = "Before you could do that, the mummy attacks and kills one of your friends!";
                deadFriends++;
                break;
            }
            else if (input.includes("amulet") 
            && inventory.indexOf("Amulet")===-1
            && currentStatus[4] === status2[4]){
            message = "You picked up the amulet! It looks like it stopped glowing once the fires died down"
            inventory.push("Amulet")
            currentStatus[4] = status3[4]
            currentPOV[4] = POVstatus3[4];
            break;
            }
            if (input.includes("unravel")
            && currentStatus[4] === status1[4]){
                message = "You try to unravel the Mummy. This was a dumb idea and he kills one of your friends."
                deadFriends++;
                break;
            }
            break;
        case "map_6":
            if (input.includes("clown")
            && currentStatus[5] === status1[5]){
            message = "You picked up the clown toy! And you notice it squeaks when you sequeeze it";
            inventory.push("Clown_Toy");
            currentStatus[5] = status2[5];
            currentPOV[5] = POVstatus2[5];
            break;
            }
            if (input.includes("pillar")){
                message = "The pillar is too heavy to pick up, and it wouldn't math with mausoleam anyway. Find something flatter and more rectangular."
                break;
            }
            break;
            
        case "map_7":
            if ((input.includes("kill") || input.includes("stake"))
            && currentStatus[6] === status3[6]
            && inventory.indexOf("Hammer")===-1){
            message = "You need something to pound the stake with!";
            break;
            }
            if ((input.includes("kill") || input.includes("stake"))
            && currentStatus[6] === status3[6]
            && inventory.indexOf("Hammer")>-1){
            message = "You killed the vampire! You win! Total friends lost: "+ deadFriends;
            inventory = inventory.filter(item => item!=="Stake");
            currentStatus[6] = status4[6];
            currentPOV[6] = POVstatus4[6];
            break;
            }
            if ((input.includes("pillow") )
            && currentStatus[6] === status1[6]){
            message = "Under the pillow you see a small sheet of paper with the word SWORDFISH";
            currentStatus[6] = status2[6];
            currentPOV[6] = POVstatus2[6];
            inventory.push("Password");
            break;
            }

            break;
        case "map_8":
            if ((input.includes("whistle") )
            && currentStatus[7] === status1[7]
            && inventory.indexOf("Dog_Whistle")>-1){
            message = "You blew the dog whistle, and the dog came and chewed up the skeleton";
            currentStatus[7] = status2[7];
            currentPOV[7] = POVstatus2[7];
            break;
            }
            else if (currentStatus[7] === status1[7]){
                message = "Before you can do that, the skeleton rushes you, killing one of your friends.";
                deadFriends++;
            break;
            }
            else if ((input.includes("vacuum") )
            && currentStatus[7] === status2[7]){
            message = "You picked up the vacuum cleaner";
            currentStatus[7] = status3[7];
            currentPOV[7] = POVstatus3[7];
            inventory.push("Vacuum");
            break;
            }
            break;
        case "map_11":
            if (currentStatus[8] === status1[8]
            && input.includes("paper")){
                currentStatus[8] = status3[8];
                currentPOV[8] = POVstatus3[8];
                inventory.push("Toilet_Paper");
                message = "You picked up toilet paper!";
                if (inventory.indexOf("Stick")>-1){
                    message = "You picked up toilet paper! Your stick fits perfectly inside, creating a torch! You just need something to light it."
                    inventory.push("Unlit_Torch")
                    inventory = inventory.filter(item => item!=="Stick" && item!=="Toilet_Paper" )
                }
                break;
            }
            if (currentStatus[8] === status1[8]
                && input.includes("mirror")){
                    currentStatus[8] = status2[8];
                    currentPOV[8] = POVstatus2[8];
                    inventory.push("Mirror");
                    message = "You picked up a mirror!";
                    break;
                }
            if ((currentStatus[8] === status2[8] )
            && input.includes("paper")){
                message = "You picked up the toilet paper!";
                currentStatus[8] = status4[8];
                currentPOV[8] = POVstatus4[8];
                inventory.push("Toilet_Paper");
                if (inventory.indexOf("Stick")>-1){
                    message = "You picked up toilet paper! Your stick fits perfectly inside, creating a torch! You just need something to light it.";
                    inventory.push("Unlit_Torch");
                    inventory = inventory.filter(item => item!=="Stick" && item!=="Toilet_Paper" );
                }
                break;
            }    
            if ((currentStatus[8] === status3[8] )
            && input.includes("mirror")){
                message = "You picked up the Mirror!";
                currentStatus[8] = status4[8];
                currentPOV[8] = POVstatus4[8];
                inventory.push("Mirror");
                break;
            }
            if (input.includes("poop") ||
            input.includes("pee")){
                message = "Well, when you gotta go, you gotta go.";
                break;
            } 
            if (input.includes("flush")){
                message = "Uh oh, I think it's clogged.";
                break;
            } 
            break;
        case "map_13":
            if ((currentStatus[9] === status1[9] )
            && (input.includes("swordfish") || input.includes("password"))
            && inventory.indexOf("Password")>-1){
                message = "You unloced the safe! It looks like there's a gun inside!";
                currentStatus[9] = status2[9];
                currentPOV[9] = POVstatus2[9];
                break;
            }
            if ((currentStatus[9] === status2[9])
            && input.includes("gun")
            && inventory.indexOf("Password")>-1){
                message = "You picked up the gun! No bullets though.";
                currentStatus[9] = status3[9];
                currentPOV[9] = POVstatus3[9];
                inventory.push("Empty_Gun");

                if (inventory.indexOf("Silver_Bullet")>-1){
                      message = "You picked up the gun! And your silver bullet fits right in!";
                      inventory.push("Loaded_Gun");
                      inventory = inventory.filter(item => item!=="Empty_Gun" && item!=="Silver_Bullet");

                 }     

                break;
            }
          

            break;
        case "map_16":
            if ((currentStatus[12] === status1[12])
            && (input.includes("light") || input.includes("fire")  ||  input.includes('torch'))
            && !input.includes("mummy")
            && inventory.indexOf("Lit_Torch")>-1){
                message = "You lit the Blacksmith Forge! Now you can forge something!";
                currentStatus[12] = status2[12];
                currentPOV[12] = POVstatus2[12];
                break;
            }
            if ((currentStatus[12] === status2[12] )
            && (input.includes("silver") )
            && inventory.indexOf("Silverware")>-1){
                message = "You forged a silver bullet out of the Silverware!"
                inventory.push("Silver_Bullet")
                inventory = inventory.filter(item => item!=="Silverware")

                if (inventory.indexOf("Empty_Gun")>-1){
                    message = "You forged a silver bullet! If fits right into your gun!"
                    inventory.push("Loaded_Gun")
                    inventory = inventory.filter(item => item!=="Empty_Gun" && item!=="Silver_Bullet" )
                }
                
                break;
            }
            if (input.includes("anvil")){
                message = "As much as you'd like to drop this anvil on a monster like in Looney Tunes, you realize that's impractical";
                break;
            }
            break;
        case "map_18":
            if (currentStatus[14] === status1[14] && room === "map_18"){
                message = "Before you could do that, the vampire rushes you, killing one of your friends. Then goes back to playing.";
                deadFriends++;
                break;
            }
            if ((currentStatus[14] === status1[14] )
            && (input.includes("fire")  || input.includes("torch") || input.includes("light"))
            && input.includes("amulet")
            && inventory.indexOf("Amulet")>-1){
                message = "You activated the amulet, shining the bright light. At first the vampire seems afraid, but it seems the fake sunlight has no physical effect." 
                +"Enraged, the vampire kills one of your friends. Perhaps you can be more sneaky about this.";
                deadFriends++;
                break;
            }
            if ((currentStatus[14] === status2[14] )
            && input.includes("hammer")){
                message = "You took one of the hammers from the piano!";
                currentStatus[14] = status3[14];
                currentPOV[14] = POVstatus3[14];
                inventory.push("Hammer");
                break;
            }
            if (currentStatus[14] === status2[14] &&
                input.includes("play")){
                    message = "You play the piano. You're not as good as the vampire, and that makes you sad. Then you remember you're about to kill him and you feel a little better.";
                    break;
                }
            if (currentStatus[14] === status3[14] &&
                input.includes("play")){
                    message = "You play the piano, but all the songs you know use the one note that's now missing a hammer. So it sounds terrible.";
                    break;
                }                
            break;
        case "map_19":
           if ((input.includes("vacuum") || input.includes("suck") )
           && currentStatus[15] === status1[15]
           && inventory.indexOf("Vacuum")>-1){
                message = "You sucked up the ghost!"
                currentStatus[15] = status2[15]
                currentPOV[15] = POVstatus2[15];
            break;
                }
                else if(currentStatus[15]===status1[15]){
                    message = "Before you could do that, the ghost rushes you, killing one of your friends."
                    deadFriends++;
            break;
            }
            if ((input.includes("amulet") )
            && currentStatus[15] === status2[15]
            && inventory.indexOf("Amulet")>-1){
                 message = "You put the amulet in the hole!";
                 inventory = inventory.filter(item => item!=="Amulet") 
                 currentStatus[15] = status3[15];
                 currentPOV[15] = POVstatus3[15];
             break;
             }
             if ((input.includes("fire") || input.includes("torch"))
             && currentStatus[15] === status3[15]
             && inventory.indexOf("Amulet")===-1){
                  message = "You break off a piece of your torch to keep the amulet lit. You are left with a broken, pointy stick, and the fire causes the amulet it to shine a light onto the mausoleum!"
                  inventory.push("Stake")
                  inventory = inventory.filter(item => item!=="Lit_Torch")
                  currentStatus[15] = status4[15];
                  currentPOV[15] = POVstatus4[15];                
                    if (currentStatus[16]=== status2[16]){
                        message = "You break off a piece of your torch to keep the amulet lit. You are left with a broken, pointy stick, and the fire causes the amulet it to shine a light onto the mirror on the mausoleum, reflecting into the piano room. You overhear the vampire say, SUNRISE ALREADY? I BETTER GET TO BED!"
                        currentStatus[16] = status3[16];
                        currentStatus[14] = status2[14];
                        currentStatus[6] = status3[6];
                        currentPOV[16] = POVstatus3[16];
                        currentPOV[14] = POVstatus2[14];
                        currentPOV[6] = POVstatus3[6];
                        
                        currentPOV[13] = POVstatus3[13]

                    }
                    if (currentStatus[16]===status1[16]){
                        currentStatus[16]= status3[16];
                        currentPOV[16] = POVstatus3[16];

                        currentPOV[13] = POVstatus3[13];
                    }
              break;
              }
              break;

        case "map_21":
            if ((currentStatus[16] === status1[16] || currentStatus[16] === status3[16])
            && (input.includes("mirror")  )
            && inventory.indexOf("Mirror")>-1){
                message = "You place the mirror on the mausoleam";
                inventory = inventory.filter(item => item!=="Mirror");
                    if (currentStatus[15] === status4[15] && currentStatus[16]===status3[16]  ){
                        message = "You place the mirror on the mausoleam, reflecting the light from the amulet into the piano room. You overhear the vampire say, SUNRISE ALREADY? I BETTER GET TO BED!";
                        currentStatus[16] = status4[16];
                        currentStatus[14] = status2[14];
                        currentStatus[6] = status3[6];
                        currentPOV[16] = POVstatus4[16];
                        currentPOV[14] = POVstatus2[14];
                        currentPOV[6] = POVstatus3[6];
                        
                        currentPOV[13] = POVstatus4[13];
                    }
                    if (currentStatus[16]===status1[16]){
                        currentStatus[16] = status2[16];
                        currentPOV[16] = POVstatus2[16];

                        currentPOV[13] = POVstatus2[13];
                    }
                break;
            }
            break;
        case "map_25":
            if ((currentStatus[17] === status1[17] )
            && (input.includes("clown") )
            && inventory.indexOf("Clown_Toy")>-1){
                message = "You gave the dog the squeaky toy, and he dropped his stick!";
                currentStatus[17] = status2[17];
                currentPOV[17] = POVstatus2[17];
                inventory = inventory.filter(item => item!=="Clown_Toy")                
                break;
            }
            if ((currentStatus[17] === status2[17] )
            && (input.includes("stick") )){
                message = "You picked up the stick!";
                currentStatus[17] = status3[17];
                currentPOV[17] = POVstatus3[17];
                inventory.push("Stick");

                if (inventory.indexOf("Toilet_Paper")>-1){
                    message = "You picked up the stick! It fits perfectly in the roll of TP, creating a torch! It just needs something to light it.";
                    inventory.push("Unlit_Torch");
                    inventory = inventory.filter(item => item!=="Stick" && item!=="Toilet_Paper");

                }

                break;
            }
            if (input.includes("whistle") && inventory.indexOf("Dog_Whistle")>-1){
                message = "You blow the dog whistle in front of the dog. He gets up, looking alert, then lays back down. But you get the sense if you blew this in another room, it would attract the dog to that room."
            break;
            }
            if (input.includes("pet")){
                message = "You pet the dog. He seems to like you!"
                break;
            }
            break;
        default:
            message = "You can't do that"
            break;
    }

    if (input.includes("whistle") && inventory.indexOf("Dog_Whistle") > -1 && message ==="You can't do that"){
        message = "You blow the whitstle, and the dog comes running in the room! But...he sees nothing of interest and leaves"
    }




    renderRoom(room)

    console.log(inventory)
    $("#screen").empty();
    $("#screen").append(message);
    message="";
    renderInventory();

}
})

// $("#up").click(function(){
//     event.preventDefault();

//     placement+=4
//     $("#screen").empty();
//     // $("#screen").append(placement);
//     renderMap("up");


// })

// $("#down").click(function(){
//     event.preventDefault();

//     placement-=4
//     $("#screen").empty();
//     // $("#screen").append(placement);
//     renderMap("down");


// })

// $("#left").click(function(){
//     event.preventDefault();

//     placement-=1
//     $("#screen").empty();
//     // $("#screen").append(placement);
//     renderMap("left");


// })

// $("#right").click(function(){
//     event.preventDefault();

//     placement+=1
//     $("#screen").empty();
//     // $("#screen").append(placement);
//     renderMap("right");


// })

function movePlayer(directionCommand){
    // event.preventDefault();
    $("#screen").empty();

    switch (directionCommand) {
        case "up":
            placement +=4;
            break;
        case "down":
            placement -=4;
            break;
        case "left":
            placement -=1;
            break;   
        case "right":
            placement +=1;
            break;                             
        default:
            break;
    }

    renderMap(directionCommand)
}

function renderMap(direction){


    switch (placement) {
        case -2:
            room = "map_0"
            break;
        case 1:
            if (direction === "down"){
                placement= 5
                room = "map_5"
            }
            else{
            room = "map_1"
            }
            break;
        case 2:
            room = "map_2"
            break;
        case 3:
            if (direction === "down"){
                placement =7
            }
            else{
            room = "map_3"
            }
            break;

        case 5:
            console.log("5 ", direction)
            if (direction === "up"){
                placement = 1;
                room = "map_1"
            }
            if (direction === "left"){
            room = "map_5" 
            }
            break;
        case 6:
            room = "map_6"
            break;

        case 7:
            if (direction === "up"){
                placement = 3
            }
            else{
            room = "map_7"                
            }
            break;
        case 8:
            room = "map_8"
            break;

        case 10:
            if (direction==="up"){
            room = "map_14"
            placement=14
            }
            if (direction==="down"){
            room = "map_6"
            placement=6
            }
            if (direction==="left"){
            placement=11
            }
            break;
        case 13:
            room = "map_13"
            break;
        case 11:
            if (direction === "down"){
                placement = 15
            }
            else{
            room = "map_11"
            }
            break;
        case 14:
            room = "map_14"
            break;
        case 15:
            if (direction === "up"){
                placement = 11;
            }
            else{
            room = "map_15"
            }
            break;

        case 16:
            room = "map_16"
            break;
        case 17:
            switch (direction) {
                case "up" :
                    room = "map_17"
                    break;
                case  "down":
                    room = "map_17"
                    break;
                case "left":
                    placement=placement+1;
                    break;
                case "right":
                    placement=placement-1;
                    break;            
                default:
                    break;
            }
            
            break;

            
        case 18:
            if (direction === "left"){
                placement = 19
                room = "map_19"
            }
            if (direction === "right"){
                placement = 17
            }
            if (direction === "up"){
            room = "map_18"
            }
            break;
        case 19:
            if (direction === "right"){
                placement = 18
                room = "map_18"
            }
            else{
            room = "map_19"
            } 
            break;
      
        case 21:
            room = "map_21"
            break;
        case 25:
            room = "map_25"
            break;

        default:
            console.log("wall")
            switch (direction) {
                case "up":
                    placement=placement-4;
                    break;
                case "down":
                    placement=placement+4;
                    break;
                    
                case "left":
                    placement=placement+1;
                    break;

                case "right":
                    placement=placement-1;
                    break;

                default:
                    break;
            }
            break;
    }
            console.log(placement)

  

    $("#justMap").empty();
    // $("#justMap").append(map);
    




    renderRoom(room);

}

renderMap()


function renderRoom(roomNumber){




var indexNumber = allMaps.indexOf(roomNumber)
var currentRoomName = allRoomNames[indexNumber]

var renderRoomName = $("<h2>")
                    .text(currentRoomName)
var briefDescription = $("<p>")
                    .text(currentStatus[indexNumber])
$("#displayRoom").empty()
$("#displayRoom").append(renderRoomName)
$("#displayRoom").append(briefDescription)


var roomPOV = currentPOV[indexNumber]

var POV = $("<img>")
.attr("src", "rooms1/"+roomPOV+".png")
.attr("id", "povID")
// .attr("src", "rooms1/base_room.png")
.attr("width", "40%")
.attr("height", "30%");

$("#pov").empty();
$("#pov").append(POV);

var map = $("<img>")
.attr("width", "10%")
.attr("height", "10%")
// .attr("src", "drawings/map_0.png")
.attr("src", "drawings/"+roomNumber +".png");

var blank = $("<img>")
.attr("width", "10%")
.attr("height", "10%")
.attr("src", "drawings/map_blank.png");  


$("#povID").before(blank);
$("#povID").after(map);

}

function renderInventory(){

    $("#inventorySpace").empty();

    var invntoryStart = $("<img>")
    .attr("id", "inventoryStart")
    .attr("src", "inventory/inventory.png")
    .attr("height", "5%")
    .attr("width", "5%");

    $("#inventorySpace").append(invntoryStart);

    for (i=0;i<inventory.length; i++){
        var inventoryItem = $("<img>")
        .attr("src", "inventory/"+ inventory[i] + ".png")
        .attr("height", "5%")
        .attr("width", "5%");
        $("#inventoryStart").after(inventoryItem)
    }

}
renderInventory();