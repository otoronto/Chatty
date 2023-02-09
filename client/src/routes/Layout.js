import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-100' style={{ height: '100vh' }}>
      <Outlet />
    </div>
  )
}

export default Layout