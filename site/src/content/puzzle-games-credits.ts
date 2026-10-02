// Music & sound credits for the three puzzle-shell games. Mirrors each app's
// assets/audio/audio_manifest.json -> credits (Settings -> Credits) and
// assets/audio/CREDITS.md. MOMIZizm MUSiC's terms require the composer credit
// line plus a link to https://music.storyinvention.com/en/ (licence condition),
// so it renders verbatim on each game's landing page. Track titles are proper
// names, English in every locale.

import type { AppCredits } from "./apps";

const MOMIZIZM_URL = "https://music.storyinvention.com/en/";
const MUSIC_LINE = `Music: もみじば (Momijiba) — MOMIZizm MUSiC ${MOMIZIZM_URL}`;
const sfx = (packs: string[]): AppCredits["sfx"] => ({
  line: `Sound effects: Kenney (www.kenney.nl) — ${packs.join(", ")}; CC0 1.0`,
  url: "https://kenney.nl/",
  licence: "CC0 1.0 (public domain)",
});

export const arrowOutCredits: AppCredits = {
  musicLine: MUSIC_LINE,
  musicUrl: MOMIZIZM_URL,
  tracks: [
    { title: "Onsen(Hot Spring)-style music 5", style: "Japanese style/Shakuhachi", url: "https://music.storyinvention.com/en/onsen-ryokan-5-en/" },
    { title: "Nostalgic Onsen Inn", style: "Japanese style/Melancholy", url: "https://music.storyinvention.com/en/tanoshikatta-onsenyado-en/" },
    { title: "Onsen(Hot Spring)-style music 3", style: "Japanese style/Soothing", url: "https://music.storyinvention.com/en/onsen-ryokan-3-en/" },
    { title: "Earth Shrine", style: "Japanese style", url: "https://music.storyinvention.com/en/daichi-yashiro-en/" },
    { title: "Madoromi pillow", style: "Japanese cute style/slowly", url: "https://music.storyinvention.com/en/madoromi-makura-en/" },
    { title: "Happy Onsen town", style: "Japanese style / Heartwarming", url: "https://music.storyinvention.com/en/shiawase-onsengai-en/" },
    { title: "Mountain God's Shrine", style: "Japanese style/Shrine/Fantasy", url: "https://music.storyinvention.com/en/yamagami-yashiro-en/" },
    { title: "Palace of the Sea Sun", style: "Gagaku/Healing/Japanese traditional music", url: "https://music.storyinvention.com/en/kaisyouguu-en/" },
    { title: "Fun Onsen Inn", style: "Japanese style/Light", url: "https://music.storyinvention.com/en/tanoshi-onsenyado-en/" },
    { title: "Tiger's New Year", style: "Japanese style/Vigor", url: "https://music.storyinvention.com/en/tora-haru-en/" },
  ],
  sfx: sfx(["Impact Sounds", "Casino Audio", "RPG Audio"]),
};

export const slideJamCredits: AppCredits = {
  musicLine: MUSIC_LINE,
  musicUrl: MOMIZIZM_URL,
  tracks: [
    { title: "Toy Waltz", style: "Children/Kids", url: "https://music.storyinvention.com/en/toy-waltz-en/" },
    { title: "Little Fairy Tale March", style: "Fancy", url: "https://music.storyinvention.com/en/little-meruhen-en/" },
    { title: "Mini Dessert", style: "Cute and fun xylophone", url: "https://music.storyinvention.com/en/xylophone-mini-dessert-en/" },
    { title: "Rabbit's Ice Cream", style: "Cute/Lighthearted", url: "https://music.storyinvention.com/en/usagi-ice-en/" },
    { title: "Concorocon", style: "Cute/Lighthearted", url: "https://music.storyinvention.com/en/concorocon-en/" },
    { title: "School for Chicks", style: "Cute/Heartwarming", url: "https://music.storyinvention.com/en/hiyoko-gakkou-en/" },
    { title: "Carefree Mr. Takahashi", style: "Mischief/Everyday Life", url: "https://music.storyinvention.com/en/nonki-takahashi-en/" },
    { title: "Picnic with Cows", style: "Heartwarming/Accordion", url: "https://music.storyinvention.com/en/ushi-picnic-en/" },
    { title: "Jumping Cat", style: "Mischievous/Cute", url: "https://music.storyinvention.com/en/jumping-cat-en/" },
    { title: "Rolling Hamsters", style: "Comical/Panic", url: "https://music.storyinvention.com/en/korogari-hamuhamu-en/" },
    { title: "Well done", style: "Jingle/Cute scene changes/Eye catches", url: "https://music.storyinvention.com/en/yokudekimashita-en/" },
    { title: "Oh, no?", style: "Jingle/Cute/Slightly strange/Eye-catching", url: "https://music.storyinvention.com/en/oyaoya-en/" },
  ],
  sfx: sfx(["Impact Sounds", "Casino Audio", "RPG Audio", "UI Audio", "Music Jingles"]),
};

export const tileTrioCredits: AppCredits = {
  musicLine: MUSIC_LINE,
  musicUrl: MOMIZIZM_URL,
  tracks: [
    { title: "Paper Lantern", style: "Japanese Lo-Fi", url: "https://music.storyinvention.com/en/japanese-lo-fi-kamitourou-en/" },
    { title: "Napping", style: "For Sleep/Electric piano", url: "https://music.storyinvention.com/en/utatane-en/" },
    { title: "Hot-Spring Resort", style: "Japanese style/Heartwarming", url: "https://music.storyinvention.com/en/yukemuri-onsengai-en/" },
    { title: "Onsen(Hot Spring)-style music 10", style: "Japanese style/Relaxation", url: "https://music.storyinvention.com/en/onsen-ryokan-10-en/" },
    { title: "Kinpira Wanderer", style: "Cute Japanese style/modest", url: "https://music.storyinvention.com/en/kinpira-wanderer-en/" },
    { title: "Teku Teku Time", style: "Cute/Heartwarming", url: "https://music.storyinvention.com/en/tekuteku-zikan-en/" },
    { title: "Macaron Concert", style: "Light/Piano/Classical", url: "https://music.storyinvention.com/en/macaron-concert-en/" },
    { title: "Lonely Shakuhachi", style: "Japanese style/Lonely", url: "https://music.storyinvention.com/en/sekiryou-shakuhachi-en/" },
    { title: "Shopping Samurai", style: "Japanese style/Lighthearted", url: "https://music.storyinvention.com/en/yorozuya-douchu-en/" },
    { title: "Ninja Village", style: "Japanese traditional style/RPG", url: "https://music.storyinvention.com/en/ninja-sato-en/" },
  ],
  sfx: sfx(["Impact Sounds", "Casino Audio", "RPG Audio"]),
};
