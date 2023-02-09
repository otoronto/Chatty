import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/main.css';
import Chatroom from './components/Chatroom';
import Login from './components/Login';
import AdminRoutes from './routes/AdminRoutes';
import RequiredAuth from './routes/RequiredAuth';
import RequiredNoAuth from './routes/RequiredNoAuth';


function App() {

  const [user, setUser] = useState()

  return (
    <div className='app container'>
      <Routes>

        {/* REQUIRED NO AUTH */}
        <Route element={<RequiredNoAuth />}>
          <Route path='/login' element={<Login />} />
        </Route>
        {/* <Route element={<RequiredNoAuth />}>
          <Route path='/admin/*' element={<AdminRoutes />}  />
        </Route> */}

        {/* REQUIRED AUTH */}
        <Route element={<RequiredAuth />}>
          <Route path='/' element={<Chatroom />} />
        </Route>
        <Route element={<RequiredAuth />}>
          <Route path='/chat' element={<Chatroom />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
