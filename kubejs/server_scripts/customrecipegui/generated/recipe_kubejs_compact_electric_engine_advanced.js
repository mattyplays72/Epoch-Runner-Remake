// [customrecipe] type=Shaped 3x3 | out=kubejs:compact_electric_engine_advanced | in=kubejs:tungsten_plate,immersiveengineering:stick_steel,kubejs:magnet,kubejs:compact_electric_engine,immersiveengineering:wirecoil_steel
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:compact_electric_engine_advanced', 1),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'kubejs:tungsten_plate',
      B: 'immersiveengineering:stick_steel',
      C: 'kubejs:magnet',
      D: 'kubejs:compact_electric_engine',
      E: 'immersiveengineering:wirecoil_steel'
    }
  )
})
