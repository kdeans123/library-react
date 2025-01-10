import React from 'react';
import { books } from '../data'

const Discounted = () => {
  return (
    <div>
        <section id="recent">
            <div className="container">
                <div className="row">
                    <div className="section__title">
                        Discounted <span className="purple">Books</span>
                    </div>
                    <div className="books">
                        {books.map(book => <Book book={book} key={book.id} /> )}

                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Discounted;


// we want to show books that are on the sale, so their sale price is not equal null 
