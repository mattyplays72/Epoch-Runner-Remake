// [customrecipe] type=Shaped 3x3 | out=immersiveengineering:heavy_engineering x2 | in=immersiveengineering:plate_steel,immersiveengineering:component_steel,minecraft:piston,immersiveengineering:ingot_electrum
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:heavy_engineering', 2),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'immersiveengineering:plate_steel',
      B: 'immersiveengineering:component_steel',
      C: 'minecraft:piston',
      D: 'immersiveengineering:ingot_electrum'
    }
  )
})
