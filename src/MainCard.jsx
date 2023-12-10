import React from 'react'
import Card from './Card'
import posts from './posts.json'

export default function MainCard() {
  console.log(posts);
  return (
    <div className='MainCard'>
      <h2 className='PopularTopics'>Popular topics</h2>
      <ul className='mm'>
        {posts.map(p => <Card key={p.title} coverImage={p.coverImage} date={p.date} title={p.title} intro={p.intro} tags={p.tags} link={p.link} />)}
      </ul>
    </div>
  )
}
