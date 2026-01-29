// components/ColorfulAvatar.jsx
import React from "react";

export default function ColorfulAvatar({ name, size = 50 }) {
  // Get initials (max 2 letters)
  const getInitials = (name) => {
    if (!name) return "?";
    const words = name.trim().split(" ");
    const initials = words.map((w) => w[0].toUpperCase()).slice(0, 2);
    return initials.join("");
  };

  // Generate a consistent color from the name
  const getColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360; // hue from 0-359
    return `hsl(${hue}, 70%, 50%)`; // bright, vibrant color
  };

  const initials = getInitials(name);
  const bgColor = getColor(name);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: size * 0.4,
        fontFamily: "Arial, sans-serif",
        userSelect: "none",
      }}
      title={name} // shows full name on hover
    >
      {initials}
    </div>
  );
}
