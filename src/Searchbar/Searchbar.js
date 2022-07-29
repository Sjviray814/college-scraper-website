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
            <input type='text' value={searchValue} onChange={handleChange}/>


            {filteredColleges.map((college) =>{
                let collegeName = Object.keys(college);
                return(<div key={collegeName}> {colleges.indexOf(college) + 1}. {collegeName} | {Object.values(college)}</div>)
            })}

        </div>
    )
}

export default Searchbar;