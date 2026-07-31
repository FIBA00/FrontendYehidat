import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Home   from './pages/Home'

// Future routes slot in here:
//   import Admin  from './pages/Admin'
//   import Vendor from './pages/Vendor'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/admin/*" element={<Admin />} /> */}
          {/* <Route path="/vendor/*" element={<Vendor />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
