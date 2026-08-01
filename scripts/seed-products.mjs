import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

// Sample categories
const categories = [
  { name: "Children's Shoes", slug: "childrens-shoes", description: "Premium quality children's footwear for all occasions", icon: "👟" },
  { name: "Kids' Apparel", slug: "kids-apparel", description: "Comfortable and stylish clothing for kids", icon: "👕" },
  { name: "Electronics & Gadgets", slug: "electronics-gadgets", description: "Latest tech gadgets and electronic accessories", icon: "📱" },
  { name: "Kitchenware", slug: "kitchenware", description: "High-quality kitchen essentials and tools", icon: "🍳" },
  { name: "Skincare & Fragrance", slug: "skincare-fragrance", description: "Premium beauty and personal care products", icon: "💄" },
];

// Insert categories
console.log("Inserting categories...");
for (const cat of categories) {
  await connection.execute(
    "INSERT INTO categories (name, slug, description, icon) VALUES (?, ?, ?, ?)",
    [cat.name, cat.slug, cat.description, cat.icon]
  );
}

// Sample products
const products = [
  {
    categoryId: 1,
    name: "Classic White Sneakers",
    slug: "classic-white-sneakers",
    description: "Durable white sneakers for everyday wear",
    detailedDescription: "Premium quality white sneakers made with comfortable materials. Perfect for school or casual outings.",
    material: "Canvas & Rubber",
    sizes: "EU 25-40",
    colors: "White, Black, Navy",
    moq: 10,
    pricePerUnit: "25.00",
    leadTime: "5-7 days",
    inStock: 1,
  },
  {
    categoryId: 1,
    name: "Sports Running Shoes",
    slug: "sports-running-shoes",
    description: "Lightweight running shoes for active kids",
    detailedDescription: "Engineered for comfort and performance. Ideal for sports and outdoor activities.",
    material: "Mesh & EVA Sole",
    sizes: "EU 26-39",
    colors: "Red, Blue, Green",
    moq: 15,
    pricePerUnit: "35.00",
    leadTime: "7-10 days",
    inStock: 1,
  },
  {
    categoryId: 2,
    name: "Cotton T-Shirts",
    slug: "cotton-t-shirts",
    description: "Soft 100% cotton t-shirts for kids",
    detailedDescription: "Breathable and comfortable cotton t-shirts. Available in multiple colors and sizes.",
    material: "100% Cotton",
    sizes: "2-14 years",
    colors: "Red, Blue, Yellow, Green, Pink",
    moq: 20,
    pricePerUnit: "8.50",
    leadTime: "3-5 days",
    inStock: 1,
  },
  {
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

// Sample categories
const categories = [
  { name: "Children's Shoes", slug: "childrens-shoes", description: "Premium quality children's footwear for all occasions", icon: "👟" },
  { name: "Kids' Apparel", slug: "kids-apparel", description: "Comfortable and stylish clothing for kids", icon: "👕" },
  { name: "Electronics & Gadgets", slug: "electronics-gadgets", description: "Latest tech gadgets and electronic accessories", icon: "📱" },
  { name: "Kitchenware", slug: "kitchenware", description: "High-quality kitchen essentials and tools", icon: "🍳" },
  { name: "Skincare & Fragrance", slug: "skincare-fragrance", description: "Premium beauty and personal care products", icon: "💄" },
];

// Insert categories
console.log("Inserting categories...");
for (const cat of categories) {
  await connection.execute(
    "INSERT INTO categories (name, slug, description, icon) VALUES (?, ?, ?, ?)",
    [cat.name, cat.slug, cat.description, cat.icon]
  );
}

// Sample products
const products = [
  {
    categoryId: 1,
    name: "Classic White Sneakers",
    slug: "classic-white-sneakers",
    description: "Durable white sneakers for everyday wear",
    detailedDescription: "Premium quality white sneakers made with comfortable materials. Perfect for school or casual outings.",
    material: "Canvas & Rubber",
    sizes: "EU 25-40",
    colors: "White, Black, Navy",
    moq: 10,
    pricePerUnit: "25.00",
    leadTime: "5-7 days",
    inStock: 1,
  },
  {
    categoryId: 1,
    name: "Sports Running Shoes",
    slug: "sports-running-shoes",
    description: "Lightweight running shoes for active kids",
    detailedDescription: "Engineered for comfort and performance. Ideal for sports and outdoor activities.",
    material: "Mesh & EVA Sole",
    sizes: "EU 26-39",
    colors: "Red, Blue, Green",
    moq: 15,
    pricePerUnit: "35.00",
    leadTime: "7-10 days",
    inStock: 1,
  },
  {
    categoryId: 2,
    name: "Cotton T-Shirts",
    slug: "cotton-t-shirts",
    description: "Soft 100% cotton t-shirts for kids",
    detailedDescription: "Breathable and comfortable cotton t-shirts. Available in multiple colors and sizes.",
    material: "100% Cotton",
    sizes: "2-14 years",
    colors: "Red, Blue, Yellow, Green, Pink",
    moq: 20,
    pricePerUnit: "8.50",
    leadTime: "3-5 days",
    inStock: 1,
  },
  {
    categoryId: 2,
    name: "Denim Jeans",
    slug: "denim-jeans",
    description: "Stylish denim jeans for kids",
    detailedDescription: "High-quality denim with comfortable fit. Perfect for everyday wear.",
    material: "Denim",
    sizes: "2-16 years",
    colors: "Dark Blue, Light Blue, Black",
    moq: 15,
    pricePerUnit: "18.00",
    leadTime: "5-7 days",
    inStock: 1,
  },
  {
    categoryId: 3,
    name: "Wireless Bluetooth Speakers",
    slug: "wireless-bluetooth-speakers",
    description: "Portable wireless speakers with great sound quality",
    detailedDescription: "Compact design with 10-hour battery life. Perfect for music lovers.",
    material: "Plastic & Metal",
    colors: "Black, Blue, Red",
    moq: 5,
    pricePerUnit: "45.00",
    leadTime: "7-10 days",
    inStock: 1,
  },
  {
    categoryId: 3,
    name: "USB-C Charging Cables",
    slug: "usb-c-charging-cables",
    description: "Durable USB-C charging cables (1m)",
    detailedDescription: "Fast charging cables compatible with most devices. Tangle-free design.",
    material: "Nylon & Copper",
    colors: "Black, White, Gray",
    moq: 50,
    pricePerUnit: "3.50",
    leadTime: "2-3 days",
    inStock: 1,
  },
  {
    categoryId: 4,
    name: "Non-Stick Frying Pans",
    slug: "non-stick-frying-pans",
    description: "Professional non-stick frying pans (8-inch)",
    detailedDescription: "Durable non-stick coating. Heat-resistant handles. Perfect for any kitchen.",
    material: "Aluminum with Non-Stick Coating",
    colors: "Black, Red, Blue",
    moq: 10,
    pricePerUnit: "15.00",
    leadTime: "5-7 days",
    inStock: 1,
  },
  {
    categoryId: 4,
    name: "Stainless Steel Cookware Set",
    slug: "stainless-steel-cookware-set",
    description: "5-piece stainless steel cookware set",
    detailedDescription: "Complete cookware set including pots, pans, and lids. Durable and long-lasting.",
    material: "Stainless Steel",
    colors: "Silver",
    moq: 5,
    pricePerUnit: "85.00",
    leadTime: "7-10 days",
    inStock: 1,
  },
  {
    categoryId: 5,
    name: "Moisturizing Face Cream",
    slug: "moisturizing-face-cream",
    description: "Hydrating face cream for all skin types",
    detailedDescription: "Rich formula with natural ingredients. Absorbs quickly without greasiness.",
    material: "Cosmetic Grade",
    colors: "Cream",
    moq: 20,
    pricePerUnit: "12.00",
    leadTime: "3-5 days",
    inStock: 1,
  },
  {
    categoryId: 5,
    name: "Luxury Perfume Collection",
    slug: "luxury-perfume-collection",
    description: "Premium fragrance collection (50ml)",
    detailedDescription: "Long-lasting fragrance with exotic notes. Perfect gift for any occasion.",
    material: "Eau de Parfum",
    colors: "Various",
    moq: 10,
    pricePerUnit: "28.00",
    leadTime: "5-7 days",
    inStock: 1,
  },
];

// Insert products
console.log("Inserting products...");
for (const product of products) {
  await connection.execute(
    `INSERT INTO products (categoryId, name, slug, description, detailedDescription, material, sizes, colors, moq, pricePerUnit, leadTime, inStock)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      product.categoryId,
      product.name,
      product.slug,
      product.description,
      product.detailedDescription,
      product.material,
      product.sizes || null,
      product.colors,
      product.moq,
      product.pricePerUnit,
      product.leadTime,
      product.inStock,
    ]
  );
}

console.log("✅ Database seeded successfully!");
await connection.end();
Enter    categoryId: 2,
    name: "Denim Jeans",
    slug: "denim-jeans",
    description: "Stylish denim jeans for kids",
    detailedDescription: "High-quality denim with comfortable fit. Perfect for everyday wear.",
    material: "Denim",
    sizes: "2-16 years",
    colors: "Dark Blue, Light Blue, Black",
    moq: 15,
    pricePerUnit: "18.00",
    leadTime: "5-7 days",
    inStock: 1,
  },
  {
    categoryId: 3,
    name: "Wireless Bluetooth Speakers",
    slug: "wireless-bluetooth-speakers",
    description: "Portable wireless speakers with great sound quality",
    detailedDescription: "Compact design with 10-hour battery life. Perfect for music lovers.",
    material: "Plastic & Metal",
    colors: "Black, Blue, Red",
    moq: 5,
    pricePerUnit: "45.00",
    leadTime: "7-10 days",
    inStock: 1,
  },
  {
    categoryId: 3,
    name: "USB-C Charging Cables",
    slug: "usb-c-charging-cables",
    description: "Durable USB-C charging cables (1m)",
    detailedDescription: "Fast charging cables compatible with most devices. Tangle-free design.",
    material: "Nylon & Copper",
    colors: "Black, White, Gray",
    moq: 50,
    pricePerUnit: "3.50",
    leadTime: "2-3 days",
    inStock: 1,
  },
  {
    categoryId: 4,
    name: "Non-Stick Frying Pans",
    slug: "non-stick-frying-pans",
    description: "Professional non-stick frying pans (8-inch)",
    detailedDescription: "Durable non-stick coating. Heat-resistant handles. Perfect for any kitchen.",
    material: "Aluminum with Non-Stick Coating",
    colors: "Black, Red, Blue",
    moq: 10,
    pricePerUnit: "15.00",
    leadTime: "5-7 days",
    inStock: 1,
  },
  {
    categoryId: 4,
    name: "Stainless Steel Cookware Set",
    slug: "stainless-steel-cookware-set",
    description: "5-piece stainless steel cookware set",
    detailedDescription: "Complete cookware set including pots, pans, and lids. Durable and long-lasting.",
    material: "Stainless Steel",
    colors: "Silver",
    moq: 5,
    pricePerUnit: "85.00",
    leadTime: "7-10 days",
    inStock: 1,
  },
  {
    categoryId: 5,
    name: "Moisturizing Face Cream",
    slug: "moisturizing-face-cream",
    description: "Hydrating face cream for all skin types",
    detailedDescription: "Rich formula with natural ingredients. Absorbs quickly without greasiness.",
    material: "Cosmetic Grade",
    colors: "Cream",
    moq: 20,
    pricePerUnit: "12.00",
