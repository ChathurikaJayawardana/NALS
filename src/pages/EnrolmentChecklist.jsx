import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import FormActions from "../components/FormActions";
import "./AddCourse.css";

const EnrolmentChecklist = () => {
  const [items, setItems] = useState([
    { id: 1, label: "Colour copy of the passport", checked: false, isEditing: false },
    { id: 2, label: "English score report", checked: false, isEditing: false },
    { id: 3, label: "Current COE", checked: false, isEditing: false },
    { id: 4, label: "GTE Statement", checked: false, isEditing: false },
  ]);

  const toggleCheck = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const enableEdit = (index) => {
    const newItems = [...items];
    newItems[index].isEditing = true;
    setItems(newItems);
  };

  const saveEdit = (index, value) => {
    const newItems = [...items];
    newItems[index].label = value;
    newItems[index].isEditing = false;
    setItems(newItems);
  };

  const addItem = () => {
    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id: newId, label: "", checked: false, isEditing: true }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div className="checklist-container">
      <h2>Enrolment Checklist</h2>

      <div className="checklist-toolbar">
        <button className="btn-add" onClick={addItem}>
          <FontAwesomeIcon icon={faPlus} /> Add Item
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="checklist-grid">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`checklist-card ${item.checked ? "checked" : ""}`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCheck(index)}
              />
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.label}
                  autoFocus
                  onChange={(e) => saveEdit(index, e.target.value)}
                  className="checklist-input"
                  onBlur={(e) => saveEdit(index, e.target.value)}
                />
              ) : (
                <span>{item.label}</span>
              )}
              <div className="card-actions">
                {!item.isEditing && (
                  <FontAwesomeIcon
                    icon={faPen}
                    className="edit-icon"
                    onClick={() => enableEdit(index)}
                  />
                )}
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete-icon"
                  onClick={() => removeItem(index)}
                />
              </div>
            </div>
          ))}
        </div>

        <FormActions onSave={handleSubmit} onCancel={handleCancel} />
      </form>
    </div>
  );
};

export default EnrolmentChecklist;
