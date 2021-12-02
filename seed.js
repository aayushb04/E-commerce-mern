const { model } = require('mongoose');
const Product=require('./models/product');


const products=[
    {
        name:'iphone',
        price: 100,
        desc:'loern snainsafasbcuac cacbasbciabsci asciaciabscba ba cuas a',
        img:'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80'
    },
    {
        name:'laptop',
        price:1000,
        desc:'loern snainsafasbcuac cacbasbciabsci asciaciabscba ba cuas a',
        img:'https://media.istockphoto.com/photos/isolated-laptop-on-white-background-stock-photo-picture-id1294325987?b=1&k=20&m=1294325987&s=170667a&w=0&h=MUqxtcCsnCB5SGc9YxSyRkkvZ7vKR0RJEULeEpYgv1M='
    },
    {
        name:'ipad',
        price:1090,
        desc:'loern snainsafasbcuac cacbasbciabsci asciaciabscba ba cuas a',
        img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
        name:'Mackbook ',
        price:10090,
        desc:'loern snainsafasbcuac cacbasbciabsci asciaciabscba ba cuas a',
        img:'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFja2Jvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
        name:'Android',
        price:190,
        desc:'loern snainsafasbcuac cacbasbciabsci asciaciabscba ba cuas a',
        img:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
    },
    {
        name:'Tv',
        price:10000,
        desc:'loern snainsafasbcuac cacbasbciabsci asciaciabscba ba cuas a',
        img:'https://media.istockphoto.com/photos/big-modern-tv-with-4k-resolutions-and-young-woman-on-foreground-some-picture-id958523170?b=1&k=20&m=958523170&s=170667a&w=0&h=172kip84izKTaFlhnmmrjYDOk5iWjJmRHd2C44qBU7k='
    }
]
const seedDB= async ()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB seeded');
}
module.exports=seedDB;