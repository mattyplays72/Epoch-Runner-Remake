// [customrecipe] type=Remove | out=nuclearcraft:steel_ingot | in=minecraft:steel_from_nugget | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:steel_from_nugget' })
})
