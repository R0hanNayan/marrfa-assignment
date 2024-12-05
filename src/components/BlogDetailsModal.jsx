import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

const BlogDetailsModal = ({ open, handleClose, blog }) => {
  if (!blog) return null;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ background: '#1e1e1e', color: 'white' }}>
        {blog.title}
      </DialogTitle>
      <DialogContent sx={{ background: '#121212', color: '#d1d1d1' }}>
        <Typography variant="body1" paragraph>
          {blog.content}
        </Typography>
        <Typography variant="caption" sx={{ color: '#90caf9' }}>
          Category: {blog.category}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ background: '#1e1e1e' }}>
        <Button onClick={handleClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlogDetailsModal;
