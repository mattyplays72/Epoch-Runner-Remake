// [customrecipe] type=Shaped 3x3 | out=immersiveengineering:rs_engineering x2 | in=thermal:tin_plate,immersiveengineering:wirecoil_redstone,minecraft:redstone,minecraft:copper_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:rs_engineering', 2),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'thermal:tin_plate',
      B: 'immersiveengineering:wirecoil_redstone',
      C: 'minecraft:redstone',
      D: 'minecraft:copper_ingot'
    }
  )
})
