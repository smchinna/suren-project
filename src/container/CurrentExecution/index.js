import React from 'react';

import { PagePadding, ChartWrapper, PanelBody } from './styles';

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
    this.setState({
      openedPanel: text
    })
  }

  getCard = (title, value, bgColor) => {
    return (
      <Card title={title} value={value} bgColor={bgColor} />
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
        title: "Total Scenrios",
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
        bgColor: '#00000052'
      }
    ]
    return (
      <div>
        {
          data.map((obj, index) => (
            this.getCard(obj.title, obj.value, obj.bgColor)
          ))
        }
      </div>
    )
  }

  getChartPanel = (title, data, label) => {
    let colors = ['#ff5b57', '#00acac']
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
          <ChartWrapper>
            {chartData.map((obj, index) => (
              <div key={index} className="chartWidth">
                {this.getChartPanel(obj.title, obj.data, obj.label)}
              </div>
            ))}
          </ChartWrapper>
        }
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