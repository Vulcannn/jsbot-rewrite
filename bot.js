const Discord = require("Discord.js");
const token = "MzQ2NjA1NTM1OTUwMjc0NTYx.DQMvow.dd7lf8gQaur9xam4JEnPjXjuHIo"; //enter bot token here
const prefix = "+"; 														 //enter bots prefix here
const status = "In development!";                                            //leave empty if you do not want a game status
const owner = ""; 															 //enter bot owner id (this might come in handy later!)

var bot = new Discord.Client();
var embed = new Discord.RichEmbed()
var fortunes = [
	"Yes",
	"No",
	"Maybe"
];

bot.on("ready", function(){
	console.log("----------------------------------")
	console.log("Bot has started!");
	console.log("----------------------------------")
	bot.user.setGame(status);
	console.log("Bots game has been set to: ", status)

});

bot.on("message", function(message){
	if (message.author.equals(bot.user)) return;
	if (message.content == "hi") {
		message.channel.send("Hello!");
	}
});

bot.on("guilMemberAdd", function(member) {
	member.guild.channels.find("name","general").send(member.toString() + " welcome to ", guild.Name, "enjoy your stay!");
});

bot.on("message", function(message){
	if (message.author.equals(bot.user)) return;
	if (!message.content.startsWith(prefix)) return;

	var args = message.content.substring(prefix.length).split(" ");

	switch (args[0].toLowerCase()) {
		case "ping":
			message.channel.send("Pong!");
			console.log(message.author.username, " : Ran the command - ping");
			break;

		case "info":
			message.channel.send("js Bot 2.0");
			message.channel.send("This bot is being re written!");
			console.log(message.author.username , " : ran the command - info");
			break;

		case "8ball":
			if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]); 
			else message.channel.send("Please ask me a valid question");
			break;

		case "embedtest":
			var embed = new Discord.RichEmbed()
				.addField("v2","description")
				.addField("v2","description")
				.addField("v2","description")
				//.addField("v2","description", true)  //for these two true to be in line
				//.addField("v2","description", true)
				//.setColor("Blue")
				.setColor(0x14fbff) //https://www.hexcolortool.com/
				//.setDescription("Test Embed");
				.setFooter("jsBot 2.0 ~ By Vulcan")
				.setThumbnail(message.author.avatarURL)

			message.channel.send(embed);
			console.log(message.author.username, ": Ran the command - embedtest")
			break;

		case "tagme":
			message.channel.send(message.author.toString() + "testing a tag");
			console.log(message.author.username, " Tagged themself with - tagme")
			break;

		
		default:
			message.channel.send("That is an invalid command!");
			console.log(message.author.username , " : tried the command :" , message.content, "which does not exist!");


	}
});




//bot.on("message", function(message){
//	console.log(message.content);
//});















bot.login(token);
