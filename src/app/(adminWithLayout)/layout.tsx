import AdminLayout from "@/components/layout/admin-layout";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
};

export default layout;
