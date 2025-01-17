
$(document).ready(function () {

  $(".test").click();

  // Open Taxes
  let openTaxesGridApi;
  const openTaxesGridOptions = {
    rowData: [
      { auction: '2022', delinquent: '2021', number: '1909', face: '$169.63', interest: '18%', status: 'Open', mo: '13', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2021', delinquent: '2020', number: '1773', face: '$211.43', interest: '18%', status: 'Open', mo: '5', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2020', delinquent: '2019', number: '2105', face: '$161.08', interest: '12%', status: 'Open', mo: '37', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2019', delinquent: '2018', number: '2015', face: '$170.73', interest: '18%', status: 'Open', mo: '49', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2018', delinquent: '2017', number: '2041', face: '$295.89', interest: '18%', status: 'Open', mo: '5', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
    ],
    columnDefs: [
      { field: "auction", headerName: 'Auction' },
      { field: "delinquent", headerName: 'Delinquent', minWidth: 130 },
      { field: "number", headerName: 'Number' },
      { field: "face", headerName: 'Face' },
      { field: "interest", headerName: 'Interest' },
      { field: "status", headerName: 'Status' },
      { field: "mo", headerName: 'MO' },
      { field: "propertyOwner", headerName: 'Property Owner', minWidth: 200 },
      { field: "td", headerName: 'TD' },
      { field: "inBk", headerName: 'In BK' },
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
  openTaxesGridApi = agGrid.createGrid(document.querySelector("#openTaxesTable"), openTaxesGridOptions);


  // Closed Taxes
  let closedTaxesGridApi;
  const closedTaxesGridOptions = {
    rowData: [
      { auction: '2022', delinquent: '2021', number: '1909', face: '$169.63', interest: '18%', status: 'Closed', mo: '13', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2021', delinquent: '2020', number: '1773', face: '$211.43', interest: '18%', status: 'Closed', mo: '5', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2020', delinquent: '2019', number: '2105', face: '$161.08', interest: '12%', status: 'Closed', mo: '37', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2019', delinquent: '2018', number: '2015', face: '$170.73', interest: '18%', status: 'Closed', mo: '49', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2018', delinquent: '2017', number: '2041', face: '$295.89', interest: '18%', status: 'Closed', mo: '5', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2017', delinquent: '2016', number: '2015', face: '$170.73', interest: '18%', status: 'Closed', mo: '49', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2016', delinquent: '2015', number: '2041', face: '$295.89', interest: '18%', status: 'Closed', mo: '5', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
    ],
    columnDefs: [
      { field: "auction", headerName: 'Auction' },
      { field: "delinquent", headerName: 'Delinquent', minWidth: 130 },
      { field: "number", headerName: 'Number' },
      { field: "face", headerName: 'Face' },
      { field: "interest", headerName: 'Interest' },
      { field: "status", headerName: 'Status' },
      { field: "mo", headerName: 'MO' },
      { field: "propertyOwner", headerName: 'Property Owner', minWidth: 200 },
      { field: "td", headerName: 'TD' },
      { field: "inBk", headerName: 'In BK' },
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
  closedTaxesGridApi = agGrid.createGrid(document.querySelector("#closedTaxesTable"), closedTaxesGridOptions);


  // Tax History
  let taxHistoryGridApi;
  const taxHistoryGridOptions = {
    rowData: [
      { auction: '2019', delinquent: '2017', number: '1909', face: '$169.63', interest: '18%', status: 'closed', mo: '13', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2021', delinquent: '2020', number: '1773', face: '$211.43', interest: '18%', status: 'closed', mo: '5', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
      { auction: '2017', delinquent: '2016', number: '2105', face: '$161.08', interest: '12%', status: 'closed', mo: '37', propertyOwner: 'terry & ruth harrell', td: 'No', inBk: 'No', },
    ],
    columnDefs: [
      { field: "auction", headerName: 'Auction' },
      { field: "delinquent", headerName: 'Delinquent', minWidth: 130 },
      { field: "number", headerName: 'Number' },
      { field: "face", headerName: 'Face' },
      { field: "interest", headerName: 'Interest' },
      { field: "status", headerName: 'Status' },
      { field: "mo", headerName: 'MO' },
      { field: "propertyOwner", headerName: 'Property Owner', minWidth: 200 },
      { field: "td", headerName: 'TD' },
      { field: "inBk", headerName: 'In BK' },
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
  taxHistoryGridApi = agGrid.createGrid(document.querySelector("#taxHistoryTable"), taxHistoryGridOptions);


  // Current Mortgages
  let currentMortgagesGridApi;
  const currentMortgagesGridOptions = {
    rowData: [
      { loanPosition: "Loan 1", loanType: "Commercial", granteeName: "Hawkins", lenderName: "Lendinghome Funding Limited", loanAmount: "$136,500", estRate: "2.9%", estLoanPayment: "$568.16", termType: "-", loanTerm: "360", recordingDate: "06/17/2021", maturityDate: "12/17/2023", },
    ],
    columnDefs: [
      { field: "loanPosition", headerName: "Loan Position", minWidth: 105 },
      { field: "loanType", headerName: "Loan Type" },
      { field: "granteeName", headerName: "Grantee Name", minWidth: 112 },
      { field: "lenderName", headerName: "Lender Name", minWidth: 163 },
      { field: "loanAmount", headerName: "Loan Amount", minWidth: 105 },
      { field: "estRate", headerName: "Est. Rate" },
      { field: "estLoanPayment", headerName: "Est Loan Payment", minWidth: 132 },
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
  currentMortgagesGridApi = agGrid.createGrid(document.querySelector("#currentMortgagesTable"), currentMortgagesGridOptions);


  // Additional Mortgage info
  let additionalMortgageInfoGridApi;
  const additionalMortgageInfoGridOptions = {
    rowData: [
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
      { recordingDate: "03/25/2022", granteeName: "MCK PROPERTIES LLC", loanType: "Commercial", lenderName: "KESSLER MICHELLE", loanAmount: "$136,500", transactionType: "Non-Arm’s Length", documentType: "Quit Claim Deed", },
    ],
    columnDefs: [
      { field: "recordingDate", headerName: "Recording Date", minWidth: 156 },
      { field: "loanType", headerName: "Loan Type" },
      { field: "granteeName", headerName: "Grantee Name", minWidth: 194 },
      { field: "lenderName", headerName: "Lender Name", minWidth: 185 },
      { field: "loanAmount", headerName: "Loan Amount", minWidth: 146 },
      { field: "transactionType", headerName: "Transaction Type", minWidth: 200 },
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
  additionalMortgageInfoGridApi = agGrid.createGrid(document.querySelector("#additionalMortgageInfoTable"), additionalMortgageInfoGridOptions);


  // Sale History
  let saleHistoryTableGridApi;
  const saleHistoryTableGridOptions = {
    rowData: [
      { buyerName: "Poorvi Shrivastav", sellerName: "Hoose 9 Lic", armsLength: "Yes", purchaseMethod: "Financed", saleAmount: "$300,000", downPayment: "$75,000", saleDate: "04/28/2022", ltv: "75", recordingDate: "05/11/2022", documentType: "Warranty Deed", transactionType: "Arms Length Residential Transactions (Purchase/Resales)", },
      { buyerName: "Hoose 9 Llc", sellerName: "Loose Homes And Investments LIc", armsLength: "Yes", purchaseMethod: "Cash Purchase", saleAmount: "$865,469", downPayment: "$865,469", saleDate: "12/27/2017", ltv: "100", recordingDate: "12/29/2017", documentType: "Warranty Deed", transactionType: "Non-Residential Arm's Length Transactions", },
      { buyerName: "Keen Construction Inc", sellerName: "Daniel Christenson, Kimberlee Christenson", armsLength: "Yes", purchaseMethod: "Cash Purchase", saleAmount: "$50,000", downPayment: "$50,000", saleDate: "04/06/2007", ltv: "100", recordingDate: "04/19/2007", documentType: "Warranty Deed", transactionType: "Non-Residential Arm's Length Transactions", },
      { buyerName: "Anne Hoverson", sellerName: "AS Ives Jr, Sarah E Ives", armsLength: "Yes", purchaseMethod: "Financed", saleAmount: "$65,000", downPayment: "0", saleDate: "07/13/2005", ltv: "140", recordingDate: "07/22/2005", documentType: "Warranty Deed", transactionType: "Arms Length Residential Transactions (Purchase/Resales)", },
    ],
    columnDefs: [
      { field: "buyerName", headerName: "Buyer Name", minWidth: 150 },
      { field: "sellerName", headerName: "Seller Name", minWidth: 160 },
      { field: "armsLength", headerName: "Arms Length" },
      { field: "purchaseMethod", headerName: "Purchase Method", minWidth: 132 },
      { field: "saleAmount", headerName: "Sale Amount" },
      { field: "downPayment", headerName: "Down Payment", minWidth: 117 },
      { field: "saleDate", headerName: "Sale Date" },
      { field: "ltv", headerName: "LTV", minWidth: 50 },
      { field: "recordingDate", headerName: "Recording Date", minWidth: 120 },
      { field: "documentType", headerName: "Document Type", minWidth: 120 },
      { field: "transactionType", headerName: "Transaction Type", minWidth: 285 },
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
  saleHistoryTableGridApi = agGrid.createGrid(document.querySelector("#saleHistoryTable"), saleHistoryTableGridOptions);

});
