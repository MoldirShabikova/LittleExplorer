import React from 'react'
import { Link } from 'react-router-dom'
import Mickey from '../../assets/Mickey.png'
import Mickey2 from '../../assets/Mickey2.png'
import Mickey3 from '../../assets/Mickey3.png'
import Mickey4 from '../../assets/Mickey4.png'
import Vampir from '../../assets/Vampir.png'
import Vamp1 from '../../assets/Vamp1.png'
import Vamp2 from '../../assets/Vamp2.png'
import Vamp3 from '../../assets/Vamp3.png'
import PJ from '../../assets/PjMasks.png'
import pj2 from '../../assets/pj.png'
import pj3 from '../../assets/pj3.png'
import pj4 from '../../assets/pj4.png'
import Nancy from '../../assets/Nancy.png'
import Nancy2 from '../../assets/Nancy2.png'
import Nancy3 from '../../assets/Nancy3.png'
import Nancy4 from '../../assets/Nancy4.png'
import './Activities.css'

export default function Activities() {
  return (
    <div className='activities-box'>
      <div className='activities-container'>
        <h2 className='header'>Activities</h2>
        <p className='header'>DOWNLOAD, PRINT, HAVE FUN</p>

        <div>
          <h3 className='header'>GEAR UP AND GO!</h3>
          <h3 className='right'>IT'S TIME TO BE A HERO!</h3>
          <p className='right'>Click on the activities below to download</p>
          <img src={Mickey} />
          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/05/29151416/MRR_coloring_sheet_daisy.pdf'
            className='events-read-more'
          >
            <img src={Mickey2} />
          </a>
          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/05/29151420/MRR_coloring_sheet_donald.pdf'
            className='events-read-more'
          >
            <img src={Mickey3} />
          </a>
          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/05/29151424/MRR_coloring_sheet_goofy.pdf'
            className='events-read-more'
          >
            <img src={Mickey4} />
          </a>

          <h3>A FANG-TASTIC FRIEND!</h3>
          <p>Click on the activities below to download</p>
          <img src={Vampir} />
          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/05/06174708/VAM_Coloring_Sheet_1_master.pdf'
            className='events-read-more'
          >
            <img src={Vamp1} />
          </a>

          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/05/06174713/VAM_Coloring_Sheet_2.pdf'
            className='events-read-more'
          >
            <img src={Vamp2} />
          </a>

          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/05/06174716/Vampirina_Headband_FNL_master.pdf'
            className='events-read-more'
          >
            <img src={Vamp3} />
          </a>
          <h3>IT'S TIME TO BE A HERO!</h3>
          <p>Click on the activities below to download</p>
          <img src={PJ} />

          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/05/06152344/CORE_ActivitySheet-Bundle.pdf'
            className='events-read-more'
          >
            <img src={pj2} />
          </a>
          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/04/23185538/PJM_NationalSuperheroDay_Meet-the-Heroes_Colouring-In.pdf'
            className='events-read-more'
          >
            <img src={pj3} />
          </a>
          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/04/23190151/PJM_NationalSuperheroDay_Name-Generator-test.pdf'
            className='events-read-more'
          >
            <img src={pj4} />
          </a>
          <br />

          <h3>OH LA LA!</h3>
          <p>Click on the activities below to download</p>
          <img src={Nancy} />
          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/04/25151553/FAN_Bonjour_Coloring_Sheet_BN.pdf'
            className='events-read-more'
          >
            <img src={Nancy2} />
          </a>

          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/04/25153629/FAN_FANCY_COUNTING_Sheet_BN.pdf'
            className='events-read-more'
          >
            <img src={Nancy3} />
          </a>

          <a
            target='_blank'
            href='https://assets.digicorus.corusdigitaldev.com/wp-content/uploads/sites/12/2019/04/25155343/FAN_Tiara.pdf'
            className='events-read-more'
          >
            <img src={Nancy4} />
          </a>
        </div>
      </div>
    </div>
  )
}
