import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'
import List from '../components/List'

const CountriesScreen = () => {
    const [allCountries, setAllCountries] = useState([])
    const [listCountries, setListCountries] = useState([])
    const [dispCountries, setDispCountries] = useState([])
    const [countriesPerPage] = useState(10);
    useEffect(()=>{
        const getData = async () =>{
            const {data} = await axios.get('https://api.covid19api.com/summary');
            const countries = data.Countries
            setAllCountries(countries)
            setListCountries(countries.slice(0,10))
            setDispCountries(countries)
            pagehighlight()
          }
        getData()
    },[]);
    const pagehighlight = (id=1) =>{
        var elements=document.getElementsByClassName("page-link")
        for(var i=0; i<elements.length;i++)
        elements[i].classList.remove("selected")
        var page=document.getElementById(id)
        if(page) page.classList.add("selected")
    }
    const onInputChange = (e) => {
        const list=allCountries.filter(country => country.Country.toLowerCase().includes(e.target.value.toLowerCase()))
        setDispCountries(list)  
        setListCountries(list.slice(0,10))
        pagehighlight()  
    }
    const paginate = (pageNumber) =>{
        setListCountries(dispCountries.slice(pageNumber*countriesPerPage - countriesPerPage, pageNumber*countriesPerPage))
        pagehighlight(pageNumber)
    }
    const sort = (e) =>{
        var element=e.target
        var order=e.currentTarget.dataset.order
        var attr=e.currentTarget.dataset.attr
        if(order==='asc'){
            element.innerHTML=element.innerHTML.slice(0,-1)+'&#9660;'
            e.currentTarget.dataset.order='desc'
            const sorted=dispCountries.sort((a,b) => a[attr]<b[attr] ? 1:-1)
            setDispCountries(sorted)
            setListCountries(sorted.slice(0,10))
            pagehighlight(1)
        }
        else{
            element.innerHTML=element.innerHTML.slice(0,-1)+'&#9650;'
            e.currentTarget.dataset.order='asc'
            const sorted=dispCountries.sort((a,b) => a[attr]>b[attr] ? 1:-1)
            setDispCountries(sorted)
            setListCountries(sorted.slice(0,10))
            pagehighlight(1)
            }
    }
    return <>
    <h2 style={{textAlign:'left', margin:'16px', fontSize:'48px'}}>Countries</h2>
    <form >
		<input className="input" type="text" onChange={onInputChange} placeholder=" Search"/>
	</form>
    <Pagination countriesPerPage={countriesPerPage} totalCountries={dispCountries.length} paginate={paginate}/>
    {listCountries.length>0 && <List listCountries={listCountries} sort={sort}/>}
    {listCountries.length===0 && <h3> No record found </h3>}
    <Link to="/"><button className='button'>World Data -></button></Link>
    </>
}

export default CountriesScreen;