// [customrecipe] type=Remove | out=extendedcrafting:advanced_table | in=extendedcrafting:advanced_table | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'extendedcrafting:advanced_table' })
})
