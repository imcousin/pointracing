import MUIDataTable from "mui-datatables";
import Container from '@material-ui/core/Container'

export default function EnhancedTable() {
  
  const columns = [
    {
    name: "ranking",
    label: "Ranking",
    options: {
      filter: true,
      sort: true,
    }
    },
    {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: false,
    }
    },
    {
    name: "ratingPoint",
    label: "Rating Point",
    options: {
      filter: true,
      sort: true,
    }
    },
  ];
  
  const data = [
    { ranking: 1, name: "Joe James", ratingPoint: 10 },
    { ranking: 2, name: "John Walsh", ratingPoint: 20 },
    { ranking: 3, name: "Bob Herm", ratingPoint: 30 },
    { ranking: 4, name: "James Houston", ratingPoint: 40 },
  ];
  
  const options = {
    filter: false,
    filterType: 'checkbox',
    download: false,
    print: false,
    pagination: true,
    rowPerPage: 100,
    selectableRows: 'none',
    viewColumns: false
  };

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