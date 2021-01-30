import React  from 'react';
import './App.css';
import DemoLine from './Graph/DemoLine';
import DemoArea from './Graph/DemoArea';
import DemoPie from './Graph/DemoPie';
import DemoStock from './Graph/DemoStock';

function App() {
  console.log("mode", process.env.NODE_ENV);
  return (
    <div className="App">
      <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%',}}>
        <div className="chart-width" style={{height:'300px', padding: '15px', boxShadow: '0px 2px 5px #e2e2e2', margin: '15px'}} >
          <DemoLine />
        </div>
        <div className="chart-width" style={{height:'300px', padding: '15px', boxShadow: '0px 2px 5px #e2e2e2', margin: '15px'}} >
          <DemoArea />
        </div>
        <div className="chart-width" style={{height:'300px', padding: '15px', boxShadow: '0px 2px 5px #e2e2e2', margin: '15px'}} >
          <DemoPie />
        </div>
        <div className="chart-width" style={{height:'300px', padding: '15px', boxShadow: '0px 2px 5px #e2e2e2', margin: '15px'}} >
          <DemoStock />
        </div>  
      </div>
    </div>
  );
}

export default App;
