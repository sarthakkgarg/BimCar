import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack style={{ display:"flex", justifyContent:"center"}} spacing={2}>
      <Pagination count={10} color="primary" />
    </Stack>
  );
}