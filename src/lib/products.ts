
// lib/products.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Clavier Mécanique', price: 129.9, description: 'Switches rouges, RGB.' },
  { id: 'p2', name: 'Souris Gamer', price: 59.9, description: 'Capteur 26K DPI, sans fil.' },
  { id: 'p3', name: 'Casque Bluetooth', price: 89.0, description: 'Réduction de bruit.' },
];

export async function getProducts(): Promise<Product[]> {
  // En vrai : fetch DB/API. Ici c’est sync/mocked.
  return PRODUCTS;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return PRODUCTS.find(p => p.id === id);
}

export async function getProductIds(): Promise<string[]> {
  return PRODUCTS.map(p => p.id);
}
