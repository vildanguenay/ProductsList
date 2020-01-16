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

  ascendingName = () => {
    const products = this.state.items;
    const sortedList = products.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ items: sortedList });
  };

  descendingName = () => {
    const products = this.state.items;
    const sortedList = products.sort((a, b) => b.name.localeCompare(a.name));
    this.setState({ items: sortedList });
  };

  descendingPrice = () => {
    const products = this.state.items;
    const sortedList = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    this.setState({ items: sortedList });
  };

  ascendingPrice = () => {
    const products = this.state.items;
    const sortedList = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    this.setState({ items: sortedList });
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
          onChange={this.updateSearch}
          label="Search"
          suffix={<Icon glyph={search} />}
        />
        <div className={styles.btnBox}>
          <div className={styles.btnSortPrice}>
            <button type="button" className={styles.one} onClick={this.ascendingPrice}>
              Ascending Price
            </button>
            <button type="button" className={styles.two} onClick={this.descendingPrice}>
              Descending Price
            </button>
          </div>
          <div className={styles.btnSortName}>
            <button type="button" className={styles.three} onClick={this.ascendingName}>
              A - Z
            </button>
            <button type="button" className={styles.four} onClick={this.descendingName}>
              Z - A
            </button>
          </div>
        </div>

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
