// [customrecipe] type=Remove | out=warium_ponder_jei:alloy_furnace/steel_ingot | in=warium_ponder_jei:alloy_furnace/steel_ingot | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'warium_ponder_jei:alloy_furnace/steel_ingot' })
})
