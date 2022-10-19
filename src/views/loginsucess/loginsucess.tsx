import React from 'react'
import Logo from '../../components/logo/logo'
import Signupsucess from '../../components/signupsuccess/signupsucess'
import Toast from '../../components/toast/toast'
import './loginsucess.css'

const Loginsucess = () => {
    return (
        
  <>
                <Toast />
      <div className="loginContainer">
          <Logo />
          <div className="signIn">
              <Signupsucess />
          </div>
            </div>
        </>
  )
}

export default Loginsucess
