import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = () => {

    const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState("remote");

  useEffect(() => {
    fetch(`http://localhost:5000/allJobsByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setJob(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
    
    return (
        <div>
               <div>
      <h1 className="title text-center mt-5 p-5">Available Job's</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("remote")}
              className={`remote ${
                activeTab == "remote" ? " bg-danger text-white" : ""
              }`}
            >
              Remote
            </div>
            <div
              onClick={() => handleTabClick("offline")}
              className={`Offline ${
                activeTab == "offline" ? " bg-danger text-white" : ""
              }`}
            >
              Offline
            </div>
          </div>
        </div>
      </div>
      <div className="jobs-container mt-5 row">
        {jobs?.map((job) => (
          <Job job={job}></Job>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Categories;