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
                        singleUser.name.last, singleUser.gender, singleUser.email,singleUser.id.value]
                })
                // console.log("props", user)

                setData(user)


    },[]);
  

    const columns = [
      {
        name: "Title",
        options: {
          searchable : false
        }
      },
      {
        name: "First",
        options: {
          searchable : true
        }
      },
      {
        name: "Last name",
        options: {
          searchable : true
        }
      },
      {
        name: "Gender",
        options: {
          searchable : false
        }
      },
      {
        name: "Email",
        options: {
          searchable : true
        }
      },
      {
        name: "Details",
        options: {
          searchable : false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <button onClick={(value) => {
                console.error('tableMeta',tableMeta.rowData)
                console.error('data',tableMeta.rowIndex);
              }}>
                Details
              </button>
            );
          }
        }
      }
    ];
    const options = {
      filterType : 'custom'
    };
    
  
    return (
      <React.Fragment>
          <div style={{width:'85%',marginLeft :  'auto', marginRight : 'auto'}} >
            <MUIDataTable
            title={"Users List"}
            data={data}
            columns={columns}
            />
        </div>
      </React.Fragment>
    );
  }

export default User;
