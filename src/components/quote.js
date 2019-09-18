import React, { Component } from 'react'
import { Icon } from 'antd';



export class quote extends Component {
    constructor(props){
        super(props);
        this.state={
            qoutes:[
             {
                quote:'the World is a very funny place it kicks you when you are down but staying down is not an option',
                author:'Hayatu B. Waziri'
            },
        ]
        }
    }
    render() {
        return (
            <div style={{textAlign:"center",width:"30%",display:"block",marginLeft:"auto",marginRight:"auto" }}>
                
                {this.state.qoutes.map(quote=>{
                    return <div>
                        <p>"
                            <h3>{quote.quote}</h3>
                            "</p> 
                            <h5>--{quote.author}</h5>
                              </div>})}

                
                <button><Icon type="sync" /></button>  
                <button><Icon type="heart" /></button>
            </div>
        )
    }
}

export default quote;
