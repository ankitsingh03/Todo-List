import React, { Component } from 'react'


class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            itemList: [],
            reset:[]
        }
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    }

    onAddItem = () => {
        if (!this.state.value){
            alert("filled the task")
        }else{
        const itemList = this.state.itemList.concat(this.state.value)
        this.setState({ itemList, value: '' })
        }
    }

    onRemoveItem = i => {
        const itemList = this.state.itemList.filter((item, index) => i !== index)
        this.setState({ itemList })
    }

    onCleanArray() {
        const reset = this.state.itemList
        const itemList = []
        this.setState({ itemList, reset })
    }
    onResetArray() {
        if (this.state.itemList.length === 0){
            const itemList = this.state.reset
            this.setState({ itemList })
        }
    }

    render() {
        return (
            <div>
                {this.state.itemList.map((item, index) => {
                    console.log(item, index)
                    return(
                    <div>
                        <h3 key={index}>{item}</h3>
                        <button className="btn btn-light mt-2 mb-4" onClick={() => this.onRemoveItem(index)}>Remove</button>
                    </div>)
                })}
                <input type="text" value={this.state.value} onChange={this.onChangeValue} />
                <br />
                <button className="btn btn-warning m-2" onClick={this.onAddItem}>Add</button>
                <br />
                <button className="btn btn-warning m-3" onClick={() => this.onCleanArray()}>Delete All</button>
                <button className="btn btn-warning m-3" onClick={() => this.onResetArray()}>Reset All</button>
            </div>
        )
    }
}

export default List
