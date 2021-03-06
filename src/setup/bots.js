const Bots = require('../models/bots')

const deleteBots = () => {
    Bots.deleteBots()
}

const createBots = () => {
    const payload = [
        {
            name: 'Woland',
            answers: [
                'А факт — самая упрямая в мире вещь',
                'Люди как люди. Любят деньги, но ведь это всегда было… Человечество любит деньги, из чего бы те ни были сделаны, из кожи ли, из бумаги ли, из бронзы или из золота. Ну, легкомысленны… ну, что ж… и милосердие иногда стучится в их сердца… обыкновенные люди… в общем, напоминают прежних… квартирный вопрос только испортил их…',
                'Кирпич ни с того ни с сего никому и никогда на голову не свалится.',
                'Мы говорим с тобой на разных языках… но вещи, о которых мы говорим, от этого не меняются.',
                'Свежесть бывает только одна — первая, она же и последняя. А если осетрина второй свежести, то это значит, что она тухлая!',
                'Сядьте-ка.',
                'Молчи.',
                'Вы, судя по всему, человек исключительной доброты? Высокоморальный человек?',
                'Вы хотите со мной поспорить?',
                'Имейте в виду, что Иисус существовал.',
                'Да, человек смертен, но это было бы ещё полбеды. Плохо то, что он иногда внезапно смертен, вот в чём фокус!',
            ],
            icon : 'https://i.ibb.co/vdMm6Tw/65992ab7a27d8d924182849f5b261a2c0e729c25r1-480-640v2-00.jpg'
        },
        {   
            name:'Антон',
            answers: [
                "— А вы хорошо учились в школе?" + "\r\n" + "— Угу. Но-о-о... Очень.",
                'Осень очень хорошее время. Разбежались школьники по школам, рабочие по рабочим...',
                'Опять крысиные мысли пошли...',
                'Я уже неделю хожу на работу и ни разу туда не пришел!',
                'Мы изобрели какой-то провод странный, зачем он нужен? 5 лет работали над ним',
                'Всё уже. Всё. Всё одно и то же. Каждый год. Я уже неделю на работу хожу и ни разу ещё туда не пришел! Для кого всё это? Для вас? Мы стараемся, делаем. У нас четыре корпуса.  Эээ… нашего НИИ. И я не знаю сколько там людей работает. Очень много. Четыре корпуса, а толку никакого.',
                'Чё за фокус?',
                'Настроение упало.',
                'Так получается, что вы единственный представитель грибного сообщества, что согласились со мной общаться. Откуда такая смелость?',
                'Меня ондатра покусала',
                'Кому же я безработный буду нужен?',
                'Спорт — это очень хорошо. Но хорошего понемножку.',
                'Полундра!'
            ],
            icon : 'https://i.ibb.co/71DFNSR/9afb6dba-a868-4b5c-a90c-1e23fba9d00c.jpg'
        },
        {
            name: 'Проф. Преображенский',
            answers: [
                'Еда, Иван Арнольдович, штука хитрая. Есть нужно уметь, а представьте себе — большинство людей вовсе есть не умеют. Нужно не только знать что съесть, но и когда и как.',
                'Да, я не люблю пролетариат.',
                'Никогда не читайте перед обедом советских газет.',
                'Успевает всюду тот, кто никуда не торопится!',
                'То есть он говорил? Это еще не значит быть человеком.'
            ],
            icon : 'https://i.ibb.co/SNdX64C/200033-original.jpg'
        },
        {   
            name: 'Socrates',
            answers: [
                'Олицетворяй то, чему ты учишь, и учи только тому, что ты олицетворяешь.',
                '«Сейчас» — это всё, что у тебя есть...',
                'Делай движение ради движения. Только здесь и сейчас.',
                'Посему, очевидно, что именно твой ум, а не обстоятельства или другие люди, являются источником твоих настроений.',
                'Знание и мудрость — не одно и то же. Мудрость — это применение знаний.',
                'Привычка. Вот проблема. Всё, что тебе нужно, — это быть осознанным в своём выборе и ответственным за свои действия.'
            ],
            icon : 'https://i.ibb.co/T2vzq6T/screen-2.jpg'
        },
        {
            name:'Busido',
            answers: [
                'Минимализм',
                'Не верьте всему, что сказано',
                'Откажитесь от одержимости удовольствиями',
                'Научитесь принимать жизнь такой, какой она есть',
                'Откажитесь от желания',
                'Не обольщайтесь'
            ],
            icon : 'https://i.ibb.co/VxqzrHS/7-principiv-kodeksu-samurayiv-busido-thumb.jpg'
        },
        
    ]

    Bots.createBots(payload)
}

deleteBots()

createBots()