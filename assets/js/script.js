const PRODOTTI = [
    {
        id: 1,
        nome: "Sneaker Run",
        prezzo: 89,
        categoria: "scarpe",
        descrizione: "Scarpa leggera per la corsa, suola in gomma traspirante.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoGYnaOY_YrVrzmZxOYesgrzqLr-Xw4RU5IK7tBXU7w&s=10"
    },
    {
        id: 2,
        nome: "T-shirt basic",
        prezzo: 19,
        categoria: "abbigliamento",
        descrizione: "Cotone biologico, taglio regolare, disponibile in 5 colori.",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQazA76xRJIR5SF3LFyLF0uru_Nbs7vfdfOo-3eNK3uVfTAt7gXC-NCA9ln_sef9nsygf264wrehyauJf8DMuLq5gzkb5TvZOXFxQ22A5LvRR6y_vcpvyEMb5KO9uAJLgXa74q7nWLH&usqp=CAc"
    },
    {
        id: 3,
        nome: "Borsa city",
        prezzo: 49,
        categoria: "accessori",
        descrizione: "Tessuto resistente, tasca interna, cinghia regolabile.",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcp9fv1gOWBcC2Ov6ceokmxs-opCXk_e-Pyr3DmiVjN2U8PFQ5jaH5traGrNMzDsI5q6rb9kb92FFMSiREhXMLGinCnZmM3mimYwKc9T21_lUuXyj72IYkAAlT_iZKxq3Zk04iNUwU&usqp=CAc"
    },
    {
        id: 4,
        nome: "Sandali estate",
        prezzo: 39,
        categoria: "scarpe",
        descrizione: "Plantare anatomico, pelle vegana, perfetti per l'estate.",
        img: "https://m.media-amazon.com/images/I/71MsD9A7O4L._AC_UY900_.jpg"
    },
    {
        id: 5,
        nome: "Felpa con cappuccio",
        prezzo: 59,
        categoria: "abbigliamento",
        descrizione: "Tessuto morbido, tasca a marsupio, polsini elasticizzati",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSu9OugYfm3W2zEKYc9Hjy9EOrnXoF6RZRCc_rQOm_yd6w2qFG09uaFPs8AdcVByIIuntALE80qi1t1lNcVMdAI8EFGWg3Z-rYYDuG-jQZAMf5nSjh3cTwVGN8&usqp=CAc"
    },
    {
        id: 6,
        nome: "Cappello sport",
        prezzo: 14,
        categoria: "accessori",
        descrizione: "Visiera regolabile, traspirante, ideale per gli allineamenti",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2exqp3e6O0hoNFDBLgGTBEWe0C4Am6-HjGNOSV8JEw&s=10"
    },
]

const contenitoreCard = document.querySelector('#card');




function prodottiCard() {
    contenitoreCard.textContent= '';
    PRODOTTI.forEach((prodotto) => {
        const ARTICLE = document.createElement('article');
        ARTICLE.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3');
        const CARD = document.createElement('div');
        CARD.classList.add('card', 'h-100', 'mx-auto');
        CARD.style.width = '18rem';
        const IMG = document.createElement('img');
        IMG.classList.add('h-50', 'py-3', 'px-2', 'card-img-top');
        IMG.src = prodotto.img;
        IMG.alt = prodotto.nome;
        const CARD_BODY = document.createElement('div');
        CARD_BODY.classList.add('card-body', 'd-flex', 'flex-column');
        const TITOLO_CARD = document.createElement('h5');
        TITOLO_CARD.classList.add('card-title', 'fw-bold');
        TITOLO_CARD.textContent = prodotto.nome;
        const DESCRIZIONE_CARD = document.createElement('p');
        DESCRIZIONE_CARD.classList.add('card-text', 'text-muted');
        DESCRIZIONE_CARD.textContent = prodotto.descrizione;
        const PREZZO_CARD = document.createElement('p');
        PREZZO_CARD.classList.add('text-black', 'm-0', 'fw-bold');
        PREZZO_CARD.textContent = `${prodotto.prezzo.toFixed(2).replace('.', ',')} €`;
        const PULSANTE = document.createElement('a');
        PULSANTE.classList.add('btn', 'btn-primary', 'w-100', 'mt-auto');
        PULSANTE.textContent = 'Dettagli';
        PULSANTE.href = '#';

        CARD_BODY.append(TITOLO_CARD, DESCRIZIONE_CARD, PREZZO_CARD, PULSANTE);
        CARD.append(IMG, CARD_BODY);
        ARTICLE.appendChild(CARD);
        contenitoreCard.appendChild(ARTICLE);

        
    })
    
}
prodottiCard();
