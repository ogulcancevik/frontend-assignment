import styles from './NavIcon.module.css';

interface NavIconProps {
  isActive: boolean;
  iconComponent: React.FC;
}
const NavIcon = (props: NavIconProps) => {
  const { isActive, iconComponent: IconComponent } = props;
  return (
    <div
      className={`${styles['icon-wrapper']} ${isActive && styles['icon-wrapper__active']}`}
    >
      <IconComponent />
    </div>
  );
};

export default NavIcon;
