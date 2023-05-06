import React, { useEffect, useRef } from 'react';
import 'datatables.net-dt/css/jquery.dataTables.css';
import $ from 'jquery';
import  'datatables.net-dt';

function DataTable({ data }) {
  const tableRef = useRef(null);
 
  useEffect(() => {
    const $el = $(tableRef.current);
 	  const table=$el.DataTable({
      data,
      columns: [
        {title:"Name", data:"name",width:"15%"},
        { title: "Age/Sex", data: "age",width:"15%",render:(data,type,row)=>`${data} /${row.gender}`},
        { title: "Mobile", data: "mobile" },
        { title: "Address", data: "address",width:"30%" },
        { title: "Govt Id", data: "govtId" },
        {title: "Guardian Details",data:"guardianName",width:"15%",render:(data,type,row)=>`${row.guardianLabel} ${data}`},
        { title: "Nationality", data: "nationality" ,width:"10%"},
      ],
	  "bDestroy": true,
    });
    
	return ()=>{
		table.destroy()
	};

  }, [data]);

  return <table ref={tableRef} />;
}

export default DataTable;
