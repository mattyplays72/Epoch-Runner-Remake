// [customrecipe] type=Shapeless 3x3 | out=kubejs:advanced_electronic_alloy_dust x6 | in=immersiveengineering:dust_constantan,immersiveengineering:dust_electrum,nuclearcraft:platinum_dust
ServerEvents.recipes(event => {
  event.shapeless('6x kubejs:advanced_electronic_alloy_dust', [
    'immersiveengineering:dust_constantan',
    'immersiveengineering:dust_electrum',
    'immersiveengineering:dust_electrum',
    'immersiveengineering:dust_constantan',
    'immersiveengineering:dust_constantan',
    'nuclearcraft:platinum_dust'
  ])
})
