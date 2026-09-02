// [customrecipe] type=Remove | out=mekanism:nugget_steel | in=mekanism:nuggets/steel | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:nuggets/steel' })
})
