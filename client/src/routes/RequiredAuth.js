import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const RequiredAuth = () => {

  const auth = useSelector((state) => state.auth)
  const location = useLocation()

  return (
    auth.value.isLoggedIn
      ? <Layout />
      : <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequiredAuth