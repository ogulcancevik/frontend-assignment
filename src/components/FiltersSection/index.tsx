import Content from '../Content';
import styles from './FilterSection.module.css';
import Mockup from './images/mockup.svg';
import { motion } from 'framer-motion';
import LeftBarSvg from './images/left_bar.svg';
import RightBarSvg from './images/right_bar.svg';
const FilterSection = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles['mockup-wrapper']}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <LeftBar />
          <RightBar />
          <img src={Mockup} alt="mockup" />
        </div>
      </motion.div>
      <Content
        subtitle="Advanced fılters"
        title="Unique Filters"
        description="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
      />
    </div>
  );
};

export default FilterSection;

const LeftBar = () => {
  return (
    <motion.div
      className={styles['left-bar-wrapper']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <img src={LeftBarSvg} alt="left-bar" />
    </motion.div>
  );
};

const RightBar = () => {
  return (
    <motion.div
      className={styles['right-bar-wrapper']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
    >
      <img src={RightBarSvg} alt="right-bar" />
    </motion.div>
  );
};
