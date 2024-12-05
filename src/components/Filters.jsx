import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Filters = ({ category, setCategory }) => (
  <FormControl fullWidth sx={{ marginBottom: '16px' }}>
    <InputLabel sx={{ color: '#aaaaaa' }}>Category</InputLabel>
    <Select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      sx={{ color: 'white' }}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="React">React</MenuItem>
      <MenuItem value="UI Design">UI Design</MenuItem>
      <MenuItem value="JavaScript">JavaScript</MenuItem>
    </Select>
  </FormControl>
);

export default Filters;
