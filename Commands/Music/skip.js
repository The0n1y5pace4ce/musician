const { CommandInteraction, MessageEmbed, Client } = require('discord.js');

module.exports = {
    name: "skip",
    description: "Skips the current song.",
    value: "skip",

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

            await queue.skip(VoiceChannel);
            return interaction.reply({content: '⏭ Song has been skipped'});

        } catch (e) {
            const errorEmbed = new MessageEmbed()
            .setColor("#f4424b")
            .setDescription(`<a:animated_cross:902802381803249684> **Error:** ${e}`)
            return interaction.reply({embeds: [errorEmbed]});
        }
    }
}