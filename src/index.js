import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

function Book() {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://images-eu.ssl-images-amazon.com/images/I/61ibgnNTzDL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg'
      alt='book'
    />
  )
}
const Title = () => <h1>How To Stop Worrying & Start Living</h1>

const Author = () => <h4>Dale Carnegie</h4>
ReactDom.render(<Booklist />, document.getElementById('root'))
