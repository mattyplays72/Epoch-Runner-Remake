// [customrecipe] type=Shaped 3x3 | out=kubejs:carbon_brush | in=immersiveengineering:dust_coke,immersiveengineering:stick_treated,immersiveengineering:stick_iron
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:carbon_brush', 1),
    [
      'AB ',
      'C  ',
      '   '
    ],
    {
      A: 'immersiveengineering:dust_coke',
      B: 'immersiveengineering:stick_treated',
      C: 'immersiveengineering:stick_iron'
    }
  )
})
