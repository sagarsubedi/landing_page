import React from 'react'
import styles from './style';
import {Navbar, Billing, Business, Button, CardDeal, Clients, CTA, Footer, Hero, Stats, Testimonials} from './components'

const App = () =>  (
  <div>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* rest section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business /> 
          <Billing /> 
          <CardDeal /> 
          <Testimonials  />
          <Clients /> 
          <CTA /> 
          <Footer />
        </div>
      </div>



    </div>
  </div>
  )

export default App