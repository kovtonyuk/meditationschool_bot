const TelegramBot = require(`node-telegram-bot-api`)
const TOKEN = `417559748:AAEK8NC7sJbjalzci8xAk2n3PV0B3vjVw6U`
const bot = new TelegramBot(TOKEN, {
    polling: true
})

const data = require("./src/data/data");
const KB = require("./src/components/menu");
const actions = require('./actions');

bot.onText(/\/start/, msg => {
    actions.sendGreeting(bot, msg)
})

bot.on('message', msg => {

    switch(msg.text) {
case KB.course:
    actions.sendCourse(bot, msg)
    break
case KB.more_about_technic:
    actions.sendMoreAboutTechnic(bot, msg)
    break
case KB.study:
case KB.question:
    actions.sendStudy(bot, msg)
    break
case KB.support_after:
    break
case KB.back:
    actions.sendGreeting(msg, false)
    break
case KB.next:
    actions.sendAbout(bot, msg)
    break
case KB.day_one:
case KB.day_one_2:
    actions.sendData(bot, msg, data[0])
    break
case KB.day_two:
case KB.day_two_2:
    actions.sendData(bot, msg, data[1])
    break
case KB.day_three:
case KB.day_three_2:
    actions.sendData(bot, msg, data[2])
    break
case KB.day_four:
case KB.day_four_2:
    actions.sendData(bot, msg, data[3])
    break
case KB.day_five:
case KB.day_five_2:
    actions.sendData(bot, msg, data[4])
    break
case KB.day_six:
case KB.day_six_2:
    actions.sendData(bot, msg, data[5])
    break
case KB.day_seven:
case KB.day_seven_2:
    actions.sendData(bot, msg, data[6])
    break
case KB.done:
    actions.sendWellDone(bot, msg)
    break
case KB.again:
    actions.sendData(bot, msg, data[0])
    break
case KB.main_menu:
    actions.sendGreeting(bot, msg, false)
    break
case KB.step_back:
    actions.sendGoBack(bot, msg)
    break
case KB.regularly:
case KB.challenge:
    actions.sendChallenge(bot, msg)
    break
}
})