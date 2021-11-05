import './AboutUs.css'
import About from '../../assets/about.png'
// import Community from '../../assets/about-community5.png'
import Moldir from '../../assets/Moldir.png'
import Mission from '../../assets/Mission.png'

export default function AboutUs(props) {
  return (
    <div className='about-main-container'>
      <div>
        <h1 className='about-text'>ABOUT US</h1>
        <img src={About} />
      </div>
      <h2 className='about-header-text'>OUR MISSION</h2>
      <div className='about-box'>
        <img src={Mission} />
        <p className='about-paragraph-mission'>
          More than just event listings: Written by local parents who love to
          seek out the coolest, off-the-beaten-track things to do with kids,
          Mommy Poppins shares activities that aren't just pleasant time
          passers, but promise enriching experiences for your family. What we
          love: Free stuff; cool, artsy activities; urban nature, exploring
          nooks and crannies, and grown-up events that are good for kids.
          <br />
          Cool events: Our event calendar features awesome things to do every
          day. If you're planning an event, we invite you to submit it to our
          calendar.
          <br />
          Where we are: Founded in NYC, Little Explorers now covers Atlanta,
          Boston, Chicago, Connecticut, Long Island, Los Angeles, New Jersey,
          New York City, Orlando, Philadelphia, Houston, Washington DC, and
          Westchester and the Hudson Valley, as well as family travel
          destinations around the world. At large, it should grow as a
          communication medium and resource sharing channel for all people.
          <br />
          Project is non-profit and encourages volunteering among our
          counterparts.
        </p>
      </div>

      <div className='about-me-box'>
        <p className='about-me-paragraph'>
          <h3 className='about-header-text'>FOUNDER</h3>
          <br />
          <br />
          <br />
          <h3>Moldir Shabikova</h3>
          <p>
            As a self-driven entrepreneur with software engineering skills, I
            believe in technological solutions
            <br />
            and am eager to build products that can solve social issues to make
            a positive impact on the world.
          </p>
          <br />
          <div className='about-me-links'>
            <a target='_blank' href='https://www.facebook.com/MoldirShabikova/'>
              <img src='https://img.icons8.com/ios/50/000000/facebook-new.png' />
            </a>
            <a target='_blank' href='https://twitter.com/MoldirShabikova'>
              <img src='https://img.icons8.com/ios/50/000000/twitter--v1.png' />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/moldir-shabikova-559b8b222/'
            >
              <img src='https://img.icons8.com/ios/50/000000/linkedin.png' />
            </a>
            <a target='_blank' href='https://www.instagram.com/carpe_diem_m/'>
              <img src='https://img.icons8.com/ios/50/000000/instagram-new--v1.png' />
            </a>
            <a target='_blank' href='https://github.com/MoldirShabikova'>
              <img src='https://img.icons8.com/material-rounded/48/000000/github.png' />
            </a>
          </div>
        </p>
        <img className='about-me-image' src={Moldir} />
      </div>

      <div className='about-idea'>
        <h2 className='about-header-text'>THE ORIGINS OF THE IDEA</h2>
        <br />
        <p className='about-paragraph-idea'>
          <br />
          <br />
          While I was helping him, I developed the idea of the platform, which
          should digital guide to people to pursue their needss.
        </p>
        <img src='https://www.pngarea.com/pngm/19/5435319_software-development-png-transparent-web-development-png-hd.png' />
      </div>
    </div>
  )
}
