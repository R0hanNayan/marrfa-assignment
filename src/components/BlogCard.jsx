import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BlogCard = ({ blog, onClick }) => (
  <Card
    onClick={() => onClick(blog)}
    sx={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      color: 'white',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)',
      },
    }}
  >
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
        {blog.title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#d1d1d1', marginBottom: '8px' }}>
        {blog.content.substring(0, 100)}...
      </Typography>
      <Typography variant="caption" sx={{ color: '#90caf9' }}>
        {blog.category}
      </Typography>
    </CardContent>
  </Card>
);

export default BlogCard;
