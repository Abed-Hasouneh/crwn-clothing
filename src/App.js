import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils'
import { setCurrentUser } from './store/user/user.action'
import { Route, Routes } from 'react-router-dom'
import Spinner from './components/spinner/Spinner'

const Home = lazy(() => import('./routes/Home/Home'))
const Navigation = lazy(() => import('./routes/navigation/Navigation'))
const Shop = lazy(() => import('./routes/shop/Shop'))
const Authentication = lazy(() =>
  import('./routes/authentication/Authentication')
)
const Checkout = lazy(() => import('./routes/checkout/Checkout'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
