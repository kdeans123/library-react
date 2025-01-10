import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from "./components/ui/Highlight";


const Highlights = () => {
  return (
    <section id="Highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">Why choose <span className="purple">Library</span></h2>
            </div>
            <div className="highlight__wrapper">
                <Highlight 
                    icon={ <FontAwesomeIcon icon="bolt" />} 
                    title="Easy and quick"
                    para="Get access to the book you purchased instantly."/>
                <Highlight 
                    icon={ <FontAwesomeIcon icon="book-open" />} 
                    title="10,000+ Books"
                    para="Library has books in all your favourute categories."/>   
                <Highlight 
                    icon={ <FontAwesomeIcon icon="tags" />} 
                    title="Affordable"
                    para="Get your hands onpopular books for as little as $10"/>
            </div>
        </div>
    </section>
  )
}

export default Highlights;
