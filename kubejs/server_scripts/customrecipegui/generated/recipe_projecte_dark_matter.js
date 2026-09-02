// [customrecipe] type=Shaped 3x3 | out=projecte:dark_matter | in=projecte:aeternalis_fuel,mysticalagradditions:insanium_block
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('projecte:dark_matter', 1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'projecte:aeternalis_fuel',
      B: 'mysticalagradditions:insanium_block'
    }
  )
})
