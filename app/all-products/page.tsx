import { Suspense } from "react";
import AllProductsClient from "./AllProductsClient";

export const metadata = {
  title: "جميع الشرائح | لمسة الثابتة",
  description: "تصفح جميع شرائح الاتصال وباقات الإنترنت بأفضل الأسعار من لمسة الثابتة",
};

export default function AllProductsPage() {
  return (
    <Suspense>
      <AllProductsClient />
    </Suspense>
  );
}
