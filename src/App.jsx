import { useState, useEffect } from 'react';

import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Section from './Components/Section/Section';
import { getTopSongsData, getNewSongsData, getSongsData } from './utils/util';

function App() {
  const [topSongsData, setTopSongsData] = useState([]);
  const [newSongsData, setNewSongsData] = useState([]);
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    (async () => {
      const topSongsData = await getTopSongsData();
      setTopSongsData(topSongsData);

      const newSongsData = await getNewSongsData();
      setNewSongsData(newSongsData);

      const songsData = await getSongsData();
      setSongsData(songsData);
    })();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Section name="Top Albums" songsData={topSongsData} />
        <Section name="New Albums" songsData={newSongsData} />
        <Section name="Songs" songsData={songsData} />
      </div>
    </>
  );
}

export default App;
