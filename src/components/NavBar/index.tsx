import AppNavLink from './AppNavLink';
import classes from './NavBar.module.css';

const links = ['/profile', '/projects', '/posts', '/contacts', '/store'];

const NavBar = () => (
  <nav>
    <a className={classes.logo} href="/">
      LOGO
    </a>
    <ul>
      <AppNavLink to="/profile">Profile</AppNavLink>
      <AppNavLink to="/projects">Projects</AppNavLink>
      <AppNavLink to="/posts">Posts</AppNavLink>
      <AppNavLink to="/contacts">Contacts</AppNavLink>
      <AppNavLink to="/store">Store</AppNavLink>
    </ul>
  </nav>
);

export default NavBar;
