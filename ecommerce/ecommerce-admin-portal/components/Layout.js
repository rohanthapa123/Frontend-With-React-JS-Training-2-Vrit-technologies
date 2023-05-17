import React from 'react'
import Nav from './Sidebar'
import { signIn, useSession } from 'next-auth/react'

const Layout = ({ children }) => {
   const { data: session } = useSession();

   const signInHandler = (e) => {
      e.preventDefault();
      signIn('google');
   }
   if (!session) {
      return (
         <div className='bg-purple-300 w-screen h-screen flex justify-center items-center'>
            <button className='bg-white h-8 rounded-md' onClick={(event) => signInHandler(event)}>Signin with Google</button>
         </div>
      )
   }
   return (
      <>
         <div className='min-h-screen'>
            <div className='flex'>
               <Nav />
               <div className='flex-grow p-4'>
                  {children}
               </div>
            </div>
         </div>
      </>
   )
}

export default Layout