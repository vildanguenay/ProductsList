import React from 'react';
import LazyLoad from 'react-lazyload';
// Hydra
import { Input, Icon } from '@xxxlgroup/hydra-ui-components';
import { search } from '@xxxlgroup/hydra-icons';
// Style
import styles from 'components/ProductsList/ProductsList.scss';

class ProductsList extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    items: [],
    searchResult: '',
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

  updateSearch = event => {
    this.setState({ searchResult: event.target.value });
  };

  render() {
    const { error, isLoaded, items, searchResult } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    const filteredData = items.filter(item =>
      item.name.toLowerCase().includes(searchResult.toLowerCase()),
    );

    return (
      <>
        <Input
          type="text"
          value={this.state.searchResult}
          onChange={this.updateSearch}
          label="Search"
          suffix={<Icon glyph={search} />}
        />

        <div className={styles.containerList}>
          {filteredData.map(item => (
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
      </>
    );
  }
}

export default ProductsList;
