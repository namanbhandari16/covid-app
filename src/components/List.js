import React from 'react';

const List = ({listCountries, sort}) =>{
    if(listCountries!==undefined)
        return (<table>
<tr>
    <th onClick={sort} data-order="asc" data-attr="Country">Country &#9650;</th>
    <th onClick={sort} data-order="asc" data-attr="TotalConfirmed">Confirmed &#9650;</th> 
    <th onClick={sort} data-order="asc" data-attr="TotalRecovered">Recovered &#9650;</th>
    <th onClick={sort} data-order="asc" data-attr="TotalDeaths">Deaths &#9650;</th>
</tr>
{listCountries.map((item, i) => {
    return [
        <tr key={i}>
            <td >{item.Country}</td>
            <td >{item.TotalConfirmed}</td>
            <td style={{color:'green'}}>{item.TotalRecovered}</td>
            <td style={{color:'red'}}>{item.TotalDeaths}</td>
        </tr>,
    ];
})}
</table>)
return<></>
}

export default List;