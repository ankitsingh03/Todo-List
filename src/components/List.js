import React, { Component } from 'react'

var itemList = ['A-Apple', 'B-Ball', 'C-Cat']

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            itemList
        }
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    }

    onAddItem = () => {
        const itemList = this.state.itemList.concat(this.state.value)
        this.setState({ itemList, value: '' })
    }

    onRemoveItem = i => {
        const itemList = this.state.itemList.filter((item, index) => i !== index)
        this.setState({ itemList })
    }

    onCleanArray() {
        const itemList = []
        this.setState({ itemList })
    }
    onResetArray() {
        this.setState({ itemList })
    }

    render() {
        return (
            <div>
                {this.state.itemList.map((item, index) => (
                    <div>
                        <h3 key={index}>{item}</h3>
                        <button className="btn btn-light mt-2 mb-4" onClick={() => this.onRemoveItem(index)}>Remove</button>
                    </div>

                ))}
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
