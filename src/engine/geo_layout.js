

class GeoLayoutCommands {
    constructor() {
        this.sCurrentLayout = {}
    }


    process_geo_layout(geoLayout) {
        this.sCurrentLayout.layout = geoLayout
        this.sCurrentLayout.index = 0

        /// set a bunch of other initial globals

        while (this.sCurrentLayout.index < geoLayout.length) {

        }

    }
}

export const GeoLayoutCommandsInstance = new GeoLayoutCommands()
