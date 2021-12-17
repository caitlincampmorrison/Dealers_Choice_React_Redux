import React, {Component} from "react"
import {addFlower} from '../store'
import {connect} from "react-redux"

class AddFlower extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            color: "",
            cost: ""
        }
        this.handleKey = this.handleKey.bind(this)
    }
    handleKey(event){
        if(event.key === "Enter"){
            this.props.add(this.state.input)   
            this.setState({input: ""})
        }
    }
    render(){
        return (
            <div className="add-flower">
                <input
                    type="text"
                    value={this.state.name}
                    onChange={evt => this.setState({ name: evt.target.value })}
                    onKeyDown={this.handleKey}
                />
                <input
                    type="text"
                    value={this.state.color}
                    onChange={evt => this.setState({ color: evt.target.value })}
                    onKeyDown={this.handleKey}
                />
                <input
                    type="text"
                    value={this.state.cost}
                    onChange={evt => this.setState({ cost: evt.target.value })}
                    onKeyDown={this.handleKey}
                />
                <button
                    onClick={() => {
                        this.props.add(this.state.name);
                        this.setState({ name: "" });
                        this.props.add(this.state.color);
                        this.setState({ color: "" });
                        this.props.add(this.state.cost);
                        this.setState({ cost: "" });
                    }}>
                    Add Grocery
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        add: function(text) {
            dispatch(addFlower(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddFlower)