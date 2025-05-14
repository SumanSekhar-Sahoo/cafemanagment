// Menu Data
const menuItems = {
    coffee: [
        {
            id: 'coffee-1',
            name: 'Classic Espresso',
            description: 'Pure and simple. The foundation of great coffee.',
            price: 3.50,
            image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
        },
        {
            id: 'coffee-2',
            name: 'Caramel Macchiato',
            description: 'Espresso with steamed milk and vanilla, topped with caramel.',
            price: 5.25,
            image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
        },
        {
            id: 'coffee-3',
            name: 'Cold Brew',
            description: 'Steeped for 24 hours for a smooth, bold flavor.',
            price: 4.75,
            image: 'https://images.pexels.com/photos/2608495/pexels-photo-2608495.jpeg'
        },
        {
            id: 'coffee-4',
            name: 'Cappuccino',
            description: 'Perfect balance of espresso, steamed milk and foam.',
            price: 4.50,
            image: 'https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg'
        },
        {
            id: 'coffee-5',
            name: 'Vietnamese Coffee',
            description: 'Strong coffee with condensed milk over ice.',
            price: 4.95,
            image: 'https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg'
        },
        {
            id: 'coffee-6',
            name: 'Affogato',
            description: 'Hot espresso poured over vanilla gelato.',
            price: 5.50,
            image: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg'
        }
    ],
    tea: [
        {
            id: 'tea-1',
            name: 'Earl Grey',
            description: 'Black tea infused with bergamot oil.',
            price: 3.75,
            image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg'
        },
        {
            id: 'tea-2',
            name: 'Jasmine Green',
            description: 'Fragrant green tea with jasmine flowers.',
            price: 4.00,
            image: 'https://images.pexels.com/photos/1410148/pexels-photo-1410148.jpeg'
        },
        {
            id: 'tea-3',
            name: 'Chamomile',
            description: 'Soothing herbal tea with honey.',
            price: 3.50,
            image: 'https://images.pexels.com/photos/5501119/pexels-photo-5501119.jpeg'
        },
        {
            id: 'tea-4',
            name: 'Chai Latte',
            description: 'Spiced black tea with steamed milk.',
            price: 4.75,
            image: 'https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg'
        }
    ],
    pastries: [
        {
            id: 'pastry-1',
            name: 'Almond Croissant',
            description: 'Buttery croissant filled with almond paste.',
            price: 4.50,
            image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg'
        },
        {
            id: 'pastry-2',
            name: 'Chocolate Muffin',
            description: 'Double chocolate muffin with chocolate chips.',
            price: 3.75,
            image: 'https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg'
        },
        {
            id: 'pastry-3',
            name: 'Cinnamon Roll',
            description: 'Classic cinnamon roll with cream cheese frosting.',
            price: 4.25,
            image: 'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg'
        },
        {
            id: 'pastry-4',
            name: 'Blueberry Scone',
            description: 'Tender scone loaded with fresh blueberries.',
            price: 3.95,
            image: 'https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg'
        }
    ],
    sandwiches: [
        {
            id: 'sandwich-1',
            name: 'Avocado Toast',
            description: 'Sourdough toast with smashed avocado, radish, and microgreens.',
            price: 8.50,
            image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg'
        },
        {
            id: 'sandwich-2',
            name: 'Caprese Panini',
            description: 'Fresh mozzarella, tomato, and basil on ciabatta.',
            price: 9.25,
            image: 'https://images.pexels.com/photos/5589052/pexels-photo-5589052.jpeg'
        },
        {
            id: 'sandwich-3',
            name: 'Turkey & Brie',
            description: 'Roasted turkey, brie, and cranberry aioli on multigrain.',
            price: 9.75,
            image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg'
        },
        {
            id: 'sandwich-4',
            name: 'Hummus & Veggie Wrap',
            description: 'House-made hummus with seasonal vegetables in a spinach wrap.',
            price: 8.95,
            image: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg'
        }
    ],
    desserts: [
        {
            id: 'dessert-1',
            name: 'Tiramisu',
            description: 'Classic Italian dessert with coffee-soaked ladyfingers.',
            price: 6.50,
            image: 'https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg'
        },
        {
            id: 'dessert-2',
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with molten center.',
            price: 7.25,
            image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg'
        },
        {
            id: 'dessert-3',
            name: 'New York Cheesecake',
            description: 'Rich and creamy with berry compote.',
            price: 6.95,
            image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg'
        },
        {
            id: 'dessert-4',
            name: 'Apple Pie',
            description: 'Homemade pie with vanilla ice cream.',
            price: 5.95,
            image: 'https://images.pexels.com/photos/2014693/pexels-photo-2014693.jpeg'
        }
    ],
    smoothies: [
        {
            id: 'smoothie-1',
            name: 'Berry Blast',
            description: 'Mixed berries, yogurt, and honey.',
            price: 6.50,
            image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg'
        },
        {
            id: 'smoothie-2',
            name: 'Green Goddess',
            description: 'Spinach, kale, apple, and ginger.',
            price: 6.75,
            image: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg'
        },
        {
            id: 'smoothie-3',
            name: 'Tropical Paradise',
            description: 'Mango, pineapple, coconut milk.',
            price: 6.95,
            image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg'
        },
        {
            id: 'smoothie-4',
            name: 'Protein Power',
            description: 'Banana, peanut butter, protein, almond milk.',
            price: 7.25,
            image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg'
        }
    ]
};