// [customrecipe] type=Remove | out=crusty_chunks:steel_ingot | in=crusty_chunks:steel_block_ore_recipe | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'crusty_chunks:steel_block_ore_recipe' })
})
