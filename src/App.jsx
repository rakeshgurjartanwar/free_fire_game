import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './page/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Profile } from './page/Profile';
import { Result } from './page/Result';
import { Leaderbord } from './page/Leaderbord';
import { All_match } from './assets/match/All_match';
import { Match_rules } from './assets/match/Match_rules';
import { My_profile } from './profile pages/My_profile';
import { Change_pass } from './profile pages/Change_pass';
import { Wallet } from './profile pages/Wallet';
import { Top_players } from './profile pages/Top_players';
import { Termandcondi } from './profile pages/Termandcondi';
import { Pravicy } from './profile pages/Pravicy';
import { Share_now } from './profile pages/Share_now';
import { About } from './profile pages/About';
import { Custumer } from './profile pages/Custumer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Leaderbord' element={<Leaderbord />} />
          <Route path='/Result' element={<Result />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/All_match' element={<All_match />} />
          <Route path='/Match_rules' element={<Match_rules />} />
          <Route path='/Match_rules' element={<My_profile />} />
          <Route path='/Match_rules' element={<Change_pass />} />
          <Route path='/Match_rules' element={<Wallet />} />
          <Route path='/Match_rules' element={<Top_players />} />
          <Route path='/Match_rules' element={<Termandcondi />} />
          <Route path='/privacy' element={<Pravicy />} />
          <Route path='/Match_rules' element={<Share_now />} />
          <Route path='/Match_rules' element={<About />} />
          <Route path='/Match_rules' element={<Custumer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
