// [customrecipe] type=Remove | out=mekanism:ingot_steel | in=mekanism:processing/steel/ingot/from_block | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:processing/steel/ingot/from_block' })
})
