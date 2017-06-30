var Botkit = require('botkit')

var token = process.env.SLACK_TOKEN

var controller = Botkit.slackbot({
    retry: Infinity,
    debug: false
})

controller.spawn({
    token: token
}).startRTM(function (err, bot, payload) {
    if(err) {
        throw new Error(err)
    }
    console.log('Connected to Slack RTM')
})

controller.on('bot_channel_join', function (bot, message) {
    bot.reply(message, "I'm here!")
})

controller.hears(['hi'], ['ambient', 'direct_message','direct_mention', 'mention'], function (bot, message) {
    bot.reply(message, 'Hello.')
})