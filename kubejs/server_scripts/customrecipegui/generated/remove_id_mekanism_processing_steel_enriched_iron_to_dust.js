// [customrecipe] type=Remove | out=mekanism:dust_steel | in=mekanism:processing/steel/enriched_iron_to_dust | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:processing/steel/enriched_iron_to_dust' })
})
