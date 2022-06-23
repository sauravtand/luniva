import { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from "react-chartjs-2";



ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const dummyData = [
  {
    id: 1,
    label: 'random1',
    marks: 150,
  },
  {
    id: 2,
    label: 'random2',
    marks: 200,
  },
  {
    id: 3,
    label: 'random3',
    marks: 300,
  },
  {
    id: 4,
    label: 'random4',
    marks: 400,
  },
  {
    id: 5,
    label: 'random5',
    marks: 500,
  }
]


const ChartDashboard = () => {

  const [dummydatalabel, setDummydatalabel] = useState([]);
  const [newData, setNewData] = useState([]);



  const sortData = () => {


    let names = dummyData.map(labels => labels.label);
    setDummydatalabel(names);

    let mar = dummyData.map(mark => mark.marks);
    setNewData(mar);
  }
  useEffect(() => {

    sortData()

  }, [])


  const data = {


    labels: dummydatalabel,
    datasets: [{
      labels: 'first data set',
      data: newData,
      backgroundColor: [
        '#F48FFF',
        '#99FFD3',
        '#B9FF90',
        '#FFF300',

        '#FF7F75',
        '#E5FF91',
      ],
      hoverOffset: 4,
      borderWidth: 1,





    }]
  };

  return (

    <>
      <Row>
        <Col>

          <Card style={{ height: "25rem" }} >

            <div style={{}} >
              <Doughnut data={data} />
            </div>
            <caption style={{ fontSize: 30 }}><b>Fig:A</b></caption>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "25rem" }} >
            <div style={{}} >
              <Doughnut data={data} />
            </div>
            <caption style={{ fontSize: 30 }}><b>Fig:B</b></caption>

          </Card>
        </Col>
        <Col>
          <Card style={{ height: "25rem" }} >

            <div style={{}} >
              <Doughnut data={data} />
            </div>
            <caption style={{ fontSize: 30 }}><b>Fig:C</b></caption>

          </Card>
        </Col>
      </Row>

      {/* <Row>
        <Card style={{ width: '100%' }}>
          <div style={{}} >
            <Bar data={data} />
          </div>
        </Card>
      </Row>
 */}

    </>
  )
}

export default ChartDashboard;
