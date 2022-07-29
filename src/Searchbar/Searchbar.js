import React, {useState} from 'react'
import colleges from './colleges.js'



const Searchbar = () =>{



    const handleChange = (e) =>{
        setSearchValue(e.target.value.toUpperCase());
    }

    const [searchValue, setSearchValue] = useState('');

    const filteredColleges = colleges.filter((college) =>{
        return Object.keys(college)[0].includes(searchValue);
    })
    
    return(
        <div>
            <input type='text' value={searchValue} onChange={handleChange} placeholder='College Name'/>

            <ul>
            {filteredColleges.map((college) =>{
                let collegeName = Object.keys(college);
                return(<li key={collegeName}> <div className='rank'>{colleges.indexOf(college) + 1}</div> <div className='name'>{collegeName} | {Object.values(college)}</div></li>)
            })}
            </ul>

        </div>
    )
}

export default Searchbar;