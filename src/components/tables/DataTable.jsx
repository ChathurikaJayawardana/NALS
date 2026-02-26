import React, { useState, useMemo } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { AiFillFile } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import "../../assets/styles/style.css";

const DataTable = ({ columns, data, showActions = true, onEdit, onDelete }) => {
  const [filter, setFilter] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter rows
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((val) =>
        val
          ? typeof val === "string"
            ? val.toLowerCase().includes(filter.toLowerCase())
            : Array.isArray(val)
            ? val.some((f) =>
                f.name.toLowerCase().includes(filter.toLowerCase())
              )
            : false
          : false
      )
    );
  }, [data, filter]);

  const totalPages = Math.ceil(filteredData.length / entries);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * entries;
    return filteredData.slice(start, start + entries);
  }, [filteredData, currentPage, entries]);

  return (
    <div className="data-table-wrapper">
      {/* Controls */}
      <div className="data-table-controls">
        Show{" "}
        <select
          value={entries}
          onChange={(e) => {
            setEntries(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          {[10, 25, 50, 100].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>{" "}
        entries

        <span style={{ float: "right" }}>
          Search:{" "}
          <input
            type="text"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
          />
        </span>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
              {showActions && <th>Actions</th>}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, i) => (
                <tr key={i}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.type === "file" && Array.isArray(row[col.key])
                        ? row[col.key].map((f, idx) => (
                            <a
                              key={idx}
                              href={f.url}
                              download
                              className="file-link"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                marginRight: "8px",
                                textDecoration: "none",
                                color: "#333",
                              }}
                            >
                              <AiFillFile color="#ff6b6b" />
                              {f.name}
                              <BiDownload />
                            </a>
                          ))
                        : row[col.key]}
                    </td>
                  ))}

                  {showActions && (
                    <td>
                      <div className="table-actions" style={{ display: "flex", gap: "8px" }}>
                        <FiEdit
                          className="action-icon"
                          onClick={() => onEdit && onEdit(row)}
                          style={{ cursor: "pointer" }}
                        />
                        <FiTrash2
                          className="action-icon"
                          onClick={() => onDelete && onDelete(row)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + (showActions ? 1 : 0)}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="data-table-footer" style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <span>
          Showing{" "}
          {filteredData.length === 0
            ? 0
            : (currentPage - 1) * entries + 1}{" "}
          to {(currentPage - 1) * entries + paginatedData.length} of{" "}
          {filteredData.length} entries
        </span>

        <span className="pagination" style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={p === currentPage ? "active" : ""}
              onClick={() => setCurrentPage(p)}
              style={{
                padding: "4px 8px",
                border: "1px solid #ddd",
                backgroundColor: p === currentPage ? "#007bff" : "#fff",
                color: p === currentPage ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {p}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default DataTable;