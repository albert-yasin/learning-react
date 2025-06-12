import { useState, useEffect } from 'react';
import ToolList from './shared/components/ToolList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: tools,
    isPending,
    error,
  } = useFetch('http://localhost:3105/tools');
  return (
    <div className='home'>
      {isPending && <div>Loading... </div>}
      <ToolList tools={tools.filter((tool) => tool.active === true)} />
    </div>
  );
};

export default Home;
