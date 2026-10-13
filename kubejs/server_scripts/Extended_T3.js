// Ultimate Crafting Table

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 3,
    pattern: [
    "AABBBAA",
    "ACCCCCA",
    "BCDEDCB",
    "BCEFECB",
    "BCDEDCB",
    "ACCCCCA",
    "AABBBAA",
  ],
key: {
  A: { item: "extendedcrafting:advanced_component" },
  B: { item: "extendedcrafting:advanced_catalyst" },
  C: { item: "extendedcrafting:basic_table" },
  D: { item: "nuclearcraft:uranium238_block" },
  E: { item: "extendedcrafting:black_iron_slate" },
  D: { item: "nuclearcraft:uranium238_block" }
},
  result: {
    item: "extendedcrafting:advanced_table"
  }})})
