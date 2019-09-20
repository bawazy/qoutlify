import React, { Component } from 'react'
import { Icon } from 'antd';



export class quote extends Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.state={
            qoutes:[
             {
                 id:1,
                quote:'the World is a very funny place it kicks you when you are down but staying down is not an option',
                author:'Hayatu B. Waziri'
            },
            {
                id:2,
                quote:'the World is a very funny place it kicks you when you are down but staying down is not an option',
                author:'Hayatu B. Waziri'
            },
            {
                id:3,
                quote:'the World is a very funny place it kicks you when you are down but staying down is not an option',
                author:'Hayatu B. Waziri'
            },
            {
                id:4,
                quote:'the World is a very funny place it kicks you when you are down but staying down is not an option',
                author:'Hayatu B. Waziri'
            },
        ]
        }   

    }

    handleClick(e){
        
       
       console.log(e);
    }


    render() {
        return (
            <div style={{textAlign:"center",width:"30%",display:"block",marginLeft:"auto",marginRight:"auto" }}>
                
                {
                <div>
                    <p>"{this.state.qoutes[0].quote}"</p>  
                    <h5>--{this.state.qoutes[0].author}</h5>
                 </div> 
                }

                
                <button><Icon type="sync" onClick={this.handleClick}/></button>  
                <button><Icon type="heart" /></button>
            </div>
        )
    }
}

export default quote;
