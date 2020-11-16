import React, {useState, useEffect} from 'react';
import axios from 'axios'
import TotalCard from '../components/TotalCard'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    const [global, setGlobal]=useState(0)
      useEffect(()=>{
        const getData = async () =>{
            const {data} = await axios.get('https://api.covid19api.com/summary');
            const global=data.Global
            setGlobal(global)
          }
          getData()
       },[]);
    return <>
    <TotalCard TotalConfirmed={global.TotalConfirmed} TotalRecovered={global.TotalRecovered} TotalDeaths={global.TotalDeaths}/>
    <Link to="/countries"><button class='button'>Country Wise Data -></button></Link>
    </>
}

export default HomeScreen;