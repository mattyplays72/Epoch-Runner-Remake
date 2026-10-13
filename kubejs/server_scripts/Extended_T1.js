// Advanced Crafting Table

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 1,
    pattern: [
    "ABA",
    "CDC",
    "AEA"
  ],
key: {
  A: { item: "extendedcrafting:advanced_component" },
  B: { item: "extendedcrafting:advanced_catalyst" },
  C: { item: "extendedcrafting:basic_table" },
  D: { item: "nuclearcraft:uranium238_block" },
  E: { item: "extendedcrafting:black_iron_slate" }
},
  result: {
    item: "extendedcrafting:advanced_table"
  }})})

  // Crystal Chest

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 1,
    pattern: [
    "AAA",
    "ABA",
    "AAA"
  ],
key: {
  A: { item: 'engineersdecor:panzerglass_block' },
  B: { item: 'ironchest:diamond_chest' },
},
  result: {
    item: 'ironchest:crystal_chest'
  }})})

  // Insanium Essence

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 1,
    pattern: [
    " A ",
    "ABA",
    " A "
  ],
key: {
  A: { item: 'mysticalagriculture:supremium_essence' },
  B: { item: 'mysticalagriculture:master_infusion_crystal' },
},
  result: {
    item: 'mysticalagradditions:insanium_essence'
  }})})

  // Diamond Chest

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 1,
    pattern: [
    "CAC",
    "ABA",
    "CAC"
  ],
key: {
  A: { item: 'engineersdecor:panzerglass_block' },
  B: { item: 'ironchest:gold_chest' },
  C: { item: 'minecraft:diamond' },
},
  result: {
    item: 'ironchest:diamond_chest'
  }})})

  // Obsidian Chest Upgrade

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 1,
    pattern: [
    "AAA",
    "ABA",
    "AAA"
  ],
key: {
  A: { item: 'minecraft:obsidian' },
  B: { item: 'engineersdecor:panzerglass_block' },
},
  result: {
    item: 'ironchest:diamond_to_obsidian_chest_upgrade'
  }})})

    // Crystal Chest Upgrade

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 1,
    pattern: [
    "AAA",
    "ABA",
    "AAA"
  ],
key: {
  A: { item: 'engineersdecor:panzerglass_block' },
  B: { item: 'minecraft:diamond' },
},
  result: {
    item: 'ironchest:diamond_to_crystal_chest_upgrade'
  }})})

      // Golden Chest Upgrade

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 1,
    pattern: [
    "AAA",
    "CBC",
    "AAA"
  ],
key: {
  A: { item: 'engineersdecor:panzerglass_block' },
  B: { item: 'minecraft:diamond' },
  C: { tag: 'forge:ingots/gold' },
},
  result: {
    item: 'ironchest:gold_to_diamond_chest_upgrade'
  }})})