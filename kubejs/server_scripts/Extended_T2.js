 // Elite Crafting Table

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AABAA",
    "ACCCA",
    "BDEDB",
    "ACCCA",
    "AABAA"
  ],
key: {
  A: { item: 'extendedcrafting:elite_component' },
  B: { item: 'extendedcrafting:elite_catalyst' },
  C: { item: 'botania:terrasteel_ingot' },
  D: { item: 'extendedcrafting:advanced_table' },
  E: { item: 'botania:life_essence' }
},
  result: {
    item: 'extendedcrafting:elite_table'
  }})})

 // Draconic Core

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AA AA",
    "ACBCA",
    " BDB ",
    "ACBCA",
    "AA AA"
  ],
key: {
  A: { item: 'mysticalagriculture:imperium_ingot' },
  B: { item: 'mysticalagriculture:imperium_ingot_block' },
  C: { item: 'draconicevolution:draconium_block' },
  D: { item: 'projecte:dark_matter_block' },
},
  result: {
    item: 'draconicevolution:draconium_core'
  }})})

 // Wyvern Core

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AA AA",
    "ACBCA",
    " BDB ",
    "ACBCA",
    "AA AA"
  ],
key: {
  A: { item: 'nuclearcraft:curium_243' },
  B: { item: 'draconicevolution:draconium_core' },
  C: { item: 'kubejs:melodic_alloy_ingot' },
  D: { item: 'projecte:red_matter_block' },
},
  result: {
    item: 'draconicevolution:wyvern_core'
  }})})

 // Wyvern Energy Core

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "A B A",
    " ACA ",
    "BCDCB",
    " ACA ",
    "A B A"
  ],
key: {
  A: { item: 'enderio:energetic_alloy_block' },
  B: { item: 'draconicevolution:draconium_ingot' },
  C: { item: 'nuclearcraft:californium250_block' },
  D: { item: 'draconicevolution:wyvern_core' },
},
  result: {
    item: 'draconicevolution:wyvern_energy_core'
  }})})

 // Draconic Energy Core

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "A B A",
    " ECE ",
    "BCDCB",
    " ECE ",
    "A B A"
  ],
key: {
  A: { item: 'extendedcrafting:crystaltine_ingot' },
  B: { item: 'draconicevolution:awakened_draconium_block' },
  C: { item: 'projecte:dark_matter_block' },
  D: { item: 'draconicevolution:awakened_core' },
  E: { item: 'kubejs:vivid_alloy_block' },
},
  result: {
    item: 'draconicevolution:draconic_energy_core'
  }})})

 // Basic Fusion Crafting Injector

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "ABCBA",
    "DDEDD",
    "DEEED",
    "DEEED",
    "DDDDD"
  ],
key: {
  A: { item: 'minecraft:diamond_block' },
  B: { item: 'minecraft:diamond' },
  C: { item: 'draconicevolution:draconium_core' },
  D: { item: 'enderio:dark_steel_ingot' },
  E: { item: 'kubejs:stellar_alloy_block' },
},
  result: {
    item: 'draconicevolution:basic_crafting_injector'
  }})})

 // Prosperity Ingot

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "     ",
    "ABBBA",
    "CCDCC",
    "ABBBA",
    "     "
  ],
key: {
  A: { item: 'projecte:low_covalence_dust' },
  B: { item: 'projecte:aeternalis_fuel' },
  C: { item: 'mysticalagriculture:prosperity_block' },
  D: { item: 'botania:mana_diamond' },
},
  result: {
    item: '2x mysticalagriculture:prosperity_ingot'
  }})})

 // Growth Accelerator

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AABAA",
    "ACDCA",
    "BDEDB",
    "ACDCA",
    "AABAA"
  ],
key: {
  A: { item: 'mysticalagriculture:inferium_block' },
  B: { item: 'botania:terrasteel_nugget' },
  C: { item: 'enderio:vibrant_alloy_ingot' },
  D: { item: 'botania:manasteel_ingot' },
  E: { item: 'enderio:grains_of_infinity' },
},
  result: {
    item: '2x mysticalagriculture:inferium_growth_accelerator'
  }})})

 // Dark Matter Pedestal

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " ABA ",
    " ACA ",
    " ACA ",
    "CCCCC",
    "CDDDC"
  ],
key: {
  A: { item: 'projecte:dark_matter' },
  B: { item: 'draconicevolution:draconium_block' },
  C: { item: 'projecte:dark_matter_block' },
  D: { item: 'draconicevolution:infused_obsidian' },
},
  result: {
    item: 'projecte:dm_pedestal'
  }})})

 // Alchemical Chest

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AABCC",
    "ABDBC",
    "EFGFE",
    "EFHFE",
    "EFFFE"
  ],
key: {
  A: { item: 'projecte:low_covalence_dust' },
  B: { item: 'projecte:high_covalence_dust' },
  C: { item: 'projecte:medium_covalence_dust' },
  D: { item: 'projecte:dark_matter' },
  E: { item: 'extendedcrafting:black_iron_ingot' },
  F: { item: 'enderio:dark_steel_ingot' },
  G: { item: 'mysticalagriculture:prosperity_ingot' },
  H: { item: 'ironchest:crystal_chest' },
},
  result: {
    item: 'projecte:alchemical_chest'
  }})}) 

 // Dark Matter Helmet

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " AAA ",
    "AAAAA",
    "ABBBA",
    "ABCBA",
    "AD DA"
  ],
key: {
  A: { item: 'projecte:dark_matter_block' },
  B: { item: 'thermal:enderium_ingot' },
  C: { item: 'mysticalagriculture:awakened_supremium_helmet' },
  D: { item: 'projecte:dark_matter' },
},
  result: {
    item: 'projecte:dm_helmet'
  }})}) 

 // Dark Matter Chestplate

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AD DA",
    "AADAA",
    "ABCBA",
    "ABBBA",
    " AAA "
  ],
key: {
  A: { item: 'projecte:dark_matter_block' },
  B: { item: 'thermal:enderium_ingot' },
  C: { item: 'mysticalagriculture:awakened_supremium_chestplate' },
  D: { item: 'projecte:dark_matter' },
},
  result: {
    item: 'projecte:dm_chestplate'
  }})}) 

 // Dark Matter Leggings

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "DBBBD",
    "ABCBA",
    "ADADA",
    "AA AA",
    "AA AA"
  ],
key: {
  A: { item: 'projecte:dark_matter_block' },
  B: { item: 'thermal:enderium_ingot' },
  C: { item: 'mysticalagriculture:awakened_supremium_leggings' },
  D: { item: 'projecte:dark_matter' },
},
  result: {
    item: 'projecte:dm_leggings'
  }})}) 

 // Dark Matter Boots

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " A A ",
    "DA AD",
    "DA AD",
    "DA AD",
    "DBCBD"
  ],
key: {
  A: { item: 'projecte:dark_matter_block' },
  B: { item: 'thermal:enderium_ingot' },
  C: { item: 'mysticalagriculture:awakened_supremium_boots' },
  D: { item: 'projecte:dark_matter' },
},
  result: {
    item: 'projecte:dm_boots'
  }})}) 

 // Formation Core

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "  A  ",
    " ABA ",
    " CDE ",
    " AFA ",
    "  A  "
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate' },
  B: { item: 'projecte:dark_matter' },
  C: { item: 'enderio:energetic_alloy_ingot' },
  D: { item: 'botania:rune_envy' },
  E: { item: 'enderio:end_steel_ingot' },
  F: { item: 'ae2:fluix_pearl' },
},
  result: {
    item: '2x ae2:formation_core'
  }})}) 

 // Annihilation Core

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "  A  ",
    " AFA ",
    " EDC ",
    " ABA ",
    "  A  "
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate' },
  B: { item: 'projecte:dark_matter' },
  C: { item: 'kubejs:vivid_alloy_ingot' },
  D: { item: 'botania:rune_envy' },
  E: { item: 'enderio:end_steel_ingot' },
  F: { item: 'ae2:fluix_pearl' },
},
  result: {
    item: '2x ae2:annihilation_core'
  }})}) 

  // Basic Capacitor

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " ABA ",
    " CDC ",
    " ADA ",
    " ABA ",
    " E E "
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate' },
  B: { item: 'nuclearcraft:plate_elite' },
  C: { item: 'immersiveengineering:logic_circuit' },
  D: { item: 'enderio:grains_of_infinity' },
  E: { item: 'immersiveengineering:stick_iron' },
},
  result: {
    item: 'enderio:basic_capacitor'
  }})}) 

 // Double Layer Capacitor

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " ABA ",
    " CDC ",
    " ADA ",
    " FBF ",
    " E E "
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate' },
  B: { item: 'botania:quartz_blaze' },
  C: { item: 'kubejs:advanced_circuit_board' },
  D: { item: 'enderio:energetic_alloy_ingot' },
  E: { item: 'enderio:basic_capacitor' },
  F: { item: 'enderio:iron_gear' },
},
  result: {
    item: 'enderio:double_layer_capacitor'
  }})}) 

 // Octadic Capacitor

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " ABA ",
    " CDC ",
    " ADA ",
    " FBF ",
    " E E "
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate' },
  B: { item: 'nuclearcraft:lithium_ion_cell' },
  C: { item: 'kubejs:processor_circuit_board' },
  D: { item: 'enderio:vibrant_alloy_ingot' },
  E: { item: 'enderio:double_layer_capacitor' },
  F: { item: 'enderio:dark_bimetal_gear' },
},
  result: {
    item: 'enderio:octadic_capacitor'
  }})}) 

 // Enchanter

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "ABCBA",
    "AADAA",
    " EFE ",
    " GHG ",
    "GIJIG"
  ],
key: {
  A: { item: 'enderio:dark_steel_ingot' },
  B: { item: 'mysticalagriculture:diamond_essence' },
  C: { item: 'minecraft:book' },
  D: { item: 'enderio:void_chassis' },
  E: { item: 'thermal:netherite_plate' },
  F: { item: 'mekanism:elite_control_circuit' },
  G: { item: 'nuclearcraft:plate_elite' },
  H: { item: 'enderio:ender_crystal' },
  I: { item: 'minecraft:enchanting_table' },
  J: { item: 'enderio:iron_gear' },
},
  result: {
    item: 'enderio:enchanter'
  }})}) 

 // Soul Binder

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "ABCBA",
    "BDEDB",
    "CEFEC",
    "BDEDB",
    "AACAA"
  ],
key: {
  A: { item: 'mekanism:steel_casing' },
  B: { item: 'enderio:soularium_ingot' },
  C: { tag:  'forge:heads' },
  D: { item: 'botania:manasteel_ingot' },
  E: { item: 'thermal:netherite_plate' },
  F: { item: 'enderio:ensouled_chassis' },
},
  result: {
    item: 'enderio:soul_binder'
  }})}) 
  
 // Simple Machine Chassis

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "ABCBA",
    "BD DB",
    "C   C",
    "BD DB",
    "ABCBA"
  ],
key: {
  A: { item: 'mekanism:steel_casing' },
  B: { item: 'mekanism:block_refined_obsidian' },
  C: { item: 'nuclearcraft:neutronium_frame' },
  D: { item: 'enderio:grains_of_infinity' },
},
  result: {
    item: 'kubejs:simple_machine_chassis'
  }})}) 
  
 // Travel Anchor

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AB BA",
    "BCDCB",
    " DED ",
    "BCDCB",
    "AB BA"
  ],
key: {
  A: { item: 'kubejs:machine_parts' },
  B: { item: 'kubejs:iron_alloy_ingot' },
  C: { item: 'botania:manasteel_ingot' },
  D: { item: 'thermal:enderium_plate' },
  E: { item: 'botania:ender_eye_block' },
},
  result: {
    item: 'enderio:travel_anchor'
  }})}) 

 // Flux Controller

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "ABCBA",
    "BDEDB",
    "A   A",
    "A   A",
    "ACFCA"
  ],
key: {
  A: { item: 'fluxnetworks:flux_block'},
  B: { item: 'kubejs:stellar_alloy_ingot' },
  C: { item: 'fluxnetworks:flux_core'},
  D: { item: 'ae2:calculation_processor' },
  E: { item: 'ae2:logic_processor' },
  F: { item: 'extrabotany:dimension_catalyst' },
},
  result: {
    item: 'fluxnetworks:flux_controller'
  }})}) 

 // Flux Point

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " ABA ",
    "ACDCA",
    "BEFEB",
    "ACDCA",
    " ABA "
  ],
key: {
  A: { item: 'fluxnetworks:flux_dust'},
  B: { item: 'fluxnetworks:flux_core' },
  C: { item: 'fluxnetworks:flux_block'},
  D: { item: 'mekanism:ultimate_control_circuit' },
  E: { item: 'kubejs:stellar_alloy_ingot' },
  F: { item: 'ae2:import_bus' },
},
  result: {
    item: '4x fluxnetworks:flux_point'
  }})}) 

 // Flux Plug

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " ABA ",
    "ACDCA",
    "BEFEB",
    "ACDCA",
    " ABA "
  ],
key: {
  A: { item: 'fluxnetworks:flux_dust'},
  B: { item: 'fluxnetworks:flux_core' },
  C: { item: 'fluxnetworks:flux_block'},
  D: { item: 'mekanism:ultimate_control_circuit' },
  E: { item: 'kubejs:stellar_alloy_ingot' },
  F: { item: 'ae2:export_bus' },
},
  result: {
    item: '4x fluxnetworks:flux_plug'
  }})}) 

 // Metallurgic Infuser // infinity needs to be replaced with something like compressed desh --> mars age

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "ABBBA",
    "C   C",
    "ABBBA",
    "DEEED",
    "DFGFD"
  ],
key: {
  A: { item: 'nuclearcraft:plate_elite'},
  B: { item: 'mekanism:block_osmium' },
  C: { item: 'immersiveengineering:steel_scaffolding_standard'},
  D: { item: 'kubejs:block_infinity_2' },
  E: { item: 'immersiveengineering:furnace_heater' },
  F: { item: 'mekanism:steel_casing' },
  G: { item: 'kubejs:processor_circuit_board' },
},
  result: {
    item: 'mekanism:metallurgic_infuser'
  }})}) 

 // Fission Reactor Controller

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AAAAA",
    "ABCBA",
    "ADDDA",
    "ABCBA",
    "EFGFE"
  ],
key: {
  A: { item: 'nuclearcraft:plate_elite'},
  B: { item: 'nuclearcraft:coil_magnesium_diboride' },
  C: { item: 'nuclearcraft:nuclear_furnace'},
  D: { item: 'immersiveengineering:thermoelectric_generator' },
  E: { item: 'nuclearcraft:chassis' },
  F: { item: 'kubejs:advanced_electronic_alloy_plate' },
  G: { item: 'kubejs:processor_circuit_board' },
},
  result: {
    item: 'nuclearcraft:fission_reactor_controller'
  }})}) 

 // Fusion Electromagnet

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AABAA",
    "CCCCC",
    "CDDDC",
    "CCCCC",
    "AABAA"
  ],
key: {
  A: { item: 'kubejs:block_infinity_2'},
  B: { item: 'immersiveengineering:sheetmetal_steel' },
  C: { item: 'nuclearcraft:coil_copper'},
  D: { item: 'thermal:enderium_ingot' },
},
  result: {
    item: 'nuclearcraft:basic_electromagnet'
  }})}) 

 // AE2 Inscriber

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "ABBBA",
    "BCDCB",
    "B    ",
    "B   B",
    "ABBBA"
  ],
key: {
  A: { item: 'kubejs:block_infinity_2'},
  B: { item: 'ae2:smooth_sky_stone_block' },
  C: { item: 'kubejs:processor_circuit_board'},
  D: { item: 'enderio:octadic_capacitor' },
},
  result: {
    item: 'ae2:inscriber'
  }})}) 

 // ME Drive

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "AAAAA",
    "ABABA",
    "ABABA",
    "ABCBA",
    "DEDED"
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate'},
  B: { item: 'kubejs:processor_circuit_board' },
  C: { item: 'ae2:engineering_processor'},
  D: { item: 'kubejs:block_infinity_2' },
  E: { item: 'immersiveengineering:steel_scaffolding_standard' },
},
  result: {
    item: 'ae2:drive'
  }})}) 

 // ME Controller

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "ABABA",
    "BCDCB",
    "ADEDA",
    "BFDGB",
    "AHAHA"
  ],
key: {
  A: { item: 'kubejs:block_infinity_2'},
  B: { item: 'kubejs:processor_circuit_board' },
  C: { item: 'ae2:logic_processor'},
  D: { item: 'kubejs:advanced_electronic_alloy_plate' },
  E: { item: 'enderio:octadic_capacitor' },
  F: { item: 'ae2:calculation_processor'},
  G: { item: 'ae2:engineering_processor' },
  H: { item: 'immersiveengineering:steel_scaffolding_standard' },
},
  result: {
    item: 'ae2:controller'
  }})}) 

 // ME Item Housing

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "     ",
    "AABAA",
    "CDDDC",
    "CEEEC",
    "     "
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate'},
  B: { item: 'ae2:quartz_glass' },
  C: { item: 'enderio:dark_steel_ingot'},
  D: { item: 'ae2:certus_quartz_crystal' },
  E: { item: 'kubejs:electronic_engineering_block' },
},
  result: {
    item: 'ae2:item_cell_housing'
  }})}) 

 // ME Fluid Housing

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    "     ",
    "AABAA",
    "CDDDC",
    "CEEEC",
    "     "
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate'},
  B: { item: 'ae2:quartz_glass' },
  C: { item: 'thermal:constantan_ingot'},
  D: { item: 'ae2:certus_quartz_crystal' },
  E: { item: 'kubejs:electronic_engineering_block' },
},
  result: {
    item: 'ae2:fluid_cell_housing'
  }})}) 

 // ME 16k Storage Component

ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table({
    tier: 2,
    pattern: [
    " ABA ",
    "ACDCA",
    "BEFEB",
    "ACDCA",
    " ABA "
  ],
key: {
  A: { item: 'kubejs:advanced_electronic_alloy_plate'},
  B: { item: 'enderio:dark_steel_ingot' },
  C: { item: 'botania:manasteel_ingot'},
  D: { item: 'enderio:ender_resonator' },
  E: { item: 'ae2:cell_component_4k' },
  F: { item: 'enderio:double_layer_capacitor' },
},
  result: {
    item: 'ae2:cell_component_16k'
  }})}) 