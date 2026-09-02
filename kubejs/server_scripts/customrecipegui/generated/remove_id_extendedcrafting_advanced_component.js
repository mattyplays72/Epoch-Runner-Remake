// [customrecipe] type=Remove | out=extendedcrafting:advanced_component | in=extendedcrafting:advanced_component | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'extendedcrafting:advanced_component' })
})
