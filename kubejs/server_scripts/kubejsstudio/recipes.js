// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.recipes(event => {
    event.remove({ id: 'create:crafting/kinetics/millstone' })
    event.remove({ id: 'create:mechanical_crafting/crushing_wheel' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_press' })
    event.remove({ id: 'create:crafting/kinetics/steam_engine' })
    event.remove({ id: 'create:crafting/kinetics/deployer' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_saw' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_drill' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_crafter' })
    event.remove({ id: 'create:crafting/kinetics/large_water_wheel' })
    event.remove({ id: 'create:crafting/kinetics/water_wheel' })
    event.remove({ id: 'create:crafting/kinetics/windmill_bearing' })
})
