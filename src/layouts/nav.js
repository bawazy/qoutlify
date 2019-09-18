import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';

class nav extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{textAlign:"center"}}>
        <Menu.Item key="mail" style={{fontSize:'1.8rem'}}>
        <Link to={'/'}>
          <Icon type="home" style={{fontSize:'1.8rem'}}/>
          </Link>
          QOD
        </Menu.Item>

        <Menu.Item key="search" style={{fontSize:'1.8rem'}}>
        <Link to={'/search'}>
          <Icon type="search" style={{fontSize:'1.8rem'}}/>
        </Link>
          Search
        </Menu.Item>

        <Menu.Item key="favorite" style={{fontSize:'1.8rem'}}>
          <Link to={'favorite'}>
          <Icon type="heart" style={{fontSize:'1.8rem'}} />
          </Link>
          Favorite
        </Menu.Item>


        </Menu>
    );
  }
}
export default nav;