import React, { Component } from 'react'

var itemList = ['A-Apple', 'B-Ball', 'C-Cat']

class Pradeep extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value : '',
            itemList
        }
    }

    onChangeValue = event => {
        this.setState({value: event.target.value})
    };

    onAddItem = () => {
    //    let list = this.state.itemList
       this.state.itemList.push(this.state.value)
       this.setState({
           value: '', itemList: this.state.itemList
       })
    }
    onCleanArray(){
        this.setState({
            itemList: []
        })
    }
    onResetArray(){
        this.setState({
            itemList
        })
    }

    render() {
        return (
            <div>
                {this.state.itemList.map((item,index) => (
                    <h2 key={index}>{item}</h2>
                ))}
                <input type="text" value={this.state.value} onChange={this.onChangeValue}/>
                <button onClick={this.onAddItem} disabled={!this.state.value}>Add</button>
                <button onClick={()=>this.onCleanArray()}>Delete All</button>
                <button onClick={()=>this.onResetArray()}>Reset All</button>
            </div>
        )
    }
}

export default Pradeep;