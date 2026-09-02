// [customrecipe] type=Remove | out=mekanism:block_steel | in=mekanism:storage_blocks/steel | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:storage_blocks/steel' })
})
