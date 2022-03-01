const { CommandInteraction, MessageEmbed, Client } = require('discord.js');

module.exports = {
    name: "volume",
    description: "Changes the volume of the music.",
    options: [
        {name: "percent",
        description: "Provide a percentage of volume for the bot(1-100).",
        type: "NUMBER",
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
            const Volume  = options.getNumber('percent');
                    if(Volume > 100 || Volume < 1)
                    return interaction.reply({content: 'You have to specify a number between 1 and 100'});

                    client.distube.setVolume(VoiceChannel, Volume);
                    return interaction.reply({content: `🔈 Volume has been set to \`${Volume}\``});

        } catch (e) {
            const errorEmbed = new MessageEmbed()
            .setColor("#f4424b")
            .setDescription(`<a:animated_cross:902802381803249684> **Error:** ${e}`)
            return interaction.reply({embeds: [errorEmbed]});
        }
    }
}