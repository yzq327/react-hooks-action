import React from "react";
import useUsers from "../hooks/useUsers";
import useDetail from "../hooks/useDetail";
export default function HooksDemo() {
  const users = useUsers();
  const { detail, setCurrentId } = useDetail();

  if (users.length === 0) return "loading";
  return (
    <div style={{ display: "flex", cursor: "pointer", marginRight: 80 }}>
      <ul style={{ width: 600 }}>
        {users.map((e) => (
          <li key={e.id} onClick={() => setCurrentId(e.id)}>
            {e.title}---{new Date(e.create_at).toLocaleString}
          </li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
    </div>
  );
}
