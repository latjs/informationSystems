// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '.com players count',
        align:'left',
        style:{
            "font-weight": "900",
            "fontSize": "12px"
        }
        
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },
    credits:{
        enabled:'false',
        text:""
    },
    tooltip: {
        headerFormat: '<span style="font-size:12px;></span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <br/><b>{point.y:.2f}%</b><br/>'
    },
    point:[{
        data:[{
            name:'Jan'
        },{
            name:'Feb'
        },{
            name:'Mar'
        }, {
            name: 'Apr'
        },{
            name:'May'
        },{
            name: 'Jun'
        }
    ],
    }],
    series: [{
        colorByPoint: true,
        data: [{
            name: 'Jan',
            y:7.1
        }, {
            name: 'Feb',
            y: 10.5
        }, {
            name: 'Mar',
            y: 18.5
        }, {
            name: 'Apr',
            y: 20.3
        }, {
            name: 'May',
            y: 21.2
        }, {
            name: 'Jun',
            y:22.5
        }]
    }],
    drilldown: {
        series: [{
            // name: 'IE',
            // id: 'IE',
            data: [
                ['v11.0', 125],
                ['v8.0', 185],
                ['v9.0', 327],
                ['v10.0', 359],
                ['v6.0', 376],
                ['v7.0', 398]
            ]
        }, {
            name: 'Chrome',
            id: 'Chrome',
            data: [
                ['v40.0', 5],
                ['v41.0', 4.32],
                ['v42.0', 3.68],
                ['v39.0', 2.96],
                ['v36.0', 2.53],
                ['v43.0', 1.45],
                ['v31.0', 1.24],
                ['v35.0', 0.85],
                ['v38.0', 0.6],
                ['v32.0', 0.55],
                ['v37.0', 0.38],
                ['v33.0', 0.19],
                ['v34.0', 0.14],
                ['v30.0', 0.14]
            ]
        }, {
            name: 'Firefox',
            id: 'Firefox',
            data: [
                ['v35', 2.76],
                ['v36', 2.32],
                ['v37', 2.31],
                ['v34', 1.27],
                ['v38', 1.02],
                ['v31', 0.33],
                ['v33', 0.22],
                ['v32', 0.15]
            ]
        }, {
            name: 'Safari',
            id: 'Safari',
            data: [
                ['v8.0', 2.56],
                ['v7.1', 0.77],
                ['v5.1', 0.42],
                ['v5.0', 0.3],
                ['v6.1', 0.29],
                ['v7.0', 0.26],
                ['v6.2', 0.17]
            ]
        }, {
            name: 'Opera',
            id: 'Opera',
            data: [
                ['v12.x', 0.34],
                ['v28', 0.24],
                ['v27', 0.17],
                ['v29', 0.16]
            ]
        }]
    }
});