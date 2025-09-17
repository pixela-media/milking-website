import CowGheeImg from '../images/products/Curd_Pouch02_F_01.png';
import CowMilkImg from '../images/products/Curd_Pouch02_F_01.png';
import MalaiPaneerImg from '../images/products/Curd_Pouch02_F_01.png';
import WholeMilkImg from '../images/products/Curd_Pouch02_F_01.png';

export const productCategories = [
    { id: 'milk', name: 'Milk', active: true },
    { id: 'paneer', name: 'Paneer', active: false },
    { id: 'curd', name: 'Curd', active: false },
    { id: 'ghee', name: 'Ghee', active: false },
    { id: 'butter', name: 'Butter', active: false }
];

export const products = [
    {
        id: 1,
        name: 'Cow Ghee',
        category: 'ghee',
        sizes: ['200 ml', '500 ml'],
        image: CowGheeImg,
        backgroundColor: '#D4A574', // Golden brown
        features: [
            '100% Pure Cow Milk',
            'Enhances Immunity & Digestion',
            'Rich in Omega 3, CLA & Antioxidants'
        ],
        description: 'Traditional bilona method ghee made from pure cow milk',
        nutritionalInfo: {
            fat: '99.5g',
            protein: '0.1g',
            carbs: '0.1g',
            energy: '900 kcal'
        }
    },
    {
        id: 2,
        name: 'Cow Milk',
        category: 'milk',
        sizes: ['500 ml', '1L'],
        image: CowMilkImg,
        backgroundColor: '#D4A574', // Golden brown
        features: [
            '100% Pure Cow Milk',
            'Easy to digest, A2 goodness',
            'High in Calcium & Protein'
        ],
        description: 'Fresh cow milk from certified humane farms',
        nutritionalInfo: {
            fat: '3.5g',
            protein: '3.2g',
            carbs: '4.6g',
            energy: '60 kcal'
        }
    },
    {
        id: 3,
        name: 'Malai Paneer',
        category: 'paneer',
        sizes: ['200 g', '500 g'],
        image: MalaiPaneerImg,
        backgroundColor: '#7C6B9F', // Purple
        features: [
            'Fresh, Tender & Soft Texture',
            'Non-string in Protein & Calcium-rich',
            'Made from Pure Cow Milk'
        ],
        description: 'Soft and creamy paneer made from fresh cow milk',
        nutritionalInfo: {
            fat: '20g',
            protein: '18g',
            carbs: '1.2g',
            energy: '265 kcal'
        }
    },
    {
        id: 4,
        name: 'Whole Milk',
        category: 'milk',
        sizes: ['500 ml', '1L'],
        image: WholeMilkImg,
        backgroundColor: '#5B9B8A', // Teal green
        features: [
            'Rich & creamy taste',
            'Perfect for tea, coffee & desserts',
            'Source of essential vitamins (A, D & B12)'
        ],
        description: 'Full-fat whole milk with rich creamy texture',
        nutritionalInfo: {
            fat: '3.8g',
            protein: '3.3g',
            carbs: '4.8g',
            energy: '65 kcal'
        }
    },
    {
        id: 5,
        name: 'Fresh Curd',
        category: 'curd',
        sizes: ['200 ml', '500 ml'],
        image: '/api/placeholder/200/200',
        backgroundColor: '#E8E8E8', // Light gray
        features: [
            'Made from Fresh Cow Milk',
            'Rich in Probiotics',
            'Aids Digestion & Immunity'
        ],
        description: 'Fresh homemade style curd with live cultures',
        nutritionalInfo: {
            fat: '3.2g',
            protein: '3.5g',
            carbs: '4.1g',
            energy: '58 kcal'
        }
    },
    {
        id: 6,
        name: 'White Butter',
        category: 'butter',
        sizes: ['100 g', '200 g'],
        image: '/api/placeholder/200/200',
        backgroundColor: '#FFF8DC', // Cream
        features: [
            'Churned from Fresh Cream',
            'No Added Salt or Preservatives',
            'Rich in Vitamin A & D'
        ],
        description: 'Traditional white butter churned from fresh cream',
        nutritionalInfo: {
            fat: '81g',
            protein: '0.8g',
            carbs: '0.6g',
            energy: '717 kcal'
        }
    }
];

// Helper functions
export const getProductsByCategory = (category) => {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
};

export const getFeaturedProducts = () => {
    return products.slice(0, 4); // Return first 4 products as featured
};