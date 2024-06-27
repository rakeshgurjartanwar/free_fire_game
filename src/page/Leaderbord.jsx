import React from 'react'
import "./Leaderbord.css"
import { Footer } from '../componate/Footer'
export const Leaderbord = () => {
  return (
    <>
      <h1 style={{
        textAlign: 'center',
        width: 320, fontFamily: 'sans-serif',
        color: 'whitesmoke', fontWeight: 500,
        fontSize: 25, paddingTop: 10,
        borderbottom: '2px solid'
      }}>LeaderBord</h1>
      <div className="bord_box">
      <div className="topplayer">
        <div className="leader_profile_item mt-5">
          <img src="src/assets/img/Ram.jpeg" alt="" />
          <p>
            Ram ram
          </p>
        </div>
        <div className="leader_profile_item">
          <img src="src/assets/img/Ram.jpeg" alt="" />
          <p>
            jay ram
          </p>
        </div>
        <div className="leader_profile_item mt-5">
          <img src="src/assets/img/Ram.jpeg" alt="" />
          <p>
            shree ram
          </p>
        </div>
      </div>
      <h5 style={{ textAlign: 'center', color: 'green', width: '320px', padding: '5px' }}>Weekly List</h5>
      <div className="player_list">
        <div className="player_name">
          <p>ram</p>
          <p>shayam</p>
          <p>hanuman</p>
          <p>shiv</p>
          <p>gru</p>
          <p>ravan</p>
          <p>super</p>
          <p>ram</p>
          <p>ram</p>
          <p>ram</p>
          <p>ram</p>
          <p>ram</p>
          <p>ram</p>
          <p>ram</p>
          <p>ram</p>
          <p>ram</p>
        </div>
        <div className="player_score">
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
