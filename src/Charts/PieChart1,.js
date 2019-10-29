import React from "react";
import ReactEcharts from 'echarts-for-react';

class PieChart extends React.Component{
    getOption = () => {
        return {
            title: {
                x: 'center',
                text: this.props.title || '',
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                x: 'center',
                type: 'scroll',
                bottom: 0,
                data: this.props.legend
            },
            toolbox: {
              show: true,
              orient: 'horizontal',
              right: '15px',
              top: '20px',
              feature: {
                restore: { show: true, title: 'Reset' },
                saveAsImage: { show: true, title: "Download" }
              }
            },
          color: ["#d0021b", "#f47c08", "#f8e71c", "#98674b", "#b8e986", "#2b9d9b", "#4acce2", "#0079df", "#002e7a", "#9013fe", "#3c3c3c", "#c4c4c4"],
            calculable: true,
            series: [
                {
                    name: this.props.title || '',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['50%','70%'],
                    center: ['50%', '50%'],
                    itemStyle: {
                        normal : {
                            label : {
                                      show : false
                                     },
                            labelLine : {
                                          show : false
                                         }
                            },
                        },
                    data: this.props.data
                }
            ]
        };     
    }
  render(){
    const { callFunction, clickable } = this.props;
    return (
      <ReactEcharts option={this.getOption()} style={{ height: "350px" }} onEvents={ { click : clickable && callFunction }}/>
    );
  }
}

export default PieChart;