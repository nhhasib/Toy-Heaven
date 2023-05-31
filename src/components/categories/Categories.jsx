import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';

const Categories = () => {
  const [datas, setDatas] = useState();
  const [filterData, setFilterData] = useState();
  const [category, setcategory] = useState('RaceCars');

  useEffect(() => {
    fetch('https://toy-heaven-server.vercel.app/all-toys')
      .then(res => res.json())
      .then(data => setDatas(data))
  }, [])
  
  useEffect(() => {
    const filterData = datas?.filter(data => data.category == category);
    setFilterData(filterData)
  }, [category, datas])
  
  return (
  <Tabs className="text-center my-10 py-10">
    <TabList>
      <Tab onClick={()=>setcategory('RaceCars')}>Race Cars</Tab>
      <Tab onClick={()=>setcategory('RemoteControlCars')}>Remote Control Cars</Tab>
      <Tab onClick={()=>setcategory('EmergencyVehicles')}>Emergency Vehicles</Tab>
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