const { MessageEmbed, CommandInteraction} = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Get the commands of the bot!',
    options: [
        {
            name: 'type',
            description: 'Select the help commands type!',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'Music Commands',
                    value: 'musichelp'
                },
                {
                    name: 'Other Commands',
                    value: 'otherhelp',
                },
                {
                    name: 'Utility Commands',
                    value: 'utilhelp'
                },
                {
                    name: 'Game Commands',
                    value: 'gamehelp'
                }
            ]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const choices = interaction.options.getString('type');

        switch(choices) {
            case 'musichelp' : {
                const musicEmbed = new MessageEmbed()
                .setTitle('Music Commands')
                .setDescription('KSP commands for the bot')
                .addField('disconnect', 'Disconnect the bot from the voice channel (also clears the queue)', true)
                .addField('Filters', 'Different filters for the current music playing', true)
                .addField('Pause', 'Pause the currently playing music', true)
                .addField('Play', 'Choose a song to play/add to the queue', true)
                .addField('Previous', 'Play the previous song!', true)
                .addField('Queue', 'Display the queue of songs!', true)
                .addField('Related Song', 'Add a related song to the one currently playing')
                .addField('Resume', 'Resume the song!', true)
                .addField('Seek', 'Seek to a certain part in the song currently playing')
                .addField('Shuffle', 'Shuffle the queue', true)
                .addField('Skip', 'Skip the currently playing song', true)
                .addField('Volume', 'Select the volume to play songs at')

                interaction.reply({embeds: [musicEmbed], ephemeral: true})
            }
            break;
            case 'otherhelp' : {
                const otherEmbed = new MessageEmbed()
                .setTitle('Other Commands')
                .setDescription('Other commands for Musician')
                .addField('Discord Together', 'Initiate a Discord Together activity', true)
                .addField('Enlarge', 'Enlarge a selected emoji', true)
                .addField('Advice', 'Random life advice', true)
                .addField('Reddit', 'Get a post from any subreddit', true)
                .addField('Reverse', 'Reverse any text!', true)

                interaction.reply({embeds: [otherEmbed], ephemeral: true,})
            }
            break;
            case 'utilhelp' : {
                const utilEmbed = new MessageEmbed()
                .setTitle('Utility Commands')
                .setDescription('Utility commands for the Musician')
                .addField('Help', 'Help menus', true)
                .addField('status', 'Shows the bots status', true)
                .addField('User Info', 'Get info on a selected user', true)
                .addField('Translate', 'Translate anything to any language', true)
                .addField('Poll', 'Create a poll')

                interaction.reply({embeds: [utilEmbed], ephemeral: true})
            }
            break;
            case 'gamehelp' : {
                const gameEmbed = new MessageEmbed()
                .setTitle('Game Commands')
                .setDescription('Game commands of musician coz who doesn\'t want to have fun in discord!', true)
                .addField('Connect 4', 'Play connect 4 against another in the server!', true)
                .addField('Fish', 'Go fish', true)
                .addField('Guess The Pokemon', 'Who\'s that pokemon?!')
                .addField('Rock Paper Scissors (rps)', 'Play rock, paper, scissors against another in the server!', true)
                .addField('Snake', 'A simple game of snake', true)
                .addField('Trivia', 'Gives a trivia question!', true)
                .addField('Tic Tac Toe (ttt)', 'Play Tic, Tac, Toe against someone else in the server', true)
                .addField('Would You Rather (wyr)', 'Play Would You Rather', true)
                .addField('8ball', 'Ask the magic 8 Ball a question', true)

                interaction.reply({embeds: [gameEmbed], ephemeral: true})
            }
        }
    }
}