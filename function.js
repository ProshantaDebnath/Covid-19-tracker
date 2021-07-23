//fetching api
$(document).ready(function () {
    var url = "https://api.covid19india.org/data.json";
    $.getJSON(url, function (data) {
        console.log(data);
        var td_ac, td_re, td_de, td_co;
        var dta = data.statewise;



        var state = [];
        var confirmed = [];
        var recovered = [];
        var deaths = [];

        $.each(data.statewise, function (id, obj) {
            state.push(obj.state);
            confirmed.push(obj.confirmed);
            recovered.push(obj.recovered);
            deaths.push(obj.deaths);
        });

        state.shift();
        confirmed.shift();
        recovered.shift();
        deaths.shift();


        td_ac = data.statewise[0].active;
        td_re = data.statewise[0].recovered;
        td_de = data.statewise[0].deaths;
        td_co = data.statewise[0].confirmed;

        var updt = data.statewise[0].lastupdatedtime;
        console.log(updt);
        $('.update').append(updt);



        $("#active").append(td_ac);
        $("#confirmed").append(td_co);
        $("#recovered").append(td_re);
        $("#deaths").append(td_de);


        var co = $("#confirmed").text();
        var ac = $("#recovered").text();
        var de = $("#deaths").text();
        //alert(de);
        var dataArray = [];
        dataArray.push(co);
        dataArray.push(ac);
        dataArray.push(de);
        //alert(dataArray);

        //add pie chart:::::::::::::::::::::::::::::::::::::::::::::::::::::




        var myChart = document.getElementById("myChart").getContext("2d");
        var labels = ["confirmed", "recovered", "death"];
        var color = ["#f1c40f", "#2ecc71", "#FF6384"];
        var apidata = [co, ac, de];

        var chart = new Chart(myChart, {
            type: 'pie',
            data: {
                datasets: [
                    {
                        data: dataArray,
                        backgroundColor: color,

                }],
                labels: labels

            },
            //options:{}

        });


        //line chart

        var mylinechart = document.getElementById("mylinechart").getContext("2d");

        var linechart = new Chart(mylinechart, {
            type: 'bar',
            data: {
                datasets: [
                    {
                        data: dataArray,
                        backgroundColor: color,

                }],
                labels: labels

            },
            //options:{}


        });


        /*
        var mylinechart=document.getElementById("mylinechart").getContext("2d");
        
        var  linechart= new Chart(mylinechart,{
            type :'line',
            data:{
                labels:state,
                datasets:[ 
                {
                    label:"Confirmed Case",
                    data:confirmed,
                    backgroundColor:"#f1c40f",
                    minBarLength:100,

                },
                {
                    label:"Recovery",
                    data:recovered,
                    backgroundColor:"#2ecc71",
                    minBarLength:100,

                },
                {
                    label:"Deceased",
                    data:deaths,
                    backgroundColor:"#FF6384",
                    minBarLength:100,

                },

                ]
            },
            
            
        });*/


        //search by state
        /*
let button3=document.getElementById("search");
let input3=document.getElementById("input1");
let conf=document.getElementById("confirmed1"); 
        let reco=document.getElementById("recovered1");
        let dea=document.getElementById("deaths1");
        let state1=document.getElementsByClassName("state1");
        

var co_s,re_s,de_s,state;
        console.log(dta[1].state);
        console.log(dta.length);
        
        function input2lenght(){
    return input3.value.length;
}

        
        button3.addEventListener("click",function(){
            if(input2lenght()>0){
              checked(conf,reco,dea,state1); 
            signchecked();
            input3.value="";
            }
        }
);
        
        function signchecked(){



var usernamepromt = input3.value;
            

            for(i=1;i<dta.length;i++){
if(usernamepromt==dta[i].state){
    $('.state1').append(dta[i].state);
    $('#confirmed1').append(dta[i].confirmed);
    $('#deaths1').append(dta[i].deaths);
    $('#recovered1').append(dta[i].recovered);
    console.log(dta[i].deaths);
    
    
    
}


}
        };
        
        
        function checked(conf,reco,dea,state1){
    if(conf.length==0){
            
           $('#confirmed1').empty();
        
        }
    else if(reco.length==0){
        $('#recovered1').empty();
        }
    
    else if(dea.length==0){
        $('#deaths1').empty();
        }
    else if(state1.length==0){
        $('.state1').empty();
        }
    
};
        */


        //select by state with map
        var jk = $('#mylinechart1').text();
        console.log(jk);

        function clearchart() {
            $('#mylinechart1').empty();
        }

        function liveinfo23() {
            $('.state1').empty();
            $('#confirmed1').empty();
            $('#deaths1').empty();
            $('#recovered1').empty();
        }



        // chart and data visualize code



        $('.state1').append('India');
        $('#confirmed1').append(dta[0].confirmed);
        $('#deaths1').append(dta[0].deaths);
        $('#recovered1').append(dta[0].recovered);





        let mha = "Maharashtra";
        let bng = "West Bengal";
        $('#select1').change(function () {
            var oopss = $('#select1 option:selected').text();
            console.log(oopss);
            if (oopss == mha) {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [75.300293, 19.663280],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([75.300293, 19.663280])
                    .addTo(map);


                // chart and data visualize code



                $('.state1').append(dta[1].state);
                $('#confirmed1').append(dta[1].confirmed);
                $('#deaths1').append(dta[1].deaths);
                $('#recovered1').append(dta[1].recovered);





            } else if (oopss == "Tamil Nadu") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [78.656891, 11.127123],
                    zoom: 8
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([78.656891, 11.127123])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[2].state);
                $('#confirmed1').append(dta[2].confirmed);
                $('#deaths1').append(dta[2].deaths);
                $('#recovered1').append(dta[2].recovered);





            } else if (oopss == "Delhi") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [77.216721, 28.644800],
                    zoom: 8
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([77.216721, 28.644800])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[5].state);
                $('#confirmed1').append(dta[5].confirmed);
                $('#deaths1').append(dta[5].deaths);
                $('#recovered1').append(dta[5].recovered);





            } else if (oopss == "Karnataka") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [75.713890, 15.317277],
                    zoom: 8
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );
                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([75.713890, 15.317277])
                    .addTo(map);

                // chart and data visualize code



                $('.state1').append(dta[4].state);
                $('#confirmed1').append(dta[4].confirmed);
                $('#deaths1').append(dta[4].deaths);
                $('#recovered1').append(dta[4].recovered);






            } else if (oopss == "Andhra Pradesh") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [78.476, 17.366],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([78.476, 17.366])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[3].state);
                $('#confirmed1').append(dta[3].confirmed);
                $('#deaths1').append(dta[3].deaths);
                $('#recovered1').append(dta[3].recovered);





            } else if (oopss == "Uttar Pradesh") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [79.826660, 28.207609],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([79.826660, 28.207609])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[6].state);
                $('#confirmed1').append(dta[6].confirmed);
                $('#deaths1').append(dta[6].deaths);
                $('#recovered1').append(dta[6].recovered);





            } else if (oopss == "Gujarat") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [72.136230, 22.309425],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([72.136230, 22.309425])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[10].state);
                $('#confirmed1').append(dta[10].confirmed);
                $('#deaths1').append(dta[10].deaths);
                $('#recovered1').append(dta[10].recovered);





            } else if (oopss == bng) {

                liveinfo23();
                clearchart();
                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [87.747803, 22.978624],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })
                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([87.747803, 22.978624])
                    .addTo(map);

                $('.state1').append(dta[7].state);
                $('#confirmed1').append(dta[7].confirmed);
                $('#deaths1').append(dta[7].deaths);
                $('#recovered1').append(dta[7].recovered);

                // chart and data visualize code







            } else if (oopss == "Telangana") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [79.208824, 17.123184],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([79.208824, 17.123184])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[9].state);
                $('#confirmed1').append(dta[9].confirmed);
                $('#deaths1').append(dta[9].deaths);
                $('#recovered1').append(dta[9].recovered);





            } else if (oopss == "Rajasthan") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [73.432617, 27.391277],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([73.432617, 27.391277])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[12].state);
                $('#confirmed1').append(dta[12].confirmed);
                $('#deaths1').append(dta[12].deaths);
                $('#recovered1').append(dta[12].recovered);





            } else if (oopss == "Assam") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [92.537842, 26.244156],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([92.537842, 26.244156])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[11].state);
                $('#confirmed1').append(dta[11].confirmed);
                $('#deaths1').append(dta[11].deaths);
                $('#recovered1').append(dta[11].recovered);





            } else if (oopss == "Odisha") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [84.803467, 20.940920],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([84.803467, 20.940920])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[13].state);
                $('#confirmed1').append(dta[13].confirmed);
                $('#deaths1').append(dta[13].deaths);
                $('#recovered1').append(dta[13].recovered);





            } else if (oopss == "Haryana") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [76.040497, 29.065773],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([76.040497, 29.065773])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[14].state);
                $('#confirmed1').append(dta[14].confirmed);
                $('#deaths1').append(dta[14].deaths);
                $('#recovered1').append(dta[14].recovered);





            } else if (oopss == "Madhya Pradesh") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [77.947998, 23.473324],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([77.947998, 23.473324])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[15].state);
                $('#confirmed1').append(dta[15].confirmed);
                $('#deaths1').append(dta[15].deaths);
                $('#recovered1').append(dta[15].recovered);





            } else if (oopss == "Kerala") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [76.271080, 10.850516],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([76.271080, 10.850516])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[16].state);
                $('#confirmed1').append(dta[16].confirmed);
                $('#deaths1').append(dta[16].deaths);
                $('#recovered1').append(dta[16].recovered);





            } else if (oopss == "Punjab") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [75.857277, 30.900965],
                    zoom: 6
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([75.857277, 30.900965])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[17].state);
                $('#confirmed1').append(dta[17].confirmed);
                $('#deaths1').append(dta[17].deaths);
                $('#recovered1').append(dta[17].recovered);





            } else if (oopss == "Jammu and Kashmir") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [76.24, 33.45],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([76.24, 33.45])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[18].state);
                $('#confirmed1').append(dta[18].confirmed);
                $('#deaths1').append(dta[18].deaths);
                $('#recovered1').append(dta[18].recovered);





            } else if (oopss == "Jharkhand") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [85.279935, 23.610181],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([85.279935, 23.610181])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[19].state);
                $('#confirmed1').append(dta[19].confirmed);
                $('#deaths1').append(dta[19].deaths);
                $('#recovered1').append(dta[19].recovered);





            } else if (oopss == "Chhattisgarh") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [81.6, 21.27],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([81.6, 21.27])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[20].state);
                $('#confirmed1').append(dta[20].confirmed);
                $('#deaths1').append(dta[20].deaths);
                $('#recovered1').append(dta[20].recovered);





            } else if (oopss == "Uttarakhand") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [79.463570, 29.380304],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([79.463570, 29.380304])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[21].state);
                $('#confirmed1').append(dta[21].confirmed);
                $('#deaths1').append(dta[21].deaths);
                $('#recovered1').append(dta[21].recovered);


            } else if (oopss == "Goa") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [74.12399600000003, 15.2993265],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([74.12399600000003, 15.2993265])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[22].state);
                $('#confirmed1').append(dta[22].confirmed);
                $('#deaths1').append(dta[22].deaths);
                $('#recovered1').append(dta[22].recovered);


            } else if (oopss == "Tripura") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [77.348045, 11.110695],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([77.348045, 11.110695])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[23].state);
                $('#confirmed1').append(dta[23].confirmed);
                $('#deaths1').append(dta[23].deaths);
                $('#recovered1').append(dta[23].recovered);


            } else if (oopss == "Puducherry") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [79.82979, 11.93381],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([79.82979, 11.93381])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[24].state);
                $('#confirmed1').append(dta[24].confirmed);
                $('#deaths1').append(dta[24].deaths);
                $('#recovered1').append(dta[24].recovered);


            } else if (oopss == "Manipur") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [93.95, 24.817],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([93.95, 24.817])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[25].state);
                $('#confirmed1').append(dta[25].confirmed);
                $('#deaths1').append(dta[25].deaths);
                $('#recovered1').append(dta[25].recovered);


            } else if (oopss == "Himachal Pradesh") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [77.571167, 32.084206],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([77.571167, 32.084206])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[26].state);
                $('#confirmed1').append(dta[26].confirmed);
                $('#deaths1').append(dta[26].deaths);
                $('#recovered1').append(dta[26].recovered);


            } else if (oopss == "Nagaland") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [94.258972, 26.091036],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([94.258972, 26.091036])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[27].state);
                $('#confirmed1').append(dta[27].confirmed);
                $('#deaths1').append(dta[27].deaths);
                $('#recovered1').append(dta[27].recovered);


            } else if (oopss == "Arunachal Pradesh") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [93.827370, 27.095158],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([93.827370, 27.095158])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[28].state);
                $('#confirmed1').append(dta[28].confirmed);
                $('#deaths1').append(dta[28].deaths);
                $('#recovered1').append(dta[28].recovered);


            } else if (oopss == "Andaman and Nicobar Islands") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [92.726486, 11.623377],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([92.726486, 11.623377])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[29].state);
                $('#confirmed1').append(dta[29].confirmed);
                $('#deaths1').append(dta[29].deaths);
                $('#recovered1').append(dta[29].recovered);


            } else if (oopss == "Ladakh") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [78.000000, 34.000000],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([78.000000, 34.000000])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[30].state);
                $('#confirmed1').append(dta[30].confirmed);
                $('#deaths1').append(dta[30].deaths);
                $('#recovered1').append(dta[30].recovered);


            } else if (oopss == "Chandigarh") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [76.768066, 30.741482],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([76.768066, 30.741482])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[31].state);
                $('#confirmed1').append(dta[31].confirmed);
                $('#deaths1').append(dta[31].deaths);
                $('#recovered1').append(dta[31].recovered);


            } else if (oopss == "Dadra and Nagar Haveli and Daman and Diu") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [76.768066, 30.741482],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([76.768066, 30.741482])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[32].state);
                $('#confirmed1').append(dta[32].confirmed);
                $('#deaths1').append(dta[32].deaths);
                $('#recovered1').append(dta[32].recovered);


            } else if (oopss == "Meghalaya") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [90.592392, 25.532200],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([90.592392, 25.532200])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[33].state);
                $('#confirmed1').append(dta[33].confirmed);
                $('#deaths1').append(dta[33].deaths);
                $('#recovered1').append(dta[33].recovered);


            } else if (oopss == "Sikkim") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [88.512218, 27.532972],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([88.512218, 27.532972])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[34].state);
                $('#confirmed1').append(dta[34].confirmed);
                $('#deaths1').append(dta[34].deaths);
                $('#recovered1').append(dta[34].recovered);


            } else if (oopss == "Mizoram") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [92.717636, 23.727106],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([92.717636, 23.727106])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[35].state);
                $('#confirmed1').append(dta[35].confirmed);
                $('#deaths1').append(dta[35].deaths);
                $('#recovered1').append(dta[35].recovered);


            } else if (oopss == "Lakshadweep") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [72.1833, 13.7000],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([72.1833, 13.7000])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[37].state);
                $('#confirmed1').append(dta[37].confirmed);
                $('#deaths1').append(dta[37].deaths);
                $('#recovered1').append(dta[37].recovered);


            } else if (oopss == "Bihar") {

                liveinfo23();
                clearchart();

                mapboxgl.accessToken = 'pk.eyJ1Ijoic3VqYW5jaGFrcmFib3J0eSIsImEiOiJja2Q5MzBuc3owenplMnBzY2I0eDYwdDhvIn0.imItePLDlYNF2BGVde_mkw';
                var map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/dark-v10',
                    center: [87.51286, 26.12181],
                    zoom: 7
                });

                map.addControl(
                    new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl: mapboxgl
                    })

                );

                var marker = new mapboxgl.Marker({
                        color: "#e60000"
                    })
                    .setLngLat([87.51286, 26.12181])
                    .addTo(map);
                // chart and data visualize code



                $('.state1').append(dta[8].state);
                $('#confirmed1').append(dta[8].confirmed);
                $('#deaths1').append(dta[8].deaths);
                $('#recovered1').append(dta[8].recovered);


            }


            //    
        });






    });
});


//Temparature checking

let button = document.getElementById("clicked");
let input = document.getElementById("userinput");
let button1 = document.getElementById("clear");
let stat1 = document.getElementById("stat1").innerHTML;
let stat2 = document.getElementById("stat2").innerHTML;


let safe = 'safe';
let danger = 'Danger';

let precausionssafe = 'click here!';
let precausionsdanger = 'danger ';


function inputlenght() {
    return input.value.length;
}

button.addEventListener("click", function () {


    if (inputlenght() > 0) {



        check(stat1, stat2);
        signcheck();

    }
})

let li1 = document.createElement("text");
li1.appendChild(document.createTextNode(safe));

let li2 = document.createElement("text");
li2.appendChild(document.createTextNode(danger));


let li4 = document.createElement("text");
li4.appendChild(document.createTextNode(precausionsdanger));


function signcheck() {
    if (input.value < 37) {

        $('#stat1').append(li1);
        $('#stat2').append(li3);
        var li3 = document.createElement("li3");
    li3.setAttribute("href", danger.html);
    li3.innerHTML = click1f;

document.body.appendChild(li3);

        input.value = "";
    } else {
        $('#stat1').append(li2);
        $('#stat2').append(li4);
        input.value = "";

    }
}

function check(stat1, stat2) {
    if (stat1.length == 0) {

        $('#stat1').empty();
        $('#stat2').empty();

    } else if (stat2.length == 0) {
        $('#stat2').empty();
        $('#stat1').empty();

    }


}






button1.addEventListener("click", () => {
    $('#stat1').empty();
    $('#stat2').empty();
})
