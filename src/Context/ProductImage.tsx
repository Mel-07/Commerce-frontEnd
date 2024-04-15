import ProductOne from "../assets/images/image-product-1.jpg";
import ProductTwo from "../assets/images/image-product-2.jpg";
import ProductThree from "../assets/images/image-product-3.jpg";
import ProductFour from "../assets/images/image-product-4.jpg"
type ProductImage<T> =T[]
export const productImage:ProductImage<string> =[
ProductOne,ProductTwo,ProductThree,ProductFour
]
