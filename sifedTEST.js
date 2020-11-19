const platforms = [
    {
        name: ' ',
        style: ' badge badge-pill badge-danger fas fa-desktop '
    },
    {
        name: ' ',
        style: ' badge badge-pill badge-primary fab fa-playstation '
    },
    {
        name: ' ',
        style: ' badge badge-pill badge-success fab fa-xbox '
    }

]
const categories = [
    {
        name: 'Action',
        style: 'badge badge-pill badge-danger'
    },
    {
        name: 'Aventure',
        style: 'badge badge-pill badge-success'
    },
    {
        name: 'Fps',
        style: 'badge badge-pill badge-warning'
    },
    {
        name: 'FPS',
        style: 'badge badge-pill badge-warning'
    },
    {
        name: 'Sports',
        style: 'badge badge-pill badge-primary'
    },
    {
        name: 'Tps',
        style: 'badge badge-pill badge-secondary'
    },

]

const collection = [
    {
        image: 'Pics/ASC-IV.jpeg',
        title: 'Assassins Creed IV',
        developper: "UBISOFT ",
        category: [categories[0] , categories[1]],
        platform: [platforms[0], platforms[1], platforms[2]],
        link: "https://www.youtube.com/watch?v=OwVe4ZNeQZk",
        description: "1715, les Pirates règnent sur les Caraïbes et viennent de fonder une République anarchique. Parmi ces hors-la-loi se trouve un jeune capitaine redoutable du nom d’Edward Kenway. Si ses exploits lui font gagner le respect des pirates légendaires comme Barbe Noire, ils le plongent aussi au cœur de la guerre millénaire entre Assassins et Templiers."
    },
    {
        image: 'Pics/ASC-Origins.jpg',
        title: 'Assassins Creed Origins',
        developper: "UBISOFT ",
        category: [categories[0] , categories[1]],
        platform: [platforms[0], platforms[1], platforms[2]],
        link: "https://www.youtube.com/watch?v=xMG0JUHpVk8",
        description: "L'Egypte Antique. Autrefois un empire prospère et influant, maintenant ce n'est plus qu'une civilisation tombant en ruine. Incarnez Bayek fils de Siwa et sa compagne et plongez dans cette mystérieuse période de l'histoire pour découvrez l'excitant et dangereux récit derrière la création de la 1ère Confrérie des Assassins"
    },
    {
        image: 'Pics/ASC-Valhalla.jpg',
        title: 'Assassins Creed Valhalla',
        developper: "UBISOFT ",
        category: [categories[0] , categories[1]],
        platform: [platforms[0], platforms[1], platforms[2]],
        link: "https://www.youtube.com/watch?v=L0Fr3cS3MtY",
        description: "Dans Assassin's Creed Valhalla, incarnez Eivor, Viking légendaire en quête de gloire. Explorez un monde ouvert splendide et dynamique, dans la violence de l’Angleterre médiévale. Partez en raids pour attaquer vos ennemis, améliorez votre campement et développez votre influence politique afin de mériter votre place parmi les dieux, au Valhalla."
    },
    {
        image: 'Pics/God-of-war.jpg',
        title: "GOD OF WAR",
        developper: 'SANTA MONICA STUDIOS ',
        category: [categories[0] , categories[1]],
        platform: [platforms[1]],
        link: "https://www.youtube.com/watch?v=gOE2BVRCUkM",
        description: "Dans ce nouvel opus de God Of War, le héros évoluera dans un monde aux inspirations nordiques, très forestier et montagneux. Un enfant accompagnera le héros principal, pouvant apprendre des actions du joueur, et même gagner de l'expérience."
    },
    {
        image: 'Pics/RDR-2.jpg',
        title: "RED DEAD REDEMPTION II",
        developper: "ROCKSTAR GAMES ",
        category: [categories[0] , categories[1]],
        platform: [platforms[0] , platforms[1] , platforms[2]],
        link: "https://www.youtube.com/watch?v=gmA6MrX81z4",
        description: "Red dead redemtpion 2 permet de plonger dans une ambiance western synonyme de vastes espaces sauvages et de villes malfamées. L'histoire se déroule en 1899 avant le premier opus, au moment ou Arthur Morgan doit fuir avec sa bande après un braquage raté."
    },
    {
        image: 'Pics/GTAV.jpg',
        title: "GRAND THEFT AUTO V",
        developper: "ROCKSTAR GAMES ",
        category: [categories[0] , categories[1]],
        platform: [platforms[0] , platforms[1] , platforms[2]],
        link: "https://www.youtube.com/watch?v=hvoD7ehZPcM",
        description: "GTA V vous place dans la peau de trois personnages inédits. Ces derniers ont élu domicile à Los Santos, ville de la région de San Andreas. Braquages et missions font partie du quotidien du joueur qui pourra également cohabiter avec 15 autres utilisateurs dans cet univers persistant"
    },
    {
        image: 'Pics/Valorant.jpg',
        title: "Valorant",
        developper: "RIOT ",
        category: [categories[3]],
        platform: [platforms[0]],
        link: "https://www.youtube.com/watch?v=e_E9W2vsRbQ",
        description: "Il s'agit d'un match de tir tactique 5v5 pour planter ou désamorcer le Spike dans une série d'une vie par tour, allant jusqu'à 13 manches. En plus des fusils et balles, vous choisirez un agent doté de capacités d'adaptation, de rapidité et de puissance de feu pour faire briller votre style de jeu."
    },
    {
        image: 'Pics/FIFA21.jpg',
        title: "Fifa 21",
        developper: "ELECTRONIC ARTS ",
        category: [categories[4]],
        platform: [platforms[0] , platforms[1] , platforms[2]],
        link: "https://www.youtube.com/watch?v=efWDFk2i_TQ",
        description: "FIFA 21 est une simulation de football. Comme chaque année, le jeu promet des améliorations techniques pour toujours plus de réalisme ainsi que des animations et des comportements toujours plus poussés. Les modes carrière et Ultimate Team disposent également de nouveaux ajouts et un mode street disponible."
    },
    {
        image: 'Pics/nba2k21.jpg',
        title: "NBA 2K21",
        developper: "2K SPORTS ",
        category: [categories[4]],
        platform: [platforms[0] , platforms[1] , platforms[2]],
        link: "https://www.youtube.com/watch?v=LUdPHjOaKrk&t=3s",
        description: 'NBA 2K21 est une simulation de basketball. Comme chaque année le jeu promet des améliorations techniques pour toujours plus de réalisme ainsi que des animations et des comportements toujours plus poussés. les modes "Ma carrière" et "Mon équipe" disposent de nouveaux ajouts.'
    },
    {
        image: 'Pics/fortnite.jpeg',
        title: 'FORTNITE',
        developper: 'EPIC GAMES ',
        category: [categories[5]],
        platform: [platforms[0] , platforms[1] , platforms[2]],
        link: "https://www.youtube.com/watch?v=2gUtfBmw86Y&t=18s",
        description: "Fortnite est un Tower-Defense orienté sandbox. Les joueurs se réunissent en équipe et doivent crafter armes et pièges pour ensuite construire une forteresse et la défendre contre les nombreux monstres qui viendront l'assaillir."
    },
    {
        image: 'Pics/Uncharted4.jpg',
        title: 'UNCHARTED 4',
        developper: 'NAUGHTY DOGS ',
        category: [categories[0] , categories[1] , categories[5]],
        platform: [platforms[1]],
        link: "https://www.youtube.com/watch?v=y1Rx-Bbht5E&t=35s",
        description: "Quatrième opus de la série de jeu d'action/aventure à succès de Naughty Dog, Uncharted 4 A Thief's End vous permet d'incarner Nathan Drake pour la première fois sur PS4. Le célèbre explorateur devra révéler le complot qui se cache derrière un légendaire trésor de pirates."
    },
    {
        image: 'Pics/The-last-of-us-2.jpg',
        title: 'THE LAST OF US PART II',
        developper: 'NAUGHTY DOGS ',
        category: [categories[0] , categories[1] , categories[5]],
        platform: [platforms[1]],
        link: "https://www.youtube.com/watch?v=vhII1qlcZ4E&t=62s",
        description: "nous retrouvons à nouveau Joel et Ellie plus déterminés que jamais à éradiquer les infectés jusqu'au dernier. Toujours nouveau dans un monde post apocalyptique, le duo toujours aussi soudé devra prendre les décisions qui s'imposent afin de survivre un seul jour de plus à cette pandémie."
    },
]
document.querySelector('.container-fluid').innerHTML = '';
const mainContainer = document.querySelector('.container-fluid'); 

for(let element of collection) {
    
const colonnes = document.createElement('div');
    colonnes.className = 'col-12 col-sm-6 col-md-4 col-xl-3 mb-4';
    mainContainer.appendChild(colonnes)

const card = document.createElement('div');
    card.className = 'card text-white bg-dark';
    card.style= 'background-image: linear-gradient(to bottom, #014665,black)';
    colonnes.appendChild(card);

//=================================== IMAGES =====================================//

const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = element.image;
    card.appendChild(image)

//============================== CORPS DE CARTES =================================//

const card_body = document.createElement('div');
    card_body.className = 'card-body';
    card.appendChild(card_body);

//=============================== BADGES CATEGORY ================================//

for(let badge of element.category){
        const category = document.createElement('span');
        category.textContent = badge.name;
        category.className = badge.style;
        card_body.appendChild(category);
}

//==================================== TITRE =====================================//

const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = element.title;
    card_body.appendChild(title);

//===================================== DEVS =====================================//

const developper = document.createElement('h6');
    developper.className = 'card-subtitle mb-2 text-muted';
    developper.textContent = element.developper;
    card_body.appendChild(developper);

//=============================== BADGES PLATFORMES ==============================//

    for(let games of element.platform){
        const platform = document.createElement('span');
        platform.textContent = games.name;
        platform.className = games.style;
        developper.appendChild(platform);
}

//================================== DESCRIPTION =================================//
    
const description = document.createElement('p');
    description.className = 'card-text overflow-auto';
    description.style= 'font-size: small;height:6em';
    description.textContent = element.description;
    card_body.appendChild(description);

//================================LOGO YOUTUBE ==================================//

const newDiv = document.createElement('div');
    card_body.appendChild(newDiv);

const balisea = document.createElement('a');
    balisea.href = element.link;
    newDiv.appendChild(balisea);

const link = document.createElement('i');
    link.className = 'fab fa-2x fa-youtube';
    link.style = 'color:red';
    balisea.appendChild(link);

}

//=============================== SEARCH FUNCTION =============================//

function filterGames(pattern){
	const results = []
  
  for(let game of collection){
  	if(game.title.toLowerCase().match(pattern) || game.description.match(pattern))
    	results.push(game)
  }
  
  const resultsDiv = document.querySelector('#results')
  resultsDiv.innerHTML = ''
  mainContainer.innerHTML = ''

  for(let element of results) {
    
    const colonnes = document.createElement('div');
        colonnes.className = 'container-fluid col-12 col-sm-6 col-md-4 col-xl-3 mb-4 mx-auto';
        resultsDiv.appendChild(colonnes)
    
    const card = document.createElement('div');
        card.className = 'card text-white bg-dark';
        card.style= 'background-image: linear-gradient(to bottom, #014665,black)';
        colonnes.appendChild(card);
    
    //=================================== IMAGES =====================================//
    
    const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = element.image;
        card.appendChild(image)
    
    //============================== CORPS DE CARTES =================================//
    
    
    const card_body = document.createElement('div');
        card_body.className = 'card-body';
        card.appendChild(card_body);
    
    //=============================== BADGES CATEGORY ================================//
    
    for(let badge of element.category){
            const category = document.createElement('span');
            category.textContent = badge.name;
            category.className = badge.style;
            card_body.appendChild(category);
    }
    
    //==================================== TITRE =====================================//
    
    const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = element.title;
        card_body.appendChild(title);
    
    //===================================== DEVS =====================================//
    
    const developper = document.createElement('h6');
        developper.className = 'card-subtitle mb-2 text-muted';
        developper.textContent = element.developper;
        card_body.appendChild(developper);
    
    //=============================== BADGES PLATFORMES ==============================//
    
        for(let games of element.platform){
            const platform = document.createElement('span');
            platform.textContent = games.name;
            platform.className = games.style;
            developper.appendChild(platform);
    }
    
    //================================== DESCRIPTION =================================//
        
    const description = document.createElement('p');
        description.className = 'card-text overflow-auto';
        description.style= 'font-size: small;height:6em';
        description.textContent = element.description;
        card_body.appendChild(description);
    
    //================================LOGO YOUTUBE ==================================//
    
    const newDiv = document.createElement('div');
        card_body.appendChild(newDiv);
    
    const balisea = document.createElement('a');
        balisea.href = element.link;
        newDiv.appendChild(balisea);
    
    const link = document.createElement('i');
        link.className = 'fab fa-2x fa-youtube';
        link.style = 'color:red';
        balisea.appendChild(link);
    
    }
}
document.querySelector('#filter_input')
.addEventListener('keyup', input => {
	filterGames(input.target.value.toLowerCase())
})