// Crowd Siege's campaign as the game ships it: six ages, their battle
// ranges and bosses (games3d/apps/crowd-siege README + crowd_siege_theme.dart)
// and the Codex, one history card per battle (lib/src/theme/codex.dart,
// copied verbatim in English; zh-cn / zh-tw are this site's translations).
// A card marked `relic` is the one the age's boss gives.

import type { Locale } from "@/lib/i18n";

type L = Record<Locale, string>;

export interface Age {
  first: number;
  last: number;
  name: L;
  boss: L;
}

export const AGES: Age[] = [
  {
    first: 1,
    last: 5,
    name: { en: "The Primordial Pool", "zh-cn": "原始之池", "zh-tw": "原始之池" },
    boss: { en: "Mega Amoeba", "zh-cn": "巨型变形虫", "zh-tw": "巨型變形蟲" },
  },
  {
    first: 6,
    last: 12,
    name: { en: "The Tribes", "zh-cn": "部落时代", "zh-tw": "部落時代" },
    boss: { en: "Great Bear", "zh-cn": "巨熊", "zh-tw": "巨熊" },
  },
  {
    first: 13,
    last: 20,
    name: { en: "The River Cities", "zh-cn": "河畔城邦", "zh-tw": "河畔城邦" },
    boss: { en: "King's Chariot", "zh-cn": "国王战车", "zh-tw": "國王戰車" },
  },
  {
    first: 21,
    last: 30,
    name: { en: "The Empires", "zh-cn": "帝国时代", "zh-tw": "帝國時代" },
    boss: { en: "Crimson Warlord", "zh-cn": "赤红军阀", "zh-tw": "赤紅軍閥" },
  },
  {
    first: 31,
    last: 40,
    name: { en: "The Kingdoms", "zh-cn": "王国时代", "zh-tw": "王國時代" },
    boss: { en: "Crimson Champion", "zh-cn": "赤红勇士", "zh-tw": "赤紅勇士" },
  },
  {
    first: 41,
    last: 50,
    name: {
      en: "The Age of Sail & Powder",
      "zh-cn": "风帆与火药时代",
      "zh-tw": "風帆與火藥時代",
    },
    boss: { en: "Iron Grenadier", "zh-cn": "钢铁掷弹兵", "zh-tw": "鋼鐵擲彈兵" },
  },
];

export interface CodexCard {
  n: number;
  title: L;
  fact: L;
  relic?: true;
}

const c = (
  n: number,
  en: [string, string],
  cn: [string, string],
  tw: [string, string],
  relic?: true,
): CodexCard => ({
  n,
  title: { en: en[0], "zh-cn": cn[0], "zh-tw": tw[0] },
  fact: { en: en[1], "zh-cn": cn[1], "zh-tw": tw[1] },
  ...(relic && { relic }),
});

export const CODEX: CodexCard[] = [
  c(1, ["First cells", "The first living cells appeared more than 3.5 billion years ago, in water."], ["最早的细胞", "最早的活细胞出现在 35 亿多年前的水中。"], ["最早的細胞", "最早的活細胞出現在 35 億多年前的水中。"]),
  c(2, ["Sunlight power", "Cyanobacteria learned to make food from sunlight and filled the air with oxygen."], ["阳光的力量", "蓝细菌学会了利用阳光制造养分，让空气中充满氧气。"], ["陽光的力量", "藍綠菌學會了利用陽光製造養分，讓空氣中充滿氧氣。"]),
  c(3, ["A cell with a core", "Cells with a nucleus, like the cells in our bodies, appeared around 2 billion years ago."], ["有核的细胞", "像我们身体里那样有细胞核的细胞，大约在 20 亿年前出现。"], ["有核的細胞", "像我們身體裡那樣有細胞核的細胞，大約在 20 億年前出現。"]),
  c(4, ["Many cells, one body", "Living things made of many cells became common about 600 million years ago."], ["多细胞，一个身体", "由许多细胞组成的生物，大约在 6 亿年前变得常见。"], ["多細胞，一個身體", "由許多細胞組成的生物，大約在 6 億年前變得常見。"]),
  c(5, ["Stromatolites", "Layered mounds built by microbes. Living ones still grow in Shark Bay, Australia."], ["叠层石", "由微生物层层堆成的土丘。澳大利亚的鲨鱼湾至今仍有活的叠层石在生长。"], ["疊層石", "由微生物層層堆成的土丘。澳洲的鯊魚灣至今仍有活的疊層石在生長。"], true),
  c(6, ["Onto land", "Plants and then animals moved from water onto land more than 400 million years ago."], ["登上陆地", "4 亿多年前，植物和随后的动物从水中登上了陆地。"], ["登上陸地", "4 億多年前，植物和隨後的動物從水中登上了陸地。"]),
  c(7, ["Stone tools", "The oldest known stone tools are about 3.3 million years old."], ["石器", "已知最古老的石器大约有 330 万年历史。"], ["石器", "已知最古老的石器大約有 330 萬年歷史。"]),
  c(8, ["Fire", "People were controlling fire at least 400,000 years ago."], ["火", "人类至少在 40 万年前就已经会控制火。"], ["火", "人類至少在 40 萬年前就已經會控制火。"]),
  c(9, ["Cave art", "The paintings in Lascaux cave, France, are about 17,000 years old."], ["洞穴壁画", "法国拉斯科洞穴里的壁画大约有 17,000 年历史。"], ["洞穴壁畫", "法國拉斯科洞穴裡的壁畫大約有 17,000 年歷史。"]),
  c(10, ["Best friends", "Dogs were the first animals people domesticated, many thousands of years ago."], ["最好的朋友", "狗是人类最早驯化的动物，距今已有数千年之久。"], ["最好的朋友", "狗是人類最早馴化的動物，距今已有數千年之久。"]),
  c(11, ["Farming", "Farming began about 11,000 years ago in the Fertile Crescent."], ["农耕", "农耕大约在 11,000 年前始于新月沃土。"], ["農耕", "農耕大約在 11,000 年前始於肥沃月彎。"]),
  c(12, ["Göbekli Tepe", "Carved stone pillars in Türkiye, raised about 11,000 years ago."], ["哥贝克力石阵", "位于土耳其的雕刻石柱，大约立于 11,000 年前。"], ["哥貝克力石陣", "位於土耳其的雕刻石柱，大約立於 11,000 年前。"], true),
  c(13, ["First cities", "Uruk, in Mesopotamia, was one of the first cities in the world."], ["最早的城市", "美索不达米亚的乌鲁克是世界上最早的城市之一。"], ["最早的城市", "美索不達米亞的烏魯克是世界上最早的城市之一。"]),
  c(14, ["Writing", "Cuneiform, pressed into clay tablets, is one of the oldest forms of writing."], ["文字", "压印在泥板上的楔形文字是最古老的文字之一。"], ["文字", "壓印在泥板上的楔形文字是最古老的文字之一。"]),
  c(15, ["The wheel", "Wheels for carts appeared in Mesopotamia and nearby lands about 5,500 years ago."], ["车轮", "大约 5,500 年前，美索不达米亚及附近地区出现了车轮。"], ["車輪", "大約 5,500 年前，美索不達米亞及附近地區出現了車輪。"]),
  c(16, ["Pyramids", "The great pyramids at Giza, in Egypt, were built about 4,500 years ago."], ["金字塔", "埃及吉萨的大金字塔大约建于 4,500 年前。"], ["金字塔", "埃及吉薩的大金字塔大約建於 4,500 年前。"]),
  c(17, ["Planned streets", "Mohenjo-daro, in the Indus valley, had straight streets and covered drains."], ["规划的街道", "印度河流域的摩亨佐-达罗有笔直的街道和加盖的排水沟。"], ["規劃的街道", "印度河流域的摩亨佐-達羅有筆直的街道和加蓋的排水溝。"]),
  c(18, ["Bronze", "Bronze, copper mixed with tin, is harder than pure copper."], ["青铜", "青铜是铜和锡的合金，比纯铜更坚硬。"], ["青銅", "青銅是銅和錫的合金，比純銅更堅硬。"]),
  c(19, ["Oracle bones", "In Shang dynasty China, people wrote on bones and shells: an early form of Chinese writing."], ["甲骨文", "商朝时，人们在兽骨和龟甲上刻字，这是汉字的早期形式。"], ["甲骨文", "商朝時，人們在獸骨和龜甲上刻字，這是漢字的早期形式。"]),
  c(20, ["Code of Hammurabi", "A Babylonian law code, carved on a stone pillar almost 3,800 years ago."], ["汉谟拉比法典", "古巴比伦的法典，刻在一根石柱上，距今将近 3,800 年。"], ["漢摩拉比法典", "古巴比倫的法典，刻在一根石柱上，距今將近 3,800 年。"], true),
  c(21, ["Democracy", "About 2,500 years ago Athens tried rule by its citizens: democracy."], ["民主", "大约 2,500 年前，雅典尝试由公民来治理城邦：这就是民主。"], ["民主", "大約 2,500 年前，雅典嘗試由公民來治理城邦：這就是民主。"]),
  c(22, ["Maya cities", "Maya cities had stepped temples, and their astronomers tracked the planet Venus."], ["玛雅城市", "玛雅城市建有阶梯式神庙，他们的天文学家会追踪金星的运行。"], ["馬雅城市", "馬雅城市建有階梯式神廟，他們的天文學家會追蹤金星的運行。"]),
  c(23, ["The Royal Road", "Persia's Royal Road carried messages across the empire by relay riders."], ["御道", "波斯的御道靠接力的骑手把消息传遍整个帝国。"], ["御道", "波斯的御道靠接力的騎手把消息傳遍整個帝國。"]),
  c(24, ["Ashoka's pillars", "Emperor Ashoka of the Maurya empire carved his messages on pillars and rocks across India."], ["阿育王石柱", "孔雀王朝的阿育王把他的诏令刻在印度各地的石柱和岩石上。"], ["阿育王石柱", "孔雀王朝的阿育王把他的詔令刻在印度各地的石柱和岩石上。"]),
  c(25, ["One script", "Qin Shi Huang united China in 221 BCE and made its writing, coins and weights the same everywhere."], ["书同文", "秦始皇于公元前 221 年统一中国，并统一了文字、货币和度量衡。"], ["書同文", "秦始皇於西元前 221 年統一中國，並統一了文字、貨幣和度量衡。"]),
  c(26, ["Terracotta army", "Thousands of life-size clay soldiers guard the tomb of China's first emperor."], ["兵马俑", "数千个真人大小的陶俑守护着中国第一位皇帝的陵墓。"], ["兵馬俑", "數千個真人大小的陶俑守護著中國第一位皇帝的陵墓。"]),
  c(27, ["Roman roads", "Rome built more than 80,000 km of paved roads; some are still used."], ["罗马大道", "罗马修建了超过 80,000 公里的铺石道路，有些至今仍在使用。"], ["羅馬大道", "羅馬修建了超過 80,000 公里的鋪石道路，有些至今仍在使用。"]),
  c(28, ["Aqueducts", "Roman aqueducts carried fresh water into cities, often from many kilometres away."], ["引水渠", "罗马的引水渠把清水送进城市，水源常在许多公里之外。"], ["引水渠", "羅馬的引水渠把清水送進城市，水源常在許多公里之外。"]),
  c(29, ["Paper", "Paper making was improved in Han dynasty China around the year 105."], ["纸", "大约在公元 105 年，中国汉朝改进了造纸术。"], ["紙", "大約在西元 105 年，中國漢朝改良了造紙術。"]),
  c(30, ["The Silk Road", "Trade routes that linked China with India, Persia and the Mediterranean."], ["丝绸之路", "连接中国与印度、波斯和地中海的贸易路线。"], ["絲綢之路", "連接中國與印度、波斯和地中海的貿易路線。"], true),
  c(31, ["Hagia Sophia", "Built in Constantinople in 537, its great dome was a wonder of its age."], ["圣索菲亚大教堂", "537 年建于君士坦丁堡，它的巨大穹顶是那个时代的奇迹。"], ["聖索菲亞大教堂", "537 年建於君士坦丁堡，它的巨大穹頂是那個時代的奇蹟。"]),
  c(32, ["City walls", "Constantinople's land walls protected the city for about a thousand years."], ["城墙", "君士坦丁堡的陆墙守护了这座城市大约一千年。"], ["城牆", "君士坦丁堡的陸牆守護了這座城市大約一千年。"]),
  c(33, ["House of Wisdom", "Scholars in Baghdad gathered and translated books from many lands."], ["智慧宫", "巴格达的学者收集并翻译了来自许多地方的书籍。"], ["智慧宮", "巴格達的學者收集並翻譯了來自許多地方的書籍。"]),
  c(34, ["Movable type", "Bi Sheng made movable type for printing in Song dynasty China."], ["活字印刷", "宋朝的毕昇发明了用于印刷的活字。"], ["活字印刷", "宋朝的畢昇發明了用於印刷的活字。"]),
  c(35, ["Compass", "Sailors in Song dynasty China used the magnetic compass to find their way."], ["指南针", "宋朝的水手用磁罗盘辨认航向。"], ["指南針", "宋朝的水手用磁羅盤辨認航向。"]),
  c(36, ["Mansa Musa", "The ruler of the Mali Empire, famous for his great wealth."], ["曼萨·穆萨", "马里帝国的统治者，以巨大的财富闻名。"], ["曼薩·穆薩", "馬利帝國的統治者，以巨大的財富聞名。"]),
  c(37, ["Great Zimbabwe", "A southern African city whose stone walls were built without mortar."], ["大津巴布韦", "非洲南部的一座城市，它的石墙不用灰浆砌成。"], ["大辛巴威", "非洲南部的一座城市，它的石牆不用灰漿砌成。"]),
  c(38, ["Wayfinders", "Polynesian navigators crossed the Pacific by reading stars, swells and birds."], ["寻路者", "波利尼西亚的航海者靠观察星辰、涌浪和飞鸟横渡太平洋。"], ["尋路者", "玻里尼西亞的航海者靠觀察星辰、湧浪和飛鳥橫渡太平洋。"]),
  c(39, ["Castles", "Stone castles spread across Europe from the 11th century."], ["城堡", "从 11 世纪起，石砌城堡遍布欧洲。"], ["城堡", "從 11 世紀起，石砌城堡遍布歐洲。"]),
  c(40, ["Angkor Wat", "In Cambodia: one of the largest religious monuments in the world."], ["吴哥窟", "位于柬埔寨，是世界上最大的宗教建筑之一。"], ["吳哥窟", "位於柬埔寨，是世界上最大的宗教建築之一。"], true),
  c(41, ["Treasure fleets", "In the 1400s Zheng He's fleets sailed from China as far as East Africa."], ["宝船舰队", "15 世纪，郑和的船队从中国出发，最远航行到东非。"], ["寶船艦隊", "15 世紀，鄭和的船隊從中國出發，最遠航行到東非。"]),
  c(42, ["Printing press", "Gutenberg's press, from around 1450, helped books spread across Europe."], ["印刷机", "古腾堡约在 1450 年制成的印刷机，让书籍传遍欧洲。"], ["印刷機", "古騰堡約在 1450 年製成的印刷機，讓書籍傳遍歐洲。"]),
  c(43, ["Inca roads", "The Inca built more than 30,000 km of roads across the Andes."], ["印加古道", "印加人在安第斯山脉修建了超过 30,000 公里的道路。"], ["印加古道", "印加人在安地斯山脈修建了超過 30,000 公里的道路。"]),
  c(44, ["Around the world", "The first voyage all the way around the world returned in 1522."], ["环游世界", "第一次环绕世界一周的航行于 1522 年归来。"], ["環遊世界", "第一次環繞世界一周的航行於 1522 年歸來。"]),
  c(45, ["Sinan", "The architect Sinan designed Istanbul's Süleymaniye Mosque, finished in 1557."], ["希南", "建筑师希南设计了伊斯坦布尔的苏莱曼尼耶清真寺，于 1557 年完工。"], ["希南", "建築師希南設計了伊斯坦堡的蘇萊曼尼耶清真寺，於 1557 年完工。"]),
  c(46, ["Mercator's map", "His 1569 world map let sailors plot a steady course as a straight line."], ["墨卡托地图", "他在 1569 年绘制的世界地图，让水手能把固定航向画成一条直线。"], ["麥卡托地圖", "他在 1569 年繪製的世界地圖，讓水手能把固定航向畫成一條直線。"]),
  c(47, ["Jupiter's moons", "In 1610 Galileo used a telescope to find four moons of Jupiter."], ["木星的卫星", "1610 年，伽利略用望远镜发现了木星的四颗卫星。"], ["木星的衛星", "1610 年，伽利略用望遠鏡發現了木星的四顆衛星。"]),
  c(48, ["Taj Mahal", "Built in Agra, India, in the 1600s by the Mughal emperor Shah Jahan."], ["泰姬陵", "17 世纪由莫卧儿皇帝沙贾汗在印度阿格拉建造。"], ["泰姬瑪哈陵", "17 世紀由蒙兀兒皇帝沙賈汗在印度阿格拉建造。"]),
  c(49, ["Star forts", "Angled walls left no blind spot where attackers could hide from cannon."], ["星形要塞", "带角度的城墙不留死角，攻城者无处躲避炮火。"], ["星形要塞", "帶角度的城牆不留死角，攻城者無處躲避砲火。"]),
  c(50, ["The sea clock", "Accurate clocks made in the 1700s let sailors find their longitude at sea."], ["航海钟", "18 世纪制成的精准时钟，让水手能在海上测出经度。"], ["航海鐘", "18 世紀製成的精準時鐘，讓水手能在海上測出經度。"], true),
];

export function ageOf(n: number): Age {
  return AGES.find((a) => n >= a.first && n <= a.last) ?? AGES[AGES.length - 1];
}
