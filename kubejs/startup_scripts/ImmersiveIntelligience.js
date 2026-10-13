
// Adding Items

StartupEvents.registry('item', event => {

    // Advanced Electronic Alloy, Duraluminium and Tungsten Ingot

    event.create('advanced_electronic_alloy_ingot').texture('immersive:item/ingot/aea').displayName('Advanced Electronic Alloy Ingot')
    event.create('duraluminium_ingot').texture('immersive:item/ingot/duraluminium').displayName('Duraluminium Ingot')
    event.create('tungsten_ingot').texture('immersive:item/ingot/tungsten').displayName('Tungsten Ingot')

    // Advanced Electronic Alloy, Duraluminium Dust

    event.create('advanced_electronic_alloy_dust').texture('immersive:item/dust/aea').displayName('Advanced Electronic Alloy Dust')
    event.create('duraluminium_dust').texture('immersive:item/dust/duraluminium').displayName('Duraluminium Dust')

    // Advanced Electronic Alloy, Duraluminium and Tungsten Plate

    event.create('advanced_electronic_alloy_plate').texture('immersive:item/plate/aea').displayName('Advanced Electronic Alloy Plate')
    event.create('duraluminium_plate').texture('immersive:item/plate/duraluminium').displayName('Duraluminium Plate')
    event.create('tungsten_plate').texture('immersive:item/plate/tungsten').displayName('Tungsten Plate')

    // Raw Circuits

    event.create('advanced_circuit_board_raw').texture('immersive:item/electronics/advanced_circuit_board_raw').displayName('Raw Advanced Circuit Board')
    event.create('processor_circuit_board_raw').texture('immersive:item/electronics/processor_circuit_board_raw').displayName('Raw Processor Circuit Board')

    // Etched Circuits

    event.create('basic_circuit_board_etched').texture('immersive:item/electronics/basic_circuit_board_etched').displayName('Etched Basic Circuit Board')
    event.create('advanced_circuit_board_etched').texture('immersive:item/electronics/advanced_circuit_board_etched').displayName('Etched Advanced Circuit Board')
    event.create('processor_circuit_board_etched').texture('immersive:item/electronics/processor_circuit_board_etched').displayName('Etched Processor Circuit Board')

    // Done Circuits

    event.create('advanced_circuit_board').texture('immersive:item/electronics/advanced_circuit_board').displayName('Advanced Circuit Board')
    event.create('processor_circuit_board').texture('immersive:item/electronics/processor_circuit_board').displayName('Processor Circuit Board')

    // Electronic Components

    event.create('basic_electronic_component').texture('immersive:item/electronics/basic_electronic_component').displayName('Basic Electronic Component')
    event.create('transistor').texture('immersive:item/electronics/transistor').displayName('Transistor')
    event.create('advanced_vacuum_tube').texture('immersive:item/electronics/advanced_vacuum_tube').displayName('Advanced Vacuum Tube')
    event.create('Processor').texture('immersive:item/electronics/processor').displayName('Processor')
    event.create('advanced_electronic_component').texture('immersive:item/electronics/advanced_electronic_component').displayName('Advanced Electronic Component')

    // Others

    event.create('tungsten_wire').texture('immersive:item/other/tungsten').displayName('Tungsten Wire')
    event.create('silicon_boule').texture('immersive:item/other/silicon').displayName('Silicon Boule')
    event.create('silicon_wafer').texture('immersive:item/other/silicon_wafer').displayName('Silicon Wafer')
    event.create('magnet').texture('immersive:item/other/magnet').displayName('Magnet')
    event.create('carbon_brush').texture('immersive:item/other/carbon_brush').displayName('Carbon Brush')
    event.create('compact_electric_engine').texture('immersive:item/other/compact_electric_engine').displayName('Compact Electric Engine')
    event.create('compact_electric_engine_advanced').texture('immersive:item/other/compact_electric_engine_advanced').displayName('Advanced Compact Electric Engine')
})

// Adding Blocks

StartupEvents.registry('block', event => {

    // Elecronic Engineering Block

    event.create('electronic_engineering_block')
         .textureAll('immersive:block/electronic')
         .displayName('Electronic Engineering Block')
         .hardness(2.0)
         .requiresTool(true)

    // Advanced Electronic Engineering Block

    event.create('advanced_electronic_engineering_block')
         .textureAll('immersive:block/advanced')
         .displayName('Advanced Electronic Engineering Block')
         .hardness(2.0)
         .requiresTool(true)

    // Computer Engineering Block
    
    event.create('computer_engineering_block')
         .textureAll('immersive:block/computer')
         .displayName('Computer Engineering Block')
         .hardness(2.0)
         .requiresTool(true)
})