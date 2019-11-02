import React from 'react';
import { FaRegChartBar } from "react-icons/fa";

import { PagePadding, ChartWrapper, PanelBody, TableWrapper, GridWidth, FlexItem, InfoCard } from './styles';

import Card from '../../components/Card/index';
import Panel from '../../components/Panel';
import PieUI from '../../Charts/PieChart';

class CurrentExecution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedPanel: 'overall'
    }
  }

  changedOpenedPanel = (text) => {
    const { openedPanel } = this.state;
    if(text === openedPanel) {
      this.setState({
        openedPanel: ''
      })
    } else {
      this.setState({
        openedPanel: text
      })
    }
  }

  getCard = (title, value, bgColor, icon) => {
    return (
      <Card title={title} value={value} bgColor={bgColor} Icon={icon}/>
    )
  }

  getTotalCardUI = () => {
    let data = [
      {
        title: "Total Modules",
        value: "3",
        bgColor: '#00acac'
      },
      {
        title: "Total Scenarios",
        value: "3"
      },
      {
        title: "Total Testcases",
        value: "3",
        bgColor: '#a667e0'
      },
      {
        title: "Avg Execution Time",
        value: "00 hr 33 min",
        bgColor: '#00000052',
        icon: FaRegChartBar
      }
    ]
    return (
      <div>
        {
          data.map((obj, index) => (
            this.getCard(obj.title, obj.value, obj.bgColor, obj.icon)
          ))
        }
      </div>
    )
  }

  getChartPanel = (title, data, label) => {
    let colors = ['#66c16a', '#ff5b57']
    let dataSets = [
      {
        data: data,
        backgroundColor: colors
      }
    ]
    return (
      <Panel title={title}>
        <PanelBody>
          <PieUI datasets={dataSets} label={label} height={200} />
        </PanelBody>
      </Panel>
    )
  }

  getGridUI = (index, obj) => (
    <GridWidth width={obj.width} bgColor={obj.bgColor} key={index}>
      {obj.title}            
    </GridWidth>
  )

  getInformationUI = (index, obj) => {
    return(
      <InfoCard key={index}>
        <div className="card-title">
          <div>
            {obj.title}
          </div>
        </div>
        <div className="card-value">
          <div>
            {obj.value}
          </div>
        </div>
      </InfoCard>
    )
  }

  getTableUI = () => {
    let header = [
      {
        width: '15%',
        title: '',
        bgColor: ''
      },
      {
        width: '15%',
        title: 'Pass Count',
        bgColor: '#ff5b57'
      },
      {
        width: '15%',
        title: 'Fail Count',
        bgColor: '#66c16a'
      },
      {
        width: '15%',
        title: 'Total Count',
        bgColor: '#92d3de'
      },
      {
        width: '20%',
        title: 'Pass Percentage',
        bgColor: '#ff5b57'
      },
      {
        width: '20%',
        title: 'Fail Percentage',
        bgColor: '#66c16a'
      }
    ];
    let modulusData = [
      {
        width: '15%',
        title: 'Modulus',
        bgColor: '#ffff2de8'
      },
      {
        width: '15%',
        title: '1',
        bgColor: '#ff5b57'
      },
      {
        width: '15%',
        title: '0',
        bgColor: '#66c16a'
      },
      {
        width: '15%',
        title: '1',
        bgColor: '#92d3de'
      },
      {
        width: '20%',
        title: '100%',
        bgColor: '#ff5b57'
      },
      {
        width: '20%',
        title: '0%',
        bgColor: '#66c16a'
      }
    ];
    let scanarioData = [
      {
        width: '15%',
        title: 'Scenario',
        bgColor: '#92d3de'
      },
      {
        width: '15%',
        title: '1',
        bgColor: '#ff5b57'
      },
      {
        width: '15%',
        title: '0',
        bgColor: '#66c16a'
      },
      {
        width: '15%',
        title: '1',
        bgColor: '#92d3de'
      },
      {
        width: '20%',
        title: '100%',
        bgColor: '#ff5b57'
      },
      {
        width: '20%',
        title: '0%',
        bgColor: '#66c16a'
      }
    ];
    let testData = [
      {
        width: '15%',
        title: 'Test Cases',
        bgColor: '#c1bdbd'
      },
      {
        width: '15%',
        title: '1',
        bgColor: '#ff5b57'
      },
      {
        width: '15%',
        title: '0',
        bgColor: '#66c16a'
      },
      {
        width: '15%',
        title: '1',
        bgColor: '#92d3de'
      },
      {
        width: '20%',
        title: '100%',
        bgColor: '#ff5b57'
      },
      {
        width: '20%',
        title: '0%',
        bgColor: '#66c16a'
      }
    ];
    let InfoData = [
      {
        title: 'Start Date & Time',
        value: '02/10/2019 17:32:00'
      },
      {
        title: 'End Date & Time',
        value: '02/11/2019 17:32:00'
      },
      {
        title: 'Total Duration',
        value: '00 hr 1 min  30 sec 0 ms'
      },
      {
        title: 'Average Execution Time',
        value: '00 hr 30 min  30 sec 0 ms'
      }
    ]
    return(
      <ChartWrapper>
        <TableWrapper>
            <FlexItem justifyCon='space-around' wrap={1}>
              {InfoData.map((obj, index) => (
                this.getInformationUI(`info-${index}`, obj)
              ))}
            </FlexItem>
            <FlexItem >
              {header.map((obj, index) => (
                this.getGridUI(`header-${index}`, obj)
              ))}
            </FlexItem>
            <FlexItem >
              {modulusData.map((obj, index) => (
                this.getGridUI(`header-${index}`, obj)
              ))}
            </FlexItem>
            <FlexItem >
              {scanarioData.map((obj, index) => (
                this.getGridUI(`header-${index}`, obj)
              ))}
            </FlexItem>
            <FlexItem >
              {testData.map((obj, index) => (
                this.getGridUI(`header-${index}`, obj)
              ))}
            </FlexItem>
        </TableWrapper>
      </ChartWrapper>
    )
  }

  getPanelChartUI = () => {
    let chartData = [
      {
        title: 'Modulus',
        data: [0, 100],
        label: ['0% pass', '100% fail']
      },
      {
        title: 'Scanario',
        data: [66.6, 33.3],
        label: ['66.6% pass', '33.3% fail']
      },
      {
        title: 'Testcases',
        data: [80, 20],
        label: ['80% pass', '20% fail']
      }
    ]

    const { openedPanel } = this.state;

    return (
      <Panel title="Overall execution status" onClick={this.changedOpenedPanel} id='overall'>
        {openedPanel === 'overall' &&
          <ChartWrapper >
            {chartData.map((obj, index) => (
              <div key={index} className="chartWidth">
                {this.getChartPanel(obj.title, obj.data, obj.label)}
              </div>
            ))}
          </ChartWrapper>
        }
        {openedPanel === 'overall' && this.getTableUI()}
      </Panel>
    )
  }

  getHealthPanelUI = () => {
    let chartData = [
      {
        title: 'Modulus',
        data: [0, 100],
        label: ['0% pass', '100% fail']
      },
      {
        title: 'Scanario',
        data: [66.6, 33.3],
        label: ['66.6% pass', '33.3% fail']
      },
      {
        title: 'Testcases',
        data: [80, 20],
        label: ['80% pass', '20% fail']
      }
    ]
    const { openedPanel } = this.state;

    return (
      <Panel title="Module: Health" onClick={this.changedOpenedPanel} id='health'>
        {openedPanel === 'health' &&
          <ChartWrapper>
            {chartData.map((obj, index) => (
              <div key={index} className="chartWidth">
                {this.getChartPanel(obj.title, obj.data, obj.label)}
              </div>
            ))}
          </ChartWrapper>
        }
        {openedPanel === 'health' && this.getTableUI()}
      </Panel>
    )
  }

  getTravelPanelUI = () => {
    let chartData = [
      {
        title: 'Modulus',
        data: [0, 100],
        label: ['0% pass', '100% fail']
      },
      {
        title: 'Scanario',
        data: [66.6, 33.3],
        label: ['66.6% pass', '33.3% fail']
      },
      {
        title: 'Testcases',
        data: [80, 20],
        label: ['80% pass', '20% fail']
      }
    ]

    const { openedPanel } = this.state;

    return (
      <Panel title="Module: Travel" onClick={this.changedOpenedPanel} id='travel'>
        {openedPanel === 'travel' &&
          <ChartWrapper>
            {chartData.map((obj, index) => (
              <div key={index} className="chartWidth">
                {this.getChartPanel(obj.title, obj.data, obj.label)}
              </div>
            ))}
          </ChartWrapper>
        }
        {openedPanel === 'travel' && this.getTableUI()}
      </Panel>
    )
  }

  getLifePanelUI = () => {
    let chartData = [
      {
        title: 'Modulus',
        data: [0, 100],
        label: ['0% pass', '100% fail']
      },
      {
        title: 'Scanario',
        data: [66.6, 33.3],
        label: ['66.6% pass', '33.3% fail']
      },
      {
        title: 'Testcases',
        data: [80, 20],
        label: ['80% pass', '20% fail']
      }
    ]
    const { openedPanel } = this.state;

    return (
      <Panel title="Module: Life" onClick={this.changedOpenedPanel} id='life'>
        {openedPanel === 'life' &&
          <ChartWrapper>
            {chartData.map((obj, index) => (
              <div key={index} className="chartWidth">
                {this.getChartPanel(obj.title, obj.data, obj.label)}
              </div>
            ))}
          </ChartWrapper>
        }
        {openedPanel === 'life' && this.getTableUI()}
      </Panel>
    )
  }

  render() {
    return (
      <PagePadding>
        <div className="title">Curreny Execution</div>
        {this.getTotalCardUI()}
        {this.getPanelChartUI()}
        <div className="mt">
          {this.getHealthPanelUI()}
        </div>
        <div className="mt">
          {this.getTravelPanelUI()}
        </div>
        <div className="mt">
          {this.getLifePanelUI()}
        </div>
      </PagePadding>
    );
  }
}

export default CurrentExecution;