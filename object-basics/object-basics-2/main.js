let bandInfo;

    // Add your code here
const myFavBand = {
  name: 'London Grammar',
  nationality: ' English',
  genre: 'indie pop',
  members: 3,
  formed: 2009,
  split: false,
  albums: [
    { name: 'If You Wait', released: 2013 },
    { name: 'Truth Is a Beautiful Thing', released: 2017 },
    { name: 'Californian Soil', released: 2021 }
  ]
};

bandInfo = `${myFavBand.name} 
are an 
${myFavBand.nationality} ${myFavBand.genre} 
formed in Nottingham in 
${myFavBand.formed}.
The band consists of Hannah Reid, Dan Rothman and Dominic Major. Their debut extended play, Metal & Dust, was released in February 2013 by Metal & Dust Recordings,while their debut album, 
${myFavBand['albums'][0]['name']} 
was released in September
${myFavBand['albums'][0]['released']}.
The album reached number two on the UK Albums Chart and was certified double platinum by the British Phonographic Industry (BPI). The band's second studio album,
${myFavBand['albums'][1]['name']}
was released in June
${myFavBand['albums'][1]['released']},
peaking at number one on the UK Albums Chart.The latest album,
${myFavBand['albums'][2]['name']}
was released on 16 April
${myFavBand['albums'][2]['released']},
and became their second consecutive number one album in the United Kingdom.`;

    // Don't edit the code below here!

    const section = document.querySelector('section');
    let para1 = document.createElement('p');
    para1.textContent = bandInfo;
    section.appendChild(para1);