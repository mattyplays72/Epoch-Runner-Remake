// [customrecipe] type=Shaped 3x3 | out=kubejs:machine_parts x16 | in=minecraft:iron_ingot,enderio:void_chassis
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:machine_parts', 16),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'enderio:void_chassis'
    }
  )
})
