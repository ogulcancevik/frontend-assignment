import styles from './Navigation.module.css';
import routes from './routes';
import NavIcon from '../NavIcon';
import React, { useCallback } from 'react';

interface NavigationProps {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
}

const Navigation = (props: NavigationProps) => {
  const { selectedSection, setSelectedSection } = props;
  const isActive = useCallback(
    (section: string) => {
      return selectedSection === section;
    },
    [selectedSection],
  );
  return (
    <div className={styles.nav}>
      {routes.map((route, index) => (
        <React.Fragment key={index}>
          <div
            className={styles['nav-item']}
            onClick={() => setSelectedSection(route.key)}
          >
            <NavIcon
              isActive={isActive(route.key)}
              iconComponent={route.icon}
            />
            <span>{route.name}</span>
          </div>
          <Divide />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navigation;

const Divide = () => {
  return <div className={styles.divide}></div>;
};
