// [customrecipe] type=Remove | out=nuclearcraft:coil_copper | in=nuclearcraft:coil_copper | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'nuclearcraft:coil_copper' })
})
