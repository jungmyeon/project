import { useEffect, useState } from 'react';
import './timer.css'

export default function Timer()
{
            const [seconds, setSeconds] = useState(0);
            const [isAcitve, setIsActive] = useState(false);
            const [savedTimer, setSavedTimer] = useState([]);
            const [title, setTitle] = useState("");

            useEffect(()=>{
                let interval = null;
                if(isAcitve){
                    interval = setInterval(()=>{
                        setSeconds((seconds)=>seconds + 1);
                    },1000);
                }else if (!isAcitve && seconds !== 0){
                    clearInterval(interval);
                }
                return()=>clearInterval(interval);
            },[isAcitve, seconds]);

            const reset = ()=>{
                setSeconds(0);
                setIsActive(false);
            };

            const saveTimer = ()=>{
                if(title.trim() !== ""){
                setSavedTimer([...savedTimer, {title, time:seconds}]);
                setTitle("");
            }else{
                alert("제목을 입력하세요");
            }};

            const formatTimer = (totalSeconds)=> {
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600)/60);
                const secs = totalSeconds % 60;
                return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
            };

            const totalSavedTime = savedTimer.reduce((acc,curr)=> acc + curr.time,0);
        
        return(
        <div className='timer-main'>
            <div className='all-timer'>
                <h1>{formatTimer(totalSavedTime)}</h1>
            </div>
            <div className='timer'>
                {formatTimer(seconds)}
            </div>
            <div className='row'>
                <boutton className={`button button-primary button-primary-${isAcitve ? 'active' : 'inactive'}`}
                onClick={()=>setIsActive(!isAcitve)}>
                    {isAcitve ? 'pause' : 'Start'}
                </boutton>
                <button className='button' onClick={reset}>
                    Reset
                </button>
                <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}  placeholder="제목"/>
                <button className='button' onClick={saveTimer}>
                    저장
                </button>
            </div>
            <div className='save-timer'>
                <h2>기록</h2>
                <ul>
                    {savedTimer.map((time,index)=>(
                        <li key={index}>
                            <strong>{time.title}:</strong>{formatTimer(time.time)}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
