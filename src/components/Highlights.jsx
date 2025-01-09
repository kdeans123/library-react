import React from 'react'

const Highlights() {
  return (
    <section id="Highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">Why choose <span className="purple">Library</span></h2>
            </div>
            <div className="highlight__wrapper">
                <div className="highlight">
                    <div className="highlight__img">
                         <FontAwesomeIcon icon="bolt" />
                         <h3 className="highlight__subtitle">Easy and quick</h3>
                         <p className="highlight__para">Get access to the book you purchased instantly.</p>
                    </div>
                </div>
                <div className="highlight">
                    <div className="highlight__img">
                         <FontAwesomeIcon icon="book-open" />
                         <h3 className="highlight__subtitle">10,000+ Books</h3>
                         <p className="highlight__para">Library has books in all your favourute categories.</p>
                    </div>
                </div>
                <div className="highlight">
                    <div className="highlight__img">
                         <FontAwesomeIcon icon="tags" />
                         <h3 className="highlight__subtitle">Affordable</h3>
                         <p className="highlight__para">Get your hands onpopular books for as little as $10.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Highlights;
