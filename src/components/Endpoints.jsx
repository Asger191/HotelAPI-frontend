import "./endpoints.css"
import facade from "../apiFacade";

export default function EndpointTable() {


  return (
    <div>
    <div className="table">
      <div className="header">Method</div>
      <div className="header">URL</div>
      <div className="header">Request Body (JSON)</div>
      <div className="header">Response (JSON)</div>
      <div className="header">Error (e)</div>

      {/* Row 1 */}
      <div className="cell method">GET</div>
      <div className="cell">/api/users</div>
      <div className="cell"></div>
      <div className="cell">[user, user, ...] (1)</div>
      <div className="cell"></div>

      {/* Row 2 */}
      <div className="cell method faded">GET</div>
      <div className="cell faded">/api/users/{`{id}`}</div>
      <div className="cell"></div>
      <div className="cell faded">user (1)</div>
      <div className="cell faded">(e1)</div>

      {/* Row 3 */}
      <div className="cell method">POST</div>
      <div className="cell">/api/users</div>
      <div className="cell">user(1) without id</div>
      <div className="cell"></div>
      <div className="cell">(e2)</div>

      {/* Row 4 */}
      <div className="cell method faded">UPDATE</div>
      <div className="cell faded">/api/users/{`{id}`}</div>
      <div className="cell faded">user(1) without id</div>
      <div className="cell faded">user (1)</div>
      <div className="cell"></div>

      
    </div>

    <div className="errors">
  <h3>Error descriptions</h3>

  <p><strong>(e1):</strong> User not found – happens when the ID does not exist in the database.</p>
  <p><strong>(e2):</strong> Invalid input – user cannot be created, usually because fields are missing or username already exists.</p>
</div>
</div>

  );
}
