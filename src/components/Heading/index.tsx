import './Heading.module.css';

const pages = [
  {
    id: 0,
    title: 'Home',
    link: '/home',
    active: true,
  },
  {
    id: 1,
    title: 'Projects',
    link: '/home',
    active: false,
  },
  {
    id: 0,
    title: 'Contact',
    link: '/contact',
    active: false,
  },
];

const Heading = () => {
  return (
    <nav>
      <ul>
        {pages.map((el) => (
          <li key={el.id}>
            <a href={el.link}>{el.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Heading;
