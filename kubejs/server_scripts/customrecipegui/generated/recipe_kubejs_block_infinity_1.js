// [customrecipe] type=Shaped 3x3 | out=kubejs:block_infinity_1 | in=kubejs:block_infinity_0
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:block_infinity_1', 1),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A: 'kubejs:block_infinity_0'
    }
  )
})
