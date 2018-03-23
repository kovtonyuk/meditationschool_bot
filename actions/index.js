const helpers = require('../helpers');
const KB = require('../src/components/menu');

function sendGreeting(bot, msg, sayHello = true) {
    const text = sayHello
        ? `Привет, ${msg.from.first_name}! Я DZEN-бот 'Школы Медитации', твой персональный инструктор по медитации. Со мной ты попробуешь разные техники медитации, узнаешь, как обучиться трансцендентальной медитации и сможешь сделать свою практику регулярной полезной привычкой. Ты готов? Тогда жми Start и keep calm and meditate!`
        : `Что вы хотите сделать?`
    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [KB.course],
                [KB.more_about_technic],
                [KB.challenge],
                [KB.study, KB.question, KB.support_after]
            ]
        }
    })
}

function sendCourse(bot, msg) {
    bot.sendMessage(msg.chat.id, "*МЕДИТАЦИЯ -* это must have для успешных людей и предпринимателей, разберись, как использовать этот инструмент",  {parse_mode: "Markdown",
        reply_markup: {
            keyboard: [
                [KB.next],
                [KB.back]
            ]
        }
    })
}

function sendMoreAboutTechnic(bot, msg) {
    bot.sendMessage(msg.chat.id, `Хотите узнать больше о техниках медитации, подписывайтесь на наш канал https://t.me/meditation_school`,  {
        reply_markup: {
            keyboard: [
                [KB.main_menu]
            ]
        }
    })
}

function sendStudy(bot, msg) {
    bot.sendContact(msg.chat.id, `+380637481841`, `Виктория`, {
        reply_markup: {
            keyboard: [
                [KB.step_back],
                /*[KB.main_menu]*/
            ]
        }
    })
}

function sendGoBack(bot, msg) {
    bot.sendMessage(msg.chat.id, `Выбери шаг, на котором остановился`, {
        reply_markup: {
            keyboard: [
                [KB.more_about_technic, KB.challenge],
                [KB.study, KB.question, KB.support_after],
                [KB.day_one_2, KB.day_two_2, KB.day_three_2, KB.day_four_2, KB.day_five_2, KB.day_six_2, KB.day_seven_2]
            ]
        }
    })
}

function sendAbout(bot, msg) {
    bot.sendMessage(msg.chat.id, `Как будет проходить курс`, {
        reply_markup: {
            keyboard: [
                [KB.day_one],
                [KB.main_menu]
            ]
        }
    })
}

function sendData(bot, msg, data) {
    bot.sendMessage(msg.chat.id, data.text, {
        parse_mode: "Markdown",
        reply_markup: {
            keyboard: helpers.getMenu(KB, data.menu)
        }
    })
}

function sendWellDone(bot, msg) {
    bot.sendMessage(msg.chat.id, `Молодец! Углубляй свои знания`, {
        reply_markup: {
            keyboard: [
                [KB.again],
                [KB.regularly],
                [KB.study, KB.question],
                [KB.main_menu]
            ]
        }
    })
}

function sendChallenge(bot, msg) {
    bot.sendMessage(msg.chat.id, `Здесь будут присылаться автоматически задания на 21 день`, {
        reply_markup: {
            keyboard: [
                [KB.study, KB.question],
                [KB.main_menu]
            ]
        }
    })
}

module.exports = {
    sendGreeting,
    sendCourse,
    sendMoreAboutTechnic,
    sendStudy,
    sendGoBack,
    sendAbout,
    sendData,
    sendWellDone,
    sendChallenge
}