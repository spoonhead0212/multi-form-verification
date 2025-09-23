import SingleProduct from "../../../../../components/cosmeticsC/singleProduct/singleProduct"

export default async function NewArrivalPage({
  params,
}: {
  params: Promise<{ productid: number }>
}) {
  const {productid} = await params

  return (
    <div >
      My Post: {productid}
    </div>
  )
  
  // return <div>(Successfully Intercepted)My Post: {newid}</div>
}