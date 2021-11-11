import React, { useState, useEffect } from "react";

export default function useDetail() {
  const [detail, setDetail] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    if (currentId) {
      fetch(`https://cnodejs.org/api/v1/topic/${currentId}`)
        .then((res) => res.json())
        .then((json) => setDetail(json.data));
    }
  }, [currentId]);
  return { detail, setCurrentId };
}
