// [customrecipe] type=Remove | out=projecte:dark_matter | in=projecte:dark_matter | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'projecte:dark_matter' })
})
