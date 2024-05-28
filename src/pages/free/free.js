import { useState } from 'react';
import './free.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';


export default function Free()
{
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    }

    const handleAddComment = () => {
        if (newComment.trim() !== ''){
            const currentTime = new Date();
            const formattedTime = formatTime(currentTime);
            const formattedDate = formatDate(currentTime);
            setComments([...comments,{text:newComment, date:formattedDate,time:formattedTime, likes:0}]);
            setNewComment('');
        }
    }

    const formatTime = (time) => {
        const hours = String(time.getHours()).padStart(2,'0');
        const minutes = String(time.getMinutes()).padStart(2,'0');
        return `${hours}:${minutes}`
    }

    const formatDate = (date) => {
        const month = String(date.getMonth() +1).padStart(2,'0');
        const day = String(date.getDate()).padStart(2,'0');
        return `${month}월 ${day}일`;
    }

    
    const incrementLikes = (index)=> {
        const updatedComments = [...comments];
        updatedComments[index].likes += 1;
        setComments(updatedComments);
    }
    return(
        <div className='free-main'>
            <div className='free-title'>
                자유게시판
            </div>
            <div className='free-input'>
                <div className='input-container'>
                <input className='free-search'
                value={newComment}
                onChange={handleInputChange}
                placeholder='새 글을 작성해주세요!'/>
                <button onClick={handleAddComment} className='free-submit'>작성</button></div>
            </div>
            
                <div className={`free-comments ${comments.length > 0 ? 'visible' : ''}`}>
                {comments.map((comment, index)=> (<div key={index} className='free-comment'>
                        <div className='free-comment-time'>
                        <span>{comment.text}</span>
                        <span className='comment-time'>{comment.date} <br/> {comment.time}</span>
                        </div>
                        <div>
                        <button onClick={()=>{incrementLikes(index)}} className='like-btn'>
                            <FontAwesomeIcon icon={farHeart} style={{color:'red'}}/>
                        </button> <span className='like-count'>{comment.likes}</span>     
                        </div>
                </div>))}
           
            </div>
        </div>
    )
}