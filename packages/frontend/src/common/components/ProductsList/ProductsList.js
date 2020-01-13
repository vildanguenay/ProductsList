import React from 'react';

class ProductsList extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    items: [],
  };

  componentDidMount() {
    // eslint-disable-next-line compat/compat
    fetch('https://api.myjson.com/bins/en2ik')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductsList;
