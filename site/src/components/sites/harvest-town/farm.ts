// Haystack Hollow's economy as the game ships it (games3d/apps/harvest-town
// lib/src/core/harvest_catalog.dart + packages/town_kit): item coin values,
// recipes and their buildings, and the order rules. An order pays
// round(sum(value × qty) × 1.3); the Weekend Fair adds round(25 %) on
// Saturdays and Sundays. Names: English as in the game; zh-cn / zh-tw are
// this site's translations.

import type { Locale } from "@/lib/i18n";

type L = Record<Locale, string>;

export type ItemId =
  | "wheat"
  | "corn"
  | "carrot"
  | "strawberry"
  | "cowFeed"
  | "chickenFeed"
  | "milk"
  | "egg"
  | "bread"
  | "cookies"
  | "cream"
  | "cheese"
  | "butter"
  | "jam"
  | "berryPie";

export type BuildingId = "field" | "feedMill" | "bakery" | "dairy" | "jamKitchen" | "cowshed" | "coop";

export const ITEMS: Record<ItemId, { name: L; value: number; orderable: boolean }> = {
  wheat: { name: { en: "Wheat", "zh-cn": "小麦", "zh-tw": "小麥" }, value: 2, orderable: true },
  corn: { name: { en: "Corn", "zh-cn": "玉米", "zh-tw": "玉米" }, value: 5, orderable: true },
  carrot: { name: { en: "Carrot", "zh-cn": "胡萝卜", "zh-tw": "紅蘿蔔" }, value: 9, orderable: true },
  strawberry: { name: { en: "Strawberry", "zh-cn": "草莓", "zh-tw": "草莓" }, value: 7, orderable: true },
  cowFeed: { name: { en: "Cow Feed", "zh-cn": "牛饲料", "zh-tw": "牛飼料" }, value: 4, orderable: false },
  chickenFeed: { name: { en: "Chicken Feed", "zh-cn": "鸡饲料", "zh-tw": "雞飼料" }, value: 5, orderable: false },
  milk: { name: { en: "Milk", "zh-cn": "牛奶", "zh-tw": "牛奶" }, value: 12, orderable: true },
  egg: { name: { en: "Egg", "zh-cn": "鸡蛋", "zh-tw": "雞蛋" }, value: 13, orderable: true },
  bread: { name: { en: "Bread", "zh-cn": "面包", "zh-tw": "麵包" }, value: 9, orderable: true },
  cookies: { name: { en: "Cookies", "zh-cn": "饼干", "zh-tw": "餅乾" }, value: 40, orderable: true },
  cream: { name: { en: "Cream", "zh-cn": "奶油", "zh-tw": "鮮奶油" }, value: 18, orderable: true },
  cheese: { name: { en: "Cheese", "zh-cn": "奶酪", "zh-tw": "起司" }, value: 30, orderable: true },
  butter: { name: { en: "Butter", "zh-cn": "黄油", "zh-tw": "奶油" }, value: 45, orderable: true },
  jam: { name: { en: "Strawberry Jam", "zh-cn": "草莓果酱", "zh-tw": "草莓果醬" }, value: 32, orderable: true },
  berryPie: { name: { en: "Berry Pie", "zh-cn": "莓果派", "zh-tw": "莓果派" }, value: 110, orderable: true },
};

export const BUILDINGS: Record<BuildingId, L> = {
  field: { en: "the field", "zh-cn": "田里", "zh-tw": "田裡" },
  feedMill: { en: "the Feed Mill", "zh-cn": "饲料厂", "zh-tw": "飼料廠" },
  bakery: { en: "the Bakery", "zh-cn": "面包坊", "zh-tw": "麵包坊" },
  dairy: { en: "the Dairy", "zh-cn": "乳品坊", "zh-tw": "乳品坊" },
  jamKitchen: { en: "the Jam Kitchen", "zh-cn": "果酱厨房", "zh-tw": "果醬廚房" },
  cowshed: { en: "the Cowshed", "zh-cn": "牛棚", "zh-tw": "牛舍" },
  coop: { en: "the Chicken Coop", "zh-cn": "鸡舍", "zh-tw": "雞舍" },
};

/** Where each good comes from: a recipe's inputs and time, or a crop's grow time, or an animal's feed. */
export const SOURCES: Partial<
  Record<ItemId, { at: BuildingId; inputs?: Partial<Record<ItemId, number>>; out?: number; seconds?: number }>
> = {
  wheat: { at: "field", seconds: 30 },
  corn: { at: "field", seconds: 90 },
  carrot: { at: "field", seconds: 180 },
  strawberry: { at: "field", seconds: 150 },
  cowFeed: { at: "feedMill", inputs: { wheat: 2, corn: 1 }, out: 3, seconds: 45 },
  chickenFeed: { at: "feedMill", inputs: { wheat: 2, carrot: 1 }, out: 3, seconds: 45 },
  milk: { at: "cowshed", inputs: { cowFeed: 1 } },
  egg: { at: "coop", inputs: { chickenFeed: 1 } },
  bread: { at: "bakery", inputs: { wheat: 3 }, out: 1, seconds: 60 },
  cookies: { at: "bakery", inputs: { wheat: 2, egg: 1, milk: 1 }, out: 1, seconds: 120 },
  cream: { at: "dairy", inputs: { milk: 1 }, out: 1, seconds: 50 },
  cheese: { at: "dairy", inputs: { milk: 2 }, out: 1, seconds: 90 },
  butter: { at: "dairy", inputs: { cream: 2 }, out: 1, seconds: 120 },
  jam: { at: "jamKitchen", inputs: { strawberry: 3 }, out: 1, seconds: 90 },
  berryPie: { at: "jamKitchen", inputs: { wheat: 2, jam: 1, butter: 1 }, out: 1, seconds: 180 },
};

export const ORDER_VALUE_FACTOR = 1.3;
export const FAIR_BONUS_PCT = 25;

export type Order = { item: ItemId; qty: number }[];

export const orderCoins = (o: Order) =>
  Math.round(o.reduce((s, l) => s + ITEMS[l.item].value * l.qty, 0) * ORDER_VALUE_FACTOR);

export const fairBonus = (coins: number) => Math.round((coins * FAIR_BONUS_PCT) / 100);

/** Orders the server renders before the board deals its own. */
export const START_ORDERS: Order[] = [
  [
    { item: "bread", qty: 2 },
    { item: "milk", qty: 1 },
  ],
  [
    { item: "cheese", qty: 1 },
    { item: "corn", qty: 3 },
  ],
  [{ item: "jam", qty: 2 }],
];
