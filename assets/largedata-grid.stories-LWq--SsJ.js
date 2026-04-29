import{j as e}from"./index-DlC1yEB1.js";import{r as p}from"./index-D5jfS-9e.js";import{C as m,a as h,m as Me,b as Fe,S as u,D as X,c as M,P as $,Q as W,d as Ve,G as ze,e as Ie,W as Oe,f as je,g as Pe,O as We,h as xe,i as l,T as Y,U as Ne,j as Ue,k as He}from"./data-0isc3XP2.js";import"./index-lf5wH9A6.js";const Be=[40,80,120,200],P=s=>{var B,L,Q,_,K,J;const{enableRtl:F,enableRipple:De,localDataCount:w,isTextWrapData:N,isDialogInsideGrid:U,isStrictMode:Re,isMultipleChildren:Ee,parentContainerHeight:Te="93vh",isCustomBinding:V,serverPageSize:z,...t}=s;((Q=(L=t.columns)==null?void 0:L[((B=t.columns)==null?void 0:B.length)-1])==null?void 0:Q.headerText)==="Command Actions"&&(t.columns[((_=t.columns)==null?void 0:_.length)-1].getCommandItems=()=>[e.jsx(m,{type:h.Edit},"Edit"),e.jsx(m,{type:h.Delete},"Delete"),e.jsx(m,{type:h.Update},"Update"),e.jsx(m,{type:h.Cancel},"Cancel")]);const c=p.useRef(null),I=p.useRef(null),[O,Ae]=p.useState(!0),[g,Ge]=p.useState(!1),j=p.useMemo(()=>N?Me(w):Fe(w,t.columns),[w,(K=t.columns)==null?void 0:K.length]),[qe,ke]=p.useState({result:[],count:0,hasMore:((J=s.virtualizationSettings)==null?void 0:J.scrollMode)===u.Infinite}),H=n=>{var S,v,y,C,b;const d=new M(j),i=new W;if((S=n.where)!=null&&S.length){let a;const o=n.where[0].predicates;for(let r=0;r<o.length;r++)a?a=a.and(new $(o[r].field,o[r].operator,o[r].value,o[r].ignoreCase,o[r].ignoreAccent,o[r].matchCase)):a=new $(o[r].field,o[r].operator,o[r].value,o[r].ignoreCase,o[r].ignoreAccent,o[r].matchCase);i.where(a)}if((v=n.search)!=null&&v.length){const{fields:a,value:o}=n.search[0];i.search(o,a)}if((y=n.sort)!=null&&y.length&&n.sort.forEach(a=>{i.sortBy(a.field,a.direction)}),(C=n.aggregates)!=null&&C.length)for(let a=0;a<n.aggregates.length;a++){const o=n.aggregates[a];i.aggregate(o.type,o.field)}if(n.take&&n.skip){const a=n.skip/n.take+1,o=n.take;i.page(a,o)}else if(n.skip===0&&n.take)i.page(1,n.take);else if(n.skip&&((b=s.virtualizationSettings)==null?void 0:b.scrollMode)===u.Infinite){const a=n.skip/z+1;i.page(a,z)}n.requiresCounts&&i.requiresCount(),console.log("CustomBinding Callback Params: ",n),console.log("CustomBinding Query: ",i),d.executeQuery(i).then(a=>{ke({...a,hasMore:j.length>(n.skip??0)+a.result.length})})};p.useEffect(()=>{var n,d,i,S,v,y,C,b,a;V&&g&&H({skip:((n=t==null?void 0:t.pageSettings)==null?void 0:n.currentPage)*((d=t==null?void 0:t.pageSettings)==null?void 0:d.pageSize)||0,...((i=t.virtualizationSettings)==null?void 0:i.scrollMode)!==u.Infinite||(S=t.pageSettings)!=null&&S.estimatedTotalRecordsCount||((v=t.pageSettings)==null?void 0:v.pageSizeControlledBy)==="client"?{take:((y=t==null?void 0:t.pageSettings)==null?void 0:y.pageSize)??(((C=t.virtualizationSettings)==null?void 0:C.scrollMode)===u.Auto||!((b=t.virtualizationSettings)!=null&&b.scrollMode)?12:50)}:{take:z},where:[],search:[],sort:[],aggregates:[],...((a=t.virtualizationSettings)==null?void 0:a.scrollMode)!==u.Infinite?{requiresCounts:!0}:{}})},[g]);const x=()=>e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>{var n,d;g&&window.localStorage.removeItem((d=(n=c==null?void 0:c.current)==null?void 0:n.getDataModule())==null?void 0:d.dataManager.guidId),Ge(!g)},children:[g?"Destroy":"Render"," Data Grid"]}),w&&!N&&e.jsxs("button",{onClick:()=>Ae(!O),children:[O?"Uniform":"Non Uniform"," Row Height Applied"]}),e.jsx("button",{onClick:()=>{var n,d;window.localStorage.removeItem((d=(n=c==null?void 0:c.current)==null?void 0:n.getDataModule())==null?void 0:d.dataManager.guidId)},children:"Clear Cache"}),g&&e.jsx(Ve,{dir:F?"rtl":"ltr",ripple:De,locale:t.locale,children:e.jsx(ze,{ref:c,dataSource:V?qe:w?j:[],onDataRequest:V?H:void 0,...t,columns:t.children?void 0:t.columns,aggregates:t.children?void 0:t.aggregates,getRowHeight:O?null:n=>Be[n.rowIndex%4],children:Ee?t.children.props.children:t.children})}),e.jsx("button",{onClick:()=>{console.log(c)},children:"dummy navigation checking button with get GridRef"})]});return e.jsx("div",{ref:I,style:{height:Te,isolation:"isolate"},children:Re?e.jsx(p.StrictMode,{children:U?e.jsx(X,{open:!0,fullScreen:!0,target:I.current,children:x()}):x()}):U?e.jsx(X,{open:!0,fullScreen:!0,target:I.current,children:x()}):x()})};try{P.displayName="LargeDataGridTest",P.__docgenInfo={description:"",displayName:"LargeDataGridTest",props:{parentContainerHeight:{defaultValue:null,description:"",name:"parentContainerHeight",required:!1,type:{name:"Height<string | number>"}},enableRtl:{defaultValue:null,description:`Enables right-to-left (RTL) direction for the grid.

When set to true, the grid's layout changes to support right-to-left languages like Arabic.
This includes reversing the direction of UI elements, text alignment, and scrollbars.`,name:"enableRtl",required:!1,type:{name:"boolean"}},enableRipple:{defaultValue:null,description:"",name:"enableRipple",required:!1,type:{name:"boolean"}},localDataCount:{defaultValue:null,description:"",name:"localDataCount",required:!1,type:{name:"number"}},isTextWrapData:{defaultValue:null,description:"",name:"isTextWrapData",required:!1,type:{name:"boolean"}},isDialogInsideGrid:{defaultValue:null,description:"",name:"isDialogInsideGrid",required:!1,type:{name:"boolean"}},isStrictMode:{defaultValue:null,description:"",name:"isStrictMode",required:!1,type:{name:"boolean"}},isMultipleChildren:{defaultValue:null,description:"",name:"isMultipleChildren",required:!1,type:{name:"boolean"}},isCustomBinding:{defaultValue:null,description:"",name:"isCustomBinding",required:!1,type:{name:"boolean"}},serverPageSize:{defaultValue:null,description:"",name:"serverPageSize",required:!1,type:{name:"number"}},id:{defaultValue:{value:"React.useId()"},description:`Specifies a unique identifier for the grid component.
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
* A \`DataResponse\` object with processed data

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
\`\`\``,name:"dataSource",required:!1,type:{name:"DataManager | DataResponse | unknown[]"}},columns:{defaultValue:{value:"[]"},description:`Defines the columns to be displayed in the grid.

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
\`\`\``,name:"enableAltRow",required:!1,type:{name:"boolean"}},selectionSettings:{defaultValue:{value:"{ enabled: true, mode: 'Single', enableToggle: true }"},description:`Configures the grid's selection settings, determines whether \`Single\` or \`Multiple\` selections are allowed.
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
\`\`\``,name:"textWrapSettings",required:!1,type:{name:"TextWrapSettings"}},rowHeight:{defaultValue:{value:"null | 50"},description:"Specifies the height for all rows in the grid.\n\n* When a numeric value is provided, all rows will have a fixed height in pixels.\n* If `rowHeight` is `undefined` and row DOM virtualization is enabled, the height defaults to the `theme` property based value (e.g., `Theme.Material` = 50).\n* When `null` (default), row height is automatically calculated based on content and applied styles for grids without row DOM virtualization.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  rowHeight={40}\n/>\n```",name:"rowHeight",required:!1,type:{name:"number"}},getRowHeight:{defaultValue:null,description:`Gets the height of a specific row dynamically at runtime.
Accepts a callback function that returns the height in pixels based on row information, allowing row-specific height customization.
This property enables dynamic row sizing based on content, data values, or other custom logic.
@param props - Partial row information used to calculate the row height, including row index, data, and column configuration.
@returns number - Height of the row in pixels.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  getRowHeight={(props) => props.data?.OrderID === 10248 ? 60 : 40}
/>
\`\`\``,name:"getRowHeight",required:!1,type:{name:"(props: Partial<RowInfo<unknown>>) => number"}},theme:{defaultValue:{value:"Theme.Material"},description:`Specifies the theme configuration for the Data Grid component.
Used internally to determine default values for theme-dependent properties (e.g., row height in virtualization).

The theme property defines static default values and calculations used during grid initialization and rendering,
such as the default \`rowHeight\` value when row DOM virtualization is enabled.

Grid styling and visual appearance are controlled by importing the corresponding theme CSS files,
not by the \`theme\` property alone. The \`theme\` property must be coordinated with the appropriate CSS import.
@example \`\`\`tsx
// Import Material theme CSS for styling
import '@syncfusion/react-grids/styles/material.css';

// Specify theme for internal default calculations
<Grid theme={Theme.Material} />
\`\`\``,name:"theme",required:!1,type:{name:"Theme"}},virtualizationSettings:{defaultValue:{value:`{\r
enabled: true,\r
type: VirtualDomType.Both,\r
viewPortBuffer: { rows: 5, columns: 5 },\r
scrollMode: ScrollMode.Auto,\r
preventMaxRenderedRows: false\r
}`},description:`Configures virtualization behavior for grid rendering.
Includes options for enabling virtualization, defining DOM type, and customizing buffer and scroll settings.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  virtualizationSettings={{
    enabled: true,
    type: VirtualDomType.Row,
    viewPortBuffer: { rows: 10, columns: 5 }
  }}
/>
\`\`\``,name:"virtualizationSettings",required:!1,type:{name:"VirtualizationSettings"}},children:{defaultValue:{value:"null"},description:`Child components for the grid.

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
\`\`\``,name:"toolbar",required:!1,type:{name:"(string | ToolbarItemProps)[]"}},showColumnChooser:{defaultValue:{value:"false"},description:`Determines whether the column chooser functionality is enabled.
When set to false (default), the column chooser button will be disabled in the toolbar (but still visible if included in toolbar array).
When set to true, the column chooser button will be enabled and the dialog can be opened.

This property controls the enabled/disabled state of the column chooser feature, not its visibility.
To show the column chooser button, you must include 'ColumnChooser' in the toolbar array.
@example \`\`\`tsx
// Column Chooser button is visible but disabled (default behavior)
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
/>

// Column Chooser button is visible and enabled
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
  showColumnChooser={true}
/>
\`\`\``,name:"showColumnChooser",required:!1,type:{name:"boolean"}},columnChooserSettings:{defaultValue:{value:"{ enableSearching: true, operator: 'startsWith', ignoreAccent: false, sortDirection: 'None', selectedColumns: [] }"},description:`Configures the behavior and appearance of the Column Chooser dialog.

Provides comprehensive control over column chooser features including:
- Search functionality with custom operators
- Diacritics-insensitive searching
- Column ordering and sorting
- Custom templates for header, footer, and column items
- Initial column selection
@example \`\`\`tsx
<Grid
  dataSource={data}
  toolbar={['ColumnChooser']}
  showColumnChooser={true}
  columnChooserSettings={{
    enableSearching: true,
    operator: 'contains',
    ignoreAccent: true,
    sortDirection: 'Ascending',
    selectedColumns: ['OrderID', 'CustomerName']
  }}
/>
\`\`\``,name:"columnChooserSettings",required:!1,type:{name:"ColumnChooserSettings"}},rowClass:{defaultValue:{value:"-"},description:`Applies a CSS class to each grid row either globally or conditionally.
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
};`,name:"rowClass",required:!1,type:{name:"string | ((props?: RowClassProps<unknown>) => string)"}},loadingIndicatorSettings:{defaultValue:{value:`{\r
  indicatorType: LoadingIndicatorType.Spinner,\r
  params: {\r
    visible: true,\r
    thickness: '3px',\r
    animationDuration: '1s',\r
    overlay: true,\r
    size: '36px',\r
    color: Color.Primary\r
  }\r
}`},description:`Configures loading indicator settings for the Data Grid component.
Applies spinner or skeleton customization during data operations.
@example \`\`\`tsx
<Grid loadingIndicatorSettings={{
  indicatorType: LoadingIndicatorType.Spinner,
  params: { size: '48px', color: '#0078D4' }
}} />
\`\`\``,name:"loadingIndicatorSettings",required:!1,type:{name:"LoadingIndicatorSettings"}},contextMenuSettings:{defaultValue:{value:"{ enabled: false, items: [], menuSettings: {} }"},description:`Configures the context menu settings for the Data Grid component.
Enables and customizes the context menu that appears on right-click interactions.
Includes options to enable/disable the context menu, define menu items, and customize menu behavior.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  contextMenuSettings={{
    enabled: true,
    items: ['Edit', 'Delete', 'SortAscending', 'SortDescending']
  }}
/>
\`\`\``,name:"contextMenuSettings",required:!1,type:{name:"ContextMenuSettings"}},onContextMenuOpen:{defaultValue:null,description:`Fires when the context menu is about to be opened or displayed on the grid.
Allows customization, validation, or cancellation of the context menu before it appears.
Provides access to the target element, menu items, and associated row/column data.

Supports both synchronous and asynchronous menu item loading:
- **Synchronous**: Return the modified ContextMenuOpenEvent object
- **Asynchronous**: Return a Promise that resolves to the modified ContextMenuOpenEvent object
@event onContextMenuOpen
@param event - Event arguments containing menu configuration, target element, and row/column context.
@returns The modified event object or a Promise resolving to the modified event object.
@example \`\`\`tsx
// Synchronous example
const handleContextMenuOpen = (event: ContextMenuOpenEvent) => {
  // Customize menu items based on context
  if (event.data?.role === 'Admin') {
    // Show additional menu items for admin users
  }
  return event; // Return the modified event
};

// Asynchronous example
const handleContextMenuOpen = (args: ContextMenuOpenEvent) => {
  return new Promise<ContextMenuOpenEvent>((res) => setTimeout(() => res(args), 2000));
}

return (
  <Grid
    dataSource={employees}
    columns={columns}
    contextMenuSettings={{ enabled: true }}
    onContextMenuOpen={handleContextMenuOpen}
  />
);
\`\`\``,name:"onContextMenuOpen",required:!1,type:{name:"(event: ContextMenuOpenEvent<unknown>) => ContextMenuOpenEvent<unknown> | Promise<ContextMenuOpenEvent<unknown>>"}},onContextMenuClose:{defaultValue:null,description:`Fires when the context menu is closed or hidden on the grid.
Suitable for cleanup operations or resetting UI state after the context menu interaction completes.
Triggered when the user dismisses the menu through selection, clicking outside, or pressing Escape.
@event onContextMenuClose
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClose = () => {
    // Perform cleanup or reset UI state
    console.log('Context menu closed');
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClose={handleContextMenuClose}
    />
  );
};
\`\`\``,name:"onContextMenuClose",required:!1,type:{name:"() => void"}},onContextMenuClick:{defaultValue:null,description:`Fires when a context menu item is selected or clicked by the user.
Handles the action associated with the selected menu item, such as Edit, Delete, Sort, etc.
Provides context about the selected item, target row/column, and triggering element.
@event onContextMenuClick
@param event - Event arguments containing selected item details and grid context.
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClick = (event: ContextMenuSelectEvent) => {
    // Handle the selected context menu action
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClick={handleContextMenuClick}
    />
  );
};
\`\`\``,name:"onContextMenuClick",required:!1,type:{name:"(event: ContextMenuSelectEvent) => void"}},onGridRenderStart:{defaultValue:null,description:`Fires at the start of grid initialization before data processing. and component mount.
This event is triggered during the React render phase, before the component is mounted to the DOM.
Useful for initial configurations or showing loading indicators.
Do not perform state updates in this callback, as they will trigger React warnings
about updating unmounted components. Use \`onGridRenderComplete\` instead for state updates.
@event onGridRenderStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRenderStart = () => {
    // Safe: Logging only - no state updates
    console.log('Grid render starting');
  };

  const handleGridRenderComplete = () => {
    // Safe: State updates after mount (use this callback for state updates)
    setGridReady(true);
  };

  return (
    <Grid
      dataSource={data}
      onGridRenderStart={handleGridRenderStart}
      onGridRenderComplete={handleGridRenderComplete}
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
\`\`\``,name:"onFilter",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilterDialogBeforeOpen:{defaultValue:null,description:`Fires before the filter Dialog is displayed or opened.
Allows customization or cancellation before the filter interface appears.
@private
@event onFilterDialogBeforeOpen`,name:"onFilterDialogBeforeOpen",required:!1,type:{name:"(event: FilterDialogBeforeOpenEvent) => void"}},onFilterDialogAfterOpen:{defaultValue:null,description:`Fires after the filter Dialog is fully displayed and ready for interaction.
Suitable for initializing custom filter components or DOM manipulation.
@event onFilterDialogAfterOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterDialogOpen = (event: FilterDialogAfterOpenEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilterDialogAfterOpen={handleFilterUIOpen}
      filterSettings={{ enabled: true,  }}
    />
  );
};
\`\`\``,name:"onFilterDialogAfterOpen",required:!1,type:{name:"(event: FilterDialogAfterOpenEvent) => void"}},onColumnChooserBeforeOpen:{defaultValue:null,description:`Fires before the Column Chooser dialog is displayed or opened.
Allows customization of column visibility or cancellation before the dialog appears.
@event onColumnChooserBeforeOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserBeforeOpen = (event: ColumnChooserBeforeOpenEvent) => {
    // handle your action here
    if (someCondition) {
      event.cancel = true; // prevent dialog from opening
    }
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserBeforeOpen={handleColumnChooserBeforeOpen}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserBeforeOpen",required:!1,type:{name:"(event: ColumnChooserBeforeOpenEvent) => void"}},onColumnChooserApply:{defaultValue:null,description:`Fires when column changes are applied in the Column Chooser dialog.
Triggered when the user clicks OK/Apply button with the final column visibility configuration.
Used to track which columns were shown/hidden and perform post-apply actions.
@event onColumnChooserApply
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserApply = (event: ColumnChooserApplyEvent) => {
    // handle column visibility changes
    console.log('Columns:', event.selectedColumns);
    console.log('Visibility:', event.columnVisibility);
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserApply={handleColumnChooserApply}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserApply",required:!1,type:{name:"(event: ColumnChooserApplyEvent) => void"}},onSortStart:{defaultValue:null,description:`Fires when a sorting operation begins on the grid.
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
\`\`\``,name:"onDataChangeCancel",required:!1,type:{name:"(event: FormCancelEvent<unknown>) => void"}},onDeleteDialogOpen:{defaultValue:null,description:`Fires when the bulk‑delete confirmation dialog opens with cross‑page selection enabled.
Allows customization of dialog options, such as disabling specific choices or setting the default selection.

Use Cases:
- Disable "Delete Current Page": Prevents partial deletion when records are selected across multiple pages.
- Preselect "Delete All Selected Records": Ensures this option is the default, reducing errors and maintaining consistency.
@event onDeleteDialogOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleDeleteDialogOpen = (eventArgs: DeleteDialogEventArgs) => {
    // Customize dialog options
    if (eventArgs.totalSelectedCount > 100) {
      eventArgs.customizations = {
        pageOptionDisabled: true,
        defaultOption: 'all'
      };
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onDeleteDialogOpen={handleDeleteDialogOpen}
      editSettings={{ allowDelete: true }}
      selectionSettings={{ mode: 'Multiple', persistSelection: true }}
    />
  );
};
\`\`\``,name:"onDeleteDialogOpen",required:!1,type:{name:"(eventArgs: DeleteDialogEventArgs) => void"}}}}}catch{}const $e={title:"Grid/VirtualGridBase",component:P,parameters:{layout:"fullscreen",docs:{description:{component:"A fully configurable Grid component with performance comparison capabilities."}}},argTypes:{localDataCount:{control:"select",options:["0","100","1000","10000","100000"],description:"Grid Local DataSource Count"}}},f=Pe(100,!1),Le=[{columns:je(f.length)}];f.unshift({type:He.Checkbox,width:50,allowFilter:!1});f.push({headerText:"Command Actions",width:200,getCommandItems:()=>[e.jsx(m,{type:h.Edit},"Edit"),e.jsx(m,{type:h.Delete},"Delete"),e.jsx(m,{type:h.Update},"Update"),e.jsx(m,{type:h.Cancel},"Cancel")]});const D={args:{localDataCount:1e5,columns:f,aggregates:Le,editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel",enableFilterBarOperator:!0},pageSettings:{enabled:!0,pageSize:1e5},height:"100%"}},R={args:{localDataCount:2e6,columns:f.slice(1,11),editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},pageSettings:{enabled:!0,pageSize:2e6},height:"100%"}},E={args:{dataSource:new M({url:"https://services.syncfusion.com/react/production/api/UrlDataSource",adaptor:new Ne}),query:new W().addParams("dataCount","100000").addParams("serverpagesize","50"),toolbar:["Search"],children:e.jsxs(xe,{children:[e.jsx(l,{field:"EmployeeID",visible:!0,headerText:"Employee ID",isPrimaryKey:!0,width:"130"}),e.jsx(l,{field:"Employees",headerText:"Employee Name",width:"230",clipMode:"EllipsisWithTooltip"}),e.jsx(l,{field:"Designation",headerText:"Designation",width:"170",clipMode:"EllipsisWithTooltip"}),e.jsx(l,{field:"Mail",headerText:"Mail",width:"230"}),e.jsx(l,{field:"Location",headerText:"Location",width:"140"}),e.jsx(l,{field:"Status",headerText:"Status",width:"130"}),e.jsx(l,{field:"Trustworthiness",headerText:"Trustworthiness",width:"160"}),e.jsx(l,{field:"Rating",headerText:"Rating",width:"220"}),e.jsx(l,{field:"Software",headerText:"Software Proficiency",width:"180",format:"C2"}),e.jsx(l,{field:"CurrentSalary",headerText:"Current Salary",width:"160",format:"C2"}),e.jsx(l,{field:"Address",headerText:"Address",width:"240",clipMode:"EllipsisWithTooltip"})]}),selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},virtualizationSettings:{enableCache:!1,scrollMode:u.Virtual},height:"100%"}},T={args:{dataSource:new M({url:"https://ej2services.syncfusion.com/react/development/api/GridWebAPIService",adaptor:new Ue}),columns:[{field:"OrderID",headerText:"OrderID",isPrimaryKey:!0,width:"130",allowSearch:!1},{field:"CustomerID",headerText:"CustomerID",width:"230",clipMode:"EllipsisWithTooltip"},{field:"ShipCity",headerText:"ShipCity",width:"230"},{field:"EmployeeID",headerText:"EmployeeID",width:"130",clipMode:"EllipsisWithTooltip",allowSearch:!1},{field:"EmployeeName",headerText:"EmployeeName",width:"230",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{field:"Designation",headerText:"Designation",width:"230",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{field:"CurrentSalary",headerText:"CurrentSalary",width:"130",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1}],selectionSettings:{mode:"Single"},sortSettings:{enabled:!0},filterSettings:{enabled:!0},virtualizationSettings:{scrollMode:u.Virtual},height:"100%",query:new W().addParams("serverpagesize","50")}},A={args:{dataSource:Ie,children:e.jsxs(xe,{children:[e.jsx(l,{headerText:"Employee Image",width:"180",textAlign:Y.Center,field:"EmployeeID"}),e.jsx(l,{headerText:"Employee Details",width:"300",textAlign:Y.Left,field:"FirstName"})]}),className:"row-template",toolbar:["Search"],selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},height:"100%",rowTemplate:s=>{const F=`https://npmci-react.syncfusion.com/development-react-ui/images/grid/${s.EmployeeID}.png`;return e.jsxs("tr",{className:"templateRow",children:[e.jsx("td",{className:"photo",children:e.jsx("img",{src:F,alt:s.EmployeeID.toString()})}),e.jsx("td",{className:"details",children:e.jsxs("table",{className:"CardTable",cellPadding:3,cellSpacing:2,children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"30%"}}),e.jsx("col",{style:{width:"10%"}})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"CardHeader",children:"First Name"}),e.jsx("td",{children:":"}),e.jsx("td",{children:s.FirstName})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"CardHeader",children:"Last Name"}),e.jsx("td",{children:":"}),e.jsx("td",{children:s.LastName})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"CardHeader",children:"Title"}),e.jsx("td",{children:":"}),e.jsx("td",{children:s.Title})]})]})]})})]})}}},Qe=[{field:"id"},{field:"username",width:150},{field:"age",width:80,type:"number"},{field:"bio",width:400}],G={args:{localDataCount:1e5,isTextWrapData:!0,columns:Qe,height:400,textWrapSettings:{enabled:!0,wrapMode:Oe.Both}}},q={args:{dataSource:new M({url:"https://ej2services.syncfusion.com/react/development/odata/GridInfiniteODataV4",adaptor:new We}),columns:[{field:"RecordId",headerText:"Record ID"},{field:"AssetGroup",headerText:"Asset Group"},{field:"HourlyCost",headerText:"Hourly Cost"},{field:"EstimatedHours",headerText:"Estimated Hours"},{field:"MaintenanceCost",headerText:"Maintenance Cost"},{field:"RequestedDate",headerText:"Requested Date"},{field:"PlannedDate",headerText:"Planned Date"},{field:"CompletionDate",headerText:"Completion Date"},{field:"Status",headerText:"Status"},{field:"RequestOrigin.Division",headerText:"Request Division"}],virtualizationSettings:{scrollMode:u.Infinite,enableCache:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},searchSettings:{enabled:!0},toolbar:["Search"],pageSettings:{enabled:!0,pageSize:100,estimatedTotalRecordsCount:500,pageSizeControlledBy:"server"},height:"100%"}},k={args:{serverPageSize:50,localDataCount:1e3,columns:f.slice(1,11),isCustomBinding:!0,virtualizationSettings:{scrollMode:u.Infinite,enableCache:!1},sortSettings:{enabled:!0},filterSettings:{enabled:!0},searchSettings:{enabled:!0},toolbar:["Search"],pageSettings:{enabled:!0,pageSize:100,estimatedTotalRecordsCount:500,pageSizeControlledBy:"client"},height:"100%"}};var Z,ee,ne;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    localDataCount: 100000,
    columns: columns,
    // for makeData purpose mandatory
    aggregates: aggregates,
    // isMultipleChildren: true,
    // children: (
    //     <>
    //         <Columns>
    //             {columns.map((col, index) => (
    //                 <Column key={index} {...col} />
    //             ))}
    //         </Columns>
    //         <Aggregates>{aggregates.map((row) => (
    //             <AggregateRow>{row.columns.map((col) => (
    //                 <AggregateColumn {...col} />
    //             ))}</AggregateRow>
    //         ))}</Aggregates>
    //     </>
    // ),
    // virtualizationSettings: { viewPortBuffer: {rows: 0} },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel',
      enableFilterBarOperator: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 100000
    },
    height: '100%'
  }
}`,...(ne=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,oe;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    localDataCount: 2000000,
    columns: columns.slice(1, 11),
    // for makeData purpose mandatory
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 2000000
    },
    height: '100%'
  }
}`,...(oe=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,ie,le;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    dataSource: new DataManager({
      // url: 'http://localhost:62869/api/UrlDataSource',
      url: 'https://services.syncfusion.com/react/production/api/UrlDataSource',
      // url: 'https://ej2services.syncfusion.com/react/development/api/UrlDataSource',
      adaptor: new UrlAdaptor()
    }),
    query: new Query().addParams('dataCount', '100000').addParams('serverpagesize', '50'),
    toolbar: ['Search'],
    children: <Columns>\r
            <Column field='EmployeeID' visible={true} headerText='Employee ID' isPrimaryKey={true} width='130'></Column>\r
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
      enabled: true,
      type: 'Excel'
    },
    virtualizationSettings: {
      enableCache: false,
      scrollMode: ScrollMode.Virtual
    },
    height: '100%'
  }
}`,...(le=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,de,ue;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    dataSource: new DataManager({
      url: 'https://ej2services.syncfusion.com/react/development/api/GridWebAPIService',
      adaptor: new WebApiAdaptor()
    }),
    columns: [{
      field: 'OrderID',
      headerText: 'OrderID',
      isPrimaryKey: true,
      width: '130',
      allowSearch: false
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
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false
    }, {
      field: 'EmployeeName',
      headerText: 'EmployeeName',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      field: 'Designation',
      headerText: 'Designation',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      field: 'CurrentSalary',
      headerText: 'CurrentSalary',
      width: '130',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }],
    selectionSettings: {
      mode: 'Single'
    },
    // toolbar: ['Search'],
    // searchSettings: { enabled: true }, //service not handled search substring with or condition only handled and multiple filter.
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
    },
    height: '100%',
    query: new Query().addParams('serverpagesize', '50')
  }
}`,...(ue=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,pe,me;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    // virtualizationSettings: { scrollMode: ScrollMode.Virtual }, // server-remote data with dynamic rowheight not supported in competitors as well.
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
}`,...(me=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ge,fe;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    localDataCount: 100000,
    isTextWrapData: true,
    columns: muicolumns,
    height: 400,
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    }
  }
}`,...(fe=(ge=G.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var we,Se,ve;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    // localDataCount: 100,
    dataSource: new DataManager({
      // url: 'http://localhost:62869/odata/GridInfiniteODataV4',
      url: 'https://ej2services.syncfusion.com/react/development/odata/GridInfiniteODataV4',
      //?dataCount=200',
      adaptor: new ODataV4Adaptor()
    }),
    // if more columns included search query not working odata with large query 403 forbidden occurs
    columns: [{
      field: 'RecordId',
      headerText: 'Record ID'
    },
    // { field: 'AssetTag', headerText: 'Asset Tag' },
    {
      field: 'AssetGroup',
      headerText: 'Asset Group'
    },
    // { field: 'FacilitySection', headerText: 'Facility Section' },
    // { field: 'TechnicianNames', headerText: 'Technician Names' },
    // { field: 'SkillTier', headerText: 'Skill Tier' },
    {
      field: 'HourlyCost',
      headerText: 'Hourly Cost'
    }, {
      field: 'EstimatedHours',
      headerText: 'Estimated Hours'
    }, {
      field: 'MaintenanceCost',
      headerText: 'Maintenance Cost'
    }, {
      field: 'RequestedDate',
      headerText: 'Requested Date'
    }, {
      field: 'PlannedDate',
      headerText: 'Planned Date'
    }, {
      field: 'CompletionDate',
      headerText: 'Completion Date'
    },
    // { field: 'SafetyCheckRequired', headerText: 'Safety Check Required' },
    {
      field: 'Status',
      headerText: 'Status'
    }, {
      field: 'RequestOrigin.Division',
      headerText: 'Request Division'
    }
    // { field: 'RequestOrigin.ReferenceCode', headerText: 'Reference Code' }
    ],
    virtualizationSettings: {
      scrollMode: ScrollMode.Infinite,
      enableCache: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    searchSettings: {
      enabled: true
    },
    toolbar: ['Search'],
    pageSettings: {
      enabled: true,
      pageSize: 100,
      estimatedTotalRecordsCount: 500,
      pageSizeControlledBy: 'server'
    },
    height: '100%'
    // query: new Query().requiresCount()
  }
}`,...(ve=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var ye,Ce,be;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    serverPageSize: 50,
    localDataCount: 1000,
    columns: columns.slice(1, 11),
    isCustomBinding: true,
    virtualizationSettings: {
      scrollMode: ScrollMode.Infinite,
      enableCache: false
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    searchSettings: {
      enabled: true
    },
    toolbar: ['Search'],
    pageSettings: {
      enabled: true,
      pageSize: 100,
      estimatedTotalRecordsCount: 500,
      pageSizeControlledBy: 'client'
    },
    height: '100%'
  }
}`,...(be=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};const Ye=["LocalData","OverComeBrowserLimit","UrlAdaptorData","WebApiAdaptorData","RowTemplate","TextWrapSample","ODataV4Sample","CustomBindingSample"];export{k as CustomBindingSample,D as LocalData,q as ODataV4Sample,R as OverComeBrowserLimit,A as RowTemplate,G as TextWrapSample,E as UrlAdaptorData,T as WebApiAdaptorData,Ye as __namedExportsOrder,$e as default};
