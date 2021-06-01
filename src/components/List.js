import React, { Component } from 'react'
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid'


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
            alert("Empty not submited")
        }else{
            const itemList = this.state.itemList.concat(this.state.value)
            // const itemList = [...this.state.itemList, {'id': uuid(), 'value': this.state.value}]
            this.setState({ itemList, value: '' })
            
        }
    }

    onRemoveItem = e => {
        const itemList = this.state.itemList.filter((value, index) => index !== e)
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

    componentDidMount() {
      const data = JSON.parse(localStorage.getItem("itemList"));
      if (data) this.setState({ itemList: data });
    }
  
    componentDidUpdate() {
      localStorage.setItem("itemList", JSON.stringify(this.state.itemList));
    }

    render() {
        const list = this.state.itemList.map((value, index) => {
            return(
            <div key={uuidv4()}>
                <h3>{value}</h3>
                <button className="btn btn-warning mt-2 mb-4" onClick={() => this.onRemoveItem(index)}>Remove</button>
            </div>)
        })
        return (
            <div>
                {list}
                <input type="text" value={this.state.value} onChange={this.onChangeValue} />
                <br />
                <button className="btn btn-success m-2" onClick={this.onAddItem}>Add</button>
                <br />
                <button className="btn btn-danger m-3" onClick={() => this.onCleanArray()}>Delete All</button>
                <button className="btn btn-danger m-3" onClick={() => this.onResetArray()}>Reset All</button>
            </div>
        )
    }
}

export default List
