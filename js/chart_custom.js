        
        // 리스트 컬러 배열
        let list_color = ['#4065E0', '#2E8DFF', '#25D6FB', '#63FFDA', '#05E699', '#07B3CF'];


        // 금일 단말유형별 개통 건수
        const ctx = document.getElementById('today_opening').getContext('2d');

        // 차트 설정
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['기가지니', 'Olleh', '인터넷전화(가정)', '인터넷전화(기업)', '홈AP', '홈IoT'],
                datasets: [{
                    label: '개통완료',
                    data: [160, 70, 265, 175, 270, 45],
                    backgroundColor: '#27D1EC',
                }, {
                    label: '개통대기',
                    data: [255, 105, 351, 210, 325, 52],
                    backgroundColor: '#E3E9F2',
                }]
            },
            options: {
                responsive: false,
                scales: {
                    x: {
                        border: {
                            color: '#CFD8DC'
                        },
                        grid: {
                            color: '#ECEFF1',
                            tickColor: '#fff'
                        },
                        ticks: {
                            color: '#9E9E9E',
                            beginAtZero: true,
                            font: {
                                size: 13,
                                family: 'Noto_Sans_Re'
                            }
                        },
                    },
                    y: {
                        border: {
                            color: '#CFD8DC'
                        },
                        grid: {
                            color: '#ECEFF1',
                            tickColor: '#fff'
                        },
                        ticks: {
                            color: '#9E9E9E',
                            beginAtZero: true,
                            font: {
                                size: 13,
                                family: 'Noto_Sans_Re'
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                grouped: false,
                barThickness: 35
            }
        });

    // --------------------------------------------------------------

        // 최근 7일간 개통 건수
        const ctx1 = document.getElementById('recent_opening').getContext('2d');

        const gradientBg1 = ctx1.createLinearGradient(0, 0, 0, 260);
        gradientBg1.addColorStop(0.2, 'rgba(64, 101, 224, .15)');
        gradientBg1.addColorStop(1, 'rgba(255, 255, 225, .1)');

        const gradientBg2 = ctx1.createLinearGradient(0, 0, 0, 260);
        gradientBg2.addColorStop(0.2, 'rgba(46, 141, 225, .15)');
        gradientBg2.addColorStop(1, 'rgba(255, 255, 225, .1)');
        
        const gradientBg3 = ctx1.createLinearGradient(0, 0, 0, 260);
        gradientBg3.addColorStop(0.2, 'rgba(37, 214, 251, .15)');
        gradientBg3.addColorStop(1, 'rgba(255, 255, 225, .1)');

        const gradientBg4 = ctx1.createLinearGradient(0, 0, 0, 260);
        gradientBg4.addColorStop(0.2, 'rgba(99, 255, 218, .15)');
        gradientBg4.addColorStop(1, 'rgba(255, 255, 225, .1)');

        const gradientBg5 = ctx1.createLinearGradient(0, 0, 0, 260);
        gradientBg5.addColorStop(0.2, 'rgba(5, 230, 153, .15)');
        gradientBg5 .addColorStop(1, 'rgba(255, 255, 225, .1)');

        const gradientBg6 = ctx1.createLinearGradient(0, 0, 0, 260);
        gradientBg6.addColorStop(0.2, 'rgba(7, 179, 207, .15)');
        gradientBg6 .addColorStop(1, 'rgba(255, 255, 225, .1)');

        // 차트 설정
        var myChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['7/11', '7/12', '7/13', '7/14', '7/15', '7/16', '7/17'],
                datasets: [
                    {
                        label: '기가지니',
                        data: [170, 245, 100, 215, 275, 125, 45],
                        backgroundColor: gradientBg1,
                        borderColor: list_color[0],
                        pointRadius:0,
                        tension: 0.6,
                        fill: true,
                    },
                    {
                        label: 'Olleh  TV',
                        data: [205, 210, 220, 200, 215, 210, 200],
                        backgroundColor: gradientBg2,
                        borderColor: list_color[1],
                        pointRadius:0,
                        tension: 0.6,
                        fill: true,
                    },
                    {
                        label: '인터넷전화(가정)',
                        data: [45, 150, 40, 210, 100, 225, 300],
                        backgroundColor: gradientBg3,
                        borderColor: list_color[2],
                        pointRadius:0,
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: '인터넷전화(기업)',
                        data: [80, 100, 100, 120, 90, 110, 95],
                        backgroundColor: gradientBg4,
                        borderColor: list_color[3],
                        pointRadius:0,
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: '홈AP',
                        data: [20, 35, 30, 40, 30, 25, 30],
                        backgroundColor: gradientBg5,
                        borderColor: list_color[4],
                        pointRadius:0,
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: '홈IoT',
                        data: [30, 40, 45, 25, 45, 25, 20],
                        backgroundColor: gradientBg6,
                        borderColor: list_color[5],
                        pointRadius:0,
                        tension: 0.4,
                        fill: true,
                    },
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                        x: {
                            border: {
                                color: '#CFD8DC'
                            },
                            grid: {
                                color: '#ECEFF1',
                                tickColor: '#fff'
                            },
                            ticks: {
                                color: '#9E9E9E',
                                beginAtZero: true,
                                font: {
                                    size: 0,
                                    family: 'Noto_Sans_Re'
                                },
                            }
                        },
                        y: {
                            border: {
                                color: '#CFD8DC'
                            },
                            grid: {
                                color: '#ECEFF1',
                                tickColor: '#fff'
                            },
                            ticks: {
                                color: '#9E9E9E',
                                beginAtZero: true,
                                font: {
                                    size: 13,
                                    family: 'Noto_Sans_Re'
                                }
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                }
            }
    });
    
    // ----------------------------------------------------------------

    // 장기미사용 단말
    const ctx2 = document.getElementById('category_chart').getContext('2d');

    // 차트 설정
    var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['전체', '1개월이상', '2개월이상', '3개월이상', '4개월이상', '5개월이상', '6개월이상'],
            datasets: [
                {
                    label: '기가지니',
                    data: [840, 300, 200, 80, 330, 60, 205],
                    backgroundColor: list_color[0]
                },
                {
                    label: 'Olleh TV',
                    data: [1220, 180, 300, 180, 600, 90, 350],
                    backgroundColor: list_color[1]
                },
                {
                    label: '인터넷전화(가정)',
                    data: [1020, 270, 250, 120, 400, 70, 270],
                    backgroundColor: list_color[2]
                },
                {
                    label: '인터넷전화(기업)',
                    data: [1580, 450, 420, 200, 1100, 130, 450],
                    backgroundColor: list_color[3]
                },
                {
                    label: '홈AP',
                    data: [1150, 200, 280, 170, 480, 85, 300],
                    backgroundColor: list_color[4]
                },
                {
                    label: '홈IoT',
                    data: [400, 400, 100, 50, 200, 20, 120],
                    backgroundColor: list_color[5]
                },
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                    x: {
                        border: {
                            color: '#CFD8DC'
                        },
                        grid: {
                            color: '#ECEFF1',
                            tickColor: '#fff'
                        },
                        ticks: {
                            color: '#9E9E9E',
                            beginAtZero: true,
                            font: {
                                size: 13,
                                family: 'Noto_Sans_Re'
                            },
                        }
                    },
                    y: {
                        border: {
                            color: '#CFD8DC'
                        },
                        grid: {
                            color: '#ECEFF1',
                            tickColor: '#fff'
                        },
                        ticks: {
                            color: '#9E9E9E',
                            beginAtZero: true,
                            font: {
                                size: 13,
                                family: 'Noto_Sans_Re'
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 1800
                    }
            },
            barThickness: 8
        }
});

    // ------------------------------------------

    // 단말 유형별 현황
    const ctx3 = document.getElementById('situation_chart').getContext('2d');

    // 차트 설정
    var myChart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['기가지니', 'Olleh', '인터넷전화(가정)', '인터넷전화(기업)', '홈AP', '홈IoT'],
            datasets: [
                {
                    label: '단말 유형별 현황',
                    data: [200, 80, 250, 300, 80, 50],
                    backgroundColor: [
                        list_color[0],
                        list_color[1],
                        list_color[2],
                        list_color[3],
                        list_color[4],
                        list_color[5],
                    ],
                    borderColor: [
                        list_color[0],
                        list_color[1],
                        list_color[2],
                        list_color[3],
                        list_color[4],
                        list_color[5],
                    ]
                },
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });