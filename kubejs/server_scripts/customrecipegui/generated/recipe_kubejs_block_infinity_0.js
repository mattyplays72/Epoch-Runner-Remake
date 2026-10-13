// [customrecipe] type=Shaped 3x3 | out=kubejs:block_infinity_0 | in=enderio:grains_of_infinity
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:block_infinity_0', 1),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A: 'enderio:grains_of_infinity'
    }
  )
})
