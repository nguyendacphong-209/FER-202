const animals = [
    {
        name: 'Lion',
        scientificName: 'Panthero leo',
        size: 140,
        diet: ['meat'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzNi6LHtfEKMWGhHBvhjNQcRzNWAWiMB2xg&s'
    },
    {
        name: 'Gorilla',
        scientificName: 'Gorilla beringei',
        size: 205,
        diet: ['plants', 'insects'],
        additional: {
            notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.',
        },
        image: 'https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_small/4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg'
    },
    {
        name: 'Zebra',
        scientificName: 'Equus quagga',
        size: 322,
        diet: ['plants'],
        additional: {
            notes: 'There are three different species of zebra.',
            link: 'https://en.wikipedia.org/wiki/Zebra',
        },
        image: 'https://b2386983.smushcdn.com/2386983/wp-content/uploads/2024/04/Plains-Zebra-body.jpg?lossy=0&strip=1&webp=1'
    },
];
export default animals;