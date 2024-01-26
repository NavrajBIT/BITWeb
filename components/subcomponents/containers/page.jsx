import React from "react";

const Page = ({ children, style = {}, innerStyle = {}, id = "" }) => {
  return (
    <main
      id={id}
      style={{
        paddingTop: "var(--nav-height)",
        paddingBottom: "var(--nav-height)",
        minHeight: "var(--min-height-page)",
        position: "relative",
        ...style,
      }}
    >
      <Filter />
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "auto",
          zIndex: 1,
          position: "relative",
          padding: "var(--padding-main)",
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </main>
  );
};

export default Page;

const Filter = () => (
  <div
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.3)",
      zIndex: 0,
    }}
  />
);
