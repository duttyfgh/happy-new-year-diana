export interface IGift {
    id: number 
    img: string
    giftLockedImage: string
    giftOpenedImage: string
    dateOfOpening: string
    whish: string
}

const gifts: IGift[] = [
    {//TODO: change all years into 2024
        id: 1,
        giftLockedImage: '/red-locked-gift.png',
        giftOpenedImage: '/red-gift.png',
        dateOfOpening: '20.12.2023',
        whish: 'Все что мне нужно для счастья это ты. У нас с тобой обезательно все получиться. Спасибо что ты всегда со мной 💗',
        img: '/day1.png'
    },
    {
        id: 2,
        giftLockedImage: '/red-locked-gift.png',
        giftOpenedImage: '/red-gift.png',
        dateOfOpening: '21.12.2023',
        whish: 'У меня с тобой связаны самые приятные воспоминания, спасибо за это ахуеное лето вместе, я навсегда его запомню как наше первое лето вместе <3',
        img: '/day2.png'
    },
    {
        id: 3,
        giftLockedImage: '/red-locked-gift.png',
        giftOpenedImage: '/red-gift.png',
        dateOfOpening: '22.12.2023',
        whish: 'Желаю тебе удачки в словацком, незабывай что я в тебя верю и ты моя умничка, у тебя все обезательно получиться моя lovely slovak girl, milujem ťa <3',
        img: '/day3.png'
    },
    {
        id: 4,
        giftLockedImage: '/red-locked-gift.png',
        giftOpenedImage: '/red-gift.png',
        dateOfOpening: '23.12.2023',
        whish: 'Дианаа! Ты такой котенок просто посмотри, ты такая миленькая на этой фотке, два моих любимых котика, сначала одну заберем, а потом и второго 😏',
        img: '/day4.png'
    },
    {
        id: 5,
        giftLockedImage: '/blue-locked-gift.png',
        giftOpenedImage: '/blue-gift.png',
        dateOfOpening: '24.12.2023',
        whish: 'Ты моя самая любимая, самая красивая девочка, твои глазки просто сводят меня с ума 😵, твои губки простпаоор самые миленькие на свете, ты такая милашка, действуешь на меня как терапия, час посмотрел на тебя и все стало хорошо 😌. Я ОБОЖАЮ ТЕБЯ!',
        img: '/day5.png'
    },
    {
        id: 6,
        giftLockedImage: '/blue-locked-gift.png',
        giftOpenedImage: '/blue-gift.png',
        dateOfOpening: '25.12.2023',
        whish: 'Для меня абсолютно не важно как ты вышлядишь ты всегда будешь моей маленькой принцессой, в шапке, в коробке, капюшоне, с грязными, растрепаными волосами, мне все это не важно я люблю тебя без условий.',
        img: '/day6.png'
    },
    {
        id: 7,
        giftLockedImage: '/blue-locked-gift.png',
        giftOpenedImage: '/blue-gift.png',
        dateOfOpening: '26.12.2023',
        whish: 'Ты самый близкий для меня человек и я уверен ты навсегда такой и останешся, твои милые, зеленые, приятные глазки всегда будут вызывать бабочек у меня в животе🦋',
        img: '/day7.png'
    },
    {
        id: 8,
        giftLockedImage: '/blue-locked-gift.png',
        giftOpenedImage: '/blue-gift.png',
        dateOfOpening: '27.12.2023',
        whish: 'Мы все тебя очень любим, мама всегда спрашивает о тебе с улыбкой и смущением, с такими же эмоциями я ей отвечаю 🤗, часто говорит о тебе первая, рассказывает как вы поговорили, обсуждает со мной твоих учителей, это все очень мило',
        img: '/day8.png'
    },
    {
        id: 9,
        giftLockedImage: '/green-locked-gift.png',
        giftOpenedImage: '/green-gift.png',
        dateOfOpening: '28.12.2023',
        whish: 'Ты моя первая любовь, первые крепкие обьятия, первый поцелуй, первая ночевка, первый секс, первый человек кому я так доверяю, я очень рад что все это я испытал именно с тобой, у меня навсегда остануться с тобой самые теплые и приятные воспоминания',
        img: '/day9.png'
    },
    {
        id: 10,
        giftLockedImage: '/green-locked-gift.png',
        giftOpenedImage: '/green-gift.png',
        dateOfOpening: '29.12.2023',
        whish: 'Мне всегда нравились твои милые глазки, помню еще зимой сходил с ума по ним, они - это самая милая часть твоего тела, они просто очаровывают 😵',
        img: '/day10.png'
    },
    {
        id: 11,
        giftLockedImage: '/green-locked-gift.png',
        giftOpenedImage: '/green-gift.png',
        dateOfOpening: '30.12.2023',
        whish: 'Мне так ахуено с тобой, я хочу проводить все свое вермя с тобой, хочу жить с тобой, просыпаться и засыпать, я хочу видеть твое милое, сонное личико по утрам, и наслаждаться тобой весь день, все время, я обожаю тебя😭💗💕',
        img: '/day11.png'
    },
    {
        id: 12,
        giftLockedImage: '/green-locked-gift.png',
        giftOpenedImage: '/green-gift.png',
        dateOfOpening: '31.12.2023',
        whish: 'Ты невероятно изменилась за этот год, мне так приятно видеть что ты меняешся в лучшую сторону, я безумно за тебя рад ты развиваешся во все стороны, с каждым днем ты становишся лучше и лучше, пожалуйста не останавливайся, я не представляю какой ахуеной ты будешь еще через год 😍',
        img: '/day12.png'
    },
    {
        id: 13,
        giftLockedImage: '/golden-locked-gift.png',
        giftOpenedImage: '/golden-gift.png',
        dateOfOpening: '01.01.2023',
        whish: 'Спасибо тебе за этот незабываемый год вместе, мы максимально наслодились друг другом, я желаю тебе оставаться такойже красивой, очаровательной и милой девочкой, я верю что у тебя обезательно все получиться. Это наш второй новый год вместе но еще долеко не последний😏. С новым годом любимочка💗💕',
        img: '/day13.png'
    },
]

export const getGiftById = (id: number) => {
    const specificGift = gifts[id -1]

    return specificGift
}

export default gifts