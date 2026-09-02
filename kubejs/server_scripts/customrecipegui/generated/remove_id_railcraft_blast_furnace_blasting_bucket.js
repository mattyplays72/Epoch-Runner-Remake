// [customrecipe] type=Remove | out=railcraft:steel_ingot | in=railcraft:blast_furnace/blasting_bucket | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'railcraft:blast_furnace/blasting_bucket' })
})
