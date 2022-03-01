const { Connect4 } = require('discord-gamecord');
const { CommandInteraction, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'connect4',
    description: "Play connect4 in discord!",
    options: [{
        name: 'opponent',
        description: 'Choose an opponent to play against',
        type: 'USER',
        required: true
      }],
    
    async execute(interaction, client) {
        new Connect4({
            message: interaction,
            slash_command: true,
            opponent: interaction.options.getUser('opponent'),
            embed: {
              title: 'Connect 4',
              color: '#5865F2',
            },
            emojis: {
              player1: '🔵',
              player2: '🟡'
            },
            waitMessage: 'Waiting for the opponent...',
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
            drawMessage: 'It was a draw!',
            othersMessage: 'You are not allowed to use buttons for this message!',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
            cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
          }).startGame()
          
    }
}