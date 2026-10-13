// [customrecipe] type=Shaped 3x3 | out=kubejs:block_infinity_2 | in=kubejs:block_infinity_1
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:block_infinity_2', 1),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A: 'kubejs:block_infinity_1'
    }
  )
})
