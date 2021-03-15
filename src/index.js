import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// set up
const books = [
  {
    id: 1,
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/61ibgnNTzDL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
    imgAlt: 'book',
    title: 'How To Stop Worrying & Start Living',
    authorName: 'Dale Carnegie',
  },
  {
    id: 2,
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg',
    imgAlt: 'book',
    title: 'The Psychology of Money',
    authorName: 'Morgan Housel',
  },
  {
    id: 3,
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/91m%2Bcb%2BijPL._AC_UL200_SR200,200_.jpg',
    imgAlt: 'book',
    title: 'Karma: A Yogis Guide to Crafting Your Destiny',
    authorName: 'Sadhguru',
  },
  {
    id: 4,
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg',
    imgAlt: 'book',
    title: 'The Alchemist',
    authorName: 'Paulo Coelho',
  },
]

// Booklist component
const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
        // return <Book key={book.id} book={book} />
      })}
    </section>
  )
}

//book component
const Book = (props) => {
  console.log(props)
  //object destructuring
  const { img, imgAlt, title, authorName } = props
  return (
    <article className='book'>
      <img src={img} alt={imgAlt} />
      <h1>{title}</h1>
      <h4>{authorName}</h4>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
