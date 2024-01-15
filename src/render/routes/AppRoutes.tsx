import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'

export function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
