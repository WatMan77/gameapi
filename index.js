// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const { getBucket } = require('./helpers.js');
const { sendTirsk } = require('./tirsk');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

/* client.on('interactionCreate', async (interaction) => {
	if(!interaction.isCommand()){
		return;
	}

	const { commandName } = interaction

	if(commandName === 'bucket'){
		try {
		// Returns a list of games with all of their properties (.title, .offerType, .status) but not all of them work
		const games = await getBucket()
		await interaction.reply(`Epic games https://store.epicgames.com/en-US/:\n${games.map(x => x.title).join('\n')}`)

		} catch (e) {
			console.error(e)
		}
	}
})
 */
client.on("messageCreate", async (msg) => {
	// const channel = client.channels.cache.get(msg.channelId)

	if(msg.content === '/bucket'){
		try {
			const games = await getBucket()
			await msg.reply(`Epic games https://store.epicgames.com/en-US/:\n${games.map(x => x.title).join('\n')}`)
		} catch (e) {
			console.error(e)
		}
	}

	if(msg.author.username !== 'Gameapi' && sendTirsk(msg.content.toLowerCase().split(' '))){
		msg.reply('(tirsk)')		
	}
} )
// Login to Discord with your client's token
client.login(token);