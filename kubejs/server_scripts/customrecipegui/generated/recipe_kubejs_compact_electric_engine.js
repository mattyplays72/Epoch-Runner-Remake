// [customrecipe] type=Shaped 3x3 | out=kubejs:compact_electric_engine | in=kubejs:carbon_brush,immersiveengineering:plate_aluminum,kubejs:magnet,immersiveengineering:wirecoil_electrum
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:compact_electric_engine', 1),
    [
      'A A',
      'BCB',
      'BDB'
    ],
    {
      A: 'kubejs:carbon_brush',
      B: 'immersiveengineering:plate_aluminum',
      C: 'kubejs:magnet',
      D: 'immersiveengineering:wirecoil_electrum'
    }
  )
})
