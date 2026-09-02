// [customrecipe] type=Remove | out=createbigcannons:steel_ingot | in=createbigcannons:steel_ingot_from_block | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'createbigcannons:steel_ingot_from_block' })
})
