import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import Filters from './components/Filters';
import BlogList from './components/BlogList';
import BlogDetailsModal from './components/BlogDetailsModal';
import darkTheme from './theme';
import blogsData from './data/blogs';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBlogs = blogsData.filter(
    (blog) =>
      (category === '' || blog.category === category) &&
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <Navbar />
        <Container  sx={{ paddingTop: '32px' }}>
          <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filters category={category} setCategory={setCategory} />
          <BlogList blogs={filteredBlogs} onCardClick={handleCardClick} />
        </Container>
        <BlogDetailsModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          blog={selectedBlog}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
