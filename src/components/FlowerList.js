import React from "react"
import {connect} from "react-redux"
import FlowerItem from './FlowerItem'
import Sequelize from 'sequelize'
//const { syncAndSeed, models: { Flower }} = require('../../db')
//const url = 'http://localhost:4040/api/flowers'

class FlowerList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flowers: []
        }
    }
    /*
    componentDidMount(){  
        axios.get(url + '/getFlowerDetails').then(response => response.data).then(  
             (result)=>{  
                 this.setState({  
                     flowers:result  
                 });  
             },  
             (error)=>{  
                 this.setState({error});  
             }  
         )  
     } 
     */
    render(){
        <ul>
            {props.flowers.map(flower => (
                <FlowerItem key ={flower.id} {...flower} />
            ))}
        </ul>   
    }
}

const mapStateToProps = state => ({flowers: state.flowers})

export default connect(mapStateToProps)(FlowerList)