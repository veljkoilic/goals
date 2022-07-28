import { useDispatch } from "react-redux";
import { deleteGoal, editGoal } from "../features/goals/goalSlice";
import { useState } from "react";

export const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  const [editingMode, setEditingMode] = useState(false);
  const [text, setText] = useState(goal.text);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editGoal({ id: goal._id, text }));
    setEditingMode(false);
  };

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-GB")}</div>
      {!editingMode && (
        <h2
          onClick={() => {
            setEditingMode(true);
          }}
        >
          {text}
        </h2>
      )}
      {editingMode && (
        <div className="editing">
          <form action="" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="submit"
                  className="btn btn-block"
                  style={{ background: "coral", border: "none" }}
                  onClick={() => {
                    setEditingMode(false);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-block">
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
        X
      </button>
    </div>
  );
};
