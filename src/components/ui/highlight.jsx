import React from 'react'

    const highlight = ({ icon, title, para }) => {
  return (
                <div className="highlight">
                    <div className="highlight__img">
                         {icon}
                         <h3 className="highlight__subtitle">{title}</h3>
                         <p className="highlight__para">{para}</p>
                    </div>
                </div>
  );
};


export default Highlight;
