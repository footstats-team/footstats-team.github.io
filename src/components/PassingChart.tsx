const rows = [
  {
    time: "0-0.57s",
    action: "Receive",
    from: { x: 70, y: 48 },
    to: { x: 74.2, y: 50.5 },
    result: "success",
  },
  {
    time: "0.57-1.5s",
    action: "Pass",
    from: { x: 74.2, y: 50.5 },
    to: { x: 93, y: 58.9 },
    result: "fail",
  },
  {
    time: "0-0.57s",
    action: "Receive",
    from: { x: 70, y: 48 },
    to: { x: 74.2, y: 50.5 },
    result: "success",
  },
  {
    time: "0.57-1.37s",
    action: "Pass",
    from: { x: 74.2, y: 50.5 },
    to: { x: 91, y: 58.4 },
    result: "fail",
  },
  {
    time: "0-0.57s",
    action: "Receive",
    from: { x: 70, y: 48 },
    to: { x: 74.2, y: 50.5 },
    result: "success",
  },
  {
    time: "0.57-1.73s",
    action: "Pass",
    from: { x: 74.2, y: 50.5 },
    to: { x: 94.5, y: 60 },
    result: "success",
  },
  {
    time: "0-0.57s",
    action: "Receive",
    from: { x: 70, y: 48 },
    to: { x: 74.2, y: 50.5 },
    result: "success",
  },
  {
    time: "0.57-1.67s",
    action: "Pass",
    from: { x: 74.2, y: 50.5 },
    to: { x: 89.5, y: 57.3 },
    result: "fail",
  },
  {
    time: "0-0.57s",
    action: "Receive",
    from: { x: 70, y: 48 },
    to: { x: 74.2, y: 50.5 },
    result: "success",
  },
  {
    time: "0.57-1.73s",
    action: "Pass",
    from: { x: 74.2, y: 50.5 },
    to: { x: 94.8, y: 60.2 },
    result: "success",
  },
];

const totalActions = 10;
const successfulActions = 7;

export default function PassingTable() {
  return (
    <section className="section section-alt" id="analytics">
      <div className="container">
        <div className="section-label">Data in Action</div>
        <h2 className="section-title">Every drill, measured</h2>
        <p className="section-subtitle">
          Footstats automatically tracks every touch, pass, and movement during training — capturing
          precise timing, coordinates, and outcomes without any manual data entry.
        </p>

        <div className="passing-stats-row">
          <div className="passing-stat-big">
            <span className="passing-stat-value">70%</span>
            <span className="passing-stat-label">Action Success Rate</span>
          </div>
          <div className="passing-stat-grid">
            <div className="passing-stat-box">
              <span className="passing-stat-num">{totalActions}</span>
              <span className="passing-stat-desc">Total actions</span>
            </div>
            <div className="passing-stat-box">
              <span className="passing-stat-num" style={{ color: "var(--color-primary)" }}>
                {successfulActions}
              </span>
              <span className="passing-stat-desc">Successful</span>
            </div>
            <div className="passing-stat-box">
              <span className="passing-stat-num" style={{ color: "#ff5252" }}>
                {totalActions - successfulActions}
              </span>
              <span className="passing-stat-desc">Failed</span>
            </div>
            <div className="passing-stat-box">
              <span className="passing-stat-num">Joey</span>
              <span className="passing-stat-desc">Player</span>
            </div>
          </div>
        </div>

        <div className="table-card">
          <div className="table-header">
            <div className="table-title">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect
                  x="1"
                  y="1"
                  width="16"
                  height="16"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line x1="1" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="6" y1="1" x2="6" y2="17" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Passin Drill — Raw Data (Joey)
            </div>
            <span className="table-count">{totalActions} actions recorded</span>
          </div>

          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Action</th>
                  <th>From (x, y)</th>
                  <th>To (x, y)</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td className="cell-mono">{row.time}</td>
                    <td>
                      <span
                        className={`badge ${row.action === "Pass" ? "badge-pass" : "badge-receive"}`}
                      >
                        {row.action}
                      </span>
                    </td>
                    <td className="cell-mono">
                      ({row.from.x}, {row.from.y})
                    </td>
                    <td className="cell-mono">
                      ({row.to.x}, {row.to.y})
                    </td>
                    <td>
                      <span
                        className={`badge ${row.result === "success" ? "badge-success" : "badge-fail"}`}
                      >
                        {row.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
