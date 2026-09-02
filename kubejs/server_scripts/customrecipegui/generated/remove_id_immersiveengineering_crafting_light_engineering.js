// [customrecipe] type=Remove | out=immersiveengineering:light_engineering | in=immersiveengineering:crafting/light_engineering | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/light_engineering' })
})
