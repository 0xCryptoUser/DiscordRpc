let discord = require("selfbot.js")

let rpcGenerator = require("discordrpcgenerator")

var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))// ou require("uuid/v4")

let client = new discord.Client()

 

client.login("Ton token")

 

client.on("ready", () => {

    rpcGenerator.getRpcImage("id de ton app", "nom de l'image")

    .then(image => {

        let presence = new rpcGenerator.Rpc()

        .setName("TonTexte")

        .setUrl("https://twitch.tv/tontwitch")

        .setType("PLAYING")

        .setAssetsSmallImage(image.id)

        .setApplicationId("Ton Application discord")

        .setAssetsLargeImage(image.id)

        .setAssetsLargeText(image.name)

        .setDetails("Ce que tu veux.")

        .setState()

        .setStartTimestamp(Date.now())

 

        client.user.setPresence(presence.toDiscord())

    }).catch(console.error)

})
