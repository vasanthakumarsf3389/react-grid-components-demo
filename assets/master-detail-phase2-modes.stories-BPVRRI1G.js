import{j as t}from"./index-CTAXdLKx.js";import{r as u}from"./index-D5jfS-9e.js";import{G as p}from"./useGroup-FyuovhNi.js";import"./client-Spw3EFno.js";const V={title:"Grid/Master-Detail/Phase 2 - Data Binding Modes",parameters:{docs:{description:{component:`
# Phase 2: Master-Detail Grid with Three Data Binding Modes

Comprehensive examples demonstrating all supported data binding modes for master-detail grids:

1. **Nested Data Mode** - Child data embedded directly in parent row
2. **Mapping Data Mode** - Foreign key filtering with mappingID
3. **Async Mode** - Callback-based dynamic loading from API
4. **Advanced 3-Level Nesting** - Recursive hierarchy with depth control

Each story includes realistic sample data, proper error handling, and console logging for debugging.
        `}}},tags:["autodocs"]},U=[{OrderID:10248,CustomerID:"VINET",OrderDate:"1996-07-04",Freight:32.38,ShipCity:"Reims",ShipCountry:"France",OrderLines:[{OrderID:10248,ProductID:11,ProductName:"Queso Cabrales",UnitPrice:21,Quantity:12,Discount:0,LineAmount:252},{OrderID:10248,ProductID:42,ProductName:"Singaporean Hokkien Fried Mee",UnitPrice:9.8,Quantity:10,Discount:0,LineAmount:98},{OrderID:10248,ProductID:72,ProductName:"Mozzarella di Giovanni",UnitPrice:34.8,Quantity:5,Discount:0,LineAmount:174}]},{OrderID:10249,CustomerID:"TOMSP",OrderDate:"1996-07-05",Freight:11.61,ShipCity:"Münster",ShipCountry:"Germany",OrderLines:[{OrderID:10249,ProductID:14,ProductName:"Tofu",UnitPrice:23.25,Quantity:9,Discount:0,LineAmount:209.25},{OrderID:10249,ProductID:51,ProductName:"Manjimup Dried Apples",UnitPrice:53,Quantity:40,Discount:0,LineAmount:2120}]},{OrderID:10250,CustomerID:"HANAR",OrderDate:"1996-07-08",Freight:65.83,ShipCity:"Rio de Janeiro",ShipCountry:"Brazil",OrderLines:[{OrderID:10250,ProductID:41,ProductName:"Jack's New England Clam Chowder",UnitPrice:9.65,Quantity:10,Discount:0,LineAmount:96.5}]}],g=()=>{const i=u.useRef(null),d=[{field:"OrderID",headerText:"Order ID",width:100,textAlign:"Right"},{field:"CustomerID",headerText:"Customer ID",width:120},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"},{field:"Freight",headerText:"Freight",width:120,textAlign:"Right",format:"C2"},{field:"ShipCity",headerText:"Ship City",width:150}],l={detailGridOptions:{columnDefs:[{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"},{field:"UnitPrice",headerText:"Unit Price",width:120,textAlign:"Right",format:"C2"},{field:"LineAmount",headerText:"Line Total",width:120,textAlign:"Right",format:"C2"}],rowHeight:32,height:250},getDetailRowData:e=>{console.log(`[Mode 1] Loading detail for Order ${e.data.OrderID}`);const s=e.data.OrderLines||[];e.successCallback(s)},onDetailGridCreated:e=>{console.log(`[Mode 1] Detail grid created for Order ${e.parentData.OrderID}`)},onDetailGridDestroyed:e=>{console.log(`[Mode 1] Detail grid destroyed for Order ${e.parentData.OrderID}`)}};return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx("h2",{children:"Mode 1: Nested Data Binding"}),t.jsx("p",{children:"Child rows are directly embedded in parent data as OrderLines property."}),t.jsx(p,{ref:i,dataSource:U,columns:d,isMasterDetail:!0,detailRowHeight:300,maxNestingDepth:2,detailCellRendererParams:l,onRowExpand:e=>{console.log(`[Mode 1] Row expanded: Order ID ${e.data.OrderID}`)},onRowCollapse:e=>{console.log(`[Mode 1] Row collapsed: Order ID ${e.data.OrderID}`)},pageSettings:{pageSize:5}})]})},b=[{OrderID:10248,CustomerID:"VINET",OrderDate:"1996-07-04",Freight:32.38,ShipCity:"Reims",ShipCountry:"France"},{OrderID:10249,CustomerID:"TOMSP",OrderDate:"1996-07-05",Freight:11.61,ShipCity:"Münster",ShipCountry:"Germany"},{OrderID:10250,CustomerID:"HANAR",OrderDate:"1996-07-08",Freight:65.83,ShipCity:"Rio de Janeiro",ShipCountry:"Brazil"}],Q=[{OrderID:10248,ProductID:11,ProductName:"Queso Cabrales",UnitPrice:21,Quantity:12,Discount:0},{OrderID:10248,ProductID:42,ProductName:"Singaporean Hokkien Fried Mee",UnitPrice:9.8,Quantity:10,Discount:0},{OrderID:10248,ProductID:72,ProductName:"Mozzarella di Giovanni",UnitPrice:34.8,Quantity:5,Discount:0},{OrderID:10249,ProductID:14,ProductName:"Tofu",UnitPrice:23.25,Quantity:9,Discount:0},{OrderID:10249,ProductID:51,ProductName:"Manjimup Dried Apples",UnitPrice:53,Quantity:40,Discount:0},{OrderID:10250,ProductID:41,ProductName:"Jack's New England Clam Chowder",UnitPrice:9.65,Quantity:10,Discount:0}],D=()=>{const i=u.useRef(null),d=[{field:"OrderID",headerText:"Order ID",width:100,textAlign:"Right"},{field:"CustomerID",headerText:"Customer ID",width:120},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"},{field:"Freight",headerText:"Freight",width:120,textAlign:"Right",format:"C2"}],l={detailGridOptions:{columnDefs:[{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"},{field:"UnitPrice",headerText:"Unit Price",width:120,textAlign:"Right",format:"C2"}],rowHeight:32,height:250},mappingID:"OrderID",childDataSource:Q,getDetailRowData:e=>{console.log(`[Mode 2] Loading detail for Order ${e.data.OrderID}`);const s=e.data[e.mappingID],n=(e.childDataSource||[]).filter(r=>r.OrderID===s);console.log(`[Mode 2] Found ${n.length} lines for Order ${s}`),e.successCallback(n)},onDetailGridCreated:e=>{console.log(`[Mode 2] Detail grid created for Order ${e.parentData.OrderID}`)},onDetailGridDestroyed:e=>{console.log(`[Mode 2] Detail grid destroyed for Order ${e.parentData.OrderID}`)}};return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx("h2",{children:"Mode 2: Mapping Data Binding (Foreign Key)"}),t.jsx("p",{children:"Child rows are filtered from separate dataset using mappingID foreign key."}),t.jsx(p,{ref:i,dataSource:b,columns:d,isMasterDetail:!0,detailRowHeight:300,maxNestingDepth:2,detailCellRendererParams:l,onRowExpand:e=>{console.log(`[Mode 2] Row expanded: Order ID ${e.data.OrderID}`)},onRowCollapse:e=>{console.log(`[Mode 2] Row collapsed: Order ID ${e.data.OrderID}`)},pageSettings:{pageSize:5}})]})},H=1e3,j=i=>new Promise(d=>{setTimeout(()=>{const o=Q.filter(l=>l.OrderID===i);d(o)},H)}),h=()=>{const i=u.useRef(null),[d,o]=u.useState(new Set),l=[{field:"OrderID",headerText:"Order ID",width:100,textAlign:"Right"},{field:"CustomerID",headerText:"Customer ID",width:120},{field:"OrderDate",headerText:"Order Date",width:130,type:"date",format:"yMd"},{field:"Freight",headerText:"Freight",width:120,textAlign:"Right",format:"C2"}],s={detailGridOptions:{columnDefs:[{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"},{field:"UnitPrice",headerText:"Unit Price",width:120,textAlign:"Right",format:"C2"}],rowHeight:32,height:250},getDetailRowData:async n=>{const r=n.data.OrderID;console.log(`[Mode 3] Loading detail for Order ${r}...`);try{o(c=>new Set([...c,r]));const a=await j(r);console.log(`[Mode 3] Loaded ${a.length} lines for Order ${r}`),n.successCallback(a)}catch(a){const c=a instanceof Error?a.message:"Unknown error";console.error(`[Mode 3] Failed to load Order ${r}:`,c),n.failCallback(c)}finally{o(a=>{const c=new Set(a);return c.delete(r),c})}},onDetailGridCreated:n=>{console.log(`[Mode 3] Detail grid created for Order ${n.parentData.OrderID}`)},onDetailGridDestroyed:n=>{console.log(`[Mode 3] Detail grid destroyed for Order ${n.parentData.OrderID}`)}};return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx("h2",{children:"Mode 3: Async Data Binding"}),t.jsx("p",{children:"Child rows are loaded dynamically via callback when detail row is expanded."}),t.jsxs("p",{style:{color:"#666",fontSize:"14px"},children:["Loading orders: ",d.size>0?Array.from(d).join(", "):"None"]}),t.jsx(p,{ref:i,dataSource:b,columns:l,isMasterDetail:!0,detailRowHeight:300,maxNestingDepth:2,detailCellRendererParams:s,onRowExpand:n=>{console.log(`[Mode 3] Row expanded: Order ID ${n.data.OrderID}`)},onRowCollapse:n=>{console.log(`[Mode 3] Row collapsed: Order ID ${n.data.OrderID}`)},pageSettings:{pageSize:5}})]})},E=[{OrderID:10248,CustomerID:"VINET",OrderDate:"1996-07-04",Freight:32.38,ShipCity:"Reims",ShipCountry:"France",OrderLines:[{OrderID:10248,ProductID:11,ProductName:"Queso Cabrales - Container 1",UnitPrice:21,Quantity:12,Discount:0},{OrderID:10248,ProductID:42,ProductName:"Singaporean Hokkien Fried Mee - Container 2",UnitPrice:9.8,Quantity:10,Discount:0}]}],m=()=>{const i=u.useRef(null),d=[{field:"OrderID",headerText:"Order ID",width:100,textAlign:"Right"},{field:"CustomerID",headerText:"Customer ID",width:120},{field:"OrderDate",headerText:"Order Date",width:130}],o=[{field:"ProductID",headerText:"Product ID",width:100,textAlign:"Right"},{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"}],n={detailGridOptions:{columnDefs:o,rowHeight:32,height:280,maxNestingDepth:3,currentNestingDepth:1,detailCellRendererParams:{detailGridOptions:{columnDefs:o,rowHeight:32,height:250,maxNestingDepth:3,currentNestingDepth:2,detailCellRendererParams:{detailGridOptions:{columnDefs:[{field:"ItemID",headerText:"Item ID",width:100,textAlign:"Right"},{field:"ProductName",headerText:"Product Name",width:150},{field:"Quantity",headerText:"Quantity",width:100,textAlign:"Right"}],rowHeight:32,height:200},getDetailRowData:r=>{console.log(`[Level 3] Loading containers for Line ${r.data.ProductID}`);const a=[{ItemID:1,ContainerID:100,ProductName:`${r.data.ProductName} - Item 1`,Quantity:5},{ItemID:2,ContainerID:100,ProductName:`${r.data.ProductName} - Item 2`,Quantity:7}];r.successCallback(a)}}},getDetailRowData:r=>{console.log(`[Level 2] Loading details for Order ${r.data.OrderID}`);const a=r.data.OrderLines||[];r.successCallback(a)}}},getDetailRowData:r=>{console.log(`[Level 1] Loading lines for Order ${r.data.OrderID}`);const a=r.data.OrderLines||[];r.successCallback(a)},onDetailGridCreated:r=>{console.log("[Level 1] Detail grid created at depth 1")}};return t.jsxs("div",{style:{padding:"20px"},children:[t.jsx("h2",{children:"Advanced: Three-Level Nesting"}),t.jsx("p",{children:"Master Orders → Detail Lines → Container Items"}),t.jsx("p",{style:{color:"#666",fontSize:"14px"},children:"Expand orders to see lines, then expand lines to see container items."}),t.jsx(p,{ref:i,dataSource:E,columns:d,isMasterDetail:!0,detailRowHeight:320,maxNestingDepth:3,currentNestingDepth:0,detailCellRendererParams:n,pageSettings:{pageSize:5}})]})};var f,I,O,C,x;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<Order>>(null);

  /**\r
   * Master Grid Columns\r
   */
  const masterColumns: ColumnProps[] = [{
    field: 'OrderID',
    headerText: 'Order ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: 120
  }, {
    field: 'OrderDate',
    headerText: 'Order Date',
    width: 130,
    type: 'date',
    format: 'yMd'
  }, {
    field: 'Freight',
    headerText: 'Freight',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }, {
    field: 'ShipCity',
    headerText: 'Ship City',
    width: 150
  }];

  /**\r
   * Detail Grid Columns\r
   */
  const detailColumns: ColumnProps[] = [{
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'UnitPrice',
    headerText: 'Unit Price',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }, {
    field: 'LineAmount',
    headerText: 'Line Total',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Cell Renderer Configuration\r
   * Mode 1: Nested Data - Extract from parent.OrderLines\r
   */
  const detailCellRendererParams: DetailCellRendererParams<Order> = {
    detailGridOptions: {
      columnDefs: detailColumns,
      rowHeight: 32,
      height: 250
    },
    /**\r
     * Callback to provide child data\r
     * Mode 1: Simply return child array from parent\r
     */
    getDetailRowData: params => {
      console.log(\`[Mode 1] Loading detail for Order \${params.data.OrderID}\`);
      // Extract nested OrderLines from parent
      const childData = params.data.OrderLines || [];
      params.successCallback(childData);
    },
    onDetailGridCreated: gridRef => {
      console.log(\`[Mode 1] Detail grid created for Order \${gridRef.parentData.OrderID}\`);
    },
    onDetailGridDestroyed: gridRef => {
      console.log(\`[Mode 1] Detail grid destroyed for Order \${gridRef.parentData.OrderID}\`);
    }
  };
  return <div style={{
    padding: '20px'
  }}>\r
      <h2>Mode 1: Nested Data Binding</h2>\r
      <p>Child rows are directly embedded in parent data as OrderLines property.</p>\r
      <Grid<Order> ref={gridRef} dataSource={ordersWithNestedData} columns={masterColumns} isMasterDetail={true} detailRowHeight={300} maxNestingDepth={2} detailCellRendererParams={detailCellRendererParams} onRowExpand={args => {
      console.log(\`[Mode 1] Row expanded: Order ID \${args.data.OrderID}\`);
    }} onRowCollapse={args => {
      console.log(\`[Mode 1] Row collapsed: Order ID \${args.data.OrderID}\`);
    }} pageSettings={{
      pageSize: 5
    }} />\r
    </div>;
}`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:`Story: Mode 1 - Nested Data Binding\r
\r
Demonstrates simple nested data mode where child rows are\r
directly embedded in parent row as OrderLines property.\r
\r
Features:\r
- Child data extracted from parent.OrderLines\r
- No external data source required\r
- Simple synchronous binding\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailMode1NestedData />\r
\`\`\``,...(x=(C=g.parameters)==null?void 0:C.docs)==null?void 0:x.description}}};var w,y,R,P,M;D.parameters={...D.parameters,docs:{...(w=D.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<Order>>(null);

  /**\r
   * Master Grid Columns\r
   */
  const masterColumns: ColumnProps[] = [{
    field: 'OrderID',
    headerText: 'Order ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: 120
  }, {
    field: 'OrderDate',
    headerText: 'Order Date',
    width: 130,
    type: 'date',
    format: 'yMd'
  }, {
    field: 'Freight',
    headerText: 'Freight',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Grid Columns\r
   */
  const detailColumns: ColumnProps[] = [{
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'UnitPrice',
    headerText: 'Unit Price',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Cell Renderer Configuration\r
   * Mode 2: Mapping Data - Filter childDataSource by mappingID\r
   */
  const detailCellRendererParams: DetailCellRendererParams<Order> = {
    detailGridOptions: {
      columnDefs: detailColumns,
      rowHeight: 32,
      height: 250
    },
    /**\r
     * Foreign key field name in parent row\r
     * Used to filter childDataSource\r
     */
    mappingID: 'OrderID',
    /**\r
     * Complete child dataset\r
     * Filtered by mappingID value from each parent row\r
     */
    childDataSource: allOrderLines,
    /**\r
     * Callback to provide child data\r
     * Mode 2: Filter childDataSource by foreign key\r
     */
    getDetailRowData: params => {
      console.log(\`[Mode 2] Loading detail for Order \${params.data.OrderID}\`);
      // Filter child data where OrderID matches parent OrderID
      const parentID = params.data[params.mappingID!];
      const childData = (params.childDataSource || []).filter((line: OrderLine) => line.OrderID === parentID);
      console.log(\`[Mode 2] Found \${childData.length} lines for Order \${parentID}\`);
      params.successCallback(childData);
    },
    onDetailGridCreated: gridRef => {
      console.log(\`[Mode 2] Detail grid created for Order \${gridRef.parentData.OrderID}\`);
    },
    onDetailGridDestroyed: gridRef => {
      console.log(\`[Mode 2] Detail grid destroyed for Order \${gridRef.parentData.OrderID}\`);
    }
  };
  return <div style={{
    padding: '20px'
  }}>\r
      <h2>Mode 2: Mapping Data Binding (Foreign Key)</h2>\r
      <p>Child rows are filtered from separate dataset using mappingID foreign key.</p>\r
      <Grid<Order> ref={gridRef} dataSource={ordersForMapping} columns={masterColumns} isMasterDetail={true} detailRowHeight={300} maxNestingDepth={2} detailCellRendererParams={detailCellRendererParams} onRowExpand={args => {
      console.log(\`[Mode 2] Row expanded: Order ID \${args.data.OrderID}\`);
    }} onRowCollapse={args => {
      console.log(\`[Mode 2] Row collapsed: Order ID \${args.data.OrderID}\`);
    }} pageSettings={{
      pageSize: 5
    }} />\r
    </div>;
}`,...(R=(y=D.parameters)==null?void 0:y.docs)==null?void 0:R.source},description:{story:`Story: Mode 2 - Mapping Data Binding with mappingID\r
\r
Demonstrates foreign key mapping where child data is filtered\r
from a separate dataset using mappingID (foreign key).\r
\r
Features:\r
- Child data from separate childDataSource\r
- Filtered by mappingID (OrderID)\r
- Supports large child datasets\r
- Single dataset can serve multiple parent rows\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailMode2MappingData />\r
\`\`\``,...(M=(P=D.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};var v,N,L,T,S;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<Order>>(null);
  const [loadingOrderIds, setLoadingOrderIds] = useState<Set<number>>(new Set());

  /**\r
   * Master Grid Columns\r
   */
  const masterColumns: ColumnProps[] = [{
    field: 'OrderID',
    headerText: 'Order ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: 120
  }, {
    field: 'OrderDate',
    headerText: 'Order Date',
    width: 130,
    type: 'date',
    format: 'yMd'
  }, {
    field: 'Freight',
    headerText: 'Freight',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Grid Columns\r
   */
  const detailColumns: ColumnProps[] = [{
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'UnitPrice',
    headerText: 'Unit Price',
    width: 120,
    textAlign: 'Right',
    format: 'C2'
  }];

  /**\r
   * Detail Cell Renderer Configuration\r
   * Mode 3: Async - Load data dynamically via callback\r
   */
  const detailCellRendererParams: DetailCellRendererParams<Order> = {
    detailGridOptions: {
      columnDefs: detailColumns,
      rowHeight: 32,
      height: 250
    },
    /**\r
     * Callback to provide child data asynchronously\r
     * Mode 3: Fetch from API and call success/fail callback\r
     */
    getDetailRowData: async params => {
      const orderId = params.data.OrderID;
      console.log(\`[Mode 3] Loading detail for Order \${orderId}...\`);
      try {
        // Track loading state
        setLoadingOrderIds(prev => new Set([...prev, orderId]));

        // Simulate async API call
        const childData = await fetchOrderLinesFromAPI(orderId);
        console.log(\`[Mode 3] Loaded \${childData.length} lines for Order \${orderId}\`);
        params.successCallback(childData);
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        console.error(\`[Mode 3] Failed to load Order \${orderId}:\`, errorMsg);
        params.failCallback(errorMsg);
      } finally {
        // Clear loading state
        setLoadingOrderIds(prev => {
          const next = new Set(prev);
          next.delete(orderId);
          return next;
        });
      }
    },
    onDetailGridCreated: gridRef => {
      console.log(\`[Mode 3] Detail grid created for Order \${gridRef.parentData.OrderID}\`);
    },
    onDetailGridDestroyed: gridRef => {
      console.log(\`[Mode 3] Detail grid destroyed for Order \${gridRef.parentData.OrderID}\`);
    }
  };
  return <div style={{
    padding: '20px'
  }}>\r
      <h2>Mode 3: Async Data Binding</h2>\r
      <p>Child rows are loaded dynamically via callback when detail row is expanded.</p>\r
      <p style={{
      color: '#666',
      fontSize: '14px'
    }}>\r
        Loading orders: {loadingOrderIds.size > 0 ? Array.from(loadingOrderIds).join(', ') : 'None'}\r
      </p>\r
      <Grid<Order> ref={gridRef} dataSource={ordersForMapping} columns={masterColumns} isMasterDetail={true} detailRowHeight={300} maxNestingDepth={2} detailCellRendererParams={detailCellRendererParams} onRowExpand={args => {
      console.log(\`[Mode 3] Row expanded: Order ID \${args.data.OrderID}\`);
    }} onRowCollapse={args => {
      console.log(\`[Mode 3] Row collapsed: Order ID \${args.data.OrderID}\`);
    }} pageSettings={{
      pageSize: 5
    }} />\r
    </div>;
}`,...(L=(N=h.parameters)==null?void 0:N.docs)==null?void 0:L.source},description:{story:`Story: Mode 3 - Async Data Binding\r
\r
Demonstrates asynchronous data loading where child data is\r
fetched dynamically via callback when detail row is expanded.\r
\r
Features:\r
- Dynamic data loading on expand\r
- API/Promise support\r
- Loading state management\r
- Error handling with failCallback\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailMode3AsyncData />\r
\`\`\``,...(S=(T=h.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var A,G,F,$,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const gridRef = useRef<GridRef<Order>>(null);

  /**\r
   * Level 1: Master Grid Columns\r
   */
  const level1Columns: ColumnProps[] = [{
    field: 'OrderID',
    headerText: 'Order ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: 120
  }, {
    field: 'OrderDate',
    headerText: 'Order Date',
    width: 130
  }];

  /**\r
   * Level 2: Detail Grid Columns\r
   */
  const level2Columns: ColumnProps[] = [{
    field: 'ProductID',
    headerText: 'Product ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }];

  /**\r
   * Level 3: Deep Detail Grid Columns\r
   */
  const level3Columns: ColumnProps[] = [{
    field: 'ItemID',
    headerText: 'Item ID',
    width: 100,
    textAlign: 'Right'
  }, {
    field: 'ProductName',
    headerText: 'Product Name',
    width: 150
  }, {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 100,
    textAlign: 'Right'
  }];

  /**\r
   * Level 3: Configuration for deepest detail grid\r
   */
  const level3Params: DetailCellRendererParams<OrderLine> = {
    detailGridOptions: {
      columnDefs: level3Columns,
      rowHeight: 32,
      height: 200
    },
    getDetailRowData: params => {
      console.log(\`[Level 3] Loading containers for Line \${params.data.ProductID}\`);
      // Simulate level 3 data
      const level3Data = [{
        ItemID: 1,
        ContainerID: 100,
        ProductName: \`\${params.data.ProductName} - Item 1\`,
        Quantity: 5
      }, {
        ItemID: 2,
        ContainerID: 100,
        ProductName: \`\${params.data.ProductName} - Item 2\`,
        Quantity: 7
      }];
      params.successCallback(level3Data);
    }
  };

  /**\r
   * Level 2: Configuration for middle detail grid\r
   * Includes nested Level 3 params for further expansion\r
   */
  const level2Params: DetailCellRendererParams<OrderLine> = {
    detailGridOptions: {
      columnDefs: level2Columns,
      rowHeight: 32,
      height: 250,
      // Enable nesting for level 3
      maxNestingDepth: 3,
      currentNestingDepth: 2,
      detailCellRendererParams: level3Params
    },
    getDetailRowData: params => {
      console.log(\`[Level 2] Loading details for Order \${params.data.OrderID}\`);
      const childData = params.data.OrderLines || [];
      params.successCallback(childData);
    }
  };

  /**\r
   * Level 1: Configuration for master grid\r
   * Includes nested Level 2 params\r
   */
  const level1Params: DetailCellRendererParams<Order> = {
    detailGridOptions: {
      columnDefs: level2Columns,
      rowHeight: 32,
      height: 280,
      maxNestingDepth: 3,
      currentNestingDepth: 1,
      // Nested configuration for Level 2 details
      detailCellRendererParams: level2Params
    },
    getDetailRowData: params => {
      console.log(\`[Level 1] Loading lines for Order \${params.data.OrderID}\`);
      const childData = params.data.OrderLines || [];
      params.successCallback(childData);
    },
    onDetailGridCreated: gridRef => {
      console.log(\`[Level 1] Detail grid created at depth 1\`);
    }
  };
  return <div style={{
    padding: '20px'
  }}>\r
      <h2>Advanced: Three-Level Nesting</h2>\r
      <p>Master Orders → Detail Lines → Container Items</p>\r
      <p style={{
      color: '#666',
      fontSize: '14px'
    }}>\r
        Expand orders to see lines, then expand lines to see container items.\r
      </p>\r
      <Grid<Order> ref={gridRef} dataSource={ordersForThreeLevelNesting} columns={level1Columns} isMasterDetail={true} detailRowHeight={320} maxNestingDepth={3} currentNestingDepth={0} detailCellRendererParams={level1Params} pageSettings={{
      pageSize: 5
    }} />\r
    </div>;
}`,...(F=(G=m.parameters)==null?void 0:G.docs)==null?void 0:F.source},description:{story:`Story: Advanced - Three-Level Nesting\r
\r
Demonstrates recursive detail grids with three levels of nesting:\r
Master Orders → Detail Lines → Container Items\r
\r
Features:\r
- Recursive nesting up to 3 levels\r
- maxNestingDepth control\r
- Nested detailCellRendererParams\r
- Deep hierarchy support\r
\r
@component\r
@example\r
\`\`\`tsx\r
<MasterDetailAdvancedThreeLevelNesting />\r
\`\`\``,...(k=($=m.parameters)==null?void 0:$.docs)==null?void 0:k.description}}};const K=["MasterDetailMode1NestedData","MasterDetailMode2MappingData","MasterDetailMode3AsyncData","MasterDetailAdvancedThreeLevelNesting"];export{m as MasterDetailAdvancedThreeLevelNesting,g as MasterDetailMode1NestedData,D as MasterDetailMode2MappingData,h as MasterDetailMode3AsyncData,K as __namedExportsOrder,V as default};
