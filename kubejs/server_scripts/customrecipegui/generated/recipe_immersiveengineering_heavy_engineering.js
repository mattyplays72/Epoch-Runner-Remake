// [customrecipe] type=Shaped 3x3 | out=immersiveengineering:heavy_engineering x4 | in=enderio:dark_steel_ingot,minecraft:piston,enderio:vibrant_gear,thermal:signalum_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:heavy_engineering', 4),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'enderio:dark_steel_ingot',
      B: 'minecraft:piston',
      C: 'enderio:vibrant_gear',
      D: 'thermal:signalum_ingot'
    }
  )
})
