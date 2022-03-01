const { CommandInteraction, MessageEmbed, Client } = require('discord.js');

module.exports = {
    name: "shuffle",
    description: "Shuffles the queue.",
    value: "shuffle",

    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { options, member, guild, channel } = interaction;
        const VoiceChannel = member.voice.channel;
        const queue = await client.distube.getQueue(VoiceChannel);

        if(!VoiceChannel)
        return interaction.reply({content: 'You must be in a voice channel to use music commands', ephemeral: true});

        if(guild.me.voice.channelId && VoiceChannel.id !== guild.me.voice.channelId)
        return interaction.reply({content: `I am already playing music in <#${guild.me.voice.channelId}>`, ephemeral: true});

            await queue.shuffle(VoiceChannel);
            return interaction.reply({content: '🔀 Queue has been shuffled'});

        
    }
}