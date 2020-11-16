import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
function numberWithCommas(x) {
    if(x!==undefined)
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return ""
}
function TotalCard(props){
    const active=props.TotalConfirmed-props.TotalDeaths-props.TotalRecovered
    return(<div className='card container' style={{width:'70%'}}>
        <div className='row'>
            <div className='column'>
                <h2 style={{fontWeight:'normal', margin:'8px'}}>World Statistics</h2>
                <p style={{fontSize:'32px'}}>Total Cases: {numberWithCommas(props.TotalConfirmed)}</p> 
                <div><div className='color-box' style={{backgroundColor:'#55e67c'}}></div>  Total Recovered: {numberWithCommas(props.TotalRecovered)} ({parseInt((props.TotalRecovered/props.TotalConfirmed)*100)}%)</div>
                <div><div className='color-box' style={{backgroundColor:'#5670f5'}}></div>  Total Active: {numberWithCommas(active)}</div>
                <div><div className='color-box' style={{backgroundColor:'#f5314b'}}></div>  Total Deaths: {numberWithCommas(props.TotalDeaths)}</div>
            </div>
            <div className='column'>
                <PieChart style={{width:'80%', height:'80%', marginTop:'20px'}}
                data={[
                { title: 'Recovered', value: props.TotalRecovered, color: '#55ef7c' },
                { title: 'Active', value: active, color: '#5670f5'},
                { title: 'Deaths', value: props.TotalDeaths, color: '#f5314b' },]}/>
            </div>
        </div>
    </div>)
}
export default TotalCard;
