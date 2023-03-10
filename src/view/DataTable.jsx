import { tablaComponents } from '../utils/tablaComponents'
import DataTable from 'react-data-table-component';


  const columnas= [
    {
      name: 'id',
      selector: row => row.id,
      sortable: true,
  },
  {
      name: 'names',
      selector: row => row.names,
      sortable: true,
  },
  {
    name: 'lastName',
    selector: row => row.lastName,
    sortable: true,
    grow: 3
},
{
    name: 'profesion',
    selector: row => row.profesion,
    sortable: true,
    right: true
},
  ];
  const paginationOption= {
    rowsPerPageText: "Filas por Pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
  }

export default function theDataTable() {
  return (
   <div>
     <DataTable 
     columns={columnas} 
     data={tablaComponents} 
     title="Guias de las Tecnologias mas utilizadas" 
     pagination
     paginationComponentOptions= { paginationOption } 
     fixedHeader="600px"
     />
   </div>

  );
    
  
}
