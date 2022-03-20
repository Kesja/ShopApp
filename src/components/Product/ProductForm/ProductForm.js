import styles from './ProductForm.module.scss';
import OptionSize from './OptionSize/OptionSize';
import Button from '../../Button/Button';
import OptionColor from './OptionColor/OptionColor';



const ProductForm = ({handleSubmit, sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor}) => {

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
      <Button className={styles.button} >
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductForm;