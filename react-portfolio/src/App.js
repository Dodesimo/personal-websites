import React from 'react'
import Navbar from "./components/Navbar"
import Description from "./components/Home"
import About from "./components/About"
import Projects from './components/Projects'
import Contact from "./components/Contact"
import Timeline from "./components/WorkExperience"

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Description/>
            <About/>
            <Timeline/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
