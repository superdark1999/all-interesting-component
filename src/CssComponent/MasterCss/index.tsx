import React from "react";
import "./styled.css";

export default function index() {
  return (
    <div>
      <table>
        <tr className="header">
          <th>Country</th>
          <th>OrderId</th>
          <th>Order Amount</th>
        </tr>
        <tr className="content">
          <td>123</td>
          <td>1324</td>
          <td>234</td>
        </tr>
        <tr className="content">
          <td>123</td>
          <td>1324</td>
          <td>234</td>
        </tr>
        <tr className="content">
          <td>123</td>
          <td>1324</td>
          <td>234</td>
        </tr>
        <tr className="content">
          <td>123</td>
          <td>1324</td>
          <td>234</td>
        </tr>
        <tr className="header">
          <th>Total </th>
          <th></th>
          <th>23432</th>
        </tr>
      </table>

      <div className="rectangle"></div>
    </div>
  );
}
