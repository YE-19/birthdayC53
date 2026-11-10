// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '1104',
    title: 'enter a secret date',
    subtitle: 'Every beautiful story has a beginning..." ❤️',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'no try, A day in April, 2024.',
      'no try, 1104',
    ],
    sticker: '/images/hello-kitty-crying.jpg',
  },

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', sticker: '/images/hello-kitty-camera.jpg', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', sticker: '/images/hello-kitty-flowers.jpg', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', sticker: '/images/hello-kitty-music.jpg', label: 'our\nsong' },
      { id: 'letter', icon: '💌', sticker: '/images/hello-kitty-cake.jpg', label: 'Love\nLetter' },
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always' },
      { src: '/images/memory6.jpg', label: '❤️', tag: 'mine' },
      { src: '/images/memory7.jpg', label: '❤️', tag: 'us' },
    ],
  },



  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      `"I love you and every little thing about you ♡"`,
      `"I get lost in your eyes; nothing else compares ✨"`,
      `"Everything sweet and beautiful reminds me of you 🌷"`,
      `"The mother of my future kids ♥️"`,
      `"The heart and warmth of my home 🏡"`,
      `"My wife and my greatest pride 👑"`,
      `"My whole world and everything in it 💫"`,
      `"My family, my home, and my everything 💕"`,
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `كل سنة وإنتِ طيبة يا حبيبتي، يا أجمل حاجة حصلتلي ❤️

عارفة؟ ساعات بقعد أفكر إزاي يوم اللي اتقابلنا فيه اول مرة انه يوم عادي لكنه بالنسبالي كان بداية حكاية بقيت من أغلى الحاجات في حياتي. من اليوم ده وإنتِ بقيتي جزء من تفاصيل كتير أوي، بقيتي فرحتي وراحتي وضحكتي، والشخص اللي مهما حصل بحب أشاركه كل حاجة.

أنا مش عارف أوصفلك إنتِ غالية عندي قد إيه، ولا أقولك وجودك فارق معايا إزاي، بس كل اللي أعرفه إني ممتن جدًا إن ربنا جمعني بيكي، وإن من وسط كل الناس دي كلها كان ليا نصيب أعرفك وأحبك.

في عيد ميلادك بتمنالك كل حاجة حلوة في الدنيا، كل أحلامك تتحقق، وكل أيامك تبقى مليانة فرحة ونجاح وراحة بال، ونفسي أكون جنبك في كل خطوة، أشوفك بتوصلي لكل اللي بتحلمي بيه، وأفضل الشخص اللي بيشاركك ضحكتك وفرحتك وكل لحظة حلوة و عيد ويلادك الجاي نكون بنحتفل بيه ف بيتنا ♥️

ونفسي نفضل نحتفل بعيد ميلادك سنة ورا سنة، وكل سنة أكون بحبك أكتر من اللي قبلها، ونبص ورا ونفتكر كل الحاجات اللي عدينا بيها ونضحك ونقول إن كل ده كان مجرد بداية.

كل سنة وإنتِ حبيبتي، وكل سنة وإنتِ احلي حاجة ف حياتي، ولو رجع بيا الزمن ألف مرة، هختارك إنتِ في كل مرة.

بحبك يا كوكووو ❤️♾️`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },


}

export default content
