'use strict';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './index.css';
import MiniGrid from './miniGrid';
import { ColDef, IDatasource } from 'ag-grid-community';

const MAX_LIMIT = 100;

export const Grid = () => {
  const gridRef = useRef<any>(null);
  const [gridApi, setGridApi] = useState<any>(null);
  const gridStyle = useMemo(() => ({ height: 600, width: '100%' }), []);
  const [request, setRequest] = useState<any>();
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 160,
      filter: true,
      resizable: true,
      suppressMenu: true,
      sortable: true,
      floatingFilter: true,
      filterParams: {
        buttons: ['reset', 'apply'],
        closeOnApply: true,
      },
    };
  }, []);

  const filterParams = { values: ['Eve', 'Ayyappa'] };
  const [columnDefs] = useState([
    {
      field: '_id',
      cellRenderer: 'agGroupCellRenderer',
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },

    {
      field: 'name',
      filter: 'agSetColumnFilter',
      filterParams: filterParams,
    },
    { field: 'trips' },

    {
      field: 'Airline Name',
      valueFormatter: (data: any) => data.data.airline[0].name,
    },
    {
      field: 'Airline Country',
      valueFormatter: (data: any) => data.data.airline[0].country,
    },
  ]);

  const onGridReady = useCallback((params: any) => {
    setGridApi(params);

    const dataSource: IDatasource = {
      rowCount: undefined,
      getRows: (params: any) => {
        fetch(
          `https://api.instantwebtools.net/v1/passenger?page=${
            params?.request.startRow / MAX_LIMIT + 1
          }&size=${MAX_LIMIT}`
        )
          .then((resp) => resp.json())
          .then((resp) => {
            console.log(params);
            setRequest({
              total: resp?.totalPassengers,
              end: params?.request.endRow,
            });
            params.successCallback(resp.data);
          });
      },
    };
    params.api.setServerSideDatasource(dataSource);
  }, []);

  const detailCellRenderer = useMemo<any>(() => {
    return MiniGrid;
  }, []);

  const cbChanged = (evt: any) => {
    const isSelectAll = evt.target.checked;
    gridApi.api.forEachNode((node: any) => {
      node.setSelected(isSelectAll);
    });
  };

  return (
    <div>
      Select All
      <input type="checkbox" onChange={cbChanged} />
      <button
        onClick={() => {
          console.log(gridApi.api.getSelectedRows());
        }}
      >
        Export
      </button>
      <div style={gridStyle} className="ag-theme-material">
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          rowModelType={'serverSide'}
          serverSideInfiniteScroll={true}
          detailRowAutoHeight={true}
          masterDetail={true}
          rowSelection="multiple"
          cacheBlockSize={MAX_LIMIT}
          // cacheOverflowSize={2}
          maxConcurrentDatasourceRequests={1}
          infiniteInitialRowCount={MAX_LIMIT}
          detailCellRenderer={detailCellRenderer}
          sideBar={{
            toolPanels: [
              {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                toolPanelParams: {
                  suppressRowGroups: true,
                  suppressValues: true,
                  suppressPivots: true,
                  suppressPivotMode: true,
                  suppressColumnFilter: true,
                  suppressColumnSelectAll: true,
                  suppressColumnExpandAll: true,
                },
              },
            ],
            // hiddenByDefault: true,
            // defaultToolPanel: 'columns',
          }}
        ></AgGridReact>
        <div
          style={{
            background: '#f3f5fa',
            padding: 10,
            textAlign: 'right',
            borderTop: '1px black solid',
          }}
        >
          <p>{`Showing ${request?.end} of ${request?.total}`}</p>
        </div>
      </div>
    </div>
  );
};
