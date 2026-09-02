// [customrecipe] type=Shaped 3x3 | out=immersiveengineering:light_engineering x2 | in=thermal:tin_plate,immersiveengineering:component_steel,minecraft:copper_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:light_engineering', 2),
    [
      'ABA',
      'CCC',
      'ABA'
    ],
    {
      A: 'thermal:tin_plate',
      B: 'immersiveengineering:component_steel',
      C: 'minecraft:copper_ingot'
    }
  )
})
