import React, { useContext } from "react";

import DataAreaContext from "../utils/DataAreaContext";

const searchDOB = () => {
    const context = useConext(DataAreaContext);

    return (
        <div className="Searchbox">
            <div className="input-group">
                <div className= "input-group-prepend">
                    <span className="input-group-text" id="">
                        DOB
                    </span>
                </div>
                <input type="date" className="form-control" onChange={e => context.handleSearchChange(e)}/>
                <input type="date" className="form-control" onChange={e => context.handleSearchChange(e)}/>
            </div>
        </div>
    );
};
export default searchDOB;
