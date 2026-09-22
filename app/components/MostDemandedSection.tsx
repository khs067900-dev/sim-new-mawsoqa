import { TrendingUp } from "lucide-react";
import type { Product } from "./products/types";
import ProductCard from "./products/ProductCard";
import { sortProducts } from "../lib/sortProducts";

const BACKEND = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || "https://burj-simicard-backend.vercel.app";

async function getMostDemanded(): Promise<Product[]> {
  try {
    const res = await fetch(`${BACKEND}/api/products?limit=4`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return [];
    const data = await res.json();
    const raw: Product[] = Array.isArray(data) ? data : Array.isArray(data.products) ? data.products : [];
    return sortProducts(raw, true).slice(0, 4);
  } catch {
    return [];
  }
}

export default async function MostDemandedSection() {
  const products = await getMostDemanded();
  if (products.length === 0) return null;

  return (
    <section dir="rtl" className="w-full px-2 sm:px-6 lg:px-8 py-8 sm:py-14">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-7 rounded-full bg-[#B5854A]" />
            <div>
              <h2 className="text-xl sm:text-3xl font-black text-gray-900">الأكثر طلباً</h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">منتجات يختارها عملاؤنا باستمرار</p>
            </div>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(181,133,74,0.1)", border: "1px solid rgba(181,133,74,0.25)" }}
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#B5854A]" />
            <span className="text-[#B5854A] text-xs font-bold">الأعلى مبيعاً</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5">
          {products.map((p, i) => (
            <ProductCard key={p._id} product={p} priority={i < 2} />
          ))}
        </div>

      </div>
    </section>
  );
}
