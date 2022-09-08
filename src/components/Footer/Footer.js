import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { ImCheckmark } from "react-icons/im";

import { Salvar } from "../../pages/ProfileEdit/ProfileEdit"

const Footer = (props) => {
        if (props.component === "EditProfile") {
                return (
                        <div className={styles.footer}
                                style={{ display: props.component === "EditProfile" ? 'flex' : 'none' }}
                        >
                                <div className={styles.footerEditProfile} onClick={Salvar}>
                                                Salvar
                                                <ImCheckmark className={styles.check} />
                                </div>
                        </div>
                )
        }

        else {
                return (
                        <div className={styles.footer}
                                style={{ display: props.component === "EditProfile" ? 'none' : 'flex' }}
                        >
                                <NavLink to="/" className={styles.footerHome} style={{ backgroundColor: props.component === "Home" ? '#252525' : '' }} >
                                        <AiFillHome />
                                </NavLink>

                                <NavLink
                                        to="/Profile"
                                        className={styles.footerProfile}
                                        style={{
                                                backgroundColor: props.component === "Profile" ? '#252525' : '',
                                                display: props.component === "Profile" ? 'none' : 'flex'
                                        }}
                                >
                                        <FaUserAlt />
                                </NavLink>

                                <NavLink
                                        to="/EditProfile"
                                        className={styles.footerProfile}
                                        style={{
                                                display: props.component === "Profile" ? 'flex' : 'none',
                                                backgroundColor: props.component === "Profile" ? '#252525' : ''
                                        }}
                                >
                                        <RiPencilFill style={{ fontSize: 40 }} />
                                </NavLink>

                                <NavLink to="/Search" className={styles.footerSearch} style={{ backgroundColor: props.component === "Search" ? '#252525' : '' }} >
                                        <FaSearch />
                                </NavLink>
                        </div>
                )
        }
}

export default Footer