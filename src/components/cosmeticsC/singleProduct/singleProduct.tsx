import React from 'react'
import { cosmeticsProducts } from '../../../AllSlices/cosmeticsSlice/cosmeticsData'

interface V {
    productId: number;
}

interface All {
    category: string;
    id: number;
    image: string;
    new?: string;
    productName: string;
}

function SingleProduct({productId}: V) {

    const AllProducts: All[] = cosmeticsProducts;

    const singleProduct = AllProducts.find(x => x.id === Number(productId))
    

    return (
        <div></div>
    )
}

export default SingleProduct
