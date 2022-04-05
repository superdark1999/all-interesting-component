import { Spin } from "antd";
import React from "react";
// This component is loaded dynamically
const OtherComponent = React.lazy(() => import("../ClickOutside/ClickOutside"));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spin />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}

export default MyComponent;
