import React, { Component } from 'react'
import { Icon } from 'antd';
import {connect} from 'react-redux'
import {getQoutes} from '../actions'

const mapStateToProps= state =>{
    return {
        loading:state.loading,
        quotes:state.quotes
    }
}

const mapDispatchToProps=dispatch=>{
    return {
    onRequestQuotes:()=>dispatch(getQoutes())
    }
}

export class quote extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            count:0,
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
                    this.props.onRequestQuotes();
           
            }


    render() {
        let {count}=this.state;
        let {quotes,loading}=this.props;
        const rand = Math.floor(Math.random() * quotes.length);

        const dispQ = quotes.map(quote=>{
                        return <div key={quote.id}><p><span>"</span>{quote.body}<span>"</span></p> 
                                    <h2>--{quote.author}</h2> 
                               </div>
                    })
                  
        return !quotes.length ? <h2 style={{textAlign:'center'}}>Loading......</h2>
        :(
            <div style={{textAlign:"center",width:"30%",display:"block",marginLeft:"auto",marginRight:"auto" }}>
                
               {<div>
                    {dispQ[rand]}
                </div>
               }

                <button><Icon type="sync" onClick={this.handleClick}/></button>  
                <button><Icon type="heart" /></button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(quote);
