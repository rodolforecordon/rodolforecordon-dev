import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import classes from './AppNavLink.module.css';

interface INavLink {
  children?: string;
  to: string;
}

const AppNavLink = ({ to, children }: INavLink) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? classes.active : ''}>
      <Link to={resolvedPath}>{children}</Link>
    </li>
  );
};

export default AppNavLink;
