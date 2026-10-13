// [customrecipe] type=Shaped 3x3 | out=kubejs:vivid_alloy_block | in=kubejs:vivid_alloy_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:vivid_alloy_block', 1),
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A: 'kubejs:vivid_alloy_ingot'
    }
  )
})
