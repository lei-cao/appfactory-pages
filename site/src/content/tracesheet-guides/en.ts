// English guide bodies. Labels in [[…]] are app_en.arb strings, verbatim.
import type { LwGuideSet } from "../tracesheet-guides";

export const guidesEn: LwGuideSet = {
  chrome: {
    indexTitle: "LingoWonders guides",
    indexMetaTitle: "LingoWonders Guides: Reading, Writing, Dictation, Sheets",
    indexDescription:
      "Step-by-step guides to LingoWonders: read along, record yourself, make a Week Pack, write stroke by stroke, run dictation and print 田字格 sheets.",
    indexIntro:
      "Ten short guides, in the order a week usually runs. Each one names the buttons the way the app does and shows the real screen.",
    guides: "Guides",
    step: "Step {n}",
    steps: "{n} steps",
    tipsTitle: "Good to know",
    next: "Next guide",
    previous: "Previous guide",
    allGuides: "All guides",
    updated: "Updated {date}",
    getApp: "Get LingoWonders",
    getAppBody: "Free on iPhone and iPad. No account, no ads, no subscription.",
    help: "Still stuck? The app has its own Help & FAQ under Settings, or write to {email}. A real person reads every message.",
  },
  guides: {
    "getting-started": {
      title: "Your first week with LingoWonders",
      metaTitle: "Getting Started with LingoWonders: Your First Week",
      description:
        "The five tabs, your first word list, and how the Week tab turns it into a plan: listen, read aloud, write, dictation and printed sheets.",
      summary: "The tabs, your first list, and the Week plan.",
      intro: [
        "LingoWonders runs on a one-week loop. You put in this week's words or a text you want to read, listen to it, say it, write it by hand, check it and print it. This guide gets you round the loop once.",
        "There is no account to make. Everything below works on iPhone and iPad.",
      ],
      steps: [
        {
          title: "Know the five tabs",
          body: [
            "The bar at the bottom has five places:",
            [
              "[[Week]] shows this week's plan.",
              "[[Lists]] holds your lists, and the ready-made decks in the [[Library]].",
              "The [[+]] button adds a list or a reading.",
              "[[Read]] has your readings, stories and videos.",
              "[[Settings]] has voices, languages, backup and Help & FAQ.",
            ],
          ],
          figure: {
            screen: "09-library",
            alt: "The Lists tab open on the Library, with the tab bar at the bottom: Week, Lists, the + button, Read and Settings",
            caption: "The tab bar sits under every screen. Here Lists is open on the Library.",
          },
        },
        {
          title: "Choose who is learning",
          body: [
            "Each child or learner has their own lists, progress and recordings. Switch with the picture at the top left of [[Week]], [[Lists]] and [[Read]]. Add and manage children in [[Settings]] › [[Children]].",
            "Free has one profile. Pro has more, and Family Sharing shares Pro with your family.",
          ],
        },
        {
          title: "Make your first list",
          body: [
            "Tap [[+]], then [[Add to a list]]. Type or paste words or sentences, or use the bar: [[Paste]], [[Scan]], [[YouTube]], [[Web link]], [[File]]. Words wait in [[Quick notes]] until you pick a list.",
            "For a school spelling list, photograph the sheet with [[Scan]]. Photo lists are free and unlimited, the photo stays with the list, and long sentences stay whole.",
          ],
        },
        {
          title: "Or start from the Library",
          body: [
            "Open [[Lists]] › [[Library]] and pick a language: 简体, 繁體, English, 日本語 or 한국어. Decks are grouped by level and topic. Search by word, reading or meaning: typing “shui” finds 水.",
            "The free decks include HSK 3.0 levels 1 to 3, about 2,200 words in Simplified and Traditional. Levels 4 to 6 are in Pro.",
          ],
        },
        {
          title: "Practise from the list",
          body: [
            "Open a list and pick a tile: [[Dictation]], [[Flashcards]], [[Write on screen]] or [[Print sheets]]. Every word shows its reading and meaning, and the speaker button reads it aloud.",
          ],
          figure: {
            screen: "06-write",
            alt: "Write screen in Trace mode: はなび (hanabi, fireworks) with a large 花 to trace, following the red stroke",
            caption: "Write on screen: trace in stroke order with a finger or Apple Pencil.",
          },
        },
        {
          title: "Let the Week tab lead",
          body: [
            "The [[Week]] tab keeps one card per list and shows the next step as one button, so you don't have to remember what comes after dictation.",
            "If you make a Week Pack from the list, the pack becomes that week's plan: listen, read aloud, dictation, a test sheet, Paper Check and the misses.",
          ],
        },
      ],
      tips: [
        "Words become Known after they are right on two different days. A miss sends a word back to learning, and words come back for review after 1, 2, 4, 7 and 14 days.",
        "The voice uses the voices already on your phone, so it works offline. For a more natural one, download an Enhanced or Premium voice: iPhone Settings → Accessibility → Read & Speak → Voices.",
        "There is no automatic sync. To move to a new phone, use [[Settings]] › [[Move to a new phone]].",
      ],
    },

    "read-anything": {
      title: "Read anything: photos, text, web pages and YouTube",
      metaTitle: "Read Anything in LingoWonders: Photos, Web Pages, YouTube",
      description:
        "Turn a book page, pasted text, a PDF, a web page or a YouTube video with captions into a reading with pinyin, kana and translations in LingoWonders.",
      summary: "Book pages, pasted text, files, web pages and YouTube captions.",
      intro: [
        "A reading is any text you want to learn from: a page of a storybook, an article, the captions of a video. LingoWonders splits it into sentences, adds the reading over the words and the translation below, and reads it aloud.",
        "Ready-made stories in Chinese, English, Japanese and Korean are in [[Read]] already. This guide is about bringing your own.",
      ],
      steps: [
        {
          title: "Start a new reading",
          body: [
            "Tap [[+]], then [[New reading]], and choose where the text comes from:",
            [
              "[[Photos]]: take or pick the pages of a book.",
              "[[Paste text]]: any text you copied.",
              "[[File]]: text, subtitles, PDF or a picture.",
              "[[Web link]]: the text of a web page.",
              "[[YouTube link]]: a video with captions.",
            ],
          ],
        },
        {
          title: "Book pages: photograph them in order",
          body: [
            "Take a photo of each page, in order. Hold a page and drag it to move it, then tap [[Read the text]]. The text is read on your phone.",
            "Free reads one page at a time; Pro reads whole books of many pages at once. Pages set in horizontal lines work best; vertical Japanese text can't be read yet.",
          ],
        },
        {
          title: "Web pages and YouTube: paste the link",
          body: [
            "For a page, paste the address and tap [[Get the text]]. For a video, paste a youtube.com or youtu.be link, tap [[Find captions]] and pick the captions to read. The reading then plays with the video.",
            "Your phone opens the page or the captions itself. Nothing goes through our servers.",
            "Some videos have no captions, and YouTube sometimes refuses to send them. Then paste the text instead: the video still plays as the audio.",
          ],
        },
        {
          title: "Check the text, then create the reading",
          body: [
            "On [[Check the text]], set the title and the language, and tap a sentence to fix it: edit it, join it with the next one, split it or delete it. Then tap [[Create reading]].",
          ],
        },
        {
          title: "Share straight from other apps",
          body: [
            "In Safari, YouTube, Photos, Files or any app with a Share button, tap Share and choose LingoWonders. The page, video, text, photos or file open in Read as a new reading. The next guide shows what each one becomes.",
          ],
        },
        {
          title: "Read along",
          body: [
            "Each sentence shows the reading over the words and a translation below. The reading button in the bar turns readings on or off; [[Settings]] › Learning chooses which ones show: pinyin, zhuyin, Jyutping, kana, romaji or both. Korean shows its romanization.",
            "The translate icon uses Apple's on-device translation, which needs iOS 18 or later. Nothing is sent online for it.",
          ],
          figure: {
            screen: "01-read",
            alt: "A reading of the story 司马光砸缸 with pinyin over every word and an English translation under each sentence; the first sentence is highlighted while it plays",
            caption: "Pinyin over the words, a translation below, and the sentence being read is highlighted.",
          },
        },
      ],
      tips: [
        "All the built-in stories are free, and so is a daily allowance of your own readings. Pro removes the limit and takes longer texts.",
        "A badge on each reading shows how many of its words you already know, and its level.",
        "Readings can be played with the screen off, with lock-screen controls. See “Listen, tap a word, and read it aloud”.",
      ],
      related: [{ guide: "share-to-lingowonders", label: "Next: share to LingoWonders from any app" }],
    },

    "share-to-lingowonders": {
      title: "Share to LingoWonders from YouTube, Safari or any app",
      metaTitle: "Share to LingoWonders from YouTube, Safari or Any App",
      description:
        "Tap Share in YouTube, Safari, Photos or Files and choose LingoWonders. A link, text, photos or a file opens in Read as a new reading to learn from.",
      summary: "Tap Share in YouTube, Safari or any app, then LingoWonders.",
      intro: [
        "You don't have to copy a link and come back. In YouTube, Safari, Photos, Files or any app with a Share button, tap Share and choose LingoWonders. What you shared opens in Read as a new reading, ready to check.",
        "Sharing to LingoWonders is new in version 2.1.",
      ],
      steps: [
        {
          title: "Tap Share, then LingoWonders",
          body: [
            "In the other app, tap Share and choose LingoWonders in the row of apps. If it isn't in the row, scroll to the end, tap More and pick it from the list.",
            "You can share one web link, some text, up to 8 images, or one file at a time.",
          ],
        },
        {
          title: "What each kind of share becomes",
          body: [
            [
              "A YouTube link: the video's captions, in the language you are learning first. The reading plays with the video.",
              "A web page link: the page's main article.",
              "Text: the text itself.",
              "Images: the text in them, read like photographed book pages.",
              "A file: its text, subtitles (.srt or .vtt) or PDF.",
            ],
          ],
        },
        {
          title: "When YouTube won't send the captions",
          body: [
            "Some videos have no captions, and YouTube sometimes refuses to send them. Then the draft keeps the video and offers to paste the text instead. The video's voice still plays as the audio.",
          ],
        },
        {
          title: "Check the draft and save the reading",
          body: [
            "The draft opens in the Read editor. Set the title and the language and fix any sentence, the same way as on [[Check the text]], then tap [[Create reading]].",
          ],
          figure: {
            screen: "01-read",
            alt: "A reading of the story 司马光砸缸 with pinyin over every word and an English translation under each sentence",
            caption: "Every reading looks like this: the reading over the words, a translation below.",
          },
        },
      ],
      tips: [
        "Your phone opens shared links and captions itself, and reads the text in images on the phone. Nothing goes through our servers.",
        "Shared readings count like any of your own readings: Free has a daily allowance, and Pro removes the limit and takes longer texts. Free reads one page at a time; Pro reads whole books of many pages at once.",
        "Vertical Japanese text can't be read from images yet. Pages set in horizontal lines work best.",
      ],
      related: [{ guide: "read-anything", label: "All the ways to make a reading" }],
    },

    "listen-and-say": {
      title: "Listen, tap a word, and read it aloud",
      metaTitle: "Read Aloud in LingoWonders: Listen, Record, Compare",
      description:
        "Play a reading sentence by sentence, tap any word to look it up, and record yourself beside the app voice. The speech check runs on your phone.",
      summary: "Play, look words up, record yourself and get “Sounds right”.",
      intro: [
        "Listening and speaking happen in the same reader. Play the text, stop on a word you don't know, then say the sentence yourself and compare it with the app voice.",
        "The speech check runs on your phone. Recordings stay on your phone.",
      ],
      steps: [
        {
          title: "Play and follow along",
          body: [
            "[[Play]] reads the sentences aloud and the page follows. Speed goes from 0.5× to 2×. There are repeat, listen-and-repeat, an A–B loop and a sleep timer, and it keeps playing with the screen off, with lock-screen controls.",
          ],
        },
        {
          title: "Tap a word to look it up",
          body: [
            "Tap any word. The sheet shows its reading, its meaning and its stroke order, with [[Play]] and [[Slow]] to hear it. The red Add button saves it (in the picture, Add to 桃太郎); [[Choose list…]] picks another list.",
          ],
          figure: {
            screen: "04-tap-word",
            alt: "Looking up 桃 in a Japanese reading: もも (momo), the meaning peach, Play and Slow buttons, the stroke order, and Add to 桃太郎",
            caption: "Tap 桃 in a Japanese story: kana, romaji, meaning, stroke order, and one tap to save it.",
          },
        },
        {
          title: "Read a sentence aloud",
          body: [
            "Tap a sentence, then [[Read aloud]]. The sheet shows the sentence with its reading; the translate button shows or hides the translation. Tap [[Record]] and say it.",
            "Then play your take beside the app voice: [[App voice]] and [[My voice]] sit side by side.",
          ],
          figure: {
            screen: "02-read-aloud",
            alt: "The Read aloud sheet for the sentence 只有司马光没有跑, with Listen first, App voice and My voice buttons, the mark Sounds right, and Back, Record and Next",
            caption: "Read aloud: the app voice and your voice side by side, and a mark from the speech check.",
          },
        },
        {
          title: "Get a mark from the speech check",
          body: [
            "After you record, the check marks the take [[Sounds right]] or asks for it once more. It works for Chinese, English, Japanese, Korean, Vietnamese and Russian, using the phone's own speech recognition.",
            "If the phone has no on-device recognition for the language, the take is still saved and played, and you listen and decide.",
          ],
        },
        {
          title: "Use Listen first and Next",
          body: [
            "[[Listen first]] is a switch: the app reads the sentence, then [[Your turn]] appears and recording starts. [[Next]] while recording saves the take and starts the next sentence, so you can read a whole page without stopping.",
          ],
        },
        {
          title: "Record the whole piece (Pro)",
          body: [
            "In the reader, open the [[More]] menu and choose [[Record the whole piece]]. Read it all, then stop. The speech check marks every sentence. Under each one, play [[My take]] and compare it with the [[App voice]] or, for a video, the original sound.",
          ],
          figure: {
            screen: "05-whole-check",
            alt: "Record the whole piece: Speech check says 15 of 16 sentences sound right, with a green tick, the sentence heard, and My take and App voice buttons under each sentence",
            caption: "One take of the whole story, checked sentence by sentence. Only you see these marks.",
          },
        },
      ],
      tips: [
        "Free keeps 5 recorded sentences per reading. Pro keeps more and adds whole-piece recording.",
        "Recording needs the microphone and speech recognition. Allow both in iPhone Settings › LingoWonders.",
        "With a child profile, only the parent sees the mark and can change it. The child sees “Great, next” or “Once more?”.",
      ],
    },

    "week-pack": {
      title: "Week Pack: this week's list, in sentences",
      metaTitle: "LingoWonders Week Pack: Sentences From Your Word List",
      description:
        "Turn this week's word list into example sentences, a short reader and question cards, with readings and translations. How it works and what is sent.",
      summary: "One tap turns a word list into sentences, a reader and question cards.",
      intro: [
        "A word list is easier to learn when the words are in sentences. The Week Pack takes this week's list and makes example sentences for each word, a short reader made of words the learner knows, and question cards for a parent.",
        "The pack is written by AI on our server, so it can have mistakes. Read it through before you use it with a child.",
      ],
      steps: [
        {
          title: "Make the pack from a list",
          body: [
            "Open the list and find the [[This week's pack]] card. Tap [[Make this week's pack]].",
            "The first time you use an AI feature, the app asks first and explains what will be sent. Tap [[Allow]] to go on or [[Not now]] to keep AI features off.",
          ],
        },
        {
          title: "Read what's inside",
          body: [
            "The pack has three parts:",
            [
              "[[Sentences]]: example sentences for every word, each with its reading, a play button and a record button.",
              "[[Reader]]: a short reading of 6 to 8 lines, made of words the learner already knows.",
              "[[Questions to ask]]: cards for you, in your language. Ask, wait, then answer with the sentence.",
            ],
            "Buttons in the top bar turn the reading line and the translation on or off under each sentence. Translations use Apple's on-device translation (iOS 18 or later).",
          ],
          figure: {
            screen: "03-week-pack",
            alt: "Week pack screen: sentences for 花开, 小鸟 and 春天, each with pinyin, an English translation, a play button and a record button",
            caption: "Two sentences for each word of the list, with pinyin and a translation.",
          },
        },
        {
          title: "Follow the week on the Week tab",
          body: [
            "The pack becomes the plan on the [[Week]] tab: listen, read aloud, dictation, a test sheet, Paper Check and the misses. The card always shows the next step as one button.",
            "[[Open as a reading]] puts the reader in [[Read]], where you can play it and record it sentence by sentence.",
          ],
        },
        {
          title: "Add sentences without a whole pack",
          body: [
            "On a list, [[Get sentences]] adds an example sentence with a translation to the words that have none. A word that gets no sentence is asked again after 24 hours or when you tap [[Get sentences]] again.",
          ],
        },
        {
          title: "Know the allowance",
          body: [
            "Free: 3 packs and 60 sentence words in total. Pro: 10 packs and 200 sentence words a week. Only what worked counts, and the app shows how many are left.",
            "Pro can also make a new pack of the same list ([[Make a new pack]]) and open [[Past weeks]].",
          ],
        },
      ],
      tips: [
        "What is sent: the list's words, their level and school year, your app language, the words already learned and the number of sentences per word. Nothing is stored on our server.",
        "To turn AI off later: [[Settings]] › [[AI features]] › [[Allow AI features]].",
        "No connection? The pack needs one; everything else in the app works offline.",
      ],
    },

    "write-stroke-by-stroke": {
      title: "Write stroke by stroke: Chinese, kana and hangul",
      metaTitle: "Stroke Order Practice: Chinese, Kana & Hangul | LingoWonders",
      description:
        "Trace or write from memory on iPhone and iPad. LingoWonders checks Chinese characters, kana and hangul stroke by stroke, in the right order. Free.",
      summary: "Trace or write from memory, checked stroke by stroke.",
      intro: [
        "Stroke order is free in LingoWonders: the animation, and the on-screen check that follows every stroke you write with a finger or Apple Pencil. It covers Chinese characters, Japanese kana and Korean hangul.",
      ],
      steps: [
        {
          title: "Open Write on screen",
          body: [
            "Open a list and tap [[Write on screen]]. The words come one at a time, with the reading, the meaning and a speaker button above the writing box.",
          ],
        },
        {
          title: "Trace first, then write from memory",
          body: [
            "[[Trace]] shows the character faintly; follow the red stroke with your finger. [[From memory]] hides it, so you write it yourself and the app checks each stroke.",
          ],
          figure: {
            screen: "06-write",
            alt: "Write screen, Trace selected: the word はなび (hanabi, fireworks), a large 花 in a 田字格 box with the next stroke in red, and Start over, Hint, Skip stroke and Skip word",
            caption: "Trace mode: follow the red stroke. The ink shows what you have written so far.",
          },
        },
        {
          title: "When you get stuck",
          body: [
            [
              "[[Hint]] helps when you can't remember the next stroke.",
              "[[Start over]] clears the character.",
              "[[Skip stroke]] moves past one stroke.",
              "[[Skip word]] skips one word inside a long sentence.",
            ],
          ],
        },
        {
          title: "Choose the stroke-order standard",
          body: [
            "Stroke order differs between places. On a list with Chinese characters or kana, tap the region line on the list to open [[Region and stroke order]] and choose China, Singapore, Malaysia, Taiwan or Japanese kanji.",
          ],
        },
        {
          title: "Watch the stroke order of any word",
          body: [
            "Tap a word in a reading or a list to see its stroke order. Tap the character to replay it.",
          ],
        },
      ],
      tips: [
        "Other languages, such as English, are traced freehand: trace over the faint letters with your finger.",
        "To practise on paper instead, print a 田字格 sheet with 描红 tracing. See the guide to printing practice sheets.",
      ],
    },

    "dictation-and-paper-check": {
      title: "Dictation and Paper Check",
      metaTitle: "Spelling Dictation and Paper Check in LingoWonders",
      description:
        "Weekly spelling dictation at home: the app reads each word aloud, your child writes on paper, then Paper Check (beta) shows what it read and you mark.",
      summary: "The app reads aloud, the child writes on paper, you mark.",
      intro: [
        "Dictation (听写) is the weekly spelling test at many schools. LingoWonders reads each word or sentence aloud so a child can run it alone, on real paper. Then you check it together.",
      ],
      steps: [
        {
          title: "Start dictation from the list",
          body: [
            "Open the list and tap [[Dictation]]. The app reads each word aloud, one by one. Tap [[Hear it again]] as often as you need. Write the answer on paper.",
          ],
        },
        {
          title: "Reveal and mark each word",
          body: [
            "Reveal the answer and mark it [[Got it]] or [[Not yet]]. Tap a character to watch its strokes again. Words you miss come back for review.",
          ],
          figure: {
            screen: "07-dictation",
            alt: "Dictation, word 3 of 12: 春天 revealed in two 田字格 boxes with pinyin chūn tiān, the meaning spring, Hear it again, and Not yet and Got it buttons",
            caption: "The answer in 田字格 boxes. Mark it Got it or Not yet.",
          },
        },
        {
          title: "Choose whose voice reads",
          body: [
            "Each list can use your own voice recordings or the app voice. English has US, UK, Australian and Singapore voices, and [[Spell it aloud]] for a round in the car.",
            "In [[Dictation settings]], [[Read each word in a sentence]] says the word, then the sentence, then the word again. The sentence is only heard, never shown on the child's screen.",
          ],
        },
        {
          title: "Print a test sheet",
          body: [
            "For a test on paper, print a [[Test sheet]] from the list or from the Week plan. Every page of a test sheet is free.",
          ],
        },
        {
          title: "Photograph it for Paper Check (beta)",
          body: [
            "When the test is written, open [[Paper Check]] and tap [[Take a photo]]. LingoWonders shows what it read for every answer, and you mark each one [[Right]] or [[Wrong]]. It does not mark for you.",
            "The photo is sent to our server and Google's Gemini model to be read; nothing is stored on the server. On your phone, the photo stays for 30 days for the check history.",
          ],
        },
      ],
      tips: [
        "3 Paper Checks are free; after that it is part of Pro, with a fair-use limit.",
        "Words marked wrong come back as a short review round.",
      ],
    },

    "print-practice-sheets": {
      title: "Print 田字格 and other practice sheets",
      metaTitle: "Print 田字格 Practice Sheets with Pinyin | LingoWonders",
      description:
        "Make 田字格 tian-grid sheets with 描红 tracing and pinyin, pinyin lines, English lines and square grid from any list. A4 or Letter, AirPrint or PDF.",
      summary: "田字格 with tracing and pinyin, lines and grids, on real paper.",
      intro: [
        "Every list can become a sheet to write on with a pencil. Practice sheets print free: page 1 of each sheet, as many sheets as you like.",
      ],
      steps: [
        {
          title: "Open Print sheets",
          body: [
            "Open a list and tap [[Print sheets]]. The preview at the top updates as you change the options.",
          ],
          figure: {
            screen: "08-tian-sheet",
            alt: "Print sheets: a preview of a 田字格 sheet for 花, 开, 小, 鸟, 春, 天 with pinyin, the sheet types Tian grid, Stroke order, Pinyin lines and Lines, tracing styles and trace colours",
            caption: "Choose the sheet type, the tracing style and the trace colour; the preview follows.",
          },
        },
        {
          title: "Pick a sheet type",
          body: [
            [
              "[[Tian grid]]: 田字格 with 描红 tracing, and pinyin over the characters.",
              "[[Stroke order]]: stroke-order sheets and strips (Pro).",
              "[[Pinyin lines]]: the four-line pinyin sheet.",
              "[[Lines]] and [[Square grid]], including English handwriting lines.",
              "[[Combined PDF]]: several sheet types in one file (Pro).",
            ],
          ],
        },
        {
          title: "Set the tracing",
          body: [
            "Choose how the trace copies look: gray fill, outline, dashed, dotted or blank. [[Trace colour]] and [[Trace fade]] are Pro, along with the 标准楷书 textbook kai, School print and Sloped print fonts. [[Repeat whole list]] prints the list more than once.",
          ],
        },
        {
          title: "Preview and print",
          body: [
            "Tap [[Preview & print]]. Then [[Print]] sends it to any AirPrint printer, [[Share PDF]] saves it to Files or sends it on, and [[Save image]] keeps a picture. Sheets come in A4 or US Letter.",
          ],
          figure: {
            screen: "10-private",
            alt: "Preview of a printed 田字格 sheet with pinyin over each character, a small QR code at the bottom, and Print, Share PDF and Save image buttons",
            caption: "The preview, with Print, Share PDF and Save image.",
          },
        },
        {
          title: "Try Pro options before you buy",
          body: [
            "Options marked PRO can be tried for free: the preview shows page 1. To print, unlock Pro or tap [[Use free options]].",
          ],
        },
      ],
      tips: [
        "Free exports carry page 1 of each sheet and a small App Store QR code in the footer. Pro prints every page and lets you keep the QR or print clean pages.",
        "A teacher can print one list and share the same sheet with the whole class.",
      ],
    },

    "word-library-and-lists": {
      title: "The word library and your lists",
      metaTitle: "Word Lists, HSK Decks and Sharing a List | LingoWonders",
      description:
        "Find ready-made decks (HSK 1–6, school lists), edit your own lists, and share a list by link, QR code or file in LingoWonders. Sharing is free.",
      summary: "Ready-made decks, tidy lists, and sharing a list by link.",
      intro: [
        "Lists are where words live: your own, the school's, and the ready-made decks in the Library. Each word keeps its reading, meaning, voice and practice history.",
      ],
      steps: [
        {
          title: "Browse the Library",
          body: [
            "Open [[Lists]] › [[Library]]. Pick a language at the top (简体, 繁體, English, 日本語, 한국어) and a level, or search words and decks. Tap a deck to see its words.",
            "The Chinese library has about 7,200 words, including HSK 1–6; levels 1 to 3 are free. There are Tao Nan School P1 spelling and 听写 lists, and thousands more words from preschool to A level.",
          ],
          figure: {
            screen: "09-library",
            alt: "The Library in Simplified Chinese: level filters, Start here decks for Numbers, Colors and Family with their first characters",
            caption: "Ready-made decks, filtered by language and level.",
          },
        },
        {
          title: "Tidy a list in the editor",
          body: [
            "Open a list and tap [[Edit list]]. [[Auto-split]] cuts text into sentences, words or characters; tap a splitter to remove it, or between letters to add one. Clean up, remove repeats, sort and undo are in the same bar.",
            "Tap a row to edit its reading, meaning and sentences, or to record your own voice for it.",
          ],
        },
        {
          title: "Listen to the whole list",
          body: [
            "[[Listen to the list]] plays every item one after another, also with the screen off, with lock-screen controls. Speed and a sleep timer are free.",
          ],
        },
        {
          title: "Share a list",
          body: [
            "Open the list and tap [[Share list]]: a QR code or a link, with [[Copy link]]. Sharing is free. A list that is too big for a link, or that includes your voice recordings ([[Include my voice recordings]]), is shared as a file instead; send it by Messages, Mail or AirDrop.",
          ],
        },
        {
          title: "Back up or move to a new phone",
          body: [
            "[[Settings]] › [[Move to a new phone]] › [[Back up]] saves lists, children, readings, recordings and photos in one file. On the new phone, open the file from Files or AirDrop and restore it: merge adds to what is there, replace deletes the chosen children's data first.",
          ],
        },
      ],
      tips: [
        "Lists and readings work in Chinese (Simplified and Traditional), English, Japanese and Korean, and your keyboard can type any other language.",
        "There is no automatic sync between phones; the backup file is the way across.",
      ],
    },

    "free-and-pro": {
      title: "Free and Pro",
      metaTitle: "LingoWonders Free vs Pro: One-Time Purchase, No Subscription",
      description:
        "What LingoWonders does for free, what the one-time Pro purchase adds, the fair-use allowances for AI features, and how to restore Pro on a new device.",
      summary: "What is free, what Pro adds, and restoring a purchase.",
      intro: [
        "LingoWonders has no subscription, no ads and no account. Most of it is free. Pro is a one-time purchase, and one Pro covers the whole family through Family Sharing.",
      ],
      steps: [
        {
          title: "What is free",
          body: [
            [
              "Every practice mode: listen, flashcards, writing on screen, dictation, and the read-aloud score.",
              "Stroke-order animation and the stroke-by-stroke writing check.",
              "Lists and the Library, with HSK 3.0 levels 1–3 (about 2,200 words).",
              "Photo word lists, unlimited.",
              "All the built-in stories, and a daily allowance of your own readings.",
              "Practice sheets: page 1 of each sheet, as many as you like, with a small QR. Test sheets: every page.",
              "Week Pack: 3 packs and 60 sentence words in total. Paper Check: 3 checks.",
              "Sharing lists by link, QR code or file.",
            ],
          ],
        },
        {
          title: "What Pro adds",
          body: [
            [
              "Every page of every sheet, stroke-order sheets and strips, and the Combined PDF.",
              "More fonts (标准楷书 textbook kai, School print, Sloped print), coloured trace ink and trace fade, and the choice to drop the QR.",
              "Read without limits: unlimited readings, longer texts, more recordings, and recording the whole piece.",
              "Week Pack: 10 packs and 200 sentence words a week, new packs of the same list, and past weeks.",
              "Paper Check beyond the 3 free ones, HSK 4–6 decks, and more profiles.",
            ],
          ],
          figure: {
            screen: "10-private",
            alt: "Print preview of a 田字格 sheet with pinyin and a small App Store QR code at the bottom",
            caption: "A free sheet: page 1, with a small QR at the bottom.",
          },
        },
        {
          title: "Try before you buy",
          body: [
            "Pro sheet options can be tried in the preview, which shows page 1. [[Use free options]] switches back in one tap. [[Settings]] › [[Free and Pro]] shows the full list in the app.",
          ],
        },
        {
          title: "Restore Pro on a new device",
          body: [
            "Sign in with the Apple ID that bought Pro, then tap [[Settings]] › [[Restore purchases]]. Family Sharing shares Pro with your family.",
          ],
        },
      ],
      tips: [
        "AI features such as the Week Pack and Paper Check run on our servers and cost us per use, so they have a fair-use limit that may change over time. Everything else works offline.",
        "The App Store shows the Pro price in your own currency before you buy.",
      ],
    },
  },
};
