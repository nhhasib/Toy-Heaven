import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';

const Categories = () => {
  const [datas, setDatas] = useState();
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/all-toys')
      .then(res => res.json())
      .then(data => setDatas(data))
  },[])
  const handletab1 = () => {
    const filterData = datas.filter(data => data.category == 'RaceCars');
    console.log(filterData)
    setFilterData(filterData)
  }
  const handletab2 = () => {
    console.log(datas)
    const filterData = datas.filter(data => data.category == 'RemoteControlCars');
    console.log(filterData)
    setFilterData(filterData)
  }
  const handletab3 = () => {
    console.log(datas)
    const filterData = datas.filter(data => data.category == 'EmergencyVehicles');
    console.log(filterData)
    setFilterData(filterData)
  }

  return (
  <Tabs className="text-center my-10 py-10">
    <TabList>
      <Tab onClick={handletab1}>Race Cars</Tab>
      <Tab onClick={handletab2}>Remote Control Cars</Tab>
      <Tab onClick={handletab3}>Emergency Vehicles</Tab>
    </TabList>

    <TabPanel>
        <div className='grid grid-cols-3 my-6'>
        {filterData?.map(data=><ToyCard key={data._id} data={data}></ToyCard>)}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 my-6'>
        {filterData?.map(data=><ToyCard key={data._id} data={data}></ToyCard>)}
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 my-6'>
        {filterData?.map(data=><ToyCard key={data._id} data={data}></ToyCard>)}
      </div>
    </TabPanel>
  </Tabs>
);
};

export default Categories;