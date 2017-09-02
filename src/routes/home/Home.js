

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';
import {TIMETICKET_URL, MAP_URL} from '../../globals.js';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Sb Admin React';


const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

function goToMapApp()
{

 
  window.location = MAP_URL;
}

function goToTimeTicketApp()
{
  
  window.location = TIMETICKET_URL;
}

function Home(props, context) {

  context.setTitle("OnSite3D - Internal Dashboard");
  return (
    <div>
      

      <div className="row">
        <div className="col-lg-3">

          <Panel
            header={<span>
               
                PointCloud Map

              
            </span>}
          >
            <div style = {{cursor: "pointer"}}>
              
              <img onClick={goToMapApp} key = {"Img_Map"} src= "/map_screenshot.png" alt="icon" height="250" width="250" /> 

            </div>



          </Panel>

           </div>


          <div className="col-lg-3">
            <Panel
              header={<span>
               
                TimeTickets

              
              </span>}
            >
              <div style = {{cursor: "pointer"}}>
              
                <img key = {"Img_Ticket"}  onClick = {goToTimeTicketApp} src= "/ticket_screen.png" alt="icon" height="250" width="250" /> 

              </div>

            </Panel>
          </div>

        
       

      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
