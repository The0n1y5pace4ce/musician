const { CommandInteraction, MessageEmbed, Client } = require('discord.js');

module.exports = {
    name: "disconnect",
    description: "Disconnects the bot from voice channel.",
    value: "stop",

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

        try{

            await queue.stop(VoiceChannel);
            return interaction.reply({content: '⏹ Music has been stopped'});

        } catch (e) {
            const errorEmbed = new MessageEmbed()
            .setColor("#f4424b")
            .setDescription(`<a:animated_cross:902802381803249684> **Error:** ${e}`)
            return interaction.reply({embeds: [errorEmbed]});
        }
    }
}