import React, { Component } from 'react'
import { Icon } from 'antd';
import axios from 'axios';



export class quote extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            count:0,
            qoutes:[]
        }   

    }
   handleClick(e){
                let {count} = this.state;
                    this.setState({
                        count:count + 1
                    })
            console.log(count);
            }

            componentDidMount(){
                let apiKey ='ceb1c8707db65bfebcd68697c369183d';
                axios.get('https://favqs.com/api/quotes/',{headers:{Authorization:`Bearer ${apiKey}`}})
                .then(res=>{
                    console.log(res.data.quotes)
                    this.setState({
                        qoutes:res.data.quotes
                });
            })}


    render() {
        let {count, qoutes }=this.state;
        // const rand = quotes[Math.floor(Math.random() * quotes.length)];

        const dispQ = qoutes.map(quote=>{
                        return <div key={quote.id}><p>"{quote.body}"</p> 
                                    <h2>--{quote.author}</h2> 
                               </div>
                    })
                    console.log(this.state.qoutes);
        return (
            <div style={{textAlign:"center",width:"30%",display:"block",marginLeft:"auto",marginRight:"auto" }}>
                
                {dispQ}

                
                <button><Icon type="sync" onClick={this.handleClick}/></button>  
                <button><Icon type="heart" /></button>
            </div>
        )
    }
}

export default quote;
