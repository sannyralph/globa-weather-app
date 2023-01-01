import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";


const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleOnchange = (searchData) => {
        setSearch(searchData) 
        onSearchChange(searchData)
    }

    return(
        <AsyncPaginate 
        placeholder="ENTER CITY"
        debounceTimeout={600}
        value={search}
        onChange={handleOnchange}
        />
    )
}

export default Search;