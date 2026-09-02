// [customrecipe] type=Remove | out=railcraft:steel_ingot | in=railcraft:steel_ingot | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'railcraft:steel_ingot' })
})
