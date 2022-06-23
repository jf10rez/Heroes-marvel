import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { HeroPage, MarvelPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                                

                <Route path="/" element={<Navigate to="/marvel" />} />

            </Routes>
        </div>


    </>
  )
}
