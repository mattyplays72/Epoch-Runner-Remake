// [customrecipe] type=Shapeless 3x3 | out=kubejs:magnet | in=minecraft:redstone,minecraft:iron_ingot,minecraft:blue_dye,minecraft:red_dye
ServerEvents.recipes(event => {
  event.shapeless('1x kubejs:magnet', [
    'minecraft:redstone',
    'minecraft:redstone',
    'minecraft:redstone',
    'minecraft:redstone',
    'minecraft:iron_ingot',
    'minecraft:blue_dye',
    'minecraft:red_dye'
  ])
})
