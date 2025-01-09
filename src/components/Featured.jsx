import React from 'react'

const Featured = () => {
  return (
    <div>
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Featured <span className='purple'>Books</span>
                    </h2>
                    <div className="books">
                        <div className="book">
                            <a href="" className="">
                                <figure className="book__img--wrapper">
                                    <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="" className="book__img" />
                                </figure>
                            </a>
                            <div className="book__title">
                                <a href="/" className="book__title--link">Atomic Habits</a>
                            </div>
                            <div className="book__ratings">
                                 <FontAwesomeIcon icon="star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </div>
  )
}

export default Featured;
