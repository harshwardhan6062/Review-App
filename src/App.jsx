import { useEffect, useState } from 'react'
import './App.css'
import reviews from './reviews'
import { FaChevronLeft, FaQuoteRight, FaChevronRight } from 'react-icons/fa'

function App() {

  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(reviews[0]);

  const nextIndex = (index) => {
    return (index+1) % (reviews.length);
  }

  const prevIndex = (index) => {
    return (index-1+reviews.length) % (reviews.length);
  }

  const randomIndex = (index) => {
    let idx = Math.floor(Math.random() * (reviews.length));
    if(idx == index) ++idx;
    return idx;
  }

  const prevReview = () => {
    setIndex(() => {
      return prevIndex(index);
    });
  }

  const nextReview = () => {
    setIndex(() => {
      return nextIndex(index);
    });
  }

  const getRandom = () => {
    setIndex(() => {
      return randomIndex(index);
    })
  }

  useEffect(() => {
    setReview(() => {
      return reviews[index]
    });
    console.log(index);
  }, [index]);

  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img src={review.image} alt={review.name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{review.name}</h4>
        <p className='job'>{review.job}</p>
        <p className='info'>{review.text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={getRandom}>
          surprise me
        </button>
      </article>
    </main>
  )
}

export default App;
