// [customrecipe] type=Remove | out=immersiveengineering:rs_engineering | in=immersiveengineering:crafting/rs_engineering | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/rs_engineering' })
})
