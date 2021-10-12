import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import SettingCard from '../src/components/SettingCard.js'

export default function Home() {

  const [ampsettings, setAmpsettings] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

      axios.get(`/api/bluesjr/`)
      .then(response => {
        if(response.status === 200){
          setAmpsettings(response.data);
        }
        setLoading(false);
      }).catch(error => {
        console.log('An error ocurred while requesting for settings data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...</>
  } else

  return (
    <>

      <br/>


      <section id="about" className="container mt-4 mb-6">
        <div className="columns is-multiline">
        {
          ampsettings && ampsettings.map((record) =>
            {
              return <div className="column is-4" key={uuidv4()}><SettingCard setting={record}  key={uuidv4()} /></div>
            }
          )
        }
        </div>
      </section>

      </>
  )
}
