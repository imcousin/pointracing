import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import Container from '@material-ui/core/Container'
import Papa from 'papaparse';

export default function EnhancedTable() {
  const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    }, []);

    return (width <= 768);
  }
  
  const columns = [
    {
      name: "Ranking",
      label: "Ranking",
      options: {
        filter: true,
        sort: true,
        /*
          In this case, age is a string, but we want to compare it as if it was a number.
          If you comment out the sortCompare method, you'll see how sorting as a string
          is different than sorting as a number. Typically an age field would be a number
          so we wouldn't need to write a function like this. But the sortCompare is available
          if you run into a situation like this.
        */
        sortCompare: (order) => {
          return (obj1, obj2) => {
            // console.log(order);
            let val1 = parseInt(obj1.data, 10);
            let val2 = parseInt(obj2.data, 10);
            return (val1 - val2) * (order === 'asc' ? 1 : -1);
          }
        }
      }
    },
    {
      name: "Name",
      label: "Name",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "RatingPoints",
      label: "Rating Point",
      options: {
        filter: true,
        sort: true,
        sortCompare: (order) => {
          return (obj1, obj2) => {
            // console.log(order);
            let val1 = parseInt(obj1.data, 10);
            let val2 = parseInt(obj2.data, 10);
            return (val1 - val2) * (order === 'asc' ? 1 : -1);
          }
        }
      }
    },
  ];

  // Load CSV File.
  const [data, setRows] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('/data/points.csv');
      const reader = response.body.getReader()
      const result = await reader.read()
      const decoder = new TextDecoder('UTF-8')
      const csv = decoder.decode(result.value)
      const results = Papa.parse(csv, { header: true })
      const rows = results.data
      setRows(rows)
    }
    getData()
  }, [])

  const options = {
    filter: false,
    filterType: 'checkbox',
    download: false,
    print: false,
    pagination: true,
    rowsPerPage: (useCheckMobileScreen ? 50 : 25),
    rowsPerPageOptions: [10,15,50,100],
    selectableRows: 'none',
    viewColumns: false
  }

  // console.log('data ', data)

  return (
    <Container fixed>
      <MUIDataTable
        title={"Modest Grass Rating Points"}
        data={data}
        columns={columns}
        options={options}
      />
    </Container>
  );
}