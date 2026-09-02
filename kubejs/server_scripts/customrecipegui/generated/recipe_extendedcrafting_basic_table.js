// [customrecipe] type=Shaped 3x3 | out=extendedcrafting:basic_table | in=extendedcrafting:basic_component,extendedcrafting:basic_catalyst,minecraft:crafting_table,nuclearcraft:lithium_block,extendedcrafting:black_iron_slate
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('extendedcrafting:basic_table', 1),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'extendedcrafting:basic_component',
      B: 'extendedcrafting:basic_catalyst',
      C: 'minecraft:crafting_table',
      D: 'nuclearcraft:lithium_block',
      E: 'extendedcrafting:black_iron_slate'
    }
  )
})
