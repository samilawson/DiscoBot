const Discord = require("discord.js");
const bot = new Discord.Client();
const size    = "36"; //number of colors, more makes a smoother transition
const rainbow = new Array(size);
//the math
for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;

function changeColor() {
     
    
     bot.guilds.get("").roles.find('name', "").setColor(rainbow[place]) //set the server id in the first quotes and the role name in the empty quotation marks
    .catch(console.error);
   if(place == (size - 1)){
      place = 0;
    }else{
      place++;
}
  }


bot.on("ready", () => {
    console.log("I am ready!");
    bot.user.setGame("Partying Hard!");
    setInterval(changeColor, 600); //set the speed(it is set to 0.6 seconds)!
});

bot.login(""); //get a bot token from discord developers page and put it here
