import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Categories = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch()
  },[])
  const handletab1 = () => {
    
  }

  return (
  <Tabs className="text-center">
    <TabList>
      <Tab onClick={handletab1}>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);
};

export default Categories;