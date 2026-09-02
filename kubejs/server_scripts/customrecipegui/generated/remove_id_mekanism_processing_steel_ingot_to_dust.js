// [customrecipe] type=Remove | out=mekanism:dust_steel | in=mekanism:processing/steel/ingot_to_dust | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:processing/steel/ingot_to_dust' })
})
