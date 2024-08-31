//priority 50

//This Script replace Dust recipes from the thermal pulverizer.

ServerEvents.recipes(event => {

    let thermal_ores = [
        'tin',
        'lead',
        'silver',
        'nickel',
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'signalum',
        'lumium',
        'enderium',
        'gold',
        'iron',
        'copper',
    ]

    thermal_ores.forEach(ore => {

        event.forEachRecipe({ type: "thermal:pulverizer" }, r => {

            //ermitteln der Ausgabe vom Pulverizer und umwandeln in ein String
            let output_check_0 = r.json.get("result").get(0).get("item")
            output_check_0.getAsString()

            //Der zu prüfende erste Wert.
            let is_it_ore_1 = JSON.stringify("thermal:" + ore + "_dust")

            //Prüfung, ob sich die Ausgabe dem zu überprüfenden Wert entspricht.
            if ( output_check_0 === is_it_ore_1 ) {

                //Hier können Rezepte für Stelle 0 definiert werden.
                r.json.get("result").get(0).add("item", "alltheores:" + ore + "_dust")

                //Prüft ob es weitere Ausgaben gibt.
                if ((r.json.get("result")).size() > 1) {
                    thermal_ores.forEach(ores => {
                        let output_check_1 = r.json.get("result").get(1).get("item")
                        output_check_1.getAsString()
                        let is_it_ore_2 = JSON.stringify("thermal:" + ores + "_dust")

                        //Trifft der Inhalt zu, können Rezepte in dem Callback des if Statements abelegt werden.
                        if ( output_check_1 === is_it_ore_2 ) {
                            r.json.get("result").get(1).add("item", "alltheores:" + ore + "_dust")
                        }
                    });
                }
                event.custom(r.json).id(r.getId())
            }

            //replaced thermal diamond dust.
            if (r.json.get("result").get(0).get("item") + '' === '"thermal:diamond_dust"') {
                r.json.get("result").get(0).add("item", "alltheores:diamond_dust")
                event.custom(r.json).id(r.getId())
            }
        })
    });


})
