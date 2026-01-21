import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  let auth = localStorage.getItem("user")
return (
    auth !=null ? <Outlet/> : <Navigate to='/signin'/>
  )
}

export default PrivateRoutes 