import React from 'react';
import publications from '../publications.json';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <>
      <Reader items={publications}>
        <Publication />
        <Counter />
        <Controls />
        {/* <ProgressBar /> */}
      </Reader>
      ,
    </>
  );
};
export default App;
