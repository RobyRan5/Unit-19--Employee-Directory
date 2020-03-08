import React, { useContext } from "react";
import "../styles/SearchName.css";
import DataAreaContext from "../utils/DataAreaContext";

const searchName = () => {
    const context = useConext(DataAreaContext);

    return (
        <div className="Searchbox">
            <div className="input-group">
                <div className= "input-group-prepend">
                    <span className="input-group-text" id="">
                        Search
                    </span>
                </div>
                <input 
                className="form-control mr-sm-2"
                type="search"
                placeholder="name"
                aria-label="search"
                onChange={e => context.handleSearchChange(e)}
                />
                </div>
        </div>
    );
};
export default searchName;
