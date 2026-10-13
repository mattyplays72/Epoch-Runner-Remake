// nether portal only ignitable with gamestage

BlockEvents.rightClicked('minecraft:obsidian', event => {
    const { player, item, block } = event
    if (item == 'minecraft:flint_and_steel' || item == 'minecraft:fire_charge') {
        if (!player.stages.has('gamestage_nether')) {
            event.cancel()
        }
    }
})

// makes nether inaccessable

ItemEvents.rightClicked('kubejs:gamestage_nether', event => {
    const { player, item, server } = event
        player.stages.add('gamestage_nether')
        item.count--
        player.tell(Text.white("Access Granted"))
})