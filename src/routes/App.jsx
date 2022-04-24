import React from 'react'
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import { Javascript } from '../containers/Resumejs'
import Resumejs from '../containers/Resumejs'
import Resumereact from '../containers/Resumereact.jsx'
import { NotFound } from '../containers/NotFound'

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/resumejs' element={<Resumejs />} />
                    <Route path='/resume/resumereact' element={<Resumereact />} />
                    <Route path='/checkout/payment' element={<Home />} />
                    <Route path='/checkout/success' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        
        </BrowserRouter>
    )

}
export default App;