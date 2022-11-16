
const SearchHouses = ({setSearchHouses}) => {

    const handleChange = (event) => {
        const {value} = event.target;
        setSearchHouses(value)
    }

    return(

        
            <div className="divfilter">
                <input className="finder" type="text" placeholder="🔍  Buscar..." onChange={handleChange}></input>
            </div>
       
    )
}

export default SearchHouses;