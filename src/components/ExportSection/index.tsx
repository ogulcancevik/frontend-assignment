import Content from '../Content';
import styles from './ExportSection.module.css';
import Mockup from './images/mockup.svg';
import { motion } from 'framer-motion';
import Arrow from './images/arrow.svg';
import PdfSvg from './images/pdf.svg';
import JpgSvg from './images/jpg.svg';
import TxtSvg from './images/txt.svg';

const ExportSection = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles['mockup-wrapper']}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <ExportOptions />
          <img src={Mockup} alt="mockup" />
        </div>
      </motion.div>
      <Content
        subtitle="Export & Share"
        title="All-Round Conversion"
        description="Export your scans as PDF,JPG,ZIP,TXT and Word."
      />
    </div>
  );
};

export default ExportSection;

const ExportOptions = () => {
  return (
    <div className={styles['export-options__wrapper']}>
      <div>
        <motion.img
          initial={{ y: '100%', x: 100 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          src={Arrow}
          alt="arrow"
        />
        <motion.img
          initial={{ y: '100%', x: 100 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          src={PdfSvg}
          alt="pdf"
        />
        <motion.img
          initial={{ y: '130%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          src={JpgSvg}
          alt="jpg"
        />
        <motion.img
          initial={{ y: '100%', x: -100 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          src={TxtSvg}
          alt="txt"
        />
      </div>
    </div>
  );
};
