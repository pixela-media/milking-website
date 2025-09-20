import WholeMilkFront from '../images/products/Milk_Pouch01_F_01.png';
import WholeMilkBack from '../images/products/Milk_Pouch01_B_01.png';
import MilkFront from '../images/products/Milk_Pouch04_F_01.png';
import MilkBack from '../images/products/Milk_Pouch04_B_01.png';
import MilkFrontBetaPasturized from '../images/products/Milk_Pouch03_F_01.png';
import MilkBackBetaPasturized from '../images/products/Milk_Pouch03_B_01.png';
import MilkFrontBeta from '../images/products/Milk_Pouch02_F_01.png';
import MilkBackBeta from '../images/products/Milk_Pouch02_B_01.png';
import GheeJar from '../images/products/Ghee_F.png';
import Paneer from '../images/products/Paneer_F.png';
import ProCurdFront from '../images/products/Curd_Pouch01_F_01.png';
import ProCurdBack from '../images/products/Curd_Pouch01_B_01.png';
import CurdA2Front from '../images/products/Curd_Pouch02_F_01.png';
import CurdA2Back from '../images/products/Curd_Pouch02_B_01.png';

export const productCategories = [
    { id: 'milk', name: 'Milk', active: true },
    { id: 'paneer', name: 'Paneer', active: false },
    { id: 'curd', name: 'Curd', active: false },
    { id: 'ghee', name: 'Ghee', active: false },
];

export const products = [
    {
        id: 1,
        name: 'Whole Cow Milk',
        slug: 'whole-cow-milk',
        category: 'milk',
        sizes: ['500 ml'],
        image: WholeMilkFront,
        imageBack: WholeMilkBack,
        textColor: '#4CA190',
        horizantalBackground: 'bg-gradient-to-r from-[#4DAC99]/60 to-[#4CA190]/60',
        verticalBackground: 'bg-gradient-to-b from-[#4CA190]/80 via-[#4CA190]/1 to-[#4CA190]/80',
        features: [
            {
                feature: 'Pure and Natural',
                description: `Farm-fresh milk from free-living cows, free from antibiotics and aflatoxins.`
            },
            {
                feature: 'Humane Certified',
                description: `Raised with dignity in open paddocks, certified for global welfare standards.`
            },
            {
                feature: 'Organic and Safe',
                description: `100% organic feed, untouched by hormones, handled with strict hygiene.`
            },
            {
                feature: 'Fresh Everyday',
                description: `Delivered daily to ensure rich taste and natural nutrition in every sip.`
            }
        ],
        briefDescription: 'Pure, fresh milk from happy, free-roaming cows. No hormones, no antibiotics, just natural goodness.',
        description: 'Milking’s Whole Cow Milk comes from free-roaming, stress-free cows nurtured in natural peddock barns. It is untouched by growth hormones, antibiotics, and aflatoxins, preserving its natural nutrition. With rich proteins, calcium, and healthy fats, it offers families safe, authentic nourishment.',
    },
    {
        id: 2,
        name: 'Cow Milk (Pasteurized)',
        slug: 'cow-milk',
        category: 'milk',
        sizes: ['500 ml'],
        image: MilkFront,
        imageBack: MilkBack,
        textColor: '#B39740',
        horizantalBackground: 'bg-gradient-to-r from-[#D7BD61]/60 to-[#B39740]/60',
        verticalBackground: 'bg-gradient-to-b from-[#D7BD61]/80 via-[#D7BD61]/1 to-[#B39740]/80',
        features: [
            {
                feature: 'Pure and Natural',
                description: `Farm-fresh milk from free-living cows, free from antibiotics and aflatoxins.`
            },
            {
                feature: 'Humane Certified',
                description: `Raised with dignity in open paddocks, certified for global welfare standards.`
            },
            {
                feature: 'Organic and Safe',
                description: `100% organic feed, untouched by hormones, handled with strict hygiene.`
            },
            {
                feature: 'Fresh Everyday',
                description: `Delivered daily to ensure rich taste and natural nutrition in every sip.`
            }
        ],
        briefDescription: 'Pasteurized cow milk that is fresh, safe, and nutritious. Sourced from free-roaming cows, free from antibiotics and aflatoxins, ideal for daily consumption.',
        description: 'Our pasteurized Cow Milk undergoes gentle heat treatment that preserves freshness while ensuring safety. Produced from ethically raised, free-living cows, this milk is antibiotic-free and aflatoxin-free. Its balanced nutrition makes it a trustworthy choice for everyday consumption, supporting growth, immunity, and wellness.',
    },
    {
        id: 3,
        name: 'Cow Milk β (A2 Protein Rich, Pasteurized)',
        slug: 'cow-milk-beta',
        category: 'milk',
        sizes: ['500 ml'],
        image: MilkFrontBetaPasturized,
        imageBack: MilkBackBetaPasturized,
        textColor: '#b26e41',
        horizantalBackground: 'bg-gradient-to-r from-[#d69469]/60 to-[#b26e41]/60',
        verticalBackground: 'bg-gradient-to-b from-[#d69469]/80 via-[#d69469]/1 to-[#b26e41]/80',
        features: [
            {
                feature: 'Gentle and Digestive',
                description: `Naturally rich in A2 β-casein protein, making it lighter for the stomach.`
            },
            {
                feature: 'Humane Certified',
                description: `Free-roaming cows raised ethically under global humane standards.`
            },
            {
                feature: 'Pure and Authentic',
                description: `Lab-tested to be aflatoxin-free, antibiotic-free, and nutrient-rich.`
            },
            {
                feature: 'Fresh and Nutritious',
                description: `Packed daily to retain creamy taste, protein, and essential minerals.`
            }
        ],
        briefDescription: 'A2 β-casein pasteurized cow milk, gentle on digestion and free from antibiotics and toxins. Ideal for those seeking a wholesome, nutritious alternative.',
        description: 'Cow Milk β delivers the natural richness of A2 β-casein protein, sourced from our carefully nurtured herds. Pasteurized for safety yet uncompromised in nutrition, this milk is free from antibiotics and toxins, providing easier digestibility and a wholesome alternative for families.',
    },
    {
        id: 4,
        name: 'Whole Cow Milk β (A2 Protein Rich)',
        slug: 'cow-milk-beta-a2',
        category: 'milk',
        sizes: ['500 ml'],
        image: MilkFrontBeta,
        imageBack: MilkBackBeta,
        textColor: '#907391',
        horizantalBackground: 'bg-gradient-to-r from-[#b195b2]/60 to-[#907391]/60',
        verticalBackground: 'bg-gradient-to-b from-[#b195b2]/80 via-[#b195b2]/1 to-[#907391]/80',
        features: [
            {
                feature: 'Gentle and Digestive',
                description: `Naturally rich in A2 β-casein protein, making it lighter for the stomach.`
            },
            {
                feature: 'Humane Certified',
                description: `Free-roaming cows raised ethically under global humane standards.`
            },
            {
                feature: 'Pure and Authentic',
                description: `Lab-tested to be aflatoxin-free, antibiotic-free, and nutrient-rich.`
            },
            {
                feature: 'Fresh and Nutritious',
                description: `Packed daily to retain creamy taste, protein, and essential minerals.`
            }
        ],
        briefDescription: 'Whole cow milk with natural A2 β-casein protein, creamy and nutritious, gentle on digestion, and free from antibiotics and toxins.',
        description: 'Whole Cow Milk β combines the creaminess of full milk with the goodness of natural A2 β-casein. Sourced from free-roaming, stress-free cows, it is aflatoxin-free and antibiotic-free, offering superior nutrition, creamy taste, and ethical assurance in every sip.',
    },
    {
        id: 5,
        name: 'Cow Ghee',
        slug: 'cow-ghee',
        category: 'ghee',
        sizes: ['200 ml'],
        image: GheeJar,
        imageBack: GheeJar,
        textColor: '#C2A756',
        horizantalBackground: 'bg-gradient-to-r from-[#D9BD6A]/60 to-[#C2A756]/60',
        verticalBackground: 'bg-gradient-to-b from-[#D9BD6A]/80 via-[#D9BD6A]/1 to-[#C2A756]/80',
        features: [
            {
                feature: 'Golden and Pure',
                description: `Traditional slow-crafted ghee with rich aroma and superior nutrition.`
            },
            {
                feature: 'Humane Certified',
                description: `Made only from milk of free-living cows, nurtured with compassion.`
            },
            {
                feature: 'Safe and Authentic',
                description: `Free from chemicals and adulteration, ensuring absolute purity.`
            },
            {
                feature: 'Rich and Wholesome',
                description: `Packed with healthy fats, vitamins, and a farm-fresh taste.`
            }
        ],
        briefDescription: 'Golden, pure cow ghee made from the milk of free-roaming cows. Rich aroma, authentic taste, and packed with healthy fats and vitamins.',
        description: 'Milking Ghee is crafted slowly from pure, aflatoxin-free milk of our free-living cows. Its golden richness, packed with fat-soluble vitamins and bioactive compounds, boosts immunity and digestion. Packaged in a premium square jar, it blends tradition, purity, and sophistication.',
    },
    {
        id: 6,
        name: 'Malai Paneer',
        slug: 'malai-paneer',
        category: 'paneer',
        sizes: ['200 g'],
        image: Paneer,
        imageBack: Paneer,
        textColor: '#4B4B8C',
        horizantalBackground: 'bg-gradient-to-r from-[#7C6FB2]/60 to-[#4B4B8C]/60',
        verticalBackground: 'bg-gradient-to-b from-[#7C6FB2]/80 via-[#7C6FB2]/1 to-[#4B4B8C]/80',
        features: [
            {
                feature: 'Soft and Fresh',
                description: `Farm-made paneer that’s tender, moist, and rich in flavor.`
            },
            {
                feature: 'Humane Certified',
                description: `Ethically sourced milk, respecting both cows and consumers.`
            },
            {
                feature: 'Pure and Safe',
                description: `Vacuum-packed to lock in freshness and maintain hygiene.`
            },
            {
                feature: 'Protein-Rich',
                description: `High-protein goodness, perfect for healthy meals every day.`
            }
        ],
        briefDescription: 'Made from pure, antibiotic-free milk, our paneer is a fresh, high-protein choice reflecting ethical farming and uncompromised quality.',
        description: 'Our Paneer is made from clean, antibiotic-free milk and vacuum-packed to preserve freshness and purity. It retains high protein, calcium, and soft texture, making it a versatile, healthy choice. Every cube reflects ethical farming, safe nutrition, and uncompromised quality.',
    },
    {
        id: 7,
        name: 'ρ Curd (Probiotic Rich)',
        slug: 'curd-probiotic',
        category: 'curd',
        sizes: ['400 g'],
        image: ProCurdFront,
        imageBack: ProCurdBack,
        textColor: '#7c924a',
        horizantalBackground: 'bg-gradient-to-r from-[#bbcf8c]/60 to-[#7c924a]/60',
        verticalBackground: 'bg-gradient-to-b from-[#bbcf8c]/80 via-[#bbcf8c]/1 to-[#7c924a]/80',
        features: [
            {
                feature: 'Gut-Friendly',
                description: `Packed with natural probiotics to aid digestion and immunity.`
            },
            {
                feature: 'Humane Certified',
                description: `Ethically produced from free-roaming, stress-free cows.
`
            },
            {
                feature: 'Pure and Safe',
                description: `Antibiotic-free, aflatoxin-free milk sets every batch naturally.
`
            },
            {
                feature: 'Fresh and Authentic',
                description: `Thick, creamy texture with traditional taste in every spoonful.
`
            }
        ],
        briefDescription: 'Our creamy probiotic curd, made from pure milk, enhances gut health with natural cultures for your daily wellness.',
        description: 'Milking Probiotic Curd is fermented with natural cultures, enhancing gut health and digestion. Made from aflatoxin-free, stress-free cow’s milk, it provides creamy taste, balanced nutrition, and probiotic benefits. It embodies purity, science, and compassion in every spoonful, promoting daily wellness.',
    },
    {
        id: 8,
        name: 'Curd (A2 Protien Rich)',
        slug: 'curd-a2-protien',
        category: 'curd',
        sizes: ['400 g'],
        image: CurdA2Front,
        imageBack: CurdA2Back,
        textColor: '#b67e3a',
        horizantalBackground: 'bg-gradient-to-r from-[#ebbf81]/60 to-[#b67e3a]/60',
        verticalBackground: 'bg-gradient-to-b from-[#ebbf81]/80 via-[#ebbf81]/1 to-[#b67e3a]/80',
        features: [
            {
                feature: 'Gut-Friendly',
                description: `Packed with natural probiotics to aid digestion and immunity.`
            },
            {
                feature: 'Humane Certified',
                description: `Ethically produced from free-roaming, stress-free cows.
`
            },
            {
                feature: 'Pure and Safe',
                description: `Antibiotic-free, aflatoxin-free milk sets every batch naturally.
`
            },
            {
                feature: 'Fresh and Authentic',
                description: `Thick, creamy texture with traditional taste in every spoonful.
`
            }
        ],
        briefDescription: `Experience our premium curd, rich in A2 protein and made from organic milk from happy, stress-free cows. It's antibiotic-free, aflatoxin-free, and India's first Certified Humane dairy product, ensuring a pure and ethical choice.`,
        description: `Indulge in the pure, wholesome goodness of Milking Curd β, a premium curd that is naturally rich in A2 protein. Sourced from the milk of stress-free, happy cows, our product stands for uncompromising quality and ethical practices. As India's first Certified Humane dairy product, we ensure the highest standards of animal welfare.`,
    },
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
    return products.slice(0, 4);
};

export const getProductBySlug = (slug) => {
    return products.find(product =>
        product.name.toLowerCase().replace(/\s+/g, '-') === slug
    );
};