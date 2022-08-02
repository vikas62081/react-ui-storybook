'use strict';

import React, { useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './index.css';
import { ColDef } from 'ag-grid-community';
// import CheckboxesTags from './autocomplete';
import FadeMenu from './autocomplete';
import Demo from './Demo';

export const Grid = () => {
  const gridRef = useRef<any>(null);
  const [gridApi, setGridApi] = useState<any>(null);
  const gridStyle = useMemo(() => ({ height: 600, width: '100%' }), []);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 160,
      filter: true,
      resizable: true,
      suppressMenu: true,
    };
  }, []);

  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    {
      make: 'Toyota',
      model: 'Audi',
      price: 350000,
      callRecords: [
        {
          name: 'susan',
          callId: 555,
          duration: 72,
          switchCode: 'SW3',
          direction: 'Out',
          number: '(00) 88542069',
        },
      ],
    },
  ]);

  const [columnDefs] = useState([
    {
      field: 'make',
      cellRenderer: 'agGroupCellRenderer',
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,

      // headerCheckboxSelection: true,
      // cellRendererParams: {
      //   checkbox: true,
      // },
    },
    { field: 'model' },
    { field: 'price' },
  ]);
  const onGridReady = (params: any) => {
    console.log(params);
    setGridApi(params);
  };
  const onFilter = (a: any, b: any, c: any) => {
    var countryFilterComponent = gridApi.api.getFilterInstance(a);
    countryFilterComponent.setModel({
      type: b,
      filter: c,
    });
    gridApi!.api.onFilterChanged();
  };

  const a = [
    {
      id: 1,
      field: 'make',
      type: 'contains',
      onChange: (a: any, b: any, c: any) => onFilter(a, b, c),
    },
    {
      id: 2,
      field: 'model',
      type: 'contains',
      onChange: (a: any, b: any, c: any) => onFilter(a, b, c),
    },
    {
      id: 3,
      field: 'price',
      type: 'equals',
      onChange: (a: any, b: any, c: any) => onFilter(a, b, c),
    },
  ];
  const detailCellRenderer = useMemo<any>(() => {
    return Demo;
  }, []);

  return (
    <div>
      {a.map((dt) => (
        <>
          <label>{dt?.field}</label>
          <input
            onChange={(e) => dt.onChange(dt.field, dt.type, e?.target?.value)}
          />
        </>
      ))}
      <FadeMenu />
      <select onChange={(e) => onFilter('make', 'contains', e?.target?.value)}>
        <option value={''}>Select</option>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
      </select>
      <div style={gridStyle} className="ag-theme-material">
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          rowSelection="multiple"
          masterDetail={true}
          // sideBar={'filters'}

          sideBar={{
            toolPanels: [
              {
                id: 'columns',
                labelDefault: 'Ayyappa',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                toolPanelParams: {
                  suppressRowGroups: true,
                  suppressValues: true,
                  suppressPivots: true,
                  suppressPivotMode: true,
                  suppressColumnFilter: false,
                  suppressColumnSelectAll: false,
                  suppressColumnExpandAll: true,
                },
              },
              {
                id: 'filters',
                labelDefault: 'Filters',
                labelKey: 'filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel',
                toolPanelParams: {
                  suppressExpandAll: true,
                  suppressFilterSearch: true,
                },
              },
            ],
            // hiddenByDefault: true,
            // defaultToolPanel: 'columns',
          }}
          detailCellRenderer={detailCellRenderer}
          // onFirstDataRendered={onFirstDataRendered}
        ></AgGridReact>
      </div>
    </div>
  );
};
