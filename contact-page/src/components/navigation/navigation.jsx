import styles from './Navigation.module.css';

const Navigation = () =>{
  return(                                                
    <nav className={`${styles.navigation} container`}>   {/* .navigation here is the css part of .navigation we've written in module.css file */}
      <div className="logo">
        <img src="/images/logo.png" alt="inka do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;






















/* rafce- shortcut
import React from 'react'

const navigation = () => {
  return (
    <div>navigation</div>
  )
}

export default navigation
*/