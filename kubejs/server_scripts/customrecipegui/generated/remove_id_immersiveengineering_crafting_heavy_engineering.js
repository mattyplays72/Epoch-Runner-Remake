// [customrecipe] type=Remove | out=immersiveengineering:heavy_engineering | in=immersiveengineering:crafting/heavy_engineering | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/heavy_engineering' })
})
