export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'yoga' | 'meditation' | 'accessories' | 'books';
}

export interface CartItem extends Product {
  quantity: number;
}