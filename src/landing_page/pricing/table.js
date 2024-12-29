import React from 'react';

function Table() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div style={{ width: "90%" }}>
        {/* Tabs Navigation */}
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active fs-3"
              id="equity-tab"
              data-bs-toggle="tab"
              data-bs-target="#equity"
              type="button"
              role="tab"
            >
              Equity
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link fs-3 mb-2"
              id="currency-tab"
              data-bs-toggle="tab"
              data-bs-target="#currency"
              type="button"
              role="tab"
            >
              Currency
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link fs-3"
              id="commodity-tab"
              data-bs-toggle="tab"
              data-bs-target="#commodity"
              type="button"
              role="tab"
            >
              Commodity
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content mt-3" id="myTabContent">
          {/* Equity Tab */}
          <div className="tab-pane fade show active" id="equity" role="tabpanel">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Equity Delivery</th>
                  <th>Equity Intraday</th>
                  <th>F&O - Futures</th>
                  <th>F&O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td>Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>Flat ₹20 per executed order</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>STT/CTT</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.1% on buy & sell</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.025% on the sell side</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.02% on the sell side</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>
                    0.125% of the intrinsic value on options that are bought and exercised<br />
                    0.1% on sell side (on premium)
                  </td>
                </tr>
                <tr>
                  <td>Transaction Charges</td>
                  <td>
                    NSE: 0.00297%<br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00297%<br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00173%<br />
                    BSE: 0
                  </td>
                  <td>
                    NSE: 0.03503% (on premium)<br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>GST</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td>SEBI Charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(211, 211, 211)"}}>Stamp Charges</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.015% or ₹1500 / crore on buy side</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.003% or ₹300 / crore on buy side</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.002% or ₹200 / crore on buy side</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Currency Tab */}
          <div className="tab-pane fade" id="currency" role="tabpanel">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Currency Futures</th>
                  <th>Currency Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>Brokerage</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.03% or ₹20/executed order whichever is lower</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>₹20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>Transaction Charges</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>
                    NSE: 0.00035%<br />
                    BSE: 0.00045%
                  </td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>
                    NSE: 0.0311%<br />
                    BSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>SEBI Charges</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>₹10 / crore</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp Charges</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Commodity Tab */}
          <div className="tab-pane fade" id="commodity" role="tabpanel">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Commodity Futures</th>
                  <th>Commodity Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>Brokerage</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>0.03% or ₹20/executed order whichever is lower</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>₹20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.01% on sell side (Non-Agri)</td>
                  <td>0.05% on sell side</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>Transaction Charges</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>
                    MCX: 0.0021%<br />
                    NSE: 0.0001%
                  </td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>
                    MCX: 0.0418%<br />
                    NSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>SEBI Charges</td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>
                    Agri: ₹1 / crore<br />
                    Non-agri: ₹10 / crore
                  </td>
                  <td style={{backgroundColor:"rgb(211,211,211)"}}>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp Charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      <h4 className='mt-5  mb-5 text-center' style={{fontWeight:"400"}}> <a href='#' style={{textDecoration:"none" , fontWeight:"400"}}>Calculate your costs upfront</a> using our brokerage calculator</h4>
      </div>
    </div>
  );
}

export default Table;
