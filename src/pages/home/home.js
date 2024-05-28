import { Link, NavLink } from 'react-router-dom'
import './home.css'
import Free from '../free/free'

export default function Home()
{
    return(
        <div className='home'>
            <ul className='board'>
                <p>게시판</p>  
                <li><Link to={'/free'}>자유게시판</Link></li>
                <li><Link to={'/market'}>중고장터</Link></li>
                <li><Link to={'/timer'}>타이머</Link></li>
            </ul>
            <ul className='class'>
                <p>시간표</p>
            </ul>
            <ul className='menu'>    
                <p>학식</p>
            </ul>
        </div>
    )
}

