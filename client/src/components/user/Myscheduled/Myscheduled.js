import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {
  state = { items: [] };
  componentDidMount() {
    axios
      .get('http://localhost:5000/appointement')
      .then((response) => {
        console.log(response.data);
        this.setState({
          items: response.data,
        });
        // console.log(this.state.classesList);
      })

      .catch((err) => console.log('Error', err));
  }

  render() {
    const list = this.state.items.map((item) => {
      return (
        <React.Fragment>
          <ul className="list-group" key={item._id}>
            <li className="list-group-item list-group-item-primary">
              {item.date}
            </li>
            <li className="list-group-item list-group-item-primary">
              {item.time}
            </li>
            <li className="list-group-item list-group-item-primary">
              {item.agency}
            </li>
          </ul>
        </React.Fragment>
      );
    });
    return <div>{list}</div>;
  }
}
export default Item;
