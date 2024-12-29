import React from "react";

function Brokerage() {
  return (
    <div className="container" style={{width:"90%"}}>
      <div className="row">
        <div className="col-6">
          <h1 className="fs-3 mb-5">Charges explained</h1>
          <h1 className="fs-5">Securities/Commodities transaction tax</h1>
          <p className="text-muted fs-6">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br />
            <br />
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <br />
          <h1 className="fs-5">Transaction/Turnover Charges</h1>
          <p className="text-muted fs-6">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br />
            <br />
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
            <br />
            <br />
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
            <br />
            <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
            <br />
            <br />
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <br />
          <h1 className="fs-5">Call & trade</h1>
          <p className="text-muted fs-6">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <br />
          <h1 className="fs-5">Stamp charges</h1>
          <p className="text-muted fs-6">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <br />
          <h1 className="fs-5">NRI brokerage charges</h1>
          <p className="text-muted fs-6">
            ₹100 per order for futures and options.
            <br />
            <br />
            For a non-PIS account, 0.5% or ₹100 per executed order for equity
            (whichever is lower).
            <br />
            <br />
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
            <br />
            <br />
            ₹500 + GST as yearly account maintenance charges (AMC) charges.
          </p>
          <br />
          <h1 className="fs-5">Account with debit balance</h1>
          <p className="text-muted fs-6">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <br />
          <h1 className="fs-5">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h1>
          <p className="text-muted fs-6">
            Equity and Futures - ₹10 per crore + GST of the traded value.
            <br />
            <br />
            Options - ₹50 per crore + GST traded value (premium value).
            <br />
            <br />
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </p>
          <br />
          <h1 className="fs-5">Margin Trading Facility (MTF)</h1>
          <p className="text-muted fs-6">
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The
            interest is applied from T+1 day until the day MTF stocks are sold.
            <br />
            <br />
            MTF Brokerage: 0.03% or Rs. 20/executed order, whichever is lower.
            <br />
            <br />
            MTF pledge charge: ₹30 + GST per pledge request per ISIN.
          </p>
        </div>
        <div className="col-6">
          <div>
            <h1 className="fs-3 mb-5">&nbsp;</h1>
          </div>
          <h1 className="fs-5">GST</h1>
          <p className="text-muted fs-6">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <br />
          <h1 className="fs-5">SEBI Charges</h1>
          <p className="text-muted fs-6">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <br />
          <h1 className="fs-5">DP (Depository participant) charges</h1>
          <p className="text-muted fs-6">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
            <br />
            <br />
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
            <br />
            <br />
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee..
          </p>
          <br />
          <h1 className="fs-5">Pledging charges</h1>
          <p className="text-muted fs-6">
            ₹30 + GST per pledge request per ISIN.
          </p>
          <br />
          <h1 className="fs-5">AMC (Account maintenance charges)</h1>
          <p className="text-muted fs-6">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA
            <br />
            <br />
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC.
          </p>
          <br />
          <h1 className="fs-5">Corporate action order charges</h1>
          <p className="text-muted fs-6">
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <br />
          <h1 className="fs-5">Off-market transfer charges</h1>
          <p className="text-muted fs-6">₹25 per transaction.</p>
          <br />
          <h1 className="fs-5">Physical CMR request</h1>
          <p className="text-muted fs-6">
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h1 className="fs-5">Payment gateway charges</h1>
          <p className="text-muted fs-6">
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <h1 className="fs-5">Delayed Payment Charges</h1>
          <p className="text-muted fs-6">
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
          </p>
        </div>
        <div className="row mt-5 ">
          <h1 className="fs-5 text-muted">Disclaimer</h1>
          <p className="text-muted fs-6">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>

    <div className="container mt-5">
      <h2 className="mb-5">Charges for account opening</h2>
      <table className="table table-bordered mt-4">
        <thead className="thead-light">
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td className="text-success">FREE</td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td className="text-success">FREE</td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="container mt-5 pb-3">
      <h2 className=" mb-5">Charges for Optional Value-Added Services</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TickerTape</td>
            <td>Monthly / Annual</td>
            <td>
              Free: 0 <br />
              Pro: 249 / 2399
            </td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>
              Buy &amp; Invest More: 100 <br />
              SIP: 10
            </td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>
              Connect: 2000 <br />
              Historical: 2000
            </td>
          </tr>
        </tbody>
      </table>
    </div>



      </div>
    </div>
  );
}

export default Brokerage;
