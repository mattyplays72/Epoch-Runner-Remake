// [customrecipe] type=Remove | out=railcraft:steel_ingot | in=railcraft:steel_ingot_from_steel_nugget | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'railcraft:steel_ingot_from_steel_nugget' })
})
