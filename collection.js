const collection = [{
        title: "Coulant au chocolat",
        author: "Edouard Sicot",
        category: ["dessert"],
        img: "img/Le-vrai-coulant-au-chocolat.jpeg",
        link: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Le-vrai-coulant-au-chocolat-2280940",
        description: "Une recette simple et efficace pour tous les fans de chocolat.",
    },

    {
        title: "Cheesecake ",
        author: "Edouard Sicot",
        category: ["dessert"],
        img: "img/Cheese-cake-au-potimarron-et-speculoos.jpg",
        link: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Mon-super-banoffee-2258640",
        description: "On succombe à cette pâtisserie anglaise à base de banane et de caramel.",
    },

    {
        title: "Sablés au parmesan",
        author: "Jean Claude Amiel",
        category: ["biscuit"],
        img: "img/Sables-au-parmesan.jpg",
        link: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Sables-au-parmesan-548053",
        description: "Une idée simple et facile pour un apéro fait-maison. ",
    },

    {
        title: "Crème brûlée",
        author: "Jérôme Bilic",
        category: ["dessert"],
        img: "img/Creme-brulee-facile.jpeg",
        link: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Creme-brulee-facile-2894406",
        description: "Un délice que le monde entier nous envie !",
    },

    {
        title: "Cookies banane, avoine et chocolat noir",
        author: "Jérôme Bilic",
        category: ["biscuit"],
        img: "img/Cookies-banane-flocons-d-avoine-et-chocolat-noir.jpg",
        link: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Cookies-banane-flocons-d-avoine-et-chocolat-noir-3407042",
        description: "On succombe tous à ce biscuit à la banane, flocons et chocolat noir",
    },

    {
        title: "Gâteaux au chocolat",
        author: "Hanane",
        category: ["dessert"],
        img: "img/Gateau-3-chocolats.jpg",
        link: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Gateau-3-chocolats-979655",
        description: "Gâteau au 3 chocolats",
    },

    {
        title: "Cake au chocolat",
        author: "Getty",
        category: ["dessert"],
        img: "img/Gateau-au-chocolat-facile.jpg",
        link: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Gateau-au-chocolat-facile-2080684",
        description: "Ultra-facile à cuisiner et à savourer, on fond pour cette recette de gâteau au chocolat, préparée avec 5 ingrédients à peine. Au menu, du chocolat noir (évidemment), du beurre, du sucre, des œufs et un soupçon de farine, suffisent pour préparer ce délice. Prête à fondre ?",
    },

    {
        title: "Mon super banoffee",
        author: "Edouard Sicot",
        category: ["dessert"],
        img: "img/Mon-super-banoffee.jpg",
        link: "https://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Mon-super-banoffee-2258640",
        description: "On succombe à cette pâtisserie anglaise à base de banane et de de caramel.",
    },

    {
        title: "Salade d’orange",
        author: "Marjolaine Daguerre",
        category: ["dessert"],
        img: "img/Salade-d-orange-a-l-eau-de-fleur-d-oranger.jpg",
        link: "https://youtu.be/IymYbQnN-wc",
        description: "Le secret de cette recette ultra-rapide tient dans la découpe des oranges et dans le dosage subtil de l’eau de fleur d’oranger.",
    },

    {
        title: "Pâte à choux Thermomix",
        author: "Getty",
        category: ["dessert"],
        img: "img/Pate-a-choux-Thermomix.jpg",
        link: "https://youtu.be/fTU168ttp_g",
        description: "Les secrets pour faire une pâte à choux parfaite avec son Thermomix.",
    },
];



const mainContainer = document.querySelector(".supp");
mainContainer.innerHTML = "";

for (let element of collection) {

    const colonne = document.createElement('div');
    colonne.className = 'col-12 col-sm-6 col-md-4 col-xl-3 mb-4';
    mainContainer.appendChild(colonne);

    const card = document.createElement('div');
    card.className = 'card';
    colonne.appendChild(card);

    const image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = element.img; //pour selectionner 'img' de la premiere card ligne(3-10) vu que c'est une boucle elle va faire ça pour chacunea des cartes 
    card.appendChild(image);

    const card_body = document.createElement('div');
    card_body.className = 'card-body';
    card.appendChild(card_body);

    const badge = document.createElement('span');
    badge.className = 'badge badge-success mb-3';
    badge.textContent = element.category;
    card_body.appendChild(badge);

    const titre4 = document.createElement('h4');
    titre4.className = 'h5 card-title';
    titre4.textContent = element.title;
    card_body.appendChild(titre4);

    const titre6 = document.createElement('h6');
    titre6.className = 'h6 card-subtitle mb-4 text-muted';
    titre6.style = "font-size: small";
    titre6.textContent = element.author;
    card_body.appendChild(titre6);

    const overflow = document.createElement('div');
    overflow.className = 'overflow-auto'; //changer 'mb-2' pour la taille
    overflow.style = "height:6em";
    card_body.appendChild(overflow);

    const phrase = document.createElement('p');
    phrase.className = 'card-text';
    phrase.textContent = element.description;
    overflow.appendChild(phrase);


    const ligne = document.createElement('hr');
    card_body.appendChild(ligne);

    const lien_a = document.createElement('a');
    lien_a.href = element.link;
    card_body.appendChild(lien_a);

    const icon_i = document.createElement('i');
    icon_i.className = 'fab fa-youtube';
    lien_a.appendChild(icon_i);


}