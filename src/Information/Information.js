function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const sho = importAll(require.context('../pictures/shoes', false, /\.(png|jpe?g|svg)$/));
   const cha = importAll(require.context('../pictures/chairs', false, /\.(png|jpe?g|svg)$/));
   const tab = importAll(require.context('../pictures/tables', false, /\.(png|jpe?g|svg)$/));
const products = [
    {
        productName:'Shoes',
        imgSource : sho['2.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion'
    },
    {
        productName:'Flower',
        imgSource : sho['2.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear n6/p,intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Flower',
        imgSource : sho['2.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Biscuit Box',
        imgSource : sho['2.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Chair',
        imgSource : sho['2.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Juice Box',
        imgSource : sho['2.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
   
]
const tables = [
    {
        productName:'name1',
        imgSource : tab['1.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion'
    },
    {
        productName:'name2',
        imgSource : tab['2.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'name3',
        imgSource : tab['5.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'name4',
        imgSource : tab['4.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'name5',
        imgSource : tab['3.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'table6',
        imgSource :tab['4.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'table7',
        imgSource : tab['5.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'table8',
        imgSource : tab['6.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
   
]
const chairs = [
    {
        productName:'Chairs1',
        imgSource : cha['1.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion'
    },
    {
        productName:'Chairs2',
        imgSource : cha['2.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Chairs3',
        imgSource : cha['3.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Chairs4',
        imgSource : cha['4.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Chairs5',
        imgSource : cha['5.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Chairs6',
        imgSource : cha['4.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Chairs7',
        imgSource : cha['5.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Chairs8',
        imgSource : cha['6.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
   
]
const shoes = [
    {
        productName:'Shoes1',
        imgSource : sho['1.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion'
    },
    {
        productName:'Shoes2',
        imgSource : sho['2.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Shoes3',
        imgSource : sho['4.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Shoes4',
        imgSource : sho['5.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Shoes5',
        imgSource : sho['3.jpg'],
        productValue : '5.99$',
        tagline: 'Short Catchy Tagline',
        productDescription :  'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Shoes6',
        imgSource : sho['4.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Shoes7',
        imgSource : sho['5.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
    {
        productName:'Shoes8',
        imgSource : sho['6.jpg'],
        tagline: 'Short Catchy Tagline',
        productValue : '5.99$',
        productDescription : 'footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.'
    },
   
]
export default products
export {tables , shoes , chairs}