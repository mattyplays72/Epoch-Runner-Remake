// Adding Items

StartupEvents.registry('item', event => {
    // Energetic Silver
    event.create('energetic_silver_ingot').texture('enderio:item/energetic_silver').displayName('Energetic Silver Ingot')
    // Iron Alloy
    event.create('iron_alloy_ingot').texture('enderio:item/iron_alloy').displayName('Iron Alloy Ingot')
    // Melodic Alloy
    event.create('melodic_alloy_ingot').texture('enderio:item/melodic_alloy').displayName('Melodic Alloy Ingot')
    // Stellar Alloy
    event.create('stellar_alloy_ingot').texture('enderio:item/stellar_alloy').displayName('Stellar Alloy Ingot')
    // Vivid Alloy
    event.create('vivid_alloy_ingot').texture('enderio:item/vivid_alloy').displayName('Vivid Alloy Ingot')
    // Crystalline Alloy
    event.create('titanium_ingot').texture('enderio:item/titanium').displayName('Titanium Ingot')
    // Machine Parts
    event.create('machine_parts').texture('enderio:item/machine_parts').displayName('Machine Parts')
    // Simple Machine Chassis
    event.create('simple_machine_chassis').parentModel('minecraft:block/cube_all').texture('all', 'enderio:block/simple_machine_chassis').displayName('Simple Machine Chassis')
})

// Adding Blocks

StartupEvents.registry('block', event => {
    // Infinity Dust Block
    event.create('block_infinity_0')
        .textureAll('enderio:block/block_infinity_0')
        .displayName('Infinity Dust Block')
        .hardness(2.0)
        .requiresTool(true)
    // Compressed Infinity Dust Block
    event.create('block_infinity_1')
        .textureAll('enderio:block/block_infinity_1')
        .displayName('Compressed Infinity Dust Block')
        .hardness(2.0)
        .requiresTool(true)
    // Double Compressed Infinity Dust Block
    event.create('block_infinity_2')
        .textureAll('enderio:block/block_infinity_2')
        .displayName('Double Compressed Infinity Dust Block')
        .hardness(2.0)
        .requiresTool(true)

    // Vivid Alloy Block
    event.create('vivid_alloy_block')
        .textureAll('enderio:block/vivid')
        .displayName('Vivid Alloy Block')
        .hardness(2.0)
        .requiresTool(true)

    // Stellar Alloy Block
    event.create('stellar_alloy_block')
        .textureAll('enderio:block/stellar')
        .displayName('Stellar Alloy Block')
        .hardness(2.0)
        .requiresTool(true)
})