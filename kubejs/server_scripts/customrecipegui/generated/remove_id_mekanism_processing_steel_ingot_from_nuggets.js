// [customrecipe] type=Remove | out=mekanism:ingot_steel | in=mekanism:processing/steel/ingot/from_nuggets | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:processing/steel/ingot/from_nuggets' })
})
