// [customrecipe] type=Remove | out=railcraft:steel_block | in=railcraft:steel_block_from_steel_ingot | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'railcraft:steel_block_from_steel_ingot' })
})
