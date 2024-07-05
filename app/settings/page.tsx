"use client";

import React, { useState } from 'react'
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import '../../app/tailwind.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { TiFlowMerge } from "react-icons/ti";
import { HiCodeBracket } from "react-icons/hi2";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineFileAdd } from "react-icons/ai";
import ProfilePage from '../../components/ProfilePage';
import Appearance from '../../components/Appearance';

const SettingsPage = () => {
    const [settingComponent, setSettingComponent] = useState(<ProfilePage />);

    const changeComponent = (componentValue) => {
       setSettingComponent(componentValue);
    }

    const menuItems = [
        { icon: <FaRegCircleUser />, text: "Profile", component: <ProfilePage /> },
        { icon: <MdAlternateEmail />, text: "Appearance", component: <Appearance /> },
        { icon: <MdOutlineSwitchAccount />, text: "Account" },
        { icon: <MdOutlineMail />, text: "Emails" },
        { icon: <RiCalendarEventLine />, text: "Calendars" },
        { icon: <IoSettingsOutline />, text: "General" },
        { icon: <SlPeople />, text: "Members" },
        { icon: <TiFlowMerge />, text: "Data Model" },
        { icon: <HiCodeBracket />, text: "Developers" },
        { icon: <MdOutlineIntegrationInstructions />, text: "Integrations" },
        { icon: <IoRocketOutline />, text: "Releases" },
        { icon: <HiOutlineLogout />, text: "Logout" }
    ];

    return (
        <div style={{ display: "flex", height: "85vh", width: "85vw", marginTop: "5rem" }}>
            <div style={{ marginLeft: "13rem", width: "20rem", height: "85vh", overflowY: "auto" }}>
                <div style={{ marginTop: "2rem", marginBottom: "2rem", fontSize: "1.5rem" }}>Settings</div>
                {menuItems.map((item, index) => (
                    <div key={index} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", cursor: "pointer", padding: "0.5rem 1rem", marginBottom: "0.5rem", backgroundColor: settingComponent === item.component ? "#f0f0f0" : "inherit" }} onClick={() => changeComponent(item.component)}>
                        {item.icon}
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
            <div style={{ border: "0.1rem solid", borderRadius: "0.5rem", width: "60vw", height: "85vh", marginLeft: "2rem", overflow: "auto" }}>
                {settingComponent}
            </div>
        </div>
    );
}

export default SettingsPage;
