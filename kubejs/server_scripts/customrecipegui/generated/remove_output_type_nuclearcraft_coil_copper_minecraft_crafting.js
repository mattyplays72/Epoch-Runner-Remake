// [customrecipe] type=Remove | out=nuclearcraft:coil_copper | in=minecraft:crafting | heat=output+type
ServerEvents.recipes(event => {
  event.remove({ output: 'nuclearcraft:coil_copper', type: 'minecraft:crafting' })
})
