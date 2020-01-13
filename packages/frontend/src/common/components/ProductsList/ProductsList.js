import React from 'react';
import LazyLoad from 'react-lazyload';
// Style
import styles from 'components/ProductsList/ProductsList.scss';

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
      <div className={styles.containerList}>
        {items.map(item => (
          <div className={styles.box} key={item.id}>
            <div>{`${item.name}`}</div>
            <LazyLoad height={320} offset={-300}>
              <img src={item.image} alt="" />
            </LazyLoad>

            <div className={styles.priceCon}>
              {`old price: ${item.price} EUR on sale for: ${item.priceSale} EUR`}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductsList;
