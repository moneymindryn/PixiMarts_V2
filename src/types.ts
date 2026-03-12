import { Timestamp } from 'firebase/firestore';

export interface ProductVariant {
  id: string;
  name: string;
  regularPrice: number;
  salePrice: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  regularPrice: number;
  salePrice: number;
  categories: string[];
  featured: boolean;
  banner: boolean;
  rating: number;
  reviewCount: number;
  variants?: ProductVariant[];
  createdAt: Timestamp;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface AppSettings {
  whatsappNumber: string;
  email: string;
  location: string;
  facebookPage: string;
  paymentNumber: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  reviewText: string;
  createdAt: Timestamp;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CartItem extends Product {
  cartItemId: string;
  quantity: number;
  selectedVariant?: ProductVariant;
}
