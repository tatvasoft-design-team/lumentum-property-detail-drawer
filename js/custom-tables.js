$(document).ready(function () {
  // AG grid
  // ----------------------------------------------------------------------------------------------------------------------------------------------------
  // Open Taxes
  const openTaxesTable = document.querySelector("#openTaxesTable");
  if (openTaxesTable) {
    let openTaxesGridApi;
    const openTaxesGridOptions = {
      rowData: [
        {
          auction: "2022",
          delinquent: "2021",
          number: "1909",
          face: "$169.63",
          interest: "18%",
          status: "Open",
          mo: "13",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2021",
          delinquent: "2020",
          number: "1773",
          face: "$211.43",
          interest: "18%",
          status: "Open",
          mo: "5",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2020",
          delinquent: "2019",
          number: "2105",
          face: "$161.08",
          interest: "12%",
          status: "Open",
          mo: "37",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2019",
          delinquent: "2018",
          number: "2015",
          face: "$170.73",
          interest: "18%",
          status: "Open",
          mo: "49",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2018",
          delinquent: "2017",
          number: "2041",
          face: "$295.89",
          interest: "18%",
          status: "Open",
          mo: "5",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
      ],
      columnDefs: [
        { field: "auction", headerName: "Auction" },
        { field: "delinquent", headerName: "Delinquent", minWidth: 130 },
        { field: "number", headerName: "Number" },
        { field: "face", headerName: "Face" },
        { field: "interest", headerName: "Interest" },
        { field: "status", headerName: "Status" },
        { field: "mo", headerName: "MO" },
        { field: "propertyOwner", headerName: "Property Owner", minWidth: 200 },
        { field: "td", headerName: "TD" },
        { field: "inBk", headerName: "In BK" },
      ],
      defaultColDef: {
        flex: 1,
        resizable: false,
        minWidth: 80,
        sortable: false,
      },
      suppressMovableColumns: true,
      headerHeight: 44,
      rowHeight: 44,
      domLayout: "autoHeight",
    };
    openTaxesGridApi = agGrid.createGrid(openTaxesTable, openTaxesGridOptions);
  }

  // Closed Taxes.
  const closedTaxesTable = document.querySelector("#closedTaxesTable");
  if (closedTaxesTable) {
    let closedTaxesGridApi;
    const closedTaxesGridOptions = {
      rowData: [
        {
          auction: "2022",
          delinquent: "2021",
          number: "1909",
          face: "$169.63",
          interest: "18%",
          status: "Closed",
          mo: "13",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2021",
          delinquent: "2020",
          number: "1773",
          face: "$211.43",
          interest: "18%",
          status: "Closed",
          mo: "5",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2020",
          delinquent: "2019",
          number: "2105",
          face: "$161.08",
          interest: "12%",
          status: "Closed",
          mo: "37",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2019",
          delinquent: "2018",
          number: "2015",
          face: "$170.73",
          interest: "18%",
          status: "Closed",
          mo: "49",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2018",
          delinquent: "2017",
          number: "2041",
          face: "$295.89",
          interest: "18%",
          status: "Closed",
          mo: "5",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2017",
          delinquent: "2016",
          number: "2015",
          face: "$170.73",
          interest: "18%",
          status: "Closed",
          mo: "49",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2016",
          delinquent: "2015",
          number: "2041",
          face: "$295.89",
          interest: "18%",
          status: "Closed",
          mo: "5",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
      ],
      columnDefs: [
        { field: "auction", headerName: "Auction" },
        { field: "delinquent", headerName: "Delinquent", minWidth: 130 },
        { field: "number", headerName: "Number" },
        { field: "face", headerName: "Face" },
        { field: "interest", headerName: "Interest" },
        { field: "status", headerName: "Status" },
        { field: "mo", headerName: "MO" },
        { field: "propertyOwner", headerName: "Property Owner", minWidth: 200 },
        { field: "td", headerName: "TD" },
        { field: "inBk", headerName: "In BK" },
      ],
      defaultColDef: {
        flex: 1,
        resizable: false,
        minWidth: 80,
        sortable: false,
      },
      suppressMovableColumns: true,
      headerHeight: 44,
      rowHeight: 44,
      domLayout: "autoHeight",
    };
    closedTaxesGridApi = agGrid.createGrid(
      closedTaxesTable,
      closedTaxesGridOptions
    );
  }

  // Tax History
  const taxHistoryTable = document.querySelector("#taxHistoryTable");
  if (taxHistoryTable) {
    let taxHistoryGridApi;
    const taxHistoryGridOptions = {
      rowData: [
        {
          auction: "2019",
          delinquent: "2017",
          number: "1909",
          face: "$169.63",
          interest: "18%",
          status: "closed",
          mo: "13",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2021",
          delinquent: "2020",
          number: "1773",
          face: "$211.43",
          interest: "18%",
          status: "closed",
          mo: "5",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
        {
          auction: "2017",
          delinquent: "2016",
          number: "2105",
          face: "$161.08",
          interest: "12%",
          status: "closed",
          mo: "37",
          propertyOwner: "terry & ruth harrell",
          td: "No",
          inBk: "No",
        },
      ],
      columnDefs: [
        { field: "auction", headerName: "Auction" },
        { field: "delinquent", headerName: "Delinquent", minWidth: 130 },
        { field: "number", headerName: "Number" },
        { field: "face", headerName: "Face" },
        { field: "interest", headerName: "Interest" },
        { field: "status", headerName: "Status" },
        { field: "mo", headerName: "MO" },
        { field: "propertyOwner", headerName: "Property Owner", minWidth: 200 },
        { field: "td", headerName: "TD" },
        { field: "inBk", headerName: "In BK" },
      ],
      defaultColDef: {
        flex: 1,
        resizable: false,
        minWidth: 80,
        sortable: false,
      },
      suppressMovableColumns: true,
      headerHeight: 44,
      rowHeight: 44,
      domLayout: "autoHeight",
    };
    taxHistoryGridApi = agGrid.createGrid(
      taxHistoryTable,
      taxHistoryGridOptions
    );
  }

  // Current Mortgages
  const currentMortgagesTable = document.querySelector(
    "#currentMortgagesTable"
  );
  if (currentMortgagesTable) {
    let currentMortgagesGridApi;
    const currentMortgagesGridOptions = {
      rowData: [
        {
          loanPosition: "Loan 1",
          loanType: "Commercial",
          granteeName: "Hawkins",
          lenderName: "Lendinghome Funding Limited",
          loanAmount: "$136,500",
          estRate: "2.9%",
          estLoanPayment: "$568.16",
          termType: "-",
          loanTerm: "360",
          recordingDate: "06/17/2021",
          maturityDate: "12/17/2023",
        },
      ],
      columnDefs: [
        { field: "loanPosition", headerName: "Loan Position", minWidth: 105 },
        { field: "loanType", headerName: "Loan Type" },
        { field: "granteeName", headerName: "Grantee Name", minWidth: 112 },
        { field: "lenderName", headerName: "Lender Name", minWidth: 163 },
        { field: "loanAmount", headerName: "Loan Amount", minWidth: 105 },
        { field: "estRate", headerName: "Est. Rate" },
        {
          field: "estLoanPayment",
          headerName: "Est Loan Payment",
          minWidth: 132,
        },
        { field: "termType", headerName: "Term Type" },
        { field: "loanTerm", headerName: "Loan Term" },
        { field: "recordingDate", headerName: "Recording Date", minWidth: 120 },
        { field: "maturityDate", headerName: "Maturity Date", minWidth: 120 },
      ],
      defaultColDef: {
        flex: 1,
        resizable: false,
        minWidth: 90,
        sortable: false,
      },
      suppressMovableColumns: true,
      headerHeight: 44,
      rowHeight: 44,
      domLayout: "autoHeight",
    };
    currentMortgagesGridApi = agGrid.createGrid(
      currentMortgagesTable,
      currentMortgagesGridOptions
    );
  }

  // Additional Mortgage info
  const additionalMortgageInfoTable = document.querySelector(
    "#additionalMortgageInfoTable"
  );
  if (additionalMortgageInfoTable) {
    let additionalMortgageInfoGridApi;
    const additionalMortgageInfoGridOptions = {
      rowData: [
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
        {
          recordingDate: "03/25/2022",
          granteeName: "MCK PROPERTIES LLC",
          loanType: "Commercial",
          lenderName: "KESSLER MICHELLE",
          loanAmount: "$136,500",
          transactionType: "Non-Arm’s Length",
          documentType: "Quit Claim Deed",
        },
      ],
      columnDefs: [
        { field: "recordingDate", headerName: "Recording Date", minWidth: 156 },
        { field: "loanType", headerName: "Loan Type" },
        { field: "granteeName", headerName: "Grantee Name", minWidth: 194 },
        { field: "lenderName", headerName: "Lender Name", minWidth: 185 },
        { field: "loanAmount", headerName: "Loan Amount", minWidth: 146 },
        {
          field: "transactionType",
          headerName: "Transaction Type",
          minWidth: 200,
        },
        { field: "documentType", headerName: "Document Type", minWidth: 200 },
      ],
      defaultColDef: {
        flex: 1,
        resizable: false,
        minWidth: 130,
        sortable: false,
      },
      suppressMovableColumns: true,
      headerHeight: 44,
      rowHeight: 44,
      domLayout: "autoHeight",
    };
    additionalMortgageInfoGridApi = agGrid.createGrid(
      additionalMortgageInfoTable,
      additionalMortgageInfoGridOptions
    );
  }

  // Sale History
  const saleHistoryTable = document.querySelector("#saleHistoryTable");
  if (saleHistoryTable) {
    let saleHistoryTableGridApi;
    const saleHistoryTableGridOptions = {
      rowData: [
        {
          buyerName: "Poorvi Shrivastav",
          sellerName: "Hoose 9 Lic",
          armsLength: "Yes",
          purchaseMethod: "Financed",
          saleAmount: "$300,000",
          downPayment: "$75,000",
          saleDate: "04/28/2022",
          ltv: "75",
          recordingDate: "05/11/2022",
          documentType: "Warranty Deed",
          transactionType:
            "Arms Length Residential Transactions (Purchase/Resales)",
        },
        {
          buyerName: "Hoose 9 Llc",
          sellerName: "Loose Homes And Investments LIc",
          armsLength: "Yes",
          purchaseMethod: "Cash Purchase",
          saleAmount: "$865,469",
          downPayment: "$865,469",
          saleDate: "12/27/2017",
          ltv: "100",
          recordingDate: "12/29/2017",
          documentType: "Warranty Deed",
          transactionType: "Non-Residential Arm's Length Transactions",
        },
        {
          buyerName: "Keen Construction Inc",
          sellerName: "Daniel Christenson, Kimberlee Christenson",
          armsLength: "Yes",
          purchaseMethod: "Cash Purchase",
          saleAmount: "$50,000",
          downPayment: "$50,000",
          saleDate: "04/06/2007",
          ltv: "100",
          recordingDate: "04/19/2007",
          documentType: "Warranty Deed",
          transactionType: "Non-Residential Arm's Length Transactions",
        },
        {
          buyerName: "Anne Hoverson",
          sellerName: "AS Ives Jr, Sarah E Ives",
          armsLength: "Yes",
          purchaseMethod: "Financed",
          saleAmount: "$65,000",
          downPayment: "0",
          saleDate: "07/13/2005",
          ltv: "140",
          recordingDate: "07/22/2005",
          documentType: "Warranty Deed",
          transactionType:
            "Arms Length Residential Transactions (Purchase/Resales)",
        },
      ],
      columnDefs: [
        { field: "buyerName", headerName: "Buyer Name", minWidth: 150 },
        { field: "sellerName", headerName: "Seller Name", minWidth: 160 },
        { field: "armsLength", headerName: "Arms Length" },
        {
          field: "purchaseMethod",
          headerName: "Purchase Method",
          minWidth: 132,
        },
        { field: "saleAmount", headerName: "Sale Amount" },
        { field: "downPayment", headerName: "Down Payment", minWidth: 117 },
        { field: "saleDate", headerName: "Sale Date" },
        { field: "ltv", headerName: "LTV", minWidth: 50 },
        { field: "recordingDate", headerName: "Recording Date", minWidth: 120 },
        { field: "documentType", headerName: "Document Type", minWidth: 120 },
        {
          field: "transactionType",
          headerName: "Transaction Type",
          minWidth: 285,
        },
      ],
      defaultColDef: {
        flex: 1,
        resizable: false,
        minWidth: 100,
        sortable: false,
      },
      suppressMovableColumns: true,
      headerHeight: 44,
      rowHeight: 44,
      domLayout: "autoHeight",
    };
    saleHistoryTableGridApi = agGrid.createGrid(
      saleHistoryTable,
      saleHistoryTableGridOptions
    );
  }

  // Neighborhood and Local School Information
  const NeighborhoodandSchoolInfo = document.querySelector(
    "#NeighborhoodandSchoolInfo"
  );
  if (NeighborhoodandSchoolInfo) {
    let NeighborhoodandSchoolInfoTableGridApi;
    const NeighborhoodandSchoolInfoTableGridOptions = {
      rowData: [
        {
          Row: "1",
          SchoolName: "Jefferson Davis Middle School",
          Grade: "6-8",
          Type: "Public",
          Rating: "2",
          ParentRating: "3",
          Address: "7050 Melvin Road",
        },
        {
          Row: "2",
          SchoolName: "Edward H. White High School",
          Grade: "9-12",
          Type: "Public",
          Rating: "2",
          ParentRating: "3",
          Address: "1700 Old Middleburg Road North",
        },
        {
          Row: "3",
          SchoolName: "Crystal Springs Elementary School",
          Grade: "PK-5",
          Type: "Public",
          Rating: "5",
          ParentRating: "4",
          Address: "1200 Hammond Boulevard",
        },
      ],
      columnDefs: [
        {
          field: "Row",
          headerName: "Row",
          maxWidth: 60,
          resizable: false,
          cellStyle: { textAlign: "center" },
          headerClass: "text-center",
        },
        { field: "SchoolName", headerName: "School Name", minWidth: 250 },
        {
          field: "Grade",
          headerName: "Grade",
          cellRenderer: (params) => {
            let statusClass = "";
            if (params.value) {
              if (params.value.includes("PK-5")) {
                statusClass = "status green";
              } else if (params.value.includes("9-12")) {
                statusClass = "status info";
              } else if (params.value.includes("6-8")) {
                statusClass = "status warn";
              }
            }
            return `<span class="${statusClass}">${params.value}</span>`;
          },
        },
        {
          field: "Type",
          headerName: "Type",
          minWidth: 80,
          cellStyle: { textAlign: "center" },
          headerClass: "text-center",
        },
        {
          field: "Rating",
          headerName: "Rating",
          minWidth: 66,
          cellStyle: { textAlign: "center" },
          headerClass: "text-center",
        },
        {
          field: "ParentRating",
          headerName: "Parent Rating",
          minWidth: 110,
          cellStyle: { textAlign: "center" },
          headerClass: "text-center",
        },
        { field: "Address", headerName: "Address", minWidth: 250 },
      ],
      defaultColDef: {
        flex: 1,
        resizable: false,
        minWidth: 100,
        sortable: false,
      },
      suppressMovableColumns: true,
      headerHeight: 44,
      rowHeight: 44,
      domLayout: "autoHeight",
    };
    NeighborhoodandSchoolInfoTableGridApi = agGrid.createGrid(
      NeighborhoodandSchoolInfo,
      NeighborhoodandSchoolInfoTableGridOptions
    );
  }

  // DATA TABLE
  // ----------------------------------------------------------------------------------------------------------------------------------------------------
  // Task List Data Table JS
  if ($("#taskListTable").length) {
    var taskListData = [
      {
        id: "1",
        type: "Asset",
        task: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
        owner: "John smith",
        requestFrom: "Shane Morrison",
        priority: "High",
        dueDate: "06/06/2022",
        attach: "Attach",
        status: "New",
        actions: "Menu",
      },
      {
        id: "2",
        type: "Payment plan",
        task: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
        owner: "David Bough",
        requestFrom: "Shane Morrison",
        priority: "Low",
        dueDate: "06/06/2022",
        attach: "Attach",
        status: "New",
        actions: "Menu",
      },
      {
        id: "3",
        type: "Asset transaction",
        task: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
        owner: "Kevin Owens",
        requestFrom: "Shane Morrison",
        priority: "High",
        dueDate: "06/06/2022",
        attach: "Attach",
        status: "New",
        actions: "Menu",
      },
      {
        id: "4",
        type: "Asset",
        task: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
        owner: "Sara Taylor",
        requestFrom: "Shane Morrison",
        priority: "Low",
        dueDate: "06/06/2022",
        attach: "Attach",
        status: "In Progress",
        actions: "Menu",
        chip_class: "progress-chip",
      },
      {
        id: "5",
        type: "Payment plan",
        task: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i",
        owner: "Liam Watson",
        requestFrom: "Shane Morrison",
        priority: "High",
        dueDate: "06/06/2022",
        attach: "Attach",
        status: "In Progress",
        actions: "Menu",
        chip_class: "progress-chip",
      },
    ];
    $("#taskListTable").DataTable({
      data: taskListData,
      bSortable: false,
      columns: [
        { title: "ID", data: "id" },
        { title: "Type", data: "type" },
        {
          title: "Task",
          data: "description",
          render: function (data) {
            return '<p class="table-message">' + data + "</p> ";
            return data;
          },
        },
        { title: "Owner", data: "owner" },
        { title: "Request From", data: "requestFrom" },
        { title: "Priority", data: "priority" },
        { title: "Due Date", data: "dueDate" },
        {
          title: "Attachment",
          className: "text-center",
          data: "attach",
          render: function (data) {
            return '<a href="#" class="attach-icon"></a> ';
            return data;
          },
        },
        {
          title: "Status",
          className: "text-center",
          data: "status",
          render: function (data, type, fullData) {
            return (
              '<span class="status-chip ' +
              fullData.chip_class +
              '">' +
              data +
              "</span>"
            );
            return title;
          },
        },
        {
          title: "Actions",
          className: "text-center",
          render: function (action) {
            return (
              '<div class="dropdown action-dropdown">' +
              '<button class="btn dropdown-toggle" type="button" id="tableMenu"data-bs-toggle="dropdown" aria-expanded="false">' +
              '<em class="table-menu"></em>' +
              "</button>" +
              '<ul class="dropdown-menu" aria-labelledby="tableMenu">' +
              "<li>" +
              '<a class="dropdown-item" href="#" title="Edit"><em class="ic-edit"></em>Edit</a>' +
              "</li>" +
              "<li>" +
              '<a class="dropdown-item" href="#" title="Delete"><em class="file-delete"></em>Delete</a>' +
              "</li>" +
              "</ul>" +
              "</div>"
            );
            return action;
          },
        },
      ],
    });
  }
});
