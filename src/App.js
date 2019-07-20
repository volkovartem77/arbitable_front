import React, { Component } from 'react';
import './App.css';
import MyTable from './components/MyTable';
import Socket from 'simple-websocket';


function getKey() {
    return Math.random() * Math.random()
}

class App extends Component {
    constructor(props) {
        super(props);
        this.TableElement = React.createRef();

        var sock = new Socket('ws://localhost:9999');

        sock.on('data', function (data) {
            data = JSON.parse(data);
            this.TableElement.current.updateTable(data);
        }.bind(this));

        this.state = {
            socket: sock
        }
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Arbitrage table</h2>
                </div>
                <div className="col-3">
                    <MyTable bidColor="#60BA3F" askColor={"#B83E3E"} ref={this.TableElement} key={getKey()} />
                </div>
            </div>
        );
    }
}

export default App;
