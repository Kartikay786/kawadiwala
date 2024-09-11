import React from 'react'
import './MissionCards.css'
import mission from '../../assets/mission.webp'
import approach from '../../assets/approach.jpg'
import vision from '../../assets/vision.jpeg'
import company from '../../assets/companyprofile.jpg'

const MissionCards = () => {
  return (
    <>
        <Cards img={mission}
           p="Our mission is to make scrap disposal a simple and convenient process for everyone. We believe that by responsibly managing scrap materials, we can contribute to a cleaner and healthier environment. "
           h1="Our Mission"
        />
       
        
         <Cards img={approach}
           p="Through continuous innovation of technology, our goal is to make recycling achievable and accessible to all, from institutions to individuals."
           h1="Our Approach"
        />
        <Cards img={vision}
            p="To be the premier online platform for doorstep kabadiwala scrap pickup, leading the recycling industry with a seamless, eco-friendly solution that empowers ."
            h1="Our Vission"
        />
        <Cards img={company }
            p="To be the premier online platform for doorstep kabadiwala scrap pickup, leading the recycling industry with a seamless, eco-friendly solution ."
            h1="Company Profile"
        />
    </>
  )
}

function Cards(val){
    return(
        <div className="cardmission" >
            <img src={val.img} alt="" />
            <div className="text" >
                <h1>{val.h1} </h1>
                <p>{val.p} </p>
             </div>
        </div>
    )
}
export default MissionCards