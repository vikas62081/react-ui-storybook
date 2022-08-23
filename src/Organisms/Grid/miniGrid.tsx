import React, { useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  ColDef,
  DetailGridInfo,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import './index.css';

const MiniGrid = ({ node, api }: ICellRendererParams) => {
  const rowId = node.id!;
  const rows = [
    {
      name: 'susan',
      callId: 555,
      duration: 72,
      switchCode: 'SW3',
      direction: 'Out',
      number: '(00) 88542069',
    },
    {
      name: 'susan',
      callId: 556,
      duration: 61,
      switchCode: 'SW3',
      direction: 'In',
      number: '(01) 7432576',
    },
    {
      name: 'susan',
      callId: 557,
      duration: 90,
      switchCode: 'SW5',
      direction: 'In',
      number: '(09) 76105491',
    },
    {
      name: 'susan',
      callId: 558,
      duration: 83,
      switchCode: 'SW5',
      direction: 'In',
      number: '(03) 72020613',
    },
    {
      name: 'susan',
      callId: 559,
      duration: 94,
      switchCode: 'SW1',
      direction: 'In',
      number: '(04) 98295709',
    },
    {
      name: 'susan',
      callId: 560,
      duration: 102,
      switchCode: 'SW2',
      direction: 'Out',
      number: '(07) 96771309',
    },
    {
      name: 'susan',
      callId: 561,
      duration: 22,
      switchCode: 'SW3',
      direction: 'Out',
      number: '(08) 38428058',
    },
  ];

  useEffect(() => {
    return () => {
      console.log('removing detail grid info with id: ', rowId);

      // the detail grid is automatically destroyed as it is a React component
      api.removeDetailGridInfo(rowId);
    };
  }, []);

  const colDefs = [
    {
      field: 'callId',
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    { field: 'direction' },
    { field: 'number' },
    { field: 'duration', valueFormatter: "x.toLocaleString() + 's'" },
    { field: 'switchCode' },
  ];

  const defaultColDef: ColDef = {
    flex: 1,
    minWidth: 120,
    sortable: true,
  };

  const onGridReady = (params: GridReadyEvent) => {
    const gridInfo: DetailGridInfo = {
      id: rowId,
      api: params.api,
      columnApi: params.columnApi,
    };

    console.log('adding detail grid info with id: ', rowId);

    api.addDetailGridInfo(rowId, gridInfo);
  };

  return (
    <div className="mini-table">
      <h3>AVAILABLE FORMS</h3>

      <div className="full-width-panel ag-theme-material">
        <AgGridReact
          data-id="detailGrid=1"
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowData={rows}
          rowSelection={'multiple'}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default MiniGrid;
