'use client'
import { createContext, ReactNode, useContext } from 'react';
import { useSelector} from 'react-redux';
import { loggedUser } from '../../../AllSlices/cosmeticsSlice/authSlice';

type children = {
    children: ReactNode
}

type userShape = Omit<{
  id: number;
  email: string;
  password: string;
  username: string;
  image: string;
}, 'password'>

export const myUserContext = createContext<userShape | undefined>(undefined)

export function Usercontext({children} : children) {

  const myUser = useSelector(loggedUser)

  return (
    <myUserContext.Provider value={myUser}>
      {children}
    </myUserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(myUserContext)
  return context;
}
