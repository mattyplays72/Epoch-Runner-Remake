// [customrecipe] type=Shaped 3x3 | out=nuclearcraft:coil_copper x2 | in=immersiveengineering:wire_copper,kubejs:magnet
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('nuclearcraft:coil_copper', 2),
    [
      'AA ',
      'BB ',
      'AA '
    ],
    {
      A: 'immersiveengineering:wire_copper',
      B: 'kubejs:magnet'
    }
  )
})
