// [customrecipe] type=Remove | out=extendedcrafting:basic_table | in=extendedcrafting:basic_table | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'extendedcrafting:basic_table' })
})
