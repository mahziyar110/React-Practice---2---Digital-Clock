import React, { Component, useState } from "react";
import '../styles/App.css';

function getCurrentTime() {
    const time = new Date();
    return time.toLocaleTimeString().toUpperCase();
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { time: getCurrentTime() };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ time: getCurrentTime() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {

        return (
            <div className="Clock">
                <h3 id="time">{this.state.time}</h3>
            </div>
        )
    }
}


export default App;
