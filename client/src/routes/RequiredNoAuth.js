import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const RequiredNoAuth = () => {

  const auth = useSelector((state) => state.auth)
  const location = useLocation()

  return (
    auth.value.isLoggedIn
      ? <Navigate to='/chat' state={{ from: location }} replace />
      : <Layout />
  )
}

export default RequiredNoAuth