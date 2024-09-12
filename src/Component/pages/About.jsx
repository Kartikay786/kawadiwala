import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import Sec1About from '../About/Sec1About'
import TextAbout from '../About/TextAbout'
import MissionCards from '../About/MissionCards'

const About = () => {
    return (
        <>
            <Navbar userdisplay="none"/>
            <Sec1About />
            <main>
                <MissionCards/>
            </main>
            <Footer />
        </>
    )
}

export default About