import Content from '../Content';
import styles from './ScannerSection.module.css';
import Mockup from './images/mockup.svg';
import { motion } from 'framer-motion';
const ScannerSection = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles['mockup-wrapper']}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={Mockup} alt="mockup" />
      </motion.div>
      <Content
        subtitle="Document Scanner"
        title="Scan with Ease"
        description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
      />
    </div>
  );
};

export default ScannerSection;
