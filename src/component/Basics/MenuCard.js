import React from 'react'

const menuCard = ({menudata}) => {
    console.log(menudata);

  const myStyle= {color:"red"};

  return (
    <>
    <section className="main-card--cointainer">
    {
    menudata.map((curElem,index) =>
    {
        const {id,image,name,category,price,description} = curElem;
        return (
            <>
             <div className="card-container"  key={id}>
            <div className="card">
                <div className="card-body">
                    <span className='card-number card-circle subtle'>
                        {id}
                    </span>
                    <span className='card-author subtle' style={myStyle}>{category}</span>
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description subtle'>
                    {description}
                    </span>
                    <div className ="card-read">{price}</div>
                    </div>
                    <img src={image} alt="images" className="card-media" />
    
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
            </>
        );
    })}
    </section>
    </>
  )
}

export default menuCard
