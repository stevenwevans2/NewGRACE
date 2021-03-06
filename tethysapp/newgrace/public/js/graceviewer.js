var map = L.map('map', {
    crs: L.CRS.EPSG4326,
    zoom: 2,
    fullscreenControl: true,
    timeDimension: true,
    timeDimensionOptions:{
    
			 times:"2002-04-16T00:00:00.000Z,2002-05-10T00:00:00.000Z,2002-08-16T12:00:00.000Z,2002-09-16T00:00:00.000Z,2002-10-16T12:00:00.000Z,2002-11-16T00:00:00.000Z,2002-12-16T12:00:00.000Z,2003-01-16T12:00:00.000Z,2003-02-15T00:00:00.000Z,2003-03-16T12:00:00.000Z,2003-04-16T00:00:00.000Z,2003-05-11T12:00:00.000Z,2003-07-16T12:00:00.000Z,2003-08-16T12:00:00.000Z,2003-09-16T00:00:00.000Z,2003-10-16T12:00:00.000Z,2003-11-16T00:00:00.000Z,2003-12-16T12:00:00.000Z,2004-01-07T12:00:00.000Z,2004-02-17T00:00:00.000Z,2004-03-16T12:00:00.000Z,2004-04-16T00:00:00.000Z,2004-05-16T12:00:00.000Z,2004-06-16T00:00:00.000Z,2004-07-16T12:00:00.000Z,2004-08-16T12:00:00.000Z,2004-09-16T00:00:00.000Z,2004-10-16T12:00:00.000Z,2004-11-16T00:00:00.000Z,2004-12-16T12:00:00.000Z,2005-01-16T12:00:00.000Z,2005-02-15T00:00:00.000Z,2005-03-16T12:00:00.000Z,2005-04-16T00:00:00.000Z,2005-05-16T12:00:00.000Z,2005-06-16T00:00:00.000Z,2005-07-16T12:00:00.000Z,2005-08-16T12:00:00.000Z,2005-09-16T00:00:00.000Z,2005-10-16T12:00:00.000Z,2005-11-16T00:00:00.000Z,2005-12-16T12:00:00.000Z,2006-01-16T12:00:00.000Z,2006-02-15T00:00:00.000Z,2006-03-16T12:00:00.000Z,2006-04-16T00:00:00.000Z,2006-05-16T12:00:00.000Z,2006-06-16T00:00:00.000Z,2006-07-16T12:00:00.000Z,2006-08-16T12:00:00.000Z,2006-09-16T00:00:00.000Z,2006-10-16T12:00:00.000Z,2006-11-16T00:00:00.000Z,2006-12-16T12:00:00.000Z,2007-01-16T12:00:00.000Z,2007-02-15T00:00:00.000Z,2007-03-16T12:00:00.000Z,2007-04-16T00:00:00.000Z,2007-05-16T12:00:00.000Z,2007-06-16T00:00:00.000Z,2007-07-16T12:00:00.000Z,2007-08-16T12:00:00.000Z,2007-09-16T00:00:00.000Z,2007-10-16T12:00:00.000Z,2007-11-16T00:00:00.000Z,2007-12-16T12:00:00.000Z,2008-01-16T12:00:00.000Z,2008-02-15T12:00:00.000Z,2008-03-16T12:00:00.000Z,2008-04-16T00:00:00.000Z,2008-05-16T12:00:00.000Z,2008-06-16T00:00:00.000Z,2008-07-16T12:00:00.000Z,2008-08-16T12:00:00.000Z,2008-09-16T00:00:00.000Z,2008-10-16T12:00:00.000Z,2008-11-16T00:00:00.000Z,2008-12-16T12:00:00.000Z,2009-01-16T12:00:00.000Z,2009-02-15T00:00:00.000Z,2009-03-16T12:00:00.000Z,2009-04-16T00:00:00.000Z,2009-05-16T12:00:00.000Z,2009-06-16T00:00:00.000Z,2009-07-16T12:00:00.000Z,2009-08-16T12:00:00.000Z,2009-09-16T00:00:00.000Z,2009-10-16T12:00:00.000Z,2009-11-16T00:00:00.000Z,2009-12-16T12:00:00.000Z,2010-01-16T12:00:00.000Z,2010-02-15T00:00:00.000Z,2010-03-16T12:00:00.000Z,2010-04-16T00:00:00.000Z,2010-05-16T12:00:00.000Z,2010-06-16T00:00:00.000Z,2010-07-16T12:00:00.000Z,2010-08-16T12:00:00.000Z,2010-09-16T00:00:00.000Z,2010-10-16T12:00:00.000Z,2010-11-16T00:00:00.000Z,2010-12-16T12:00:00.000Z,2011-02-18T12:00:00.000Z,2011-03-16T12:00:00.000Z,2011-04-16T00:00:00.000Z,2011-05-16T12:00:00.000Z,2011-07-19T12:00:00.000Z,2011-08-16T12:00:00.000Z,2011-09-16T00:00:00.000Z,2011-10-16T12:00:00.000Z,2011-11-01T12:00:00.000Z,2012-01-02T00:00:00.000Z,2012-01-16T12:00:00.000Z,2012-02-15T12:00:00.000Z,2012-03-16T12:00:00.000Z,2012-04-10T12:00:00.000Z,2012-06-16T00:00:00.000Z,2012-07-16T12:00:00.000Z,2012-08-16T12:00:00.000Z,2012-09-13T00:00:00.000Z,2012-11-20T00:00:00.000Z,2012-12-16T12:00:00.000Z,2013-01-16T12:00:00.000Z,2013-02-14T00:00:00.000Z,2013-04-21T12:00:00.000Z,2013-05-16T12:00:00.000Z,2013-06-16T00:00:00.000Z,2013-07-16T12:00:00.000Z,2013-10-16T12:00:00.000Z,2013-11-16T00:00:00.000Z,2013-12-16T12:00:00.000Z,2014-01-09T12:00:00.000Z,2014-03-17T12:00:00.000Z,2014-04-16T00:00:00.000Z,2014-05-16T12:00:00.000Z,2014-06-13T00:00:00.000Z,2014-08-16T12:00:00.000Z,2014-09-16T00:00:00.000Z,2014-10-16T12:00:00.000Z,2014-11-17T00:00:00.000Z,2015-01-22T12:00:00.000Z,2015-02-15T00:00:00.000Z,2015-03-16T12:00:00.000Z,2015-04-16T00:00:00.000Z,2015-04-27T00:00:00.000Z,2015-07-15T12:00:00.000Z,2015-08-16T12:00:00.000Z,2015-09-14T12:00:00.000Z,2015-12-23T00:00:00.000Z,2016-01-16T12:00:00.000Z,2016-02-14T00:00:00.000Z,2016-03-16T12:00:00.000Z,2016-05-20T12:00:00.000Z,2016-06-16T00:00:00.000Z,2016-07-15T12:00:00.000Z,2016-08-21T12:00:00.000Z"
    },
    timeDimensionControl: true,  
    center: [20.0, 0.0],
});
var wmsLayer = L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/ows?', {
    layers: 'nasa:bluemarble'
}).addTo(map);

var proxy = 'server/proxy.php';
var testWMS = $("#select_storage_type").find('option:selected').val();
//console.log(testWMS);
//var testWMS="http://localhost:8080/thredds/wms/testAll/grace/grace.nc"
//var testWMS="http://localhost:8080/thredds/wms/testAll/grace/GRC_gwtest.nc"
var testLayer = L.tileLayer.wms(testWMS, {
    //layers: 'grace',
    layers:'lwe_thickness',
    format: 'image/png',
    transparent: true,
    opacity:0.7,
    style: 'boxfill/sst_36',
    colorscalerange:'-50,50',
    attribution: '<a href="https://www.pik-potsdam.de/">PIK</a>'
});



var testTimeLayer = L.timeDimension.layer.wms.timeseries(testLayer, {
	//proxy: proxy,
	updateTimeDimension: true,
    name: "Liquid Water Equivalent Thickness",
    units: "cm",
    enableNewMarkers: true
});
//testTimeLayer.addTo(map);
    var testLegend = L.control({
    position: 'topright'
    });

$("#select_storage_type").change(function(){

    map.removeLayer(testTimeLayer);
    var type=$("#select_legend").find('option:selected').val();
    testWMS = $("#select_storage_type").find('option:selected').val();
    teststyle='boxfill/'+type;
    testLayer = L.tileLayer.wms(testWMS, {
        layers:'lwe_thickness',
        format: 'image/png',
        transparent: true,
        opacity:0.7,
        styles: teststyle,
        colorscalerange:'-50,50',
        attribution: '<a href="https://www.pik-potsdam.de/">PIK</a>'
    });
    testTimeLayer = L.timeDimension.layer.wms.timeseries(testLayer, {
	    //proxy: proxy,
	    updateTimeDimension: true,
    	name: "Liquid Water Equivalent Thickness (cm)",
    	units: "cm",
    	enableNewMarkers: true
    });

    testTimeLayer.addTo(map);
   testLegend.onAdd= function(map) {
        //var myWMS="http://localhost:8080/thredds/wms/testAll/grace/GRC_tot.25scaled.nc";

        var src=testWMS+"?REQUEST=GetLegendGraphic&LAYER=lwe_thickness&PALETTE="+type;
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML +=
            '<img src="' + src + '" alt="legend">';
        return div;
    };
    testLegend.addTo(map);
});

$("#select_legend").change(function(){
    map.removeLayer(testTimeLayer);
    var type=$("#select_legend").find('option:selected').val();
    testWMS = $("#select_storage_type").find('option:selected').val();
    teststyle='boxfill/'+type;
    testLayer = L.tileLayer.wms(testWMS, {
        //layers: 'grace',
        layers:'lwe_thickness',
        format: 'image/png',
        transparent: true,
        opacity:0.7,
        styles: teststyle,
        colorscalerange:'-50,50',
        attribution: '<a href="https://www.pik-potsdam.de/">PIK</a>'
    });
    testTimeLayer = L.timeDimension.layer.wms.timeseries(testLayer, {
	    //proxy: proxy,
	    updateTimeDimension: true,
    	name: "Liquid Water Equivalent Thickness",
    	units: "cm",
    	enableNewMarkers: true
    });

    testTimeLayer.addTo(map);
   testLegend.onAdd= function(map) {
        //var myWMS="http://localhost:8080/thredds/wms/testAll/grace/GRC_tot.25scaled.nc";

        var src=testWMS+"?REQUEST=GetLegendGraphic&LAYER=lwe_thickness&PALETTE="+type;
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML +=
            '<img src="' + src + '" alt="legend">';
        return div;
    };
    testLegend.addTo(map);
    });