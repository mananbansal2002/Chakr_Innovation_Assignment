"use client";
import React from 'react';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { AiOutlineFileAdd } from "react-icons/ai";

const ProfilePage = () => {
  const sections = [
    { label: "Picture", content: (
      <div style={{ display: "flex", width: "25rem", justifyContent: "space-between", alignItems: "center" }}>
        <AiOutlineFileAdd style={{ fontSize: "2rem" }} />
        <Input style={{ width: "10rem" }} placeholder='Upload' type='file' />
        <Button style={{ width: "10rem" }} variant='outline'>Remove</Button>
      </div>
    )},
    { label: "Name", content: (
      <div style={{ display: "flex", flexDirection: "column", width: "30rem", marginTop: "1rem" }}>
        <label htmlFor='firstname'>First Name</label>
        <Input type='text' id="firstname" placeholder='Noah' />
        <label htmlFor='lastname'>Last Name</label>
        <Input type='text' id="lastname" placeholder='A' />
      </div>
    )},
    { label: "Email", content: (
      <div style={{ display: "flex", flexDirection: "column", width: "30rem", marginTop: "1rem" }}>
        <label>Email</label>
        <Input type='email' placeholder='Email' />
      </div>
    )},
    { label: "Change Password", content: (
      <div style={{ marginTop: "1.5rem" }}>
        <Button style={{ width: "10rem" }} variant='outline'>Change Password</Button>
      </div>
    )},
    { label: "Danger Zone", content: (
      <div style={{ display: "flex", flexDirection: "column", marginTop: "1.5rem" }}>
        <span>Delete account and all associated data</span>
        <div style={{ marginTop: "1rem" }}>
          <Button style={{ width: "10rem", backgroundColor: "red" }} variant="destructive">Danger Account</Button>
        </div>
      </div>
    )}
  ];

  return (
    <div style={{ height: "82vh", width: "50vw", marginTop: "1rem", zIndex: "9999" }}>
      <div style={{ marginTop: "0.6rem", marginLeft: "1rem" }}>
        <span>Profile</span>
        {sections.map((section, index) => (
          <div key={index} style={{ marginTop: "2rem" }}>
            <span>{section.label}</span>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
