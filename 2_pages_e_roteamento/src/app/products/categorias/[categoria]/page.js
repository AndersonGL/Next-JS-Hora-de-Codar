import React from 'react';
import Link from 'next/link';

const CategoryPage = () => {
  return (
    <div>
      <h1>Conheça nossas Roupas</h1>
      <Link href="/products/categorias/roupas/camisa">
       Camisa Gola V </Link>
    
    </div>
  )
}

export default CategoryPage;
