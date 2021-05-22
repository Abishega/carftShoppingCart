import React, {Fragment} from 'react';
import artImage from '../../assets/artImage.jpg'
import classes from './Header.module.css';
import HeaderCartButton from './headerCartButton';

const Header = (props) => {

return (
    <Fragment>
        <header className = {classes.header}>
         <h1>ArtCart</h1> 
        <HeaderCartButton  cartIconClicked = {props.cartIconClicked}/>
        </header>
        <div className = { classes['main-image']}>
            <img className = { classes['main-image img']} src = {artImage} alt = "Arts Img"/>
        </div>

    </Fragment>
)

}
export default Header;