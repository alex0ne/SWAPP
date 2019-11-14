import React from 'react';
import { Spinner } from 'reactstrap';
export default function Loading() {
  return (
    <div style={{ paddingTop: '15rem' }}>
      <Spinner type='grow' color='secondary' />
    </div>
  );
}
