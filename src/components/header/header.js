import { NavLink, Outlet } from "react-router-dom";
import {IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoChevronForwardOutline, IoHomeOutline, IoInformationCircleOutline, IoAppsOutline, IoBuildOutline, IoCallOutline} from 'react-icons/io5'
import headerStyle from './header.module.css'
import { useState } from "react";

export default function Header () {

    const [hamburger, setHamburger] = useState(false)

    const hamburgerClick = () => {
        if(hamburger){
            setHamburger(false)
        } else {
            setHamburger(true)
        }
    }

    return(
        <>
        <section style={{backgroundColor:'black', position:'fixed', width:'100%', zIndex:'1'}}>
            <div className={headerStyle.box}>
                <NavLink to='/' style={{textDecoration:'none'}}>
                    <div>
                        <span className={headerStyle.h1}>N</span>
                        <span className={headerStyle.h1}>U</span>
                        <span className={headerStyle.h1}>R</span>
                        <span className={headerStyle.h1}>A</span>
                        <span className={headerStyle.h1}>N</span>
                    </div>
                </NavLink>
                <div className={headerStyle.navBox}>
                    <NavLink to='/' className={headerStyle.link}>Home</NavLink>
                    <NavLink to='/about' className={headerStyle.link}>About</NavLink>
                    <NavLink to='/tech-stack' className={headerStyle.link}>Tech Stack</NavLink>
                    <NavLink to='/projects' className={headerStyle.link}>Projects</NavLink>
                    <NavLink to='/contact' className={headerStyle.link}>Contact</NavLink>
                    <NavLink to='https://github.com/nuranibra' className={headerStyle.link}><IoLogoGithub size='30'/></NavLink>
                    <NavLink to='https://www.instagram.com/nuranibrahimli.dev/' className={headerStyle.link}><IoLogoInstagram size='30'/></NavLink>
                    <NavLink to='https://www.linkedin.com/in/nuran-ibrahimov-935766279/' className={headerStyle.link}><IoLogoLinkedin size='30'/></NavLink>
                </div>
                <div className={headerStyle.minimalWidthBox}>
                    <div className={headerStyle.hamburgerDisplay}>
                        <div className={headerStyle.span} onClick={hamburgerClick} style={hamburger ? {transform:"rotate(45deg)", marginBottom:'-10.5%'} : {display:"block"}}></div>
                        <div className={headerStyle.span} style={hamburger ? {display:'none'} : {display:'block'}} onClick={hamburgerClick}></div>
                        <div className={headerStyle.span} onClick={hamburgerClick} style={hamburger ? {transform:"rotate(-45deg)" , marginTop:'-10.5%'} : {display:"block"}}></div>
                    </div>
                    {hamburger ? <div className={headerStyle.hamburgerBox} style={{position:'fixed', backgroundColor:'black', width:'40%', display:'flex', flexDirection:'column', right:'0'}}>
                    <NavLink to='/' className={headerStyle.link} onClick={() => {
                        setHamburger(false)
                    }}>
                        <div style={{display:'flex'}}>
                            <IoHomeOutline />
                            Home
                        </div>
                        <IoChevronForwardOutline />
                    </NavLink>
                    <NavLink to='/about' className={headerStyle.link} onClick={() => {
                        setHamburger(false)
                    }}>
                        <div style={{display:'flex'}}>
                            <IoInformationCircleOutline />
                            About
                        </div>
                        <IoChevronForwardOutline />
                    </NavLink>
                    <NavLink to='/tech-stack' className={headerStyle.link} onClick={() => {
                        setHamburger(false)
                    }}>
                        <div style={{display:'flex'}}>
                            <IoBuildOutline />
                            Skils
                        </div>
                        <IoChevronForwardOutline />
                    </NavLink>
                    <NavLink to='/projects' className={headerStyle.link} onClick={() => {
                        setHamburger(false)
                    }}>
                        <div style={{display:'flex'}}>
                            <IoAppsOutline />
                            Projects
                        </div>
                        <IoChevronForwardOutline />
                    </NavLink>
                    <NavLink to='/contact' className={headerStyle.link} onClick={() => {
                        setHamburger(false)
                    }}>
                        <div style={{display:'flex'}}>
                            <IoCallOutline />
                            Contact
                        </div>
                        <IoChevronForwardOutline />
                    </NavLink>
                    <div style={{display:'flex', width:'100%', justifyContent:'space-evenly', marginTop:'10%'}}>
                        <NavLink to='https://github.com/nuranibra' className={headerStyle.link}><IoLogoGithub size='30'/></NavLink>
                        <NavLink to='https://www.instagram.com/nuranibrahimli.dev/' className={headerStyle.link}><IoLogoInstagram size='30'/></NavLink>
                        <NavLink to='https://www.linkedin.com/in/nuran-ibrahimov-935766279/' className={headerStyle.link}><IoLogoLinkedin size='30'/></NavLink>
                    </div>
                    </div> : ""}
                </div>
            </div>
        </section>
        <Outlet></Outlet>
        </>
    );
}