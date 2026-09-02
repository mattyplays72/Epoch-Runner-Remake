// [customrecipe] type=Shaped 3x3 | out=immersiveengineering:rs_engineering x4 | in=immersiveengineering:plate_steel,immersiveengineering:wirecoil_redstone,enderio:redstone_alloy_ingot,enderio:grains_of_infinity
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:rs_engineering', 4),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'immersiveengineering:plate_steel',
      B: 'immersiveengineering:wirecoil_redstone',
      C: 'enderio:redstone_alloy_ingot',
      D: 'enderio:grains_of_infinity'
    }
  )
})
