/**
 * SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * SVG path for plane icon
 */
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",

  "projection": "miller",
  "zoomControl": {
    "zoomControlEnabled": false,
    "homeButtonEnabled": false
  },
  "dataProvider": {
    "map": "worldLow",

    "lines": [ {
      "id": "line1",
      "arc": -0.85,
      "alpha": 0.8,
      "dashLength": 8,
      "latitudes": [ 60.5, 19.4326 ],
      "longitudes": [ 23.5, -99.1332 ]
    }],
    "images": [ {
      "svgPath": targetSVG,
      "title": "Helsinki",
      "latitude": 60.1699,
      "longitude": 24.9384
    }, {
      "svgPath": targetSVG,
      "title": "Mexico City",
      "latitude": 19.4326,
      "longitude": -99.1332
    }, {
      "svgPath": planeSVG,
      "title": "Plane",
      "positionOnLine": 0,
      "color": "#B59CCD",
      "animateAlongLine": true,
      "lineId": "line1",
      "flipDirection": false,
      "loop": false,
      "scale": 0.06,
      "positionScale": 2
    } ]
  },

  "areasSettings": {
    "unlistedAreasColor": "#508776",
    "unlistedAreasOutlineColor": "transparent"
  },

  "imagesSettings": {
    "color": "#9CCDB5",
    "rollOverColor": "#B59CCD",
    "selectedColor": "#B59CCD",
    "pauseDuration": 1,
    "animationDuration": 8,
    "adjustAnimationSpeed": true
  },

  "linesSettings": {
    "color": "#B59CCD"
  },

  "export": {
    "enabled": false
  }

} );
