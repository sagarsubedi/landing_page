import styles from '../style'
import Button from './Button'

const Cta = () => (
  <section id="cta" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex flex-1 flex-col">
      <h2 className={styles.heading2}>Lets try our service now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to acced payment cards and grow your business anywhere in the world.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button text="Try it NOW" />
    </div>
  </section>
)

export default Cta