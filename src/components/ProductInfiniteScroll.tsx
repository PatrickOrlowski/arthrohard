"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

interface Product {
  id: number;
  text: string;
}

const ProductInfiniteScroll: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const searchParams = useSearchParams();

  useEffect(() => {
    const limit = searchParams.get("limit");
    if (limit) {
      setPageSize(parseInt(limit, 10));
    }
  }, [searchParams]);

  const apiUrl = "https://brandstestowy.smallhost.pl/api/random";

  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(apiUrl, {
        params: { pageNumber, pageSize },
      });

      const newProducts = response.data.data;
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [pageSize, loading, hasMore, pageNumber]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      fetchProducts();
    }
  }, [fetchProducts]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    // fetchProducts();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <li
            onClick={() => handleProductClick(product)}
            key={index}
            className="p-4 border rounded shadow h-[350px] flex items-center justify-center bg-[#BEBEBE] cursor-pointer"
          >
            <h2 className="font-semibold">ID: {index + 1}</h2>
          </li>
        ))}
      </ul>
      {loading && <p className="text-center mt-4">Ładowanie...</p>}
      {!hasMore && <p className="text-center mt-4">Brak więcej produktów</p>}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className={"flex justify-between items-center mb-4"}>
              <h2 className="text-lg font-bold">Szczegóły produktu</h2>
              <button className="text-blue-500" onClick={closeModal}>
                zamknij
              </button>
            </div>

            <p>
              <strong>ID:</strong> {selectedProduct.id}
            </p>
            <p>
              <strong>Nazwa:</strong> {selectedProduct.text}
            </p>
            <p>
              <strong>Wartość:</strong> {selectedProduct.text} zł
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProductInfiniteScroll;
