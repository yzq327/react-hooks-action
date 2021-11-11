import React, { useState, useEffect } from "react";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://cnodejs.org/api/v1/topics")
      .then((res) => res.json())
      .then((json) => setUsers(json.data));
  }, []);

  return users;
}
