// src/components/SplashScreen.jsx
import React, { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [animateLogo, setAnimateLogo] = useState(false);
  const [animateSlogan, setAnimateSlogan] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate logo immediately
    setAnimateLogo(true);

    // Animate slogan after 0.5s delay
    const sloganTimer = setTimeout(() => setAnimateSlogan(true), 500);

    // Start fade-out at 1.8s (just before 2s)
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);

    // End splash after 2s
    const finishTimer = setTimeout(onFinish, 2000);

    return () => {
      clearTimeout(sloganTimer);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "#6A0DAD", // purple
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#FFFFFF",
      fontFamily: "'Brush Script MT', cursive",
      zIndex: 9999,
      opacity: fadeOut ? 0 : 1,
      transition: "opacity 0.2s ease-out" // fade-out transition
    }}>
      {/* Logo */}
      <h1 style={{
        fontSize: "60px",
        margin: 0,
        opacity: animateLogo ? 1 : 0,
        transform: animateLogo ? "scale(1)" : "scale(0.5)",
        transition: "transform 1s ease-in, opacity 1s ease-in"
      }}>
        Nexvora
      </h1>

      {/* Slogan */}
      <p style={{
        fontSize: "18px",
        marginTop: "10px",
        fontFamily: "Arial, sans-serif",
        opacity: animateSlogan ? 1 : 0,
        transform: animateSlogan ? "scale(1)" : "scale(0.5)",
        transition: "transform 1s ease-in, opacity 1s ease-in"
      }}>
        Next Level Shopping
      </p>
    </div>
  );
}
