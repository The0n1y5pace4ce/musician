const { Client, Collection } = require('discord.js');
const client = new Client({intents: 32767});
const { Token } = require('./config.json');
const { promisify } = require('util');
const { glob } = require('glob');
const Ascii = require('ascii-table');
const { table } = require('console');
const PG = promisify(glob);

client.commands = new Collection()

const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddListWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()]
});
module.exports = client;

const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client); 

require("./Handlers/Events")(client);
["Commands"].forEach((handler) => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
  });

client.login(Token);