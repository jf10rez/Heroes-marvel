import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('')

    const onLogout = () => {
        localStorage.clear('user')
        navigate('/login', {
            replace: true
        });
    }

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem('user') ?? {})
    //     if( Object.keys(user).length > 0 ){
    //         return setUsername( `${ user?.firstName } ${user?.lastName}` )
    //     }
    // }, [username])
    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Héroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        { username }
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Cerrar sesión
                    </button>

                </ul>
            </div>
        </nav>
    )
}