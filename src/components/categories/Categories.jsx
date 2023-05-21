import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Categories = () => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/all-toys')
      .then(res => res.json())
      .then(data => setDatas(data))
  },[])
  const handletab1 = () => {
    const filterData = datas.filter(data => data.category == 'race_cars');
    console.log(filterData)
  }

  return (
  <Tabs className="text-center">
    <TabList>
      <Tab onClick={handletab1}>Race Cars</Tab>
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