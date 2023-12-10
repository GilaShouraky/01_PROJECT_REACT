import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='imgCard' src={props.coverImage} alt="" />
            <div className='p'>
                <div className='date'>{props.date}</div>
                <div className='h3'>
                    <h3><a className='h3' href={props.link}>{props.title}</a></h3>
                </div>
                <div className='piska'>
                    <p>{props.intro}</p>
                </div>
            </div>
        </div>
    )
}
