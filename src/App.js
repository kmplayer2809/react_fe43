import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './EventBinding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe';
import RenderWithMap from './RenderWithState/RenderWithMap';
import BaiTapChonKinh from './RenderWithState/BaiTapChonKinh';
import DemoProps from './Props/DemoProps';
import ExampleCard from './LiftingUpState/ExampleCard';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
            {/* <Header /> */}
            {/* <BaiTapLayout /> */}
            {/* <BaiTapLayout2 /> */}
            {/* <DataBinding /> */}
            {/* <EventBinding /> */}
            {/* <RenderWithState /> */}
            {/* <BaiTapChonXe /> */}
            {/* <RenderWithMap /> */}
            {/* <BaiTapChonKinh /> */}
            {/* <DemoProps /> */}
            <ExampleCard />
        </div>
    );
}

export default App;
