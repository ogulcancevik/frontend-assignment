import styles from './SignSection.module.css';
import Mockup from './images/mockup.svg';
import Sign from './images/sign.svg';
import Completed from './images/comp.svg';
import { motion } from 'framer-motion';
import Content from '../Content';
const SignSection = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles['mockup-wrapper']}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className={styles['sign-wrapper']}
          >
            <img src={Sign} alt="sign" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className={styles['completed-wrapper']}
          >
            <img src={Completed} alt="completed" />
          </motion.div>
          <img src={Mockup} alt="mockup" />
        </div>
      </motion.div>
      <Content
        subtitle="Sign & Stamp"
        title="One-Tap Focus"
        description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
      />
    </div>
  );
};

export default SignSection;
