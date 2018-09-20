/*// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function(ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart1 = ec.init(document.getElementById('main1'));
        var myChart2 = ec.init(document.getElementById('main2'));
        var myChart3 = ec.init(document.getElementById('main3'));

        var option = {
            tooltip: {
                show: true
            },
            legend: {
                data: ['销量']
            },
            xAxis: [{
                type: 'category',
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                "name": "销量",
                "type": "bar",
                "data": [5, 20, 40, 10, 10, 20]
            }]
        };

        // 为echarts对象加载数据 
        myChart1.setOption(option);
        myChart2.setOption(option);
        myChart3.setOption(option);
    }
);
*/

var myChart1 = echarts.init(document.getElementById('main1'), 'dark');
var myChart2 = echarts.init(document.getElementById('main2'), 'dark');
var myChart3 = echarts.init(document.getElementById('main3'), 'dark');
var myChart4 = echarts.init(document.getElementById('main4'), 'dark');
//var myChart5 = echarts.init(document.getElementById('main5'), 'dark');
var myChart6 = echarts.init(document.getElementById('main6'), 'dark');
var myChart7 = echarts.init(document.getElementById('main7'), 'dark');
var myChart8 = echarts.init(document.getElementById('main8'), 'dark');


var h1 = 215;
var h2 = 215;
var h3 = 215;
var h4 = 330;
var h6 = 215;
var h7 = 250;
var h8 = 215;


var s1 = 270;
var s2 = 236;
var s3 = 270;
var s4 = 460;
var s6 = 270;
var s7 = 270;
var s8 = 270;

function restoreECharts(){
    $("#main1").css("height",h1);
    $("#main2").css("height",h2);
    $("#main3").css("height",h3);
    $("#main4").css("height",h4);
    $("#main6").css("height",h6);
    $("#main7").css("height",h7);
    $("#main8").css("height",h8);
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart6.resize();
    myChart7.resize();
    myChart8.resize();
}

function FullECharts(){
    $("#main1").css("height",s1);
    $("#main2").css("height",s2);
    $("#main3").css("height",s3);
    $("#main4").css("height",s4);
    $("#main6").css("height",s6);
    $("#main7").css("height",s7);
    $("#main8").css("height",s8);
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart6.resize();
    myChart7.resize();
    myChart8.resize();
}


$(function(){
    isFullscreenForNoScroll();
})


function isFullscreenForNoScroll(){
    var explorer = window.navigator.userAgent.toLowerCase();
    if(explorer.indexOf('chrome')>0){//webkit
        if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
            //alert("全屏");
            FullECharts()
        } else {
            //alert("不全屏");
            restoreECharts()
        }
    }else{//IE 9+  fireFox
        if (window.outerHeight === window.screen.height && window.outerWidth === window.screen.width) {
            //alert("全屏");
            FullECharts()
        } else {
            //alert("不全屏");
            restoreECharts()
        }
    }
}

window.onresize = function() {
    isFullscreenForNoScroll();
}












//贷款品种占比分布
var option1 = {
    backgroundColor: '#38415c',
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}笔 ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: 'bottom',
        data: ['消费分期贷','供应链(企业)贷','供应链(个人)贷']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '70%',
            center: ['60%', '50%'],
            label: {
                normal: {
                    show: true,
                },
            },
            roseType: false,
            color:['#ed6caf','#ffb27f','#20dc85'], 
            data:[
                {
                    value:275, 
                    name:'消费分期贷',
                },
                {
                    value:34, 
                    name:'供应链(企业)贷',
                },
                {
                    value:0, 
                    name:'供应链(个人)贷',
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart1.setOption(option1);


var option2 = {
    backgroundColor: '#38415c',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['正常贷款', '不良贷款']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            min: -100,
            max: 100,
            interval: 20,
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['比例']
        }
    ],
    series : [
        {
            name:'正常贷款',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    formatter: '{c}%'
                }
            },
            itemStyle: {
                normal: {
                    color: '#3ba0ff'
                }
            },
            data:[100]
        },
        {
            name:'不良贷款',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'left',
                    formatter: '{c}%'
                }
            },
            itemStyle: {
                normal: {
                    color: '#ed6caf'
                }
            },
            data:[0]
        }
    ]
};

myChart2.setOption(option2);





//标准柱状图
var option3 = {
    backgroundColor: '#38415c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data:['男客户比例','女客户比例','年龄段人数']
    },
    xAxis: [
        {
            type: 'category',
            data: ['18~28岁','29~38岁','39~48岁','49~58岁'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 300,
            interval: 60,
            axisLabel: {
                formatter: '{value} 人'
            }
        },
        {
            type: 'value',
            name: '比例',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'男客户比例',
            type:'bar',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#3ba0ff'
                }
            },
            data:[79.28, 78.03, 69.23, 33.33]
        },
        {
            name:'女客户比例',
            type:'bar',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#ed6caf'
                }
            },
            data:[20.72, 21.97, 30.77, 66.67]
        },
        {
            name:'年龄段人数',
            type:'line',
            yAxisIndex: 0,
            data:[111, 264, 52, 6]
        }
    ]
};

myChart3.setOption(option3);



//货款发生区域分布(人数)
var option4 = {
    backgroundColor: '#38415c',
    tooltip : {//提示框组件。
        trigger: 'item',//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
    },
    visualMap: {//颜色的设置  dataRange
        x: '10',
        outOfRange: {
            symbol: 'circle',
            symbolSize: 30
        },
        min: 1,
        max: 130,
        /*splitList: [
            {start: 40, end: 130},
            {start: 30, end: 40},
            {start: 20, end: 30},
            {start: 10, end: 20},
            {start: 1, end: 10}
        ],*/
        min: 0,
        max: 130,
        calculable : true,//颜色呈条状
        text:['高','低'],// 文本，默认为数值文本
        textStyle: {
            color: '#fff'
        },
        inRange: {
            color: ['#fff8e1','#ffa726', '#e65100']
        }
    },
    series : [
        {
            name: '货款发生区域分布(人数)',
            type: 'map',
            zoom: 1.3,
            mapType: 'china',
            roam: false,//是否开启鼠标缩放和平移漫游
            itemStyle:{//地图区域的多边形 图形样式
                normal:{//是图形在默认状态下的样式
                    label:{
                        show:true,//是否显示标签
                        textStyle: {
                            color: "rgb(249, 249, 249)"
                        }
                    }
                },
                emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label:{show:true},
                }
            },
            top:"10%",//组件距离容器的距离
            data:[
                {name: '上海', value: 31 },
                {name: '云南', value: 12 },
                {name: '北京', value: 128 },
                {name: '天津', value: 33 },
                {name: '山西', value: 1 },
                {name: '广东', value: 13 },
                {name: '云南', value: 7 },
                {name: '辽宁', value: 15 },
                {name: '河北', value: 6 },
                {name: '深圳', value: 6 },
                {name: '贵州', value: 12 },
                {name: '重庆', value: 15 },
            ]
        },
    ]
};
/*myChart4.setOption(option4);
myChart4.on('mouseover', function (params) {
    var dataIndex = params.dataIndex;
    console.log(params);
});*/





//按月发生额统计
var option6 = {
    backgroundColor: '#38415c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        },
        //formatter: "{b} <br/> {a0} : {c0}万元 <br/> {a1} : {c1}万元"
    },
    legend: {
        data:['消费分期贷','供应链贷']
    },
    xAxis: [
        {
            /*axisLabel:{
                interval: 0,
                rotate: 40
            },*/
            type: 'category',
            data: ['17/12','18/1','18/2','18/3','18/4','18/5','18/6','18/7'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '金额(万元)',
            min: 0,
            max: 15000,
            interval: 3000,
        }
    ],
    series: [
        {
            name:'消费分期贷',
            type:'bar',
            itemStyle: {
                normal: {
                    color: '#3ba0ff'
                }
            },
            data:[7865.6920, 173.8170, 455.3800, 5600.0000, 67.0020, 4690.7000, 3200.0000, 800.0000]
        },
        {
            name:'供应链贷',
            type:'bar',
            itemStyle: {
                normal: {
                    color: '#ed6caf'
                }
            },
            data:[0, 0, 800.0000, 0, 1825.0000, 520.0000, 14251.0000, 4497.7000]
        }
    ]
};

myChart6.setOption(option6);

//货款发生区域分布(比例)
/*var option7 = {
    backgroundColor: '#38415c',
    legend: {
        orient: 'vertical',
        x: '10',
        data:['上海','云南','北京','天津','山西','广东','山东','辽宁','河北','深圳','贵州','重庆']
    },
    series: [
        {
            name:'货款发生区域分布(比例)',
            type:'pie',
            center: ['60%', '50%'],
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    formatter: "{b} \n {c}人 \n {d}%",
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {name: '上海', value: 0.111111111 },
                {name: '云南', value: 0.043010753 },
                {name: '北京', value: 0.458781362 },
                {name: '天津', value: 0.11827957 },
                {name: '山西', value: 0.003584229 },
                {name: '广东', value: 0.046594982 },
                {name: '山东', value: 0.025089606 },
                {name: '辽宁', value: 0.053763441 },
                {name: '河北', value: 0.021505376 },
                {name: '深圳', value: 0.021505376 },
                {name: '贵州', value: 0.043010753 },
                {name: '重庆', value: 0.053763441 },
            ]
            data:[
                {name: '上海', value: 31 },
                {name: '云南', value: 12 },
                {name: '北京', value: 128 },
                {name: '天津', value: 33 },
                {name: '山西', value: 1 },
                {name: '广东', value: 13 },
                {name: '山东', value: 7 },
                {name: '辽宁', value: 15 },
                {name: '河北', value: 6 },
                {name: '深圳', value: 6 },
                {name: '贵州', value: 12 },
                {name: '重庆', value: 15 },
            ]
        }
    ]
};*/
var option7 = {
    backgroundColor: '#38415c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data:['消费分期贷','供应链贷','地区人数']
    },
    xAxis: {
            nameTextStyle: {
                fontSize: 20
            },
            axisLabel:{
                interval: 0
            },
            type: 'category',
            data: ['上海','云南','北京','天津','山西','广东','山东','辽宁','河北','深圳','贵州','重庆'],
            axisPointer: {
                type: 'shadow'
            }
    },
    yAxis: [
        {
            type: 'value',
            name: '金额(万元)',
            min: 0,
            max: 10000,
            interval: 2000,
        },
        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 125,
            interval: 25,
        }
    ],
    series: [
        {
            name:'消费分期贷',
            type:'bar',
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: '#3ba0ff'
                }
            },
            data:[1932.9490, 1025.3000, 4069.7670, 3154.0000, 243.6220, 284.6320, 1025.3000, 354.5220, 2320.7900, 75.5000, 74.5210, 191.6000]
        },
        {
            name:'供应链贷',
            type:'bar',
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: '#ed6caf'
                }
            },
            data:['', '', 9520.7100, 2523.1630, '', 1500.0000, '', '', 4750.0000, '', '', 103.2000]
        },
        {
            name:'地区人数',
            type:'line',
            yAxisIndex: 1,
            data:[31, 12, 128, 33, 1, 13, 7, 15, 6, 6, 12, 15]
        }
    ]
};


myChart7.setOption(option7);




//地图热力图
var geoCoordMap = {
    "海门":[121.15,31.89],
    "鄂尔多斯":[109.781327,39.608266],
    "招远":[120.38,37.35],
    "舟山":[122.207216,29.985295],
    "齐齐哈尔":[123.97,47.33],
    "盐城":[120.13,33.38],
    "赤峰":[118.87,42.28],
    "青岛":[120.33,36.07],
    "乳山":[121.52,36.89],
    "金昌":[102.188043,38.520089],
    "泉州":[118.58,24.93],
    "莱西":[120.53,36.86],
    "日照":[119.46,35.42],
    "胶南":[119.97,35.88],
    "南通":[121.05,32.08],
    "拉萨":[91.11,29.97],
    "云浮":[112.02,22.93],
    "梅州":[116.1,24.55],
    "文登":[122.05,37.2],
    "上海":[121.48,31.22],
    "攀枝花":[101.718637,26.582347],
    "威海":[122.1,37.5],
    "承德":[117.93,40.97],
    "厦门":[118.1,24.46],
    "汕尾":[115.375279,22.786211],
    "潮州":[116.63,23.68],
    "丹东":[124.37,40.13],
    "太仓":[121.1,31.45],
    "曲靖":[103.79,25.51],
    "烟台":[121.39,37.52],
    "福州":[119.3,26.08],
    "瓦房店":[121.979603,39.627114],
    "即墨":[120.45,36.38],
    "抚顺":[123.97,41.97],
    "玉溪":[102.52,24.35],
    "张家口":[114.87,40.82],
    "阳泉":[113.57,37.85],
    "莱州":[119.942327,37.177017],
    "湖州":[120.1,30.86],
    "汕头":[116.69,23.39],
    "昆山":[120.95,31.39],
    "宁波":[121.56,29.86],
    "湛江":[110.359377,21.270708],
    "揭阳":[116.35,23.55],
    "荣成":[122.41,37.16],
    "连云港":[119.16,34.59],
    "葫芦岛":[120.836932,40.711052],
    "常熟":[120.74,31.64],
    "东莞":[113.75,23.04],
    "河源":[114.68,23.73],
    "淮安":[119.15,33.5],
    "泰州":[119.9,32.49],
    "南宁":[108.33,22.84],
    "营口":[122.18,40.65],
    "惠州":[114.4,23.09],
    "江阴":[120.26,31.91],
    "蓬莱":[120.75,37.8],
    "韶关":[113.62,24.84],
    "嘉峪关":[98.289152,39.77313],
    "广州":[113.23,23.16],
    "延安":[109.47,36.6],
    "太原":[112.53,37.87],
    "清远":[113.01,23.7],
    "中山":[113.38,22.52],
    "昆明":[102.73,25.04],
    "寿光":[118.73,36.86],
    "盘锦":[122.070714,41.119997],
    "长治":[113.08,36.18],
    "深圳":[114.07,22.62],
    "珠海":[113.52,22.3],
    "宿迁":[118.3,33.96],
    "咸阳":[108.72,34.36],
    "铜川":[109.11,35.09],
    "平度":[119.97,36.77],
    "佛山":[113.11,23.05],
    "海口":[110.35,20.02],
    "江门":[113.06,22.61],
    "章丘":[117.53,36.72],
    "肇庆":[112.44,23.05],
    "大连":[121.62,38.92],
    "临汾":[111.5,36.08],
    "吴江":[120.63,31.16],
    "石嘴山":[106.39,39.04],
    "沈阳":[123.38,41.8],
    "苏州":[120.62,31.32],
    "茂名":[110.88,21.68],
    "嘉兴":[120.76,30.77],
    "长春":[125.35,43.88],
    "胶州":[120.03336,36.264622],
    "银川":[106.27,38.47],
    "张家港":[120.555821,31.875428],
    "三门峡":[111.19,34.76],
    "锦州":[121.15,41.13],
    "南昌":[115.89,28.68],
    "柳州":[109.4,24.33],
    "三亚":[109.511909,18.252847],
    "自贡":[104.778442,29.33903],
    "吉林":[126.57,43.87],
    "阳江":[111.95,21.85],
    "泸州":[105.39,28.91],
    "西宁":[101.74,36.56],
    "宜宾":[104.56,29.77],
    "呼和浩特":[111.65,40.82],
    "成都":[104.06,30.67],
    "大同":[113.3,40.12],
    "镇江":[119.44,32.2],
    "桂林":[110.28,25.29],
    "张家界":[110.479191,29.117096],
    "宜兴":[119.82,31.36],
    "北海":[109.12,21.49],
    "西安":[108.95,34.27],
    "金坛":[119.56,31.74],
    "东营":[118.49,37.46],
    "牡丹江":[129.58,44.6],
    "遵义":[106.9,27.7],
    "绍兴":[120.58,30.01],
    "扬州":[119.42,32.39],
    "常州":[119.95,31.79],
    "潍坊":[119.1,36.62],
    "重庆":[106.54,29.59],
    "台州":[121.420757,28.656386],
    "南京":[118.78,32.04],
    "滨州":[118.03,37.36],
    "贵阳":[106.71,26.57],
    "无锡":[120.29,31.59],
    "本溪":[123.73,41.3],
    "克拉玛依":[84.77,45.59],
    "渭南":[109.5,34.52],
    "马鞍山":[118.48,31.56],
    "宝鸡":[107.15,34.38],
    "焦作":[113.21,35.24],
    "句容":[119.16,31.95],
    "北京":[116.46,39.92],
    "徐州":[117.2,34.26],
    "衡水":[115.72,37.72],
    "包头":[110,40.58],
    "绵阳":[104.73,31.48],
    "乌鲁木齐":[87.68,43.77],
    "枣庄":[117.57,34.86],
    "杭州":[120.19,30.26],
    "淄博":[118.05,36.78],
    "鞍山":[122.85,41.12],
    "溧阳":[119.48,31.43],
    "库尔勒":[86.06,41.68],
    "安阳":[114.35,36.1],
    "开封":[114.35,34.79],
    "济南":[117,36.65],
    "德阳":[104.37,31.13],
    "温州":[120.65,28.01],
    "九江":[115.97,29.71],
    "邯郸":[114.47,36.6],
    "临安":[119.72,30.23],
    "兰州":[103.73,36.03],
    "沧州":[116.83,38.33],
    "临沂":[118.35,35.05],
    "南充":[106.110698,30.837793],
    "天津":[117.2,39.13],
    "富阳":[119.95,30.07],
    "泰安":[117.13,36.18],
    "诸暨":[120.23,29.71],
    "郑州":[113.65,34.76],
    "哈尔滨":[126.63,45.75],
    "聊城":[115.97,36.45],
    "芜湖":[118.38,31.33],
    "唐山":[118.02,39.63],
    "平顶山":[113.29,33.75],
    "邢台":[114.48,37.05],
    "德州":[116.29,37.45],
    "济宁":[116.59,35.38],
    "荆州":[112.239741,30.335165],
    "宜昌":[111.3,30.7],
    "义乌":[120.06,29.32],
    "丽水":[119.92,28.45],
    "洛阳":[112.44,34.7],
    "秦皇岛":[119.57,39.95],
    "株洲":[113.16,27.83],
    "石家庄":[114.48,38.03],
    "莱芜":[117.67,36.19],
    "常德":[111.69,29.05],
    "保定":[115.48,38.85],
    "湘潭":[112.91,27.87],
    "金华":[119.64,29.12],
    "岳阳":[113.09,29.37],
    "长沙":[113,28.21],
    "衢州":[118.88,28.97],
    "廊坊":[116.7,39.53],
    "菏泽":[115.480656,35.23375],
    "合肥":[117.27,31.86],
    "武汉":[114.31,30.52],
    "大庆":[125.03,46.58],
    "云南":[102.72,25.05],
    "山西":[112.55,37.87],
    "广东":[113.27,23.13],
    "山东":[116.98,36.67],
    "辽宁":[123.43,41.80],
    "河北":[114.48,38.03],
    "贵州":[106.63,26.65],
    "重庆":[106.55,29.57],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

//申请和发放贷款信息展示(金额，地区，贷款品种)
var data0 = [{
    name: '上海',
    people: 31,
    loan: [{
        name: '消费分期贷',
        money: 19329490
    }]
},{
    name: '云南',
    people: 12,
    loan: [{
        name: '消费分期贷',
        money: 10253000
    }]
},{
    name: '北京',
    people: 128,
    loan: [{
        name: '消费分期贷',
        money: 40697670
    },{
        name: '供应链贷',
        money: 95207100
    }]
},{
    name: '天津',
    people: 33,
    loan: [{
        name: '消费分期贷',
        money: 31540000
    },{
        name: '供应链贷',
        money: 25231630
    }]
},{
    name: '山西',
    people: 1,
    loan: [{
        name: '消费分期贷',
        money: 2436220
    }]
},{
    name: '广东',
    people: 13,
    loan: [{
        name: '消费分期贷',
        money: 2846320
    },{
        name: '供应链贷',
        money: 15000000
    }]
},{
    name: '山东',
    people: 7,
    loan: [{
        name: '消费分期贷',
        money: 10253000
    }]
},{
    name: '辽宁',
    people: 15,
    loan: [{
        name: '消费分期贷',
        money: 3545220
    }]
},{
    name: '河北',
    people: 6,
    loan: [{
        name: '消费分期贷',
        money: 23207900
    },{
        name: '供应链贷',
        money: 47500000
    }]
},{
    name: '深圳',
    people: 6,
    loan: [{
        name: '消费分期贷',
        money: 755000
    }]
},{
    name: '贵州',
    people: 12,
    loan: [{
        name: '消费分期贷',
        money: 745210
    }]
},{
    name: '重庆',
    people: 15,
    loan: [{
        name: '消费分期贷',
        money: 1916000
    },{
        name: '供应链贷',
        money: 1032000
    }]
},]



var option0 = {
    backgroundColor: '#38415c',
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            //console.log(params)
            /*if(params.value[2] > 10){
                return params.name + ' : ' + params.value[2] + '人' + '(' +(params.value[2] * 100/279).toFixed(2) + ')%' + '10+';
            }else{
                return params.name + ' : ' + params.value[2] + '人' + '(' +(params.value[2] * 100/279).toFixed(2) + ')%' + '10-';
            }*/
            
            var record;
            for(var i in data0){
                if(data0[i].name == params.name){
                    record = data0[i];
                    break;
                }
            }
            if(record.loan.length == 1){
                return params.name + ' : ' + params.value[2] + '人' + '(' +(params.value[2] * 100/279).toFixed(2) + ')%' + '<br />' + '消费分期贷: ' + record.loan[0].money + '元'; 
            }else if(record.loan.length == 2){
                return params.name + ' : ' + params.value[2] + '人' + '(' +(params.value[2] * 100/279).toFixed(2) + ')%' + '<br />' + '消费分期贷: ' + record.loan[0].money + '元' + '<br />' + '供应链贷: ' + record.loan[1].money + '元'; 
            }
        },
    },
    visualMap: {
        min: 0,
        max: 130,
        calculable: true,
        inRange: {
            color: ['#3BA0FF', '#FFEB3B', '#F44336']
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#fff8e1',
                borderColor: '#38415c'
            },
            emphasis: {
                areaColor: '#ffa726'
            }
        }
    },
    series: [
        {
            name: '货款发生区域分布人数',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: '上海', value: 31 },
                {name: '云南', value: 12 },
                {name: '北京', value: 128 },
                {name: '天津', value: 33 },
                {name: '山西', value: 1 },
                {name: '广东', value: 13 },
                {name: '山东', value: 7 },
                {name: '辽宁', value: 15 },
                {name: '河北', value: 6 },
                {name: '深圳', value: 6 },
                {name: '贵州', value: 12 },
                {name: '重庆', value: 15 },
            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}

myChart4.setOption(option0);

var count = 0;
var timeTicket = null;
var dataLength = option0.series[0].data.length;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
    myChart4.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });
    myChart4.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: (count) % dataLength
    });
    myChart4.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: (count) % dataLength
    });
    count++;
}, 1500);

/*myChart4.on('mouseover', function(params) {
    console.log(params)
    clearInterval(timeTicket);
    myChart4.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart4.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
    });
    myChart4.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: params.dataIndex,
    });
});
myChart4.on('mouseout', function(params) {
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function() {
        myChart4.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        myChart4.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        myChart4.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        count++;
    }, 1000);
});*/

//国安社区线上注册用户
var option8 = {
    backgroundColor: '#38415c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        },
        //formatter: "{b} <br/> {a0} : {c0}万元 <br/> {a1} : {c1}万元"
    },
    xAxis: [
        {
            type: 'category',
            data: ['2018/1','2018/2','2018/3','2018/4','2018/5','2018/6'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '数量(万)',
            min: 0,
            max: 700,
            interval: 100,
        }
    ],
    series: [
        {
            name:'注册用户',
            type:'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: '#FF5252'
                }
            },
            data:[440.2400, 455.1900, 480.6603, 510.4303, 586.0503, 606.9203]
        },
        {
            name:'数量',
            type:'line',
            itemStyle: {
                normal: {
                    color: '#FFF59D'
                }
            },
            data:[440.2400, 455.1900, 480.6603, 510.4303, 586.0503, 606.9203]
        }
    ]
};

myChart8.setOption(option8);















