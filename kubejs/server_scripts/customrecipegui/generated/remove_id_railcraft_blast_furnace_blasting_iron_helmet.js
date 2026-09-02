// [customrecipe] type=Remove | out=railcraft:steel_ingot | in=railcraft:blast_furnace/blasting_iron_helmet | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'railcraft:blast_furnace/blasting_iron_helmet' })
})
