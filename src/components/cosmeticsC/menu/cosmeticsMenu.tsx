'use client'
import Link from 'next/link'
import Image from 'next/image'
import style from './cosmeticsMenu.module.css'
import { useUserContext } from '../userContext/usercontext'
import { useDispatch, UseDispatch } from 'react-redux'
import { logout } from '../../../AllSlices/cosmeticsSlice/authSlice'
import Button from '../actionButton/actionButton'

function CosmeticsMenu() {

  const dispatch = useDispatch()

  const user = useUserContext()

  function logoutUser(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(logout())
  }

  return (
    <div className={`${style.fullFlex} ${style.menuWrap}`}>
      <p className={style.logo}>TrendZone</p>
      <nav className={style.navigation}>
        <Link href="/">Home</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About Us</Link>
      </nav>
      <div className={style.pro}>
        <div className={style.cartNsearch}>
          <Image
          src='/images/cosmeticsMedia/icons/search-icon-svgrepo-com.svg'
          height={30}
          width={30}
          alt='Search Icon'
          />
          <Image
          src='/images/cosmeticsMedia/icons/shopping-cart-svgrepo-com.svg'
          height={30}
          width={30}
          alt='Cart icon'
          />
        </div>
        {
          user ?
          <div className={style.userStatus}>
            <Image
            className={style.userImg}
            src={user.image}
            height={40}
            width={40}
            alt='ijrijwmwm'
            />
            <button
            className={style.signOutBtn}
            onClick={logoutUser}
            >
              Sign Out
            </button>
          </div>
          :
          <Link 
            className={style.signInBtn}
            href='/login'>
            Sign In
          </Link>
        }
      </div>
    </div>
  )
}

export default CosmeticsMenu
