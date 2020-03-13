import React from 'react';
import '../style/App.css';
import SliderContainer from "./slider/SliderContainer";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
        <NavBar bg="primary" expand="lg">
            <NavBar.Brand href="/"/>
            <NavBar.Collapse id="responsiveNav">
                <Nav>

                </Nav>
            </NavBar.Collapse>
        </NavBar>
        <SliderContainer>

        </SliderContainer>
    </div>
  );
}

export default App;
