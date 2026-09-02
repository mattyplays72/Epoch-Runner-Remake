// [customrecipe] type=Remove | out=nuclearcraft:steel_ingot | in=minecraft:nuclearcraft_steel_dust | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:nuclearcraft_steel_dust' })
})
