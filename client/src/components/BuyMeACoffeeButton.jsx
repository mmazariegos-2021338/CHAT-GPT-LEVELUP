import React from "react";

const GenerateDocumentButton = () => {
  const style = {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <button style={style}>
      Generar Documento
    </button>
  );
};

export default GenerateDocumentButton;

