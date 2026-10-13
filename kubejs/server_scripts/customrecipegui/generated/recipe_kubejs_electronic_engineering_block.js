// [customrecipe] type=Shaped 3x3 | out=kubejs:electronic_engineering_block x3 | in=kubejs:advanced_circuit_board,kubejs:electronic_engineering_block,kubejs:advanced_electronic_alloy_plate,kubejs:tungsten_wire
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:electronic_engineering_block', 3),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:advanced_circuit_board',
      B: 'kubejs:electronic_engineering_block',
      C: 'kubejs:advanced_electronic_alloy_plate',
      D: 'kubejs:tungsten_wire'
    }
  )
})
