var region =$("#select_region").find('option:selected').val();
var regioncenter;
//These regioncenter settings here are currently hard coded. Need to set up these attributes so they are stored in persistent store
if (region=="Nepal"){regioncenter=[28.0,84.0]};
if (region=="California"){regioncenter=[38.0,-120.0]};
if (region=="Texas"){regioncenter=[30.0,-100.0]};
if (region=="LaPlata"){regioncenter=[-24.5,-55.0]};

//add a map to the html div "map" with time dimension capabilities. Times are currently hard coded, but will need to be changed as new GRACE data comes
var map = L.map('map', {
    crs: L.CRS.EPSG4326,
    zoom: 4,
    fullscreenControl: true,
    timeDimension: true,
    timeDimensionOptions:{
    
			 times:"2002-04-16T00:00:00.000Z,2002-05-10T00:00:00.000Z,2002-08-16T12:00:00.000Z,2002-09-16T00:00:00.000Z,2002-10-16T12:00:00.000Z,2002-11-16T00:00:00.000Z,2002-12-16T12:00:00.000Z,2003-01-16T12:00:00.000Z,2003-02-15T00:00:00.000Z,2003-03-16T12:00:00.000Z,2003-04-16T00:00:00.000Z,2003-05-11T12:00:00.000Z,2003-07-16T12:00:00.000Z,2003-08-16T12:00:00.000Z,2003-09-16T00:00:00.000Z,2003-10-16T12:00:00.000Z,2003-11-16T00:00:00.000Z,2003-12-16T12:00:00.000Z,2004-01-07T12:00:00.000Z,2004-02-17T00:00:00.000Z,2004-03-16T12:00:00.000Z,2004-04-16T00:00:00.000Z,2004-05-16T12:00:00.000Z,2004-06-16T00:00:00.000Z,2004-07-16T12:00:00.000Z,2004-08-16T12:00:00.000Z,2004-09-16T00:00:00.000Z,2004-10-16T12:00:00.000Z,2004-11-16T00:00:00.000Z,2004-12-16T12:00:00.000Z,2005-01-16T12:00:00.000Z,2005-02-15T00:00:00.000Z,2005-03-16T12:00:00.000Z,2005-04-16T00:00:00.000Z,2005-05-16T12:00:00.000Z,2005-06-16T00:00:00.000Z,2005-07-16T12:00:00.000Z,2005-08-16T12:00:00.000Z,2005-09-16T00:00:00.000Z,2005-10-16T12:00:00.000Z,2005-11-16T00:00:00.000Z,2005-12-16T12:00:00.000Z,2006-01-16T12:00:00.000Z,2006-02-15T00:00:00.000Z,2006-03-16T12:00:00.000Z,2006-04-16T00:00:00.000Z,2006-05-16T12:00:00.000Z,2006-06-16T00:00:00.000Z,2006-07-16T12:00:00.000Z,2006-08-16T12:00:00.000Z,2006-09-16T00:00:00.000Z,2006-10-16T12:00:00.000Z,2006-11-16T00:00:00.000Z,2006-12-16T12:00:00.000Z,2007-01-16T12:00:00.000Z,2007-02-15T00:00:00.000Z,2007-03-16T12:00:00.000Z,2007-04-16T00:00:00.000Z,2007-05-16T12:00:00.000Z,2007-06-16T00:00:00.000Z,2007-07-16T12:00:00.000Z,2007-08-16T12:00:00.000Z,2007-09-16T00:00:00.000Z,2007-10-16T12:00:00.000Z,2007-11-16T00:00:00.000Z,2007-12-16T12:00:00.000Z,2008-01-16T12:00:00.000Z,2008-02-15T12:00:00.000Z,2008-03-16T12:00:00.000Z,2008-04-16T00:00:00.000Z,2008-05-16T12:00:00.000Z,2008-06-16T00:00:00.000Z,2008-07-16T12:00:00.000Z,2008-08-16T12:00:00.000Z,2008-09-16T00:00:00.000Z,2008-10-16T12:00:00.000Z,2008-11-16T00:00:00.000Z,2008-12-16T12:00:00.000Z,2009-01-16T12:00:00.000Z,2009-02-15T00:00:00.000Z,2009-03-16T12:00:00.000Z,2009-04-16T00:00:00.000Z,2009-05-16T12:00:00.000Z,2009-06-16T00:00:00.000Z,2009-07-16T12:00:00.000Z,2009-08-16T12:00:00.000Z,2009-09-16T00:00:00.000Z,2009-10-16T12:00:00.000Z,2009-11-16T00:00:00.000Z,2009-12-16T12:00:00.000Z,2010-01-16T12:00:00.000Z,2010-02-15T00:00:00.000Z,2010-03-16T12:00:00.000Z,2010-04-16T00:00:00.000Z,2010-05-16T12:00:00.000Z,2010-06-16T00:00:00.000Z,2010-07-16T12:00:00.000Z,2010-08-16T12:00:00.000Z,2010-09-16T00:00:00.000Z,2010-10-16T12:00:00.000Z,2010-11-16T00:00:00.000Z,2010-12-16T12:00:00.000Z,2011-02-18T12:00:00.000Z,2011-03-16T12:00:00.000Z,2011-04-16T00:00:00.000Z,2011-05-16T12:00:00.000Z,2011-07-19T12:00:00.000Z,2011-08-16T12:00:00.000Z,2011-09-16T00:00:00.000Z,2011-10-16T12:00:00.000Z,2011-11-01T12:00:00.000Z,2012-01-02T00:00:00.000Z,2012-01-16T12:00:00.000Z,2012-02-15T12:00:00.000Z,2012-03-16T12:00:00.000Z,2012-04-10T12:00:00.000Z,2012-06-16T00:00:00.000Z,2012-07-16T12:00:00.000Z,2012-08-16T12:00:00.000Z,2012-09-13T00:00:00.000Z,2012-11-20T00:00:00.000Z,2012-12-16T12:00:00.000Z,2013-01-16T12:00:00.000Z,2013-02-14T00:00:00.000Z,2013-04-21T12:00:00.000Z,2013-05-16T12:00:00.000Z,2013-06-16T00:00:00.000Z,2013-07-16T12:00:00.000Z,2013-10-16T12:00:00.000Z,2013-11-16T00:00:00.000Z,2013-12-16T12:00:00.000Z,2014-01-09T12:00:00.000Z,2014-03-17T12:00:00.000Z,2014-04-16T00:00:00.000Z,2014-05-16T12:00:00.000Z,2014-06-13T00:00:00.000Z,2014-08-16T12:00:00.000Z,2014-09-16T00:00:00.000Z,2014-10-16T12:00:00.000Z,2014-11-17T00:00:00.000Z,2015-01-22T12:00:00.000Z,2015-02-15T00:00:00.000Z,2015-03-16T12:00:00.000Z,2015-04-16T00:00:00.000Z,2015-04-27T00:00:00.000Z,2015-07-15T12:00:00.000Z,2015-08-16T12:00:00.000Z,2015-09-14T12:00:00.000Z,2015-12-23T00:00:00.000Z,2016-01-16T12:00:00.000Z,2016-02-14T00:00:00.000Z,2016-03-16T12:00:00.000Z,2016-05-20T12:00:00.000Z,2016-06-16T00:00:00.000Z,2016-07-15T12:00:00.000Z,2016-08-21T12:00:00.000Z"
    },
    timeDimensionControl: true,  
    center: regioncenter,
});

//add the background imagery
var wmsLayer = L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/ows?', {
    layers: 'nasa:bluemarble'
}).addTo(map);

var testWMS = "http://localhost:8080/thredds/wms/testAll/grace/"+region+"/"+region+"_"+$("#select_storage_type").find('option:selected').val();

var testLayer = L.tileLayer.wms(testWMS, {
    layers:'lwe_thickness',
    format: 'image/png',
    transparent: true,
    opacity:0.7,
    style: 'boxfill/sst_36',
    colorscalerange:'-50,50',
    attribution: '<a href="https://www.pik-potsdam.de/">PIK</a>'
});

var testTimeLayer = L.timeDimension.layer.wms.timeseries(testLayer, {
	updateTimeDimension: true,
    name: "Liquid Water Equivalent Thickness",
    units: "cm",
    enableNewMarkers: true
});

var testLegend = L.control({
    position: 'topright'
    });

//initialize a variable named zonalchart that tracks whether the zonal average timeseries has been added to the map
var zonalchart=0;

$('#select_region').change(function(){
    zonalchart=0;
    //if the chart for zonal statistics already exists, delete it because we are replacing it with the chart for another region
    if (typeof mychart !== 'undefined'){
        mychart.destroy();
        delete mychart;
        }
    //pan to the correct location based on the selected region
    region =$("#select_region").find('option:selected').val();
    if (region=="Nepal"){regioncenter=[28.0,84.0]};
    if (region=="California"){regioncenter=[38.0,-120.0]};
    if (region=="Texas"){regioncenter=[30.0,-100.0]};
    if (region=="LaPlata"){regioncenter=[-24.5,-55.0]};
    map.panTo(regioncenter);

    map.removeLayer(testTimeLayer);
    var type=$("#select_legend").find('option:selected').val();
    testWMS = "http://localhost:8080/thredds/wms/testAll/grace/"+region+"/"+region+"_"+$("#select_storage_type").find('option:selected').val();
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
	    updateTimeDimension: true,
    	name: "Liquid Water Equivalent Thickness (cm)",
    	units: "cm",
    	enableNewMarkers: true
    });

    testTimeLayer.addTo(map);

    //add the legend to the map based on the type variable
    testLegend.onAdd= function(map) {
        var src=testWMS+"?REQUEST=GetLegendGraphic&LAYER=lwe_thickness&PALETTE="+type;
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML +=
            '<img src="' + src + '" alt="legend">';
        return div;
    };
    testLegend.addTo(map);
    if (zonalchart==0){
        addGraph(); //add the zonal average timeseries to the map
        zonalchart=1;
    }
});

$("#select_storage_type").change(function(){
    map.removeLayer(testTimeLayer);
    var type=$("#select_legend").find('option:selected').val();
    testWMS = "http://localhost:8080/thredds/wms/testAll/grace/"+region+"/"+region+"_"+$("#select_storage_type").find('option:selected').val();
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
	    updateTimeDimension: true,
    	name: "Liquid Water Equivalent Thickness (cm)",
    	units: "cm",
    	enableNewMarkers: true
    });

    testTimeLayer.addTo(map);

    //add the legend to the map based on the type variable
    testLegend.onAdd= function(map) {
        var src=testWMS+"?REQUEST=GetLegendGraphic&LAYER=lwe_thickness&PALETTE="+type;
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML +=
            '<img src="' + src + '" alt="legend">';
        return div;
    };
    testLegend.addTo(map);
    if (zonalchart==0){
        addGraph(); //add the zonal average timeseries to the map
        zonalchart=1;
    }
});

$("#select_legend").change(function(){
    map.removeLayer(testTimeLayer);
    var type=$("#select_legend").find('option:selected').val();
    testWMS = "http://localhost:8080/thredds/wms/testAll/grace/"+region+"/"+region+"_"+$("#select_storage_type").find('option:selected').val();
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
    //add the legend to the map based on the type variable
    testLegend.onAdd= function(map) {
        var src=testWMS+"?REQUEST=GetLegendGraphic&LAYER=lwe_thickness&PALETTE="+type;
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML +=
            '<img src="' + src + '" alt="legend">';
        return div;
    };
    testLegend.addTo(map);
    });


//The addGraph function displays the time series for the regional Average
function addGraph(){

mychart=Highcharts.stockChart('chart', {
            legend: {
                    enabled: true
            },

            chart: {
                    zoomType: 'x'
            },
            rangeSelector: {
                    selected: testTimeLayer._defaultRangeSelector,
                    buttons: [{

                        type: 'all',
                        text: 'All'
                    }]
            },

            xAxis: {
                    plotLines: [{
                        color: 'red',
                        dashStyle: 'solid',
                        value: new Date(testTimeLayer._timeDimension.getCurrentTime()),
                        width: 2,
                        id: 'pbCurrentTime'
                    }]
                },

            title: {
                text: region+ ' Regional Average Liquid Water Equivalent Thickness (cm)'
            },

            series: [],

            plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: (function(event) {
                                    var day = new Date(event.point.x);
                                    testTimeLayer._timeDimension.setCurrentTime(day.getTime());
                                }).bind(this)
                            }
                        }
                    }
                }
        });//end of High Charts stuff

    testTimeLayer._timeDimension.on('timeload', (function() {
                if (!mychart){
                    return;
                }
                mychart.xAxis[0].removePlotBand("pbCurrentTime");
                mychart.xAxis[0].addPlotLine({
                    color: 'red',
                    dashStyle: 'solid',
                    value: new Date(testTimeLayer._timeDimension.getCurrentTime()),
                    width: 2,
                    id: 'pbCurrentTime'
                });
            }).bind(this));


//for loop to go through all 4 types of data,load the data, and display it on the highcharts time series
for (var chartnumber=0;chartnumber<4;chartnumber++)
{
    var color;
    var charttype;
    var seriesname;
    if (chartnumber==0){
        charttype="Total";
        color="#000099";
        seriesname="Total Water Storage";
    }
    else if (chartnumber==1){
        charttype="SW";
        color="02f2ff";
        seriesname="Surface Water Storage";
    }
    else if (chartnumber==2){
        charttype="SM";
        color="#007a10";
        seriesname="Soil Moisture Storage";
    }
    else if (chartnumber==3){
        charttype="GW"
        color="#88523f";
        seriesname="Groundwater Storage";
    };

    charturl="http://localhost:8080/thredds/dodsC/testAll/grace/" + region +"/" + region+ charttype +"Anomaly.nc.ascii?";
        //
    //get the data from the charturl for the time and lwe_thickness attributes
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mystring=this.responseText;
            var stringvariable=this.responseText;
            var variable="lwe_thickness"
            length=variable.length;
            var pos=stringvariable.lastIndexOf(variable);
            pos=pos+6+length;
            //the variable pos marks the starting position in stringvariable of the lwe_thickness data
            //the variable pos2 marks the ending position in stringvariable of the lwe_thickness data
            var pos2=stringvariable.lastIndexOf("time");
            pos2=pos2-1;
            //stringvariable is now a string of the lwe_thickness data
            stringvariable=stringvariable.slice(pos,(pos2));
            //variablearray takes the string and turns it into an array of lwe_thickness values
            var variablearray = JSON.parse("[" + stringvariable + "]");
          //pos2 is now the starting position of the time data
          pos2=pos2+11;
          //timestring is now a string of the time data
          var timestring=mystring.slice(pos2);
          //timearray takes the string and turns it into an array of time data values
          var timearray=JSON.parse("["+timestring+"]");

          //time conversion: convert time in timearray from days since 2002 to a date
          var oneday=24*60*60*1000;
          var UTCconversion=7*60*60*1000;
          var startdate= new Date(2002,0,01).getTime();
          var length = timearray.length;
          for (var i=0; i<length; i++){
            timearray[i]=startdate+timearray[i]*oneday-UTCconversion;
            timearray[i]=new Date(timearray[i]).getTime();
          }
          //end time conversion

                    var data = new Array(length);
                    var this_time = new Date();
                    var this_data = null;
                    for (var i = 0; i < length; i++) {
                        this_time = timearray[i];
                        this_data = variablearray[i];
                        if (isNaN(this_data))
                            this_data = null;
                        data[i] = [this_time,this_data];
                        }


    //add Series to the HighCharts chart
    myseries=
    {
        name: seriesname,
        data: data,
        type: 'area',
        color:color,
        tooltip: {
            valueDecimals: 2,
            valueSuffix: ' ' + testTimeLayer._units,
            xDateFormat: '%A, %b %e, %Y',
            headerFormat: '<span style="font-size: 12px; font-weight:bold;">{point.key} (Click to visualize the map on this time)</span><br/>'
        }
    };
    mychart.addSeries(myseries);
           }//for the if statement
      }; // for the onreadystatechange
      xhttp.open("GET", charturl, false);
      xhttp.send();
    }
}


