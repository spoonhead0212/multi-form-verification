import { cosmeticsProducts } from "../../../../AllSlices/cosmeticsSlice/cosmeticsData"
import SingleProduct from "../../../../components/cosmeticsC/singleProduct/singleProduct"


export default async function NewArrivalPage({
  params,
}: {
  params: Promise<{ productid: number }>
}) {
  const {productid} = await params
  
  return (
    <div >
      My Post: {productid}
      <SingleProduct productId={productid} />
    </div>
  )
}