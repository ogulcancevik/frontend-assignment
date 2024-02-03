import styles from './BatchSection.module.css';
import { motion } from 'framer-motion';
import Mockup from './images/mockup.svg';
import Paper from './images/paper.svg';
import Content from '../Content';

const BatchSection = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles['mockup-wrapper']}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={Mockup} alt="mockup" />
        <PaperAnimation />
      </motion.div>
      <Content
        subtitle="Batch Scanning"
        title="Multiple Page Scan"
        description="Scan multiple pages or documents in multiple-scanning mode. Batch all
        scans as a single document."
      />
    </div>
  );
};

export default BatchSection;

const PaperAnimation = () => {
  const variants = {
    paper1: {
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2.2,
      },
    },
    paper2: {
      scale: 0.95,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.6,
      },
    },
    paper3: {
      scale: 0.9,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1,
      },
    },
  };
  return (
    <div className={styles['paper-wrapper']}>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={i}
            className={styles[`paper-${i + 1}`]}
            variants={variants}
            initial={{ scale: 1, y: '100%' }}
            animate={`paper${i + 1}`}
          >
            <img src={Paper} alt="paper" />
          </motion.div>
        ))}
    </div>
  );
};
