//priority 0


ServerEvents.recipes(event => {

    // Void Chassis
    event.replaceInput(
        { id: 'extendedcrafting:black_iron_slate' },         // Filterung nach Rezept-ID.
        'extendedcrafting:black_iron_ingot',            // Das Item, was ersetzt werden soll.
        stages.stage3.core                 // Womit wird das Item ersetzt!
    )

})
