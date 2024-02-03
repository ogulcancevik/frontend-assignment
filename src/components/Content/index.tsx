import styles from './Content.module.css';
import { motion } from 'framer-motion';

interface ContentProps {
  subtitle: string;
  title: string;
  description: string;
}
const Content = (props: ContentProps) => {
  const { subtitle, title, description } = props;
  return (
    <motion.div
      className={styles.content}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <button className={styles.button}>Learn More</button>
    </motion.div>
  );
};

export default Content;
