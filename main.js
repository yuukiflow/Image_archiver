require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
    console.log("Message detected : " + message.channelId + "Compared to " + process.env.SOURCE_CHANNEL_ID);
    if (message.attachments.size === 0) return;
    if (message.channelId === process.env.SOURCE_CHANNEL_ID.trim()) {
        console.log("Channel Found");
        let url = message.attachments.first().url;
        let collector = message.createReactionCollector();
        collector.on("collect", Reaction => DetectReaction(Reaction, url));
    }
});

async function DetectReaction(Reaction, url) {
    console.log("Reaction detected!");
    if (process.env.EMOJI != "") {
        if (Reaction.emoji.name === process.env.EMOJI) {

            Reaction.message.delete();
            let channel = await client.channels.fetch(process.env.DESTINATION_CHANNEL_ID);
            channel.send(url);

        }
    } else {
        Reaction.message.delete();
        let channel = await client.channels.fetch(process.env.DESTINATION_CHANNEL_ID);
        channel.send(url);
    }
}

client.login(process.env.CLIENT_TOKEN);
