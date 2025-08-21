import ProductsDetailHeaderComponent from './components/product-detail-header/products-detail-header.component';
import ProductDetailCreditsComponent from './components/product-detail-credits/product-detail-credits.component';
import ProductDetailApplyCreditComponent from './components/product-detail-apply-credit/product-detail-apply-credit.component';

const ProductDetailComponent =()=>{

    return (
       <>
           <ProductsDetailHeaderComponent/>
           <ProductDetailCreditsComponent/>
           <ProductDetailApplyCreditComponent/>
       </>
    );
};
export default ProductDetailComponent;