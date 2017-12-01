# jsbot 2.0
After making the original jsbot it never really got finished as I left it broken and never fixed it up (which was a while back in August!) I have came back now as from December 1'st to give discord.js another go and take a break from python to create this application! You can add this bot to your very own server I will get that link *soon!* 

All source code above is written and tested by my self. If I ever do a collaboration for this bot then other users will be credited although as of now it is just my self who is working on this bot. The re written version of this bot will be *alot* better than version 1. Version 2 will have much nicer commands and better console logging to get an idea of the bot. Im sorry I just like things being logged because im like that. Its also nice to see what commands people are using. If you wish to contribute to the development of the bot then feel free to fork the repo and submit a pull request! I will be only commiting working updates of the bot (unlike last time committing broken code *how stupid of me*)

If you have any questions or bug reports etc then feel free to open up an issue on this repo and I will get back to you!

## Basic ping command
This could be set to change if there is a more efficent way of doing it! Although for now this is how it is staying

```javascript
  
  case "ping":
	message.channel.send("Pong!");
	console.log(message.author.username ": Ran the command - ping");
	break;

```

# Requirements

* [Node.js](https://nodejs.org/en/)
* [Discord.js](https://discord.js.org/en/)



# How to run

### Follow the ***three*** simple steps below to get your own instance running! ***providing you have the requirements above***

* Download the Bot

* Edit required information *so the bot can run*
	* Line 2 ~ Bots Token  	       (**required**)
	* Line 3 ~ Bots Prefix 	       (**required**)
	* Line 4 ~ Bots Playing Status (**not required**)
	* Line 5 ~ Bots owner ID       (**not required as of Version: 2.0**)

* Run bot.js
	* (Run in your bots root directory) `node bot`

### Enjoy! Show us your own insance running!


