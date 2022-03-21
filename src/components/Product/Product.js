import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductForm from './ProductForm/ProductForm';
import ProductImage from './ProductImage/ProductImage';
import { useMemo } from 'react';

const Product = ({title, basePrice, sizes, colors, name}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);


  const getPrice = useMemo(() => {
    const clickedSize = sizes.find(element => element.name === currentSize)
    
    return  basePrice + clickedSize.additionalPrice
  }, [currentSize, basePrice, sizes]);

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Summary')
    console.log('===============')
    console.log('Name: ' + title)
    console.log('Price: ' + getPrice())
    console.log('Size: ' + currentSize)
    console.log('Color: ' + currentColor)
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
          handleSubmit={handleSubmit}
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Product;