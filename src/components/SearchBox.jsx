import React from 'react';
import { TextField } from '@mui/material';

const SearchBox = ({ searchTerm, setSearchTerm }) => (
  <TextField
    fullWidth
    variant="outlined"
    label="Search Blogs"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    sx={{
      marginBottom: '16px',
      input: { color: 'white' },
      label: { color: '#aaaaaa' },
    }}
  />
);

export default SearchBox;
