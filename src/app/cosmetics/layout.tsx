'use client'
import CosmeticsMenu from '../../components/cosmeticsC/menu/cosmeticsMenu'
import { Usercontext } from '../../components/cosmeticsC/userContext/usercontext';

function cosmeticsLayout({
  children,
  productModal,   // 👈 parallel route slot
}: {
  children: React.ReactNode;
  productModal: React.ReactNode;
}) {

  return (
    <Usercontext>
        {productModal}
        {/* <CosmeticsMenu /> */}
        {children}
    </Usercontext>
  )
}

export default cosmeticsLayout


