const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILD_MESSAGES", "GUILDS"] }
)

client.login(OTQyMzcxMDQ2NjM4NjI4OTM0.YgjhbQ.tuSVzwGw0xoeQgJ2kWb5YP4f2x0)

client.on("ready", ()=> {
    console.log("Ciao!!! il Bot è stato avviato")

    client.guilds.cache.forEach(guild => {
        guild.commands.create({
            name: "ping",
            description: "comando di test"
        })
    })
    
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
    

    if (message.content == "!Mattii") {
        message.channel.send("Sono Tommaso cercando di non rovinare il giretto di panà")
    }



    if (message.content == "!lolmatfun") {
        message.channel.send("Sono Funari NON rompete i coglioni sto giocando a fifa!!!")
    }


    if (message.content == "!pinsucci") {
        message.channel.send("Sono pinsucci e sono crashato oid ocrop!!")
    }


    if (message.content == "Dio") {
        message.channel.send("dio si scrive con la lettera minuscola!!!")
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


