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
      field: 'id',
      cellRenderer: 'agGroupCellRenderer',
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },

    {
      field: 'first_name',
      filter: 'agSetColumnFilter',
      filterParams: filterParams,
    },
    { field: 'last_name' },
    { field: 'email' },
    { field: 'avatar' },
  ]);

  const onGridReady = useCallback((params: any) => {
    setGridApi(params);

    const dataSource: IDatasource = {
      rowCount: undefined,
      getRows: (params: any) => {
        fetch(
          `https://reqres.in/api/users?page=${params.request.startRow / 6 + 1}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(
              'asking for ' +
                params?.request.startRow +
                ' to ' +
                params?.request.endRow
            );

            params.successCallback(data.data, data.total);
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
  const statusBar = {
    statusPanels: [
      {
        statusPanel: () => <h1> {gridApi?.api?.getSelectedRows()?.length}</h1>,
      },
      // {
      //   statusPanel: (props: any) => (
      //     <div style={{ height: 50 }}>
      //       {console.log('status', props.api.getRenderedNodes())}
      //       Showing {request?.endRow} of {request?.total}
      //     </div>
      //   ),
      //   align: 'left',
      // },
      {
        statusPanel: 'agTotalRowCountComponent',
        align: 'left',
      },
      // { statusPanel: 'agFilteredRowCountComponent' },
      // { statusPanel: 'agSelectedRowCountComponent' },
      // { statusPanel: 'agAggregationComponent' },
      // {
      //   statusPanel: 'agAggregationComponent',
      //   statusPanelParams: {
      //     // possible values are: 'count', 'sum', 'min', 'max', 'avg'
      //     aggFuncs: ['avg', 'sum'],
      //   },
      // },
    ],
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
          cacheBlockSize={6}
          // cacheOverflowSize={2}
          maxConcurrentDatasourceRequests={1}
          infiniteInitialRowCount={6}
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
          statusBar={statusBar}
        ></AgGridReact>
      </div>
    </div>
  );
};
