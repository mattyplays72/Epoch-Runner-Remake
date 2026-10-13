// [customrecipe] type=Shaped 3x3 | out=kubejs:stellar_alloy_block | in=kubejs:stellar_alloy_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:stellar_alloy_block', 1),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A: 'kubejs:stellar_alloy_ingot'
    }
  )
})
