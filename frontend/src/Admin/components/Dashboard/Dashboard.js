import React from 'react';
import './Dashboard.css';
import { FaUserFriends } from "react-icons/fa";
import {PieChart,Pie,Cell,ResponsiveContainer} from "recharts";
const data=[
  {name:"Pink",value:20},
  {name:"LightGreen",value:10},
  {name:"Blue",value:15},
  {name:"Purple",value:35},
  {name:"DarkGreen",value:20},
];
const COLORS=["	#FF69B4","#00FF00","#007FFF","#800080","#008000"];


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat-card">
          <div className="stat-header">
            
            <div className="stat-title">System User</div>
          </div>
          <div className="FaUserFriends"><FaUserFriends /></div>
          <div className="stat-value">37</div>
          <div className="stat-change">+12% This Month</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
          
            <div className="stat-title">Program</div>
          </div>
          <div className="FaUserFriends"><FaUserFriends /></div>
          <div className="stat-value">37</div>
          <div className="stat-change">+12% This Month</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            
            <div className="stat-title">Channel</div>
          </div>
          <div className="FaUserFriends"><FaUserFriends /></div>
          <div className="stat-value">37</div>
          <div className="stat-change">+12% This Month</div>
        </div>
      </div>
      <div className="chart">
        <h2>Program on Category</h2>
        <div className="chart-content">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              
              >
                {data.map((entry,index)=>(
               <Cell  fill={COLORS[index%COLORS.length]}></Cell>

                ))}
                </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;