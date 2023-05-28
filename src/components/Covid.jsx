import React, { useEffect, useState } from 'react'
import Cards from './Cards'



const Covid = () => {

const [data,setData] =useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch("https://www.mohfw.gov.in/data/datanew.json");
            const result = await  res.json();
            console.log(result[20]);
            setData(result[20]);
        }
        catch (err) {
            console.log(err);
        }

    }


    useEffect(
        () => {
            getCovidData();
        }, []
    )

    return (
        <section>
           <div className='header text-center mt-5 mb-5'>
           <h6 className='mb-2 small-heading'>🔴LIVE</h6>
            <h3 className='main-heading'>COVID-19 TRACKER</h3>
           </div>
            <ul className='main-container'>
               <Cards heading1={"OUR"} heading2={"COUNTRY"} data={"INDIA"}/>

               <Cards heading1={"TOTAL"} heading2={"CURED"} data={data.cured}/>

               <Cards heading1={"TOTAL"} heading2={"POSITIVE"} data={data.positive}/>

               <Cards heading1={"TOTAL"} heading2={"DEATH"} data={data.new_death}/>
               <Cards heading1={"TOTAL"} heading2={"ACTIVE"} data={data.active}/>
              
               <Cards heading1={"STATE"} heading2={"NAME"} data={data.state_name}/>
               
            </ul>
        </section>
    )
}

export default Covid