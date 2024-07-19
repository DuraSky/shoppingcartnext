import React, { useState } from "react";
import { PPLWidget } from "./PPLWidget";

const StandaloneWidgetTest = () => {
  const [openWidget, setOpenWidget] = useState(false);

  const handleOpenWidget = () => {
    setOpenWidget(true);
  };

  const handleCloseWidget = () => {
    setOpenWidget(false);
  };

  return (
    <div>
      <button onClick={handleOpenWidget}>Open PPL Widget</button>
      {openWidget && (
        <div>
          <button onClick={handleCloseWidget}>Close PPL Widget</button>
          <PPLWidget />
        </div>
      )}
    </div>
  );
};

export default StandaloneWidgetTest;
