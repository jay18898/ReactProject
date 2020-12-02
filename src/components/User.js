import React, { Component, useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import _ from "lodash"


// import PropTypes from 'prop-types';

// import Repos from './Repos';
function User(props) {
    const [responsive, setResponsive] = useState("vertical");
    const [data, setData] = useState([]);


    useEffect(() => {
        // Update the document title using the browser API
                const { finalUserData } = props;
                let user = _.map(finalUserData, (singleUser) => {
                    return [singleUser.name.title, singleUser.name.first, 
                        singleUser.name.last, singleUser.gender, singleUser.email]
                })
                // console.log("props", user)

                setData(user)


    },[]);
  
    const columns = ["Title", "First name", "Last name", "Gender", "Email"];
    
    const options = {
    };
    
  
    return (
      <React.Fragment>
          <div style={{width:'85%',marginLeft :  'auto', marginRight : 'auto'}} >
            <MUIDataTable
            title={"Users List"}
            data={data}
            columns={columns}
            options={options}
            />
        </div>
      </React.Fragment>
    );
  }

export default User;
