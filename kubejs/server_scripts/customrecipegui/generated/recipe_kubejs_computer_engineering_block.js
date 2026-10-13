// [customrecipe] type=Shaped 3x3 | out=kubejs:computer_engineering_block x3 | in=kubejs:processor_circuit_board,kubejs:advanced_electronic_engineering_block,immersiveengineering:alu_scaffolding_standard
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:computer_engineering_block', 3),
    [
      'ABA',
      ' C ',
      'ABA'
    ],
    {
      A: 'kubejs:processor_circuit_board',
      B: 'kubejs:advanced_electronic_engineering_block',
      C: 'immersiveengineering:alu_scaffolding_standard'
    }
  )
})
