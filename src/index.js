import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// set up
const firstBok = {
  img:
    'https://images-eu.ssl-images-amazon.com/images/I/61ibgnNTzDL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg',
  imgAlt: 'book',
  title: 'How To Stop Worrying & Start Living',
  authorName: 'Dale Carnegie',
}

const secondBok = {
  img:
    'https://m.media-amazon.com/images/I/71VSswnjh9L._AC_UL480_FMwebp_QL65_.jpg',
  imgAlt: 'book',
  title: '21 Lessons for the 21st Century',
  authorName: 'Taschenbuch',
}

// Booklist component
const Booklist = () => {
  return (
    <section className='booklist'>
      <Book
        img={firstBok.img}
        alt={firstBok.imgAlt}
        title={firstBok.title}
        authorName={firstBok.authorName}
      >
        <p>Helloo i am children </p>
      </Book>
      <Book
        img={secondBok.img}
        alt={secondBok.imgAlt}
        title={secondBok.title}
        authorName={firstBok.authorName}
      />
    </section>
  )
}

//book component
const Book = (props) => {
  console.log(props)
  //object destructuring
  const { img, imgAlt, title, authorName, children } = props
  return (
    <article className='book'>
      <img src={img} alt={imgAlt} />
      <h1>{title}</h1>
      <h4>{authorName}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
