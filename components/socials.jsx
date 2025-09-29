import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn,FaFacebook, FaTwitter } from "react-icons/fa";
const socials = [
    {icon:<FaGithub></FaGithub>,path:'https://github.com/mdtarekhussain'},
    {icon:<FaLinkedinIn></FaLinkedinIn>,path:'https://www.linkedin.com/in/md-tarek-hussain-a96b36343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '},
    {icon:<FaFacebook></FaFacebook>,path:'https://www.facebook.com/md.tarek.9857'},
    {icon:<FaTwitter />,path:'https://x.com/tarek_md1112?s=09'},
]
const Socials = ({containerStyles,iconStyles}) => {
    return (
        <div className={containerStyles}>
         {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
         })}
        </div>
    );
};

export default Socials;