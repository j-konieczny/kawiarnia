const menu = [
  {
    id: 1,
    title: "Espresso",
    pojemnosc: "20ml / 40ml",
    category: "Kawa",
    price: "8 / 10",
    img: "images/espresso.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Americano",
    pojemnosc: "200ml / 300ml",
    category: "Kawa",
    price: "10 / 12",
    img: "images/1.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Drip v60",
    pojemnosc: "200ml / 400ml",
    category: "Kawa",
    price: "10 / 12",
    img: "images/1.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Chemex",
    pojemnosc: "440ml",
    category: "Kawa",
    price: 20.99,
    img: "./images/2.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Latte",
    pojemnosc: "250ml / 350ml",
    category: "Kawa",
    price: "10 / 12",
    img: "./images/8.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Cappuccino",
    pojemnosc: "200ml / 300ml",
    category: "Kawa",
    price: "10 / 12",
    img: "./images/8.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Jajecznica",
    pojemnosc: "",
    category: "Śniadania",
    price: 8.99,
    img: "./images/jajka.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Owsianka",
    pojemnosc: "",
    category: "Śniadania",
    price: 12.99,
    img: "./images/owsianka.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Pancakes",
    pojemnosc: "",
    category: "Śniadania",
    price: 16.99,
    img: "./images/pancake.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Sałatka",
    pojemnosc: "",
    category: "Lunch",
    price: 22.99,
    img: "./images/salatka.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Bowl",
    pojemnosc: "",
    category: "Lunch",
    price: 22.99,
    img: "./images/bowl.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "Burger",
    pojemnosc: "",
    category: "Lunch",
    price: 22.99,
    img: "./images/burger.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "Tosty",
    pojemnosc: "",
    category: "Śniadania",
    price: 22.99,
    img: "./images/tosty.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "Muffinka",
    pojemnosc: "",
    category: "Desery",
    price: 22.99,
    img: "./images/muffin.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "Sernik",
    pojemnosc: "",
    category: "Desery",
    price: 22.99,
    img: "./images/sernik.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "Brownie",
    pojemnosc: "",
    category: "Desery",
    price: 22.99,
    img: "./images/brownie.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const kawa = [
  
    {
      id: 1,
      title: "Espresso",
      pojemnosc: "20ml / 40ml",
      category: "Kawa",
      price: "8 / 10",
      img: "images/espresso.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Americano",
      pojemnosc: "200ml / 300ml",
      category: "Kawa",
      price: "10 / 12",
      img: "images/1.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Drip v60",
      pojemnosc: "200ml / 400ml",
      category: "Kawa",
      price: "10 / 12",
      img: "images/1.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Chemex",
      pojemnosc: "440ml",
      category: "Kawa",
      price: 20.99,
      img: "./images/2.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Latte",
      pojemnosc: "250ml / 350ml",
      category: "Kawa",
      price: "10 / 12",
      img: "./images/8.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Cappuccino",
      pojemnosc: "200ml / 300ml",
      category: "Kawa",
      price: "10 / 12",
      img: "./images/8.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
];


// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(kawa);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
             <div id="pojemnosc"> <h4>${item.title}  <h4 class="pojemnosc"> ${item.pojemnosc} </h4> </h4> </div> 
              
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Kawa"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
