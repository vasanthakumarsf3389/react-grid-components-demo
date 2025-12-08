import{j as e}from"./index-B6UdnZfq.js";import{r as a}from"./index-2yJIXLcc.js";import{m as z,D as w,P as H,G as U,a as W,b as B,S as k,Q as _,c as O,e as K,C as g,d as t,U as Q,W as J,T as y}from"./data-GGpjNJUP.js";import"./index-Bn05qqr6.js";const X=[40,80,120,200],p=n=>{var f;const u=a.useRef(null),c=a.useRef(null),[h,j]=a.useState(!0),[m,N]=a.useState(!1),P=a.useMemo(()=>z(n.localDataCount,n.columns),[n.localDataCount,(f=n.columns)==null?void 0:f.length]),r=()=>e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>N(!m),children:[m?"Destroy":"Render"," Data Grid"]}),n.localDataCount&&e.jsxs("button",{onClick:()=>j(!h),children:[h?"Uniform":"Non Uniform"," Row Height Applied"]}),m&&e.jsx(H,{dir:n.enableRtl?"rtl":"ltr",children:e.jsx(U,{ref:u,dataSource:n.localDataCount?P:[],...n,getRowHeight:h?null:L=>X[L.rowIndex%4],children:n.children})}),e.jsx("button",{children:"dummy navigation checking button"})]});return e.jsx("div",{ref:c,style:{height:"93vh"},children:n.isStrictMode?e.jsx(a.StrictMode,{children:n.isDialogInsideGrid?e.jsx(w,{open:!0,fullScreen:!0,target:c.current,children:r()}):r()}):n.isDialogInsideGrid?e.jsx(w,{open:!0,fullScreen:!0,target:c.current,children:r()}):r()})};try{p.displayName="LargeDataGridTest",p.__docgenInfo={description:"",displayName:"LargeDataGridTest",props:{localDataCount:{defaultValue:null,description:"",name:"localDataCount",required:!1,type:{name:"number"}},isDialogInsideGrid:{defaultValue:null,description:"",name:"isDialogInsideGrid",required:!1,type:{name:"boolean"}},isStrictMode:{defaultValue:null,description:"",name:"isStrictMode",required:!1,type:{name:"boolean"}},id:{defaultValue:{value:"React.useId()"},description:`Specifies a unique identifier for the grid component.
Provides a distinct ID for the grid instance, enabling targeted interactions, styling, or accessibility features.
Used to differentiate multiple grid instances within the same application or DOM.
@example \`\`\`tsx
<Grid
  id="employee-grid"
  dataSource={employees}
  columns={columns}
/>
\`\`\``,name:"id",required:!1,type:{name:"string"}},dataSource:{defaultValue:{value:"[]"},description:`Supplies the data to be displayed in the grid.

The data source can be provided as:
* An array of JavaScript objects
* A \`DataManager\` instance for local/remote data operations
* A \`DataResult\` object with processed data

The grid will automatically bind to this data and render rows based on the provided records.
@example \`\`\`tsx
import React from 'react';
import { Grid } from '@company/react-grid';

const GridExample: React.FC = () => {
  // Local data array
  const employees = [
    { id: 1, name: 'John Doe', role: 'Developer', salary: 75000 },
    { id: 2, name: 'Jane Smith', role: 'Designer', salary: 65000 },
  ];

  return (
    <Grid
      dataSource={employees}
    />
  );
};
\`\`\``,name:"dataSource",required:!1,type:{name:"DataManager | DataResult | unknown[]"}},columns:{defaultValue:{value:"[]"},description:`Defines the columns to be displayed in the grid.

An array of ColumnProps objects that specify how each column in the grid should be configured.
This includes properties like \`field\`, \`headerText\`, \`width\`, \`format\`, and more.
The order of columns in the array determines their display order in the grid.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={[
    { field: 'id', headerText: 'ID', width: 100, textAlign: 'Right' },
    { field: 'name', headerText: 'Employee Name', width: 200 },
    { field: 'role', headerText: 'Role', width: 150 },
    {
      field: 'salary',
      headerText: 'Salary',
      width: 150,
      format: 'C2',
      textAlign: 'Right'
    }
  ]}
/>
\`\`\``,name:"columns",required:!1,type:{name:"ColumnProps<unknown>[]"}},height:{defaultValue:{value:"'auto'"},description:`Sets the height of the grid component.

Controls the vertical size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '500px', '100%').
* \`auto\` to adjust to content.

When a fixed height is set, scrollbars appear automatically when content exceeds the height.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
/>
\`\`\``,name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:{value:"'auto'"},description:`Sets the width of the grid component.

Controls the horizontal size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '800px', '100%').
* \`auto\` to adjust to parent container.

When a fixed width is set, horizontal scrollbars appear automatically when content exceeds the width.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  width={900}
/>
\`\`\``,name:"width",required:!1,type:{name:"string | number"}},gridLines:{defaultValue:{value:"'Default'"},description:'Configures the visibility of grid lines between cells.\n\nDetermines which grid lines are displayed in the grid. Available options are:\n* `Default`: Shows horizontal lines only.\n* `None`: Displays no grid lines.\n* `Both`: Shows both horizontal and vertical grid lines.\n* `Horizontal`: Shows horizontal lines only.\n* `Vertical`: Shows vertical lines only.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  gridLines="Both"\n/>\n```',name:"gridLines",required:!1,type:{name:"string"}},enableHover:{defaultValue:{value:"true"},description:`Controls whether hover effect is applied to grid rows.

By default, rows are visually highlighted on pointer hover.
When set to false, rows retain a static appearance regardless of pointer hover movement.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHover={true}
/>
\`\`\``,name:"enableHover",required:!1,type:{name:"boolean"}},allowKeyboard:{defaultValue:{value:"true"},description:`Controls whether keyboard navigation is enabled for the Data Grid.

By default, navigation and interaction with grid elements can be performed using keyboard shortcuts and arrow keys.
When set to false, the grid's default focus navigation behavior is disable
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  allowKeyboard={true}
/>
\`\`\``,name:"allowKeyboard",required:!1,type:{name:"boolean"}},clipMode:{defaultValue:{value:"ClipMode.Ellipsis | 'Ellipsis'"},description:"Defines the cell content's overflow mode. The available modes are\n* `Clip` -  Truncates the cell content when it overflows its area.\n* `Ellipsis` -  Displays ellipsis when the cell content overflows its area.\n* `EllipsisWithTooltip` - Applies an ellipsis to overflowing cell content and displays a tooltip on hover for enhanced readability.",name:"clipMode",required:!1,type:{name:"string"}},enableAltRow:{defaultValue:{value:"true"},description:`Determines whether the \`sf-alt-row\` CSS class is added to alternate rows in the Data Grid.

When set to true, the grid adds the \`sf-alt-row\` class to alternate row elements.
This supports alternating row styles, which can improve readability in data-dense layouts.
The grid does not apply any default styling for this class. Styling must be defined externally.

When set to false, the grid does not add the \`sf-alt-row\` class to any row.
@example \`\`\`tsx
<GridComponent
  dataSource={employees}
  columns={columns}
  enableAltRow={true}
/>

// External CSS
.sf-alt-row {
  background-color: #f5f5f5;
}
\`\`\``,name:"enableAltRow",required:!1,type:{name:"boolean"}},enableRtl:{defaultValue:{value:"false"},description:`Enables right-to-left (RTL) direction for the grid.

When set to true, the grid's layout changes to support right-to-left languages like Arabic.
This includes reversing the direction of UI elements, text alignment, and scrollbars.
@private
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableRtl={true}
/>
\`\`\``,name:"enableRtl",required:!1,type:{name:"boolean"}},selectionSettings:{defaultValue:{value:"{ enabled: true, mode: 'Single', enableToggle: true }"},description:`Configures the grid's selection settings, determines whether \`Single\` or \`Multiple\` selections are allowed.
Used to customize the selection experience for user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  selectionSettings={{
    enabled: true,
    type: 'Row',
    mode: 'Multiple'
  }}
/>
\`\`\``,name:"selectionSettings",required:!1,type:{name:"SelectionSettings"}},sortSettings:{defaultValue:{value:"{ columns: [], allowUnsort: true, enabled: false, mode: 'Multiple' }"},description:`Specifies the sorting configuration for the grid, includes options to enable/disable sorting and controlling how data is ordered.
Used to customize sorting behavior for data presentation and user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  sortSettings={{
    enabled: true,
    columns: [
      { field: 'salary', direction: 'Descending' },
      { field: 'name', direction: 'Ascending' }
    ],
    allowUnsort: true
  }}
/>
\`\`\``,name:"sortSettings",required:!1,type:{name:"SortSettings"}},filterSettings:{defaultValue:{value:"{ enabled: false, columns: [], type: 'FilterBar', mode: 'Immediate', immediateModeDelay: 1500, ignoreAccent: false, operators: null, caseSensitive: false }"},description:`Specifies the filtering configuration for the grid, controlling the filter UI and behavior.
Includes options to enable/disable filtering, set the filter UI type, define custom operators, and configure case or accent sensitivity.
Used to tailor the filtering experience to match application requirements and data types.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  filterSettings={{
    enabled: true,
    type: 'FilterBar',
    ignoreAccent: true,
    caseSensitive: false
  }}
/>
\`\`\``,name:"filterSettings",required:!1,type:{name:"FilterSettings"}},searchSettings:{defaultValue:{value:"{ enabled: false, fields: [], value: undefined, operator: 'contains', caseSensitive: true, ignoreAccent: false }"},description:`Specifies the search configuration for the grid, controlling how data is searched.
Defines settings for enabling the search bar, specifying searchable fields, initial search terms, operators, and case/accent sensitivity.
Used to customize the search experience for filtering grid data.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  searchSettings={{
    enabled: true,
    fields: ['name', 'role'],
    caseSensitive: true,
    operator: 'contains',
    key: 'dev'
  }}
/>
\`\`\``,name:"searchSettings",required:!1,type:{name:"SearchSettings"}},pageSettings:{defaultValue:{value:"{ enabled: false, currentPage: 1, pageSize: 12, pageCount: 8 }"},description:`Specifies the pagination configuration for the grid, controlling how data is divided and navigated.
Includes options to enable/disable pagination, set the number of records per page, define the number of navigation links, and select the initial page.
Used to tailor the pagination UI and behavior for efficient data handling.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  pageSettings={{
    enabled: true,
    pageSize: 10,
    pageCount: 5,
  }}
/>
\`\`\``,name:"pageSettings",required:!1,type:{name:"PageSettings"}},enableHtmlSanitizer:{defaultValue:{value:"false"},description:`Controls HTML sanitization for grid content.

When set to true, the grid will sanitize any suspected untrusted HTML content before rendering it.
This helps prevent cross-site scripting (XSS) attacks by removing or neutralizing potentially malicious scripts and HTML.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHtmlSanitizer={true}
/>
\`\`\``,name:"enableHtmlSanitizer",required:!1,type:{name:"boolean"}},enableStickyHeader:{defaultValue:{value:"false"},description:`Makes the grid header remain visible during scrolling.

When enabled, column headers will "stick" to the top of the viewport and remain visible even when the user scrolls down through the grid data.
This improves usability by keeping column headers in view at all times.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
  enableStickyHeader={true}
/>
\`\`\``,name:"enableStickyHeader",required:!1,type:{name:"boolean"}},textWrapSettings:{defaultValue:{value:"{ enabled: false, wrapMode: 'Both' }"},description:`Specifies the text wrapping configuration for the grid, controlling how text is displayed.
Defines the wrap mode to determine which grid sections (header, content, or both) apply text wrapping.
Used to customize text display for readability and layout optimization.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  textWrapSettings={{
    enabled: true,
    wrapMode: 'Content'
  }}
/>
\`\`\``,name:"textWrapSettings",required:!1,type:{name:"TextWrapSettings"}},rowHeight:{defaultValue:{value:"50"},description:`Sets a fixed height for all rows in the grid.

This property sets a uniform height for all rows in the grid. When set to a number, all rows will have exactly that height in pixels.
When null (default), row height is determined automatically based on content and styles.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  rowHeight={40}
/>
\`\`\``,name:"rowHeight",required:!1,type:{name:"number"}},getRowHeight:{defaultValue:null,description:"",name:"getRowHeight",required:!1,type:{name:"(props: Partial<RowInfo<unknown>>) => number"}},theme:{defaultValue:{value:"Theme.Material3"},description:"",name:"theme",required:!1,type:{name:"Theme"}},virtualizationSettings:{defaultValue:{value:"{enabled true, type: VirtualDomType.Both, viewPortBuffer: { rows: 5, columns: 5 }, scrollMode: ScrollMode.Auto, preventMaxRenderedRows: false }"},description:"",name:"virtualizationSettings",required:!1,type:{name:"VirtualizationSettings"}},children:{defaultValue:{value:"null"},description:`Child components for the grid.

Allows rendering of child elements within the grid component structure.
@private`,name:"children",required:!1,type:{name:"ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>> | ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>>[] | ReactNode"}},valueFormatterService:{defaultValue:null,description:`Service for value formatting
@private`,name:"valueFormatterService",required:!1,type:{name:"IValueFormatter"}},serviceLocator:{defaultValue:null,description:`Service locator for dependency injection
@private`,name:"serviceLocator",required:!1,type:{name:"ServiceLocator"}},localeObj:{defaultValue:null,description:`Localization object
@private`,name:"localeObj",required:!1,type:{name:"IL10n"}},locale:{defaultValue:{value:"'en-US'"},description:`Sets the localization language for the grid.

Determines the language used for all text in the grid interface, including built-in messages, button labels, and other UI text.
The grid must have the corresponding locale definitions loaded to use a specific locale.
@private`,name:"locale",required:!1,type:{name:"string"}},query:{defaultValue:{value:"new Query()"},description:`Defines a query to execute against the data source.

Allows you to apply a predefined \`Query\` object to the data source, which can include filtering, sorting, paging, and other data operations.
This is especially useful when working with remote data sources or when you need complex data operations.
@example \`\`\`tsx
import { Query } from '@company/data';

const GridExample: React.FC = () => {
  // Create a query to filter and sort data
  const query = new Query()
    .where('salary', 'greaterThan', 50000)
    .sortBy('name', 'ascending');

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      query={query}
    />
  );
};
\`\`\``,name:"query",required:!1,type:{name:"Query"}},emptyRecordTemplate:{defaultValue:{value:"null"},description:`Template for displaying content when the grid has no records.

Customizes what is displayed when the grid has no data to show. This can be provided as a string, React element, or a function that returns content.
It provides better user experience by explaining why the grid is empty or suggesting actions to take.
@example \`\`\`tsx
const GridExample: React.FC = () => {
  // Custom template as a React element
  const emptyTemplate = (
    <div className="empty-grid-message">
      <img src="/assets/empty-state.svg" alt="No data" />
      <h3>No employees found</h3>
      <p>Try adjusting your search or filters, or add a new employee.</p>
      <button className="btn btn-primary">Add Employee</button>
    </div>
  );

  return (
    <Grid
      dataSource={[]}
      columns={columns}
      emptyRecordTemplate={emptyTemplate}
    />
  );
};
\`\`\``,name:"emptyRecordTemplate",required:!1,type:{name:"string | ComponentType<void> | ReactElement<unknown, string | JSXElementConstructor<any>>"}},rowTemplate:{defaultValue:{value:"null"},description:`Specifies a custom template for rendering rows in the grid.

Allows complete customization of row rendering by providing a template that replaces the default row structure.
This can be a string template, React element, or function that returns the row content.
@example \`\`\`tsx
const CustomRowTemplate = (props: any) => {
  return (
    <tr>
      <td colSpan={3}>
        <div className="custom-row">
          <h4>{props.name}</h4>
          <p>Role: {props.role} | Salary: {props.salary}</p>
        </div>
      </td>
    </tr>
  );
};

<Grid
  dataSource={employees}
  columns={columns}
  rowTemplate={CustomRowTemplate}
/>
\`\`\``,name:"rowTemplate",required:!1,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentType<unknown>"}},aggregates:{defaultValue:{value:"null"},description:`Configures summary rows with aggregate functions.

The aggregates property allows you to add summary rows to the grid, such as totals, averages, or counts.
Each aggregate row can contain multiple aggregations that apply functions like sum, average, min, max, or count to specific columns.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  aggregates={[
    {
      columns: [
        {
          field: 'salary',
          type: 'Sum',
          format: 'C2',
          footerTemplate: 'Total Salary: \${Sum}'
        },
        {
          field: 'id',
          type: 'Count',
          footerTemplate: 'Total Employees: \${Count}'
        }
      ]
    }
  ]}
/>
\`\`\``,name:"aggregates",required:!1,type:{name:"AggregateRowProps[]"}},editSettings:{defaultValue:{value:"{ allowAdd: false, allowEdit: false, allowDelete: false, mode: 'Normal', editOnDoubleClick: true, confirmOnEdit: true, confirmOnDelete: false, newRowPosition: 'Top' }"},description:`Configures the editing behavior of the Data Grid.

The editSettings property enables and controls editing functionality.
It defines which editing operations are permitted, such as adding, editing, and deleting rows,
and specifies the editing mode to be used.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true,
    mode: 'Inline',
    confirmOnDelete: true
  }}
/>
\`\`\``,name:"editSettings",required:!1,type:{name:"EditSettings<unknown>"}},toolbar:{defaultValue:{value:"null"},description:`Configures the grid toolbar with predefined or custom items.

The toolbar property allows you to add a toolbar to the grid with both predefined actions (add, edit, delete, update, cancel, search)
and custom items. Custom items can include text, template content, and click handlers.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true
  }}
/>
\`\`\``,name:"toolbar",required:!1,type:{name:"(string | ToolbarItemProps)[]"}},rowClass:{defaultValue:{value:"-"},description:`Applies a CSS class to each grid row either globally or conditionally.
Accepts a static class name or a callback function that returns a class name based on row context.

The callback receives a \`RowClassProps\` object with the following properties:
* \`rowType\` – Identifies the structural role of the row: \`Header\`, \`Content\`, or \`Aggregate\`. Useful for styling header, data, or summary rows.
* \`rowIndex\` – The zero-based index of the row.
* \`data\` – The full data object for the row, enabling conditional styling based on field values.
@param props - Optional event payload containing row type, row index, and complete row data.
@returns A CSS class name to apply to the row.
@example const GridComponent = () => {
  const handleRowClass = (props?: RowClassProps): string => {
    if (props?.rowType === RowType.Header) return 'Header-row';
    if (props?.rowType === RowType.Aggregate) return 'summary-row';
    return '';
  };

  return (
    <Grid
      dataSource={data}
      rowClass={handleRowClass}
    />
  );
};`,name:"rowClass",required:!1,type:{name:"string | ((props?: RowClassProps<unknown>) => string)"}},loadingIndicatorType:{defaultValue:{value:"{indicatorType: IndicatorType.Spinner}"},description:"Configures the Loading Indicator of the Grid.",name:"loadingIndicatorType",required:!1,type:{name:"enum",value:[{value:'"Spinner"'},{value:'"Shimmer"'}]}},onGridRenderStart:{defaultValue:null,description:`Fires at the start of grid initialization before data processing.
Useful for initial configurations or showing loading indicators.
@event onGridRenderStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRender = () => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={data}
      onGridRenderStart={handleGridRender}
    />
  );
};
\`\`\``,name:"onGridRenderStart",required:!1,type:{name:"() => void"}},onGridInit:{defaultValue:null,description:`Fires after the grid is fully initialized and rendered in the DOM.
Ideal for DOM-related operations or interacting with the grid.
@private
@event onGridInit`,name:"onGridInit",required:!1,type:{name:"() => void"}},onDataLoadStart:{defaultValue:null,description:`Fires after data is received but before binding to the grid.
Allows data modification or filtering before rendering.
@private
@event onDataLoadStart`,name:"onDataLoadStart",required:!1,type:{name:"(event: DataLoadStartEvent | ReturnType) => void"}},onDataLoad:{defaultValue:null,description:`Fires after data is successfully bound to the grid.
Suitable for actions requiring fully loaded data.
@event onDataLoad
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataLoaded = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onDataLoad={handleDataLoaded}
      />
    </div>
  );
};
\`\`\``,name:"onDataLoad",required:!1,type:{name:"() => void"}},onGridRenderComplete:{defaultValue:null,description:`Fired when the grid is fully loaded and ready for user interaction.
Suitable for actions requiring only on grid initially fully loaded data.
@event onGridRenderComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridReady = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onGridRenderComplete={handleGridReady}
      />
    </div>
  );
};
\`\`\``,name:"onGridRenderComplete",required:!1,type:{name:"() => void"}},onHeaderCellRender:{defaultValue:null,description:`Fires for each header cell during grid rendering.
Enables customization of header cell appearance or content.
@private
@event onHeaderCellRender`,name:"onHeaderCellRender",required:!1,type:{name:"(event: HeaderCellRenderEvent) => void"}},onAggregateCellRender:{defaultValue:null,description:`Fires for each aggregate cell during grid rendering.
Allows customization of aggregate cell appearance or content.
@private
@event onAggregateCellRender`,name:"onAggregateCellRender",required:!1,type:{name:"(event: AggregateCellRenderEvent<unknown>) => void"}},onCellRender:{defaultValue:null,description:`Fires for each data cell during grid rendering.
Enables customization of data cell appearance or content.
@private
@event onCellRender`,name:"onCellRender",required:!1,type:{name:"(event: CellRenderEvent<unknown>) => void"}},onRowRender:{defaultValue:null,description:`Fires for each row when bound with data.
Allows customization of row appearance or behavior.
@private
@event onRowRender`,name:"onRowRender",required:!1,type:{name:"(event: RowRenderEvent<unknown>) => void"}},onAggregateRowRender:{defaultValue:null,description:`Fires for each aggregate row when bound with data.
Enables customization of aggregate row appearance or behavior.
@private
@event onAggregateRowRender`,name:"onAggregateRowRender",required:!1,type:{name:"(event: AggregateRowRenderEvent<unknown>) => void"}},onError:{defaultValue:null,description:`Fires when grid operations like sorting or filtering fail.
Provides error details for handling and user feedback.
@event onError
@example \`\`\`tsx
const GridComponent = () => {
  const handleActionFailure = (event: Error) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onError={handleActionFailure}
    />
  );
};
\`\`\``,name:"onError",required:!1,type:{name:"(event: Error) => void"}},onRefreshStart:{defaultValue:null,description:`Fires when grid refresh.
@private`,name:"onRefreshStart",required:!1,type:{name:"(event: Object) => void"}},onRefresh:{defaultValue:null,description:`Fired when the grid data is refreshed or updated.
@event onRefresh
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRefresh = () => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onRefresh={handleGridRefresh}
    />
  );
};
\`\`\``,name:"onRefresh",required:!1,type:{name:"() => void"}},onDataRequest:{defaultValue:null,description:`Fires when grid data state changes due to sorting or paging.
Monitors and responds to changes in grid state.
@event onDataRequest
@example \`\`\`tsx
const GridComponent = () => {
  const [currentState, setCurrentState] = useState({});
  const handleDataStateRequest = (event: DataRequestEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={data}
      onDataRequest={handleDataStateRequest}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onDataRequest",required:!1,type:{name:"(event: DataRequestEvent) => void"}},onDataChangeRequest:{defaultValue:null,description:`Fires when the grid's data source is changed.
Monitors and responds to updates in the grid's data source.
@event onDataChangeRequest
@example \`\`\`tsx
const GridComponent = () => {
  const [currentData, setCurrentData] = useState([]);
  const handleDataChangeRequest = (event: DataChangeRequestEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={currentData}
      onDataChangeRequest={handleDataChangeRequest}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onDataChangeRequest",required:!1,type:{name:"(event: DataChangeRequestEvent<unknown>) => void"}},onGridDestroy:{defaultValue:null,description:`Fires when the grid component is destroyed.
@private
@event onGridDestroy`,name:"onGridDestroy",required:!1,type:{name:"() => void"}},onFilterStart:{defaultValue:null,description:`Fires when a filtering operation begins on the grid.
Allows customization or cancellation of filter behavior.
@private
@event onFilterStart`,name:"onFilterStart",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilter:{defaultValue:null,description:`Fires after a filtering operation completes on the grid.
Provides filter state details for post-filter actions.
@event onFilter
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterEnd = (event: FilterEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilter={handleFilterEnd}
      filterSettings={{ enabled: true }}
    />
  );
};
\`\`\``,name:"onFilter",required:!1,type:{name:"(event: FilterEvent) => void"}},onSortStart:{defaultValue:null,description:`Fires when a sorting operation begins on the grid.
Allows customization or cancellation of sort behavior.
@private
@event onSortStart`,name:"onSortStart",required:!1,type:{name:"(event: SortEvent) => void"}},onSort:{defaultValue:null,description:`Fires after a sorting operation completes on the grid.
Provides sort state details for post-sort actions.
@event onSort
@example \`\`\`tsx
const GridComponent = () => {
  const handleSortEnd = (event: SortEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onSort={handleSortEnd}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onSort",required:!1,type:{name:"(event: SortEvent) => void"}},onSearchStart:{defaultValue:null,description:`Fires when a searching operation begins on the grid.
Allows customization or addition of search conditions.
@private
@event onSearchStart`,name:"onSearchStart",required:!1,type:{name:"(event: SearchEvent) => void"}},onSearch:{defaultValue:null,description:`Fires after a searching operation completes on the grid.
Provides search result details for post-search actions.
@event onSearch
@example \`\`\`tsx
const GridComponent = () => {
  const handleSearchEnd = (event: SearchEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={productData}
        onSearch={handleSearchEnd}
        toolbar={['Search']}
        searchSettings={{ enabled: true }}
      />
    </div>
  );
};
\`\`\``,name:"onSearch",required:!1,type:{name:"(event: SearchEvent) => void"}},onRowDoubleClick:{defaultValue:null,description:`Fires when a grid row is clicked.
Provides details about the clicked row for custom actions.
@event onRowDoubleClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDoubleClick = (event: RecordDoubleClickEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={customerData}
        onRowDoubleClick={handleRowDoubleClick}
      />
    </div>
  );
};
\`\`\``,name:"onRowDoubleClick",required:!1,type:{name:"(event: RecordDoubleClickEvent<unknown>) => void"}},onToolbarItemClick:{defaultValue:null,description:`Fires when a toolbar item is clicked.
Enables custom actions for toolbar buttons.
@event onToolbarItemClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleToolbarClick = (event: ClickEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onToolbarItemClick={handleToolbarClick}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Print']}
    >
      <Toolbar />
    </Grid>
  );
};
\`\`\``,name:"onToolbarItemClick",required:!1,type:{name:"(event: ToolbarClickEvent) => void"}},onCellFocus:{defaultValue:null,description:`Fires when a grid cell gains focus.
Provides details about the focused cell.
@event onCellFocus
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellFocused = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onCellFocus={handleCellFocused}
    />
  );
};
\`\`\``,name:"onCellFocus",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellClick:{defaultValue:null,description:`Fires when a grid cell is clicked.
Provides details about the clicked cell.
@event onCellClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellClick = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={orderData}
        onCellClick={handleCellClick}
      />
    </div>
  );
};
\`\`\``,name:"onCellClick",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellFocusStart:{defaultValue:null,description:`Fires before a grid cell gains focus.
Allows validation or modification of focus behavior.
@private
@event onCellFocusStart`,name:"onCellFocusStart",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onRowSelecting:{defaultValue:null,description:`Fires before a row is selected.
Allows validation or cancellation of row selection.
@private
@event onRowSelecting`,name:"onRowSelecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowSelect:{defaultValue:null,description:`Fires after a row is successfully selected.
Provides details about the selected row.
@event onRowSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowSelected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div className="app-container">
      <Grid
        dataSource={customerData}
        onRowSelect={handleRowSelected}
      />
    </div>
  );
};
\`\`\``,name:"onRowSelect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onRowDeselecting:{defaultValue:null,description:`Fires before a row is deselected.
Allows validation or cancellation of row deselection.
@private
@event onRowDeselecting`,name:"onRowDeselecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowDeselect:{defaultValue:null,description:`Fires after a row is successfully deselected.
Provides details about the deselected row.
@event onRowDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDeselected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onRowDeselect={handleRowDeselected}
      />
    </div>
  );
};
\`\`\``,name:"onRowDeselect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onPageChangeStart:{defaultValue:null,description:`Event triggered before the paging operation start.
@private
@event onPageChangeStart`,name:"onPageChangeStart",required:!1,type:{name:"(event: PageEvent) => void"}},onPageChange:{defaultValue:null,description:`Event triggered after a paging operation is completed on the grid.
@event onPageChange
@example \`\`\`tsx
const GridComponent = () => {
  const handlePageChangeEnd = (event: PageEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onPageChange={handlePageChangeEnd}
      />
    </div>
  );
};
\`\`\``,name:"onPageChange",required:!1,type:{name:"(event: PageEvent) => void"}},onRowEditStart:{defaultValue:null,description:`Fires when editing begins on a grid record.
Allows validation or field modification before editing.
@event onRowEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowEdit = (event: EditEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowEdit}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowEditStart",required:!1,type:{name:"(event: RowEditEvent<unknown>) => void"}},onRowAddStart:{defaultValue:null,description:`Fires when the process of adding a new row starts.
@event onRowAddStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowAdd = (event: RowAddEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowadd}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowAddStart",required:!1,type:{name:"(event: RowAddEvent<unknown>) => void"}},onFormRender:{defaultValue:null,description:`Fires when the edit or add form is fully loaded and ready for user input.
@event onFormRender
@example \`\`\`tsx
const GridComponent = () => {
  const handleFormReady = (event: FormRenderEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onFormRender={handleFormReady}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onFormRender",required:!1,type:{name:"(event: FormRenderEvent<unknown>) => void"}},onDataChangeStart:{defaultValue:null,description:`Fires when a create, update, or delete operation is started.
@event onDataChangeStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeStart = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeStart={handleDataChangeStart}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeStart",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeComplete:{defaultValue:null,description:`Fires when a create, update, or delete operation is completed.
@event onDataChangeComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeComplete = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeComplete={handleDataChangeComplete}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeComplete",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeCancel:{defaultValue:null,description:`Fires when a CRUD operation is cancelled.
@event onDataChangeCancel
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeCancel = (event: FormCancelEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeCancel={handleDataChangeCancel}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeCancel",required:!1,type:{name:"(event: FormCancelEvent<unknown>) => void"}}}}}catch{}const te={title:"Grid/VirtualGridBase",component:p,parameters:{layout:"fullscreen",docs:{description:{component:"A fully configurable Grid component with performance comparison capabilities."}}},argTypes:{localDataCount:{control:"select",options:["1000","10000","100000"],description:"Grid Local DataSource Count"}}},M=B(100),$=[{columns:W(M.length)}],o={args:{localDataCount:1e5,columns:M,aggregates:$,editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},pageSettings:{enabled:!0,pageSize:1e5},height:"100%"}},i={args:{dataSource:new O({url:"https://ej2services.syncfusion.com/react/hotfix/api/UrlDataSource",adaptor:new Q}),query:new _().addParams("dataCount","100000"),toolbar:["Search"],children:e.jsxs(g,{children:[e.jsx(t,{field:"EmployeeID",visible:!1,headerText:"Employee ID",isPrimaryKey:!0,width:"130"}),e.jsx(t,{field:"Employees",headerText:"Employee Name",width:"230",clipMode:"EllipsisWithTooltip"}),e.jsx(t,{field:"Designation",headerText:"Designation",width:"170",clipMode:"EllipsisWithTooltip"}),e.jsx(t,{field:"Mail",headerText:"Mail",width:"230"}),e.jsx(t,{field:"Location",headerText:"Location",width:"140"}),e.jsx(t,{field:"Status",headerText:"Status",width:"130"}),e.jsx(t,{field:"Trustworthiness",headerText:"Trustworthiness",width:"160"}),e.jsx(t,{field:"Rating",headerText:"Rating",width:"220"}),e.jsx(t,{field:"Software",headerText:"Software Proficiency",width:"180",format:"C2"}),e.jsx(t,{field:"CurrentSalary",headerText:"Current Salary",width:"160",format:"C2"}),e.jsx(t,{field:"Address",headerText:"Address",width:"240",clipMode:"EllipsisWithTooltip"})]}),selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},virtualizationSettings:{enableCache:!1,scrollMode:k.Virtual},height:"100%"}},l={args:{dataSource:new O({url:"https://ej2services.syncfusion.com/react/hotfix/api/GridWebAPIService",adaptor:new J}),columns:[{field:"OrderID",headerText:"OrderID",isPrimaryKey:!0,width:"130"},{field:"CustomerID",headerText:"CustomerID",width:"230",clipMode:"EllipsisWithTooltip"},{field:"ShipCity",headerText:"ShipCity",width:"230"},{field:"EmployeeID",headerText:"EmployeeID",width:"130",clipMode:"EllipsisWithTooltip"},{field:"EmployeeName",headerText:"EmployeeName",width:"230",clipMode:"EllipsisWithTooltip",allowFilter:!1,allowSort:!1},{field:"Designation",headerText:"Designation",width:"230",clipMode:"EllipsisWithTooltip",allowFilter:!1,allowSort:!1},{field:"CurrentSalary",headerText:"CurrentSalary",width:"130",clipMode:"EllipsisWithTooltip",allowFilter:!1,allowSort:!1}],toolbar:["Search"],selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},virtualizationSettings:{scrollMode:k.Virtual},height:"100%"}},d={args:{dataSource:K,children:e.jsxs(g,{children:[e.jsx(t,{headerText:"Employee Image",width:"180",textAlign:y.Center,field:"EmployeeID"}),e.jsx(t,{headerText:"Employee Details",width:"300",textAlign:y.Left,field:"FirstName"})]}),className:"row-template",toolbar:["Search"],selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},height:"100%",rowTemplate:n=>{const u=`https://npmci-react.syncfusion.com/development-react-ui/images/grid/${n.EmployeeID}.png`;return e.jsxs("tr",{className:"templateRow",children:[e.jsx("td",{className:"photo",children:e.jsx("img",{src:u,alt:n.EmployeeID.toString()})}),e.jsx("td",{className:"details",children:e.jsxs("table",{className:"CardTable",cellPadding:3,cellSpacing:2,children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"30%"}}),e.jsx("col",{style:{width:"10%"}})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"CardHeader",children:"First Name"}),e.jsx("td",{children:":"}),e.jsx("td",{children:n.FirstName})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"CardHeader",children:"Last Name"}),e.jsx("td",{children:":"}),e.jsx("td",{children:n.LastName})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"CardHeader",children:"Title"}),e.jsx("td",{children:":"}),e.jsx("td",{children:n.Title})]})]})]})})]})}}},s={args:{dataSource:[{OrderID:10248,CustomerID:"VINET",Freight:32.38,OrderDate:new Date("1996-07-04")},{OrderID:10249,CustomerID:"TOMSP",Freight:11.61,OrderDate:new Date("1996-07-05")},{OrderID:10250,CustomerID:"HANAR",Freight:65.83,OrderDate:new Date("1996-07-08")},{OrderID:10251,CustomerID:"VICTE",Freight:41.34,OrderDate:new Date("1996-07-08")},{OrderID:10252,CustomerID:"SUPRD",Freight:51.3,OrderDate:new Date("1996-07-09")}],height:400,width:800,filterSettings:{enabled:!0,type:"FilterBar",columns:[{field:"CustomerID",operator:"contains",value:"VI",predicate:"or"},{field:"OrderID",operator:"greaterThan",value:10249,predicate:"or"},{field:"OrderDate",operator:"equal",value:new Date("1996-07-08"),predicate:"or"}]},children:e.jsxs(g,{children:[e.jsx(t,{field:"OrderID",headerText:"Order ID",width:"120",allowFilter:!0,type:"number"}),e.jsx(t,{field:"CustomerID",headerText:"Customer ID",width:"150",allowFilter:!0,type:"string"}),e.jsx(t,{field:"Freight",headerText:"Freight",width:"100",allowFilter:!0,type:"number"}),e.jsx(t,{field:"OrderDate",headerText:"OrderDate",type:"date",format:"M/d/yyyy",width:"100",allowFilter:!0})]}),pageSettings:{enabled:!0}}};var S,C,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    localDataCount: 100000,
    columns: columns,
    aggregates: aggregates,
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    selectionSettings: {
      mode: 'Single'
    },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 100000
    },
    height: '100%'
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var D,x,b;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    dataSource: new DataManager({
      url: 'https://ej2services.syncfusion.com/react/hotfix/api/UrlDataSource',
      adaptor: new UrlAdaptor()
    }),
    query: new Query().addParams('dataCount', '100000'),
    toolbar: ['Search'],
    children: <Columns>\r
            <Column field='EmployeeID' visible={false} headerText='Employee ID' isPrimaryKey={true} width='130'></Column>\r
            <Column field='Employees' headerText='Employee Name' width='230' clipMode='EllipsisWithTooltip' />\r
            <Column field='Designation' headerText='Designation' width='170' clipMode='EllipsisWithTooltip' />\r
            <Column field='Mail' headerText='Mail' width='230'></Column>\r
            <Column field='Location' headerText='Location' width='140'></Column>\r
            <Column field='Status' headerText='Status' width='130'></Column>\r
            <Column field='Trustworthiness' headerText='Trustworthiness' width='160'></Column>\r
            <Column field='Rating' headerText='Rating' width='220' />\r
            <Column field='Software' headerText='Software Proficiency' width='180' format='C2' />\r
            <Column field='CurrentSalary' headerText='Current Salary' width='160' format='C2'></Column>\r
            <Column field='Address' headerText='Address' width='240' clipMode="EllipsisWithTooltip"></Column>\r
        </Columns>,
    selectionSettings: {
      mode: 'Single'
    },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    virtualizationSettings: {
      enableCache: false,
      scrollMode: ScrollMode.Virtual
    },
    height: '100%'
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,R,F;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    dataSource: new DataManager({
      url: 'https://ej2services.syncfusion.com/react/hotfix/api/GridWebAPIService',
      adaptor: new WebApiAdaptor()
    }),
    columns: [{
      field: 'OrderID',
      headerText: 'OrderID',
      isPrimaryKey: true,
      width: '130'
    }, {
      field: 'CustomerID',
      headerText: 'CustomerID',
      width: '230',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'ShipCity',
      headerText: 'ShipCity',
      width: '230'
    }, {
      field: 'EmployeeID',
      headerText: 'EmployeeID',
      width: '130',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'EmployeeName',
      headerText: 'EmployeeName',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowFilter: false,
      allowSort: false
    }, {
      field: 'Designation',
      headerText: 'Designation',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowFilter: false,
      allowSort: false
    }, {
      field: 'CurrentSalary',
      headerText: 'CurrentSalary',
      width: '130',
      clipMode: 'EllipsisWithTooltip',
      allowFilter: false,
      allowSort: false
    }],
    toolbar: ['Search'],
    selectionSettings: {
      mode: 'Single'
    },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    // scrollMode: ScrollMode.Virtual,
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
    },
    height: '100%'
  }
}`,...(F=(R=l.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var E,I,G;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData,
    children: <Columns>\r
            <Column headerText='Employee Image' width='180' textAlign={TextAlign.Center} field='EmployeeID' />\r
            <Column headerText='Employee Details' width='300' textAlign={TextAlign.Left} field='FirstName' />\r
        </Columns>,
    className: 'row-template',
    toolbar: ['Search'],
    selectionSettings: {
      mode: 'Single'
    },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    // scrollMode: ScrollMode.Virtual, // server-remote data with dynamic rowheight not supported in competitors as well.
    height: '100%',
    rowTemplate: (props: typeof employeeData[0]) => {
      // Custom row template to display employee image and details.
      const src = \`https://npmci-react.syncfusion.com/development-react-ui/images/grid/\${props['EmployeeID']}.png\`;
      return <tr className="templateRow">\r
                    <td className="photo">\r
                        <img src={src} alt={props['EmployeeID'].toString()} />\r
                    </td>\r
                    <td className="details">\r
                        <table className="CardTable" cellPadding={3} cellSpacing={2}>\r
                            <colgroup>\r
                                <col style={{
                width: "30%"
              }} />\r
                                <col style={{
                width: "10%"
              }} />\r
                            </colgroup>\r
                            <tbody>\r
                                <tr>\r
                                    <td className="CardHeader">First Name</td>\r
                                    <td>:</td>\r
                                    <td>{props.FirstName}</td>\r
                                </tr>\r
                                <tr>\r
                                    <td className="CardHeader">Last Name</td>\r
                                    <td>:</td>\r
                                    <td>{props.LastName}</td>\r
                                </tr>\r
                                <tr>\r
                                    <td className="CardHeader">Title</td>\r
                                    <td>:</td>\r
                                    <td>{props.Title}</td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                    </td>\r
                </tr>;
    }
  }
}`,...(G=(I=d.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var A,q,V;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    dataSource: [{
      OrderID: 10248,
      CustomerID: 'VINET',
      Freight: 32.38,
      OrderDate: new Date('1996-07-04')
    }, {
      OrderID: 10249,
      CustomerID: 'TOMSP',
      Freight: 11.61,
      OrderDate: new Date('1996-07-05')
    }, {
      OrderID: 10250,
      CustomerID: 'HANAR',
      Freight: 65.83,
      OrderDate: new Date('1996-07-08')
    }, {
      OrderID: 10251,
      CustomerID: 'VICTE',
      Freight: 41.34,
      OrderDate: new Date('1996-07-08')
    }, {
      OrderID: 10252,
      CustomerID: 'SUPRD',
      Freight: 51.30,
      OrderDate: new Date('1996-07-09')
    }],
    height: 400,
    width: 800,
    // filterSettings: { 
    //     enabled: true,
    //     caseSensitive: true,
    //     columns: [] 
    // },
    filterSettings: {
      enabled: true,
      type: 'FilterBar' as FilterType,
      // showFilterBarStatus: true,
      columns: [{
        field: 'CustomerID',
        operator: 'contains',
        value: 'VI',
        predicate: 'or'
      }, {
        field: 'OrderID',
        operator: 'greaterThan',
        value: 10249,
        predicate: 'or'
      }, {
        field: 'OrderDate',
        operator: 'equal',
        value: new Date('1996-07-08') as any,
        predicate: 'or'
      }]
    },
    children: <Columns>\r
            <Column field="OrderID" headerText="Order ID" width="120" allowFilter={true} type="number" />\r
            <Column field="CustomerID" headerText="Customer ID" width="150" allowFilter={true} type="string" />\r
            <Column field="Freight" headerText="Freight" width="100" allowFilter={true} type="number" />\r
            <Column field="OrderDate" headerText="OrderDate" type="date" format="M/d/yyyy" width="100" allowFilter={true} />\r
        </Columns>,
    pageSettings: {
      enabled: true
    }

    // // dataSource: dataSource,
    // height: 400,
    // width: 800,
    // onGridRenderStart: () => console.log('onGridRenderStart'),
    // onGridInit: () => console.log('onGridInit'),
    // onDataLoadStart: () => console.log('onDataLoadStart'),
    // onHeaderCellRender: () => console.log('onHeaderCellRender'),
    // onCellRender: () => console.log('onCellRender'),
    // onRowRender: () => console.log('onRowRender'),
    // onDataLoad: () => console.log('onDataLoad'),
    // children: (<Columns>
    //     <Column field="OrderID" headerText="Order ID" width="120" />
    //     <Column field="CustomerID" headerText="Customer ID" width="150" />
    //     <Column field="Freight" headerText="Freight" width="100" />
    //     <Column field="ShipCountry" headerText="Ship Country" width="150" />
    // </Columns>)

    // dataSource: sampleData,
    // height: 400,
    // width: 800,
    // onGridRenderStart: () => console.log('onGridRenderStart'),
    // onGridInit: () => console.log('onGridInit'),
    // onDataLoadStart: () => console.log('onDataLoadStart'),
    // onDataLoad: () => console.log('onDataLoad'),
    // onHeaderCellRender: () => console.log('onHeaderCellRender'),
    // onCellRender: () => console.log('onCellRender'),
    // onRowRender: () => console.log('onRowRender'),
    // rowClass: '',
    // children: (<Columns>
    //     <Column field="OrderID" headerText="Order ID" width="120" cellClass={(_props) => ''} />
    //     <Column field="CustomerID" headerText="Customer ID" width="150" cellClass={''} />
    //     <Column field="Freight" headerText="Freight" width="100" cellClass={(props) => props.cellType === CellType.Content ? 'contentcellfunctionclass' : ''} />
    //     <Column field="ShipCountry" headerText="Ship Country" width="150" cellClass={'contentcellstringclass'} />
    // </Columns>)

    // dataSource: sampleData,
    // enableStickyHeader: false,
    // enableRtl: true,
    // // scrollMode:ScrollMode.Virtual,
    // sortSettings: {enabled: true},
    // height: 300,
    // width: 300,
    // // onSort:onSort,
    // // onDataLoad:onDataLoad,
    // // virtualSettings:virtualSettings,
    // virtualizationSettings: {enableCache: false, scrollMode: ScrollMode.Virtual},
    // pageSettings: {pageSize: 20},
    // getRowHeight: () => 50,
    // aggregates: [{columns: [{field: 'Freight', type: 'Sum'}]}],
    // children: (<Columns>
    //     <Column field="OrderID" headerText="Order ID" />
    //     <Column field="ShipName" headerText="Ship Name" />
    //     <Column field="ShipCity" headerText="Ship City" />
    //     <Column field="CustomerID" headerText="Customer ID" />
    //     <Column field="Freight" headerText="Freight" />
    //     <Column field="ShipCountry" headerText="Ship Country" />
    //     <Column field="EmployeeName" headerText="Employee Name" />
    //     <Column field="ShipVia" headerText="Ship Via" />
    //     <Column field="OrderDate" headerText="Order Date" format="yMd" />
    //     <Column field="ShippedDate" headerText="Shipped Date" format="yMd" />
    //     <Column field="IsShipped" headerText="Is Shipped" type="boolean" />
    // </Columns>)

    // dataSource: [
    //     { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, ShipCountry: 'France' },
    //     { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61, ShipCountry: 'Germany' },
    //     { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83, ShipCountry: 'France' },
    //     { OrderID: 10251, CustomerID: 'TOMSP', Freight: 11.61, ShipCountry: 'Germany' },
    //     { OrderID: 10252, CustomerID: 'HANAR', Freight: 65.83, ShipCountry: 'France' }
    // ],
    // rowTemplate: (<tr><td>OrderID</td><td>EmployeeID</td></tr>),
    // children: (<Columns>
    //     <Column field="OrderID" headerText="Order ID" />
    //     <Column field="EmployeeID" headerText="Employee ID" />
    // </Columns>)

    // dataSource: [],
    // sortSettings: { enabled: true },
    // filterSettings: { enabled: true },
    // pageSettings: { enabled: true, pageSize: 8, pageCount: 4 },
    // columns: [
    //     {field: 'TaskID', headerText: 'ID', type: undefined, textAlign: TextAlign.Right, width: 60}, //, filter: {filterBarType: FilterBarType.NumericTextBox}
    //     {field: 'Priority', headerText: 'Priority', width: 100}
    // ],
    // // children: (<Columns>
    // //     <Column field="TaskID" headerText="ID" type={undefined} textAlign={TextAlign.Right} width={60} filter={{ filterBarType: FilterBarType.NumericTextBox }} />
    // //     <Column field="Priority" headerText="Priority" width={100} />
    // // </Columns>)

    // dataSource: [
    //     { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, OrderDate: new Date('1996-07-04') },
    //     { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61, OrderDate: new Date('1996-07-05') },
    //     { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83, OrderDate: new Date('1996-07-08') },
    //     { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34, OrderDate: new Date('1996-07-08') },
    //     { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.30, OrderDate: new Date('1996-07-09') }
    // ],
    // height: 400,
    // width: 800,
    // filterSettings: { enabled: true, type: 'FilterBar', enableFilterBarOperators: true },
    // children: (<Columns>
    //     <Column field="OrderID" headerText="Order ID" width="120" allowFilter={true} type="number" filter={{ filterBarType: FilterBarType.NumericTextBox }} />
    //     <Column field="CustomerID" headerText="Customer ID" width="150" allowFilter={true} type="string" />
    //     <Column field="Freight" headerText="Freight" width="100" allowFilter={true} type="number" filter={{ filterBarType: FilterBarType.NumericTextBox }} />
    //     <Column field="OrderDate" headerText="OrderDate" type="date" format="M/d/yyyy" width="130" allowFilter={true} filter={{ filterBarType: FilterBarType.DatePicker }} />
    // </Columns>)

    // dataSource: Array.from({ length: 2 }, (_, i) => ({
    //     OrderID: 10000 + i,
    //     CustomerID: \`CUST\${i}\`,
    //     Freight: Math.random() * 100,
    //     ShipCountry: ['USA', 'UK', 'Germany', 'France', 'Brazil'][i % 5],
    //     Field1: 'Data1', Field2: 'Data2', Field3: 'Data3', Field4: 'Data4',
    //     Field5: 'Data5', Field6: 'Data6', Field7: 'Data7', Field8: 'Data8'
    // })),
    // height: 400,
    // width: 500,
    // // virtualizationSettings: {enabled: false},
    // children: (<Columns>
    //     <Column field="OrderID" headerText="Order ID" width="120" />
    //     <Column field="CustomerID" headerText="Customer ID" width="150" />
    //     <Column field="Freight" headerText="Freight" width="100" />
    //     <Column field="ShipCountry" headerText="Ship Country" width="150" />
    //     <Column field="Field1" headerText="Field 1" width="120" />
    //     <Column field="Field2" headerText="Field 2" width="120" />
    //     <Column field="Field3" headerText="Field 3" width="120" />
    //     <Column field="Field4" headerText="Field 4" width="120" />
    //     <Column field="Field5" headerText="Field 5" width="120" />
    //     <Column field="Field6" headerText="Field 6" width="120" />
    //     <Column field="Field7" headerText="Field 7" width="120" />
    //     <Column field="Field8" headerText="Field 8" width="120" />
    // </Columns>)
  }
}`,...(V=(q=s.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const ae=["LocalData","UrlAdaptorData","WebApiAdaptorData","RowTemplate","TestSample"];export{o as LocalData,d as RowTemplate,s as TestSample,i as UrlAdaptorData,l as WebApiAdaptorData,ae as __namedExportsOrder,te as default};
