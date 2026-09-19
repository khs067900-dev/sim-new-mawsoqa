import { Suspense } from "react";
import AllProductsClient from "./AllProductsClient";

export const metadata = {
  title: "جميع الشرائح | الشريحه الموثوقه",
  description: "تصفح جميع شرائح الاتصال وباقات الإنترنت بأفضل الأسعار من الشريحه الموثوقه",
};

export default function AllProductsPage() {
  return (
    <Suspense>
      <AllProductsClient />
    </Suspense>
  );
}
