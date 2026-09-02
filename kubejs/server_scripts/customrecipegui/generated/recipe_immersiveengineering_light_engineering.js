// [customrecipe] type=Shaped 3x3 | out=immersiveengineering:light_engineering x4 | in=immersiveengineering:plate_steel,enderio:energized_gear,enderio:grains_of_infinity
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:light_engineering', 4),
    [
      'ABA',
      'CCC',
      'ABA'
    ],
    {
      A: 'immersiveengineering:plate_steel',
      B: 'enderio:energized_gear',
      C: 'enderio:grains_of_infinity'
    }
  )
})
