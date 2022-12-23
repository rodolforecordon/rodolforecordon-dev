import { Route, Routes } from 'react-router-dom';
import Contacts from '../../pages/Contacts';
import Home from '../../pages/Home';
import Posts from '../../pages/Posts';
import Profile from '../../pages/Profile';
import Projects from '../../pages/Projects';
import Store from '../../pages/Store';
import { PageContainer } from './PageContainer';

const PageContent = () => (
  <PageContainer>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  </PageContainer>
);

export default PageContent;
