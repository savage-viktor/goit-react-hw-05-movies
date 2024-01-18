import React from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
  const { test } = useParams();
  console.log(test); // adventure, herman-melville
  return <div>Test</div>;
};

export default Test;
