require([
    "esri/Map",
    "esri/layers/GeoJSONLayer",
    "esri/views/MapView",
    "esri/widgets/Legend"
], function(Map, GeoJSONLayer, MapView, Legend) {
    const url =
        'http://hrhackathon.itconcept.it/api/v1/filterlistgeo.php';

    const template = {
        title: "{name}",
        content: "{proffession}, {city}"
    };

    // The heatmap renderer assigns each pixel in the view with
    // an intensity value. The ratio of that intensity value
    // to the maxPixel intensity is used to assign a color
    // from the continuous color ramp in the colorStops property

    const renderer = {
        type: "heatmap",
        colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#472b77", ratio: 0.083 },
            { color: "#4e2d87", ratio: 0.166 },
            { color: "#563098", ratio: 0.249 },
            { color: "#5d32a8", ratio: 0.332 },
            { color: "#6735be", ratio: 0.415 },
            { color: "#7139d4", ratio: 0.498 },
            { color: "#7b3ce9", ratio: 0.581 },
            { color: "#853fff", ratio: 0.664 },
            { color: "#a46fbf", ratio: 0.747 },
            { color: "#c29f80", ratio: 0.83 },
            { color: "#e0cf40", ratio: 0.913 },
            { color: "#ffff00", ratio: 1 }
        ],
        maxPixelIntensity: 10,
        minPixelIntensity: 0
    };

    const geojsonLayer = new GeoJSONLayer({
        url: url,
        copyright: "Concentration of Talent",
        // popupTemplate: template,
        renderer: renderer,
        copyright: "AMPSR"
    });

    const map = new Map({
        basemap: "gray",
        layers: [geojsonLayer]
    });

    const view = new MapView({
        container: "viewDiv",
        constraints: {
            minZoom: 3
        },
        center: [-138, 30],
        zoom: 3,
        map: map
    });

    view.ui.add(
        new Legend({
            view: view
        }),
        "bottom-left"
    );
});