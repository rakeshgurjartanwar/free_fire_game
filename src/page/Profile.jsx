import React from 'react'
import "./Profile.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Stack } from 'react-bootstrap'
import { CopyrightOutlined, EyeOutlined, LoadingOutlined, RightOutlined, ShareAltOutlined, TeamOutlined, UnlockOutlined, UserOutlined, UsergroupAddOutlined, WalletOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Header } from '../componate/Header';
import { Footer } from '../componate/Footer';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
export const Profile = () => {
  const { isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="profile_done">
        <div className="profile_continer">
          <img src="https://i.pinimg.com/736x/ff/d4/f5/ffd4f507ff50e3509e71d895f8f7d471.jpg" alt="" />
          <div className="user_del">
            <h2>Ranjeet</h2>
            <p>id-88242064</p>
          </div>
        </div>
        <div className="profile_list">
          <div className="list">

            <p onClick={() => navigate("/privacy")}><UserOutlined style={{ padding: 10, background: 'transparent' }} />my profile  <RightOutlined style={{ backgroundColor: 'transparent', paddingLeft: '160px' }} /></p>
            <p><UnlockOutlined style={{ padding: 10, background: 'transparent' }} />change password  <RightOutlined style={{ backgroundColor: 'transparent', paddingLeft: '105px' }} /></p>
            <p><WalletOutlined style={{ padding: 10, background: 'transparent' }} />wallet    <RightOutlined style={{ backgroundColor: 'transparent', paddingLeft: '185px' }} /></p>
            <p><TeamOutlined style={{ padding: 10, background: 'transparent' }} />top players   <RightOutlined style={{ backgroundColor: 'transparent', paddingLeft: '148px' }} /></p>
            <p><UserOutlined style={{ padding: 10, background: 'transparent' }} />about us  <RightOutlined style={{ backgroundColor: 'transparent', paddingLeft: '160px' }} /></p>
            <p><EyeOutlined style={{ padding: 10, background: 'transparent' }} />term & conditions  <RightOutlined style={{ backgroundColor: 'transparent', paddingLeft: '90px' }} /></p>
            <p><CopyrightOutlined style={{ padding: 10, background: 'transparent' }} />privacy policy  <RightOutlined style={{ backgroundColor: 'transparent', paddingLeft: '130px' }} /></p>
            <p><TeamOutlined style={{ padding: 10, background: 'transparent' }} />custumer support  <RightOutlined style={{ backgroundColor: 'transparent', paddingLeft: '95px' }} /></p>
            <p><ShareAltOutlined style={{ padding: 10, background: 'transparent' }} />share app  <WhatsAppOutlined style={{ backgroundColor: 'transparent', paddingLeft: '150px' }} /></p>
            {
              isAuthenticated ?
                <button style={{ paddingLeft: '6rem', backgroundColor: 'transparent', color: 'white', paddingRight: '7rem' }} onClick={logout}>
                  Log Out
                </button>
                : ""
            }

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
