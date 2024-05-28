import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav()
{
    return(
    <nav className='nav'>
        <h1><Link to={'/'} className='nav-link'>
        it 대학교
        </Link></h1>
    </nav>
    )
}