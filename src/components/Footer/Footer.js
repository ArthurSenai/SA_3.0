import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaSearch } from "react-icons/fa";

const Footer = (props) => {

        return (
                <div className={styles.footer}>


                        <NavLink to="/" className={styles.footerHome} style={{ backgroundColor: props.component === "Home" ? '#252525' : '' }} >
                                <AiFillHome />
                        </NavLink>



                        <NavLink to="/Profile" className={styles.footerProfile} style={{ backgroundColor: props.component === "Profile" ? '#252525' : '' }} >
                                <FaUserAlt />
                        </NavLink>



                        <NavLink to="/Search" className={styles.footerSearch} style={{ backgroundColor: props.component === "Search" ? '#252525' : '' }} >
                                <FaSearch />
                        </NavLink>




                </div>
        )
}

export default Footer