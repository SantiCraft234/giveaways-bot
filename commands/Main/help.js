const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")
module.exports = {
  config: {
    name: "help",
    description: "Get a list of bot commands.",
    usage: "help",
    category: "Main",
    accessableby: "Everyone",
    aliases: [], // To add custom aliases just type ["alias1", "alias2"].
  },
  run: async (client, message, args) => {
    let avatarOptions = {
      format: 'png',
      dynamic: true,
      size: 1024
    }

    const embed = new MessageEmbed()
      .setAuthor(
        client.user.username,
        client.user.displayAvatarURL({ ...avatarOptions }),
        'https://github.com/SantiCraft234/giveaways-bot'
      )
      .setThumbnail(client.user.displayAvatarURL({ ...avatarOptions }))
      .setTitle('Help')
      .setColor('7289da')
      .addFields({
        name: `š ${config["Bot_Info"].prefix}start [channel] [duration] [winners] [prize]`,
        value: [
          'The channel has to be visible to the giveaway bot.',
          'Duration is stated in a number and a time variable.',
          'Winners is stated in a positive number.',
          'Prize can be anything except blank.'
        ].join('\n')
      }, {
        name: 'š„ Example:',
        value: [
          `āØļø ${config["Bot_Info"].prefix}start #general 10m 1 $9.99 Nitro`,
          `ā”ļø Creates a \`10 minute\` long giveaway with \`1\` winner and`,
          `\`$9.99 Nitro\` as a prize in \`#general\`.`
        ].join('\n')
      }, {
        name: `ā ${config["Bot_Info"].prefix}end [message-id]`,
        value: 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**'
      }, {
        name: 'š„ Example:',
        value: `āØļø ${config["Bot_Info"].prefix}end 892678258946659587\nā”ļø Ends the giveaway with the message-ID \`892678258946659587\`.`
      }, {
        name: `š ${config["Bot_Info"].prefix}reroll [message-id]`,
        value: 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**'
      }, {
        name: 'š„ Example:',
        value: `āØļø ${config["Bot_Info"].prefix}reroll 892678258946659587\nā”ļø Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`
      })
      .setFooter('Made with š and discord.js by SantiCraft234YT', client.user.displayAvatarURL({ ...avatarOptions }))

    if (message.guild) {
      message.channel.send('Check your DMs!');
      message.delete();
      message.author.send(embed);
    } else {
      message.author.send(embed)
    }
  },
};
