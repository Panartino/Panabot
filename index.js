const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILD_MESSAGES", "GUILDS"] }
)

client.login(process.env.token)

client.on("ready", ()=> {
    console.log("Ciao!!! il Bot è stato avviato")
})

client.on("messageCreate", (message) => {
    if (message.content == "!Samuele") {
        message.channel.send("samuele è gay")
    }

    if (message.content == "!sbrè") {
        message.channel.send("Sono sbvè e scoveggio sopva a Tibbu")
    }


    if (message.content == "dio") {
        message.channel.send("dio non esiste CAZZO!!!!")
    }
    


    if (message.content == "!Alessandro") {
        message.channel.send("alessandro sta giocando a fortnite")
    }

    if (message.content == "!Yousef") {
        message.channel.send("Yousef sta editando un video")
    }

    if (message.content == "!amin"){
        message.channel.send("Sono Amin e faccio delle battute di merda che non fanno ridere a nessuno")
    }


    if (message.content == "!Amin"){
        message.channel.send("Sono hitler(quello matematico) e NON studio mai!!!")
    }
  
    if (message.content == "!Fra"){
        message.channel.send("Francesco viene strangolato da tibbu")
    }

    if (message.content == "!fra"){
        message.channel.send("Sono batman e combatto il crimine")
    }

    if (message.content == "!Sbrè"){
        message.channel.send("Sono Sbrè e NON mi faccio la doccia")
    }

if (message.content == "rumeni"){
        message.channel.send("VAFFANCULO RUMENI DEL CAZZO!!!")
    }

    if (message.content == "albanesi"){
        message.channel.send("Tibbu si è imbattuto in una rissa tra albanesi")
    }

    if (message.content == "!Panà"){
        message.channel.send("Sono Panà e mi vado a fare una doccia")
    }
    
    
    if (message.content == "!Tibbu"){
        message.channel.send("Sono tibbu odio tutti i rumeni CAZZO e mi sono imbattuto in una rissa tra albanesi")
    }

    if (message.content == "help") {
        var embed = new Discord.MessageEmbed()
        .setTitle("funzione")
        .setDescription("SCRIVI: !(nome di persona) per attivare il comando")
        .setThumbnail("https://www.mammaebambini.it/wp-content/uploads/2012/06/punto-esclamativo.jpg")
        message.channel.send({ embeds: [embed]})
    }




})


