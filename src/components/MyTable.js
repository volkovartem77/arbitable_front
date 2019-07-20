import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './MyTable.css'


const initData = [
    {
        "exchange": "ITBIT",
        "symbol": "XBT_USD",
        "bid": 0.23424,
        "bid_amount": 65,
        "ask": 0.24803,
        "ask_amount": 233,
        "bank_rate": 31.18,
        "diff": 0.21
    },
    {
        "exchange": "ITBIT",
        "symbol": "ETH_USD",
        "bid": 0.23424,
        "bid_amount": 65,
        "ask": 0.24803,
        "ask_amount": 233,
        "bank_rate": 31.18,
        "diff": 0.21
    },
    {
        "exchange": "BXIN",
        "symbol": "THB_BTC",
        "bid": 0.23424,
        "bid_amount": 65,
        "ask": 0.24803,
        "ask_amount": 233,
        "bank_rate": 31.18,
        "diff": 0.21
    },
    {
        "exchange": "BXIN",
        "symbol": "THB_ETH",
        "bid": 0.23424,
        "bid_amount": 65,
        "ask": 0.24803,
        "ask_amount": 233,
        "bank_rate": 31.18,
        "diff": 0.21
    }
];


function getKey() {
    return Math.random() * Math.random()
}


function getData(data) {
    return data.map(item => {
        return {
            exchange: item.exchange,
            symbol: item.symbol,
            bid: parseFloat(item.bid),
            bid_amount: parseFloat(item.bid_amount),
            ask: parseFloat(item.ask),
            ask_amount: parseFloat(item.ask_amount),
            bank_rate: parseFloat(item.bank_rate),
            diff: item.diff === "" ? "": parseFloat(item.diff)
        }
    })
}


class MyTable extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            data: getData(initData)
        };
    }

    updateTable = (data) => {
        this.setState({
            data: getData(data)
        })
    };

    renderRow() {
        return this.state.data.map(item => {
            return (
                <tr key={getKey()} style={{fontSize: 16}}>
                    <td key={getKey()} className="mycells">{item.exchange} </td>
                    <td key={getKey()} className="mycells">{item.symbol}</td>
                    <td key={getKey()} className="mycells" style={{color: this.props.bidColor, fontSize: 18}}>{item.bid}</td>
                    <td key={getKey()} className="mycells">{item.bid_amount}</td>
                    <td key={getKey()} className="mycells" style={{color: this.props.askColor, fontSize: 18}}>{item.ask}</td>
                    <td key={getKey()} className="mycells">{item.ask_amount}</td>
                    <td key={getKey()} className="mycells">{item.bank_rate}</td>
                    <td key={getKey()} className="mycells" style={{fontWeight: "bold", fontSize: 18}}>{item.diff}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="mytable">
                <Table striped bordered hover variant="dark" size="sm">
                    <thead>
                    <tr key={getKey()}>
                        <th key={getKey()}>Exchange</th>
                        <th key={getKey()}>Symbol</th>
                        <th key={getKey()}>Buy order</th>
                        <th key={getKey()}>Volume</th>
                        <th key={getKey()}>Sell order</th>
                        <th key={getKey()}>Volume</th>
                        <th key={getKey()}>Bank rate</th>
                        <th key={getKey()}>Difference %</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRow()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default MyTable