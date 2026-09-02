// [customrecipe] type=Remove | out=crusty_chunks:steel_ingot | in=crusty_chunks:rusty_block_smelt | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'crusty_chunks:rusty_block_smelt' })
})
