import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTables";

function ShowData() {
  const [data,setData]=useState([]);

	useEffect(() => {
		(async () => {
			let res = await fetch("http://localhost:4000/api/user/get");
			res = await res.json();
			setData(res.users);
      console.log(res.users)
		})();



	}, []);

	return <DataTable data={data} />;
}

export default ShowData;
