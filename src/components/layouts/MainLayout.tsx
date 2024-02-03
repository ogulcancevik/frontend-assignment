import styles from './MainLayout.module.css';
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const [section, navigation] = children as React.ReactElement[];
  return (
    <div className={styles.container}>
      {section}
      {navigation}
    </div>
  );
};

export default MainLayout;
