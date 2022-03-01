const { CommandInteraction, MessageEmbed, Client } = require('discord.js');

module.exports = {
    name: "play",
    description: "Plays a song/Adds a song to the queue.",
    options: [
        {name: "query",
        description: "Provide a song name or link.",
        type: "STRING",
        required: true}
    ],

    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { options, member, guild, channel } = interaction;
        const VoiceChannel = member.voice.channel;

        if(!VoiceChannel)
        return interaction.reply({content: 'You must be in a voice channel to use music commands', ephemeral: true});

        if(guild.me.voice.channelId && VoiceChannel.id !== guild.me.voice.channelId)
        return interaction.reply({content: `I am already playing music in <#${guild.me.voice.channelId}>`, ephemeral: true});

        try{
            client.distube.play( VoiceChannel, options.getString('query'), { textChannel: channel, member: member });
            return interaction.reply({content: '🎶 Request received'});

        } catch (e) {
            const errorEmbed = new MessageEmbed()
            .setColor("#f4424b")
            .setDescription(`<a:animated_cross:902802381803249684> **Error:** ${e}`)
            return interaction.reply({embeds: [errorEmbed]});
        }
    }
}