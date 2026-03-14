const moreInfoTours = [
  {
    name: "Mystical Bali Adventure",
    description: "Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.",
    price: 2000,
    duration: 7,
  },
  {
    name: "Alaskan Wilderness Expedition",
    description: "Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.",
    price: 3500,
    duration: 10,
  },
  {
    name: "Enigmatic Egyptian Odyssey",
    description: "Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.",
    price: 1800,
    duration: 8,
  },
  {
    name: "Scenic New Zealand Adventure",
    description: "Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.",
    price: 2800,
    duration: 12,
  },
  {
    name: "Mystical Machu Picchu Trek",
    description: "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.",
    price: 2200,
    duration: 9,
  },
  {
    name: "Vibrant Rio de Janeiro Carnival",
    description: "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.",
    price: 2500,
    duration: 5,
  },
  {
    name: "Majestic African Safari",
    description: "Embark on a thrilling journey through the African wilderness, where you'll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.",
    price: 3000,
    duration: 10,
    },
   {
    name: "Tokyo Tranquility Trek",
    description: "Embark on a journey of discovery and serenity amidst the vibrant energy of Tokyo.",
    price: 3200,
     duration: 12,
  },
];

document.addEventListener("DOMContentLoaded", function() {
  const infoButtons = document.querySelectorAll(".tour-card__button-info");
  const buyButtons = document.querySelectorAll(".tour-card__button-buy");

  function createModal(tour, modalId) {
    const modal = document.createElement("div");
    modal.id = modalId;
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.innerHTML = `
      <span id="${modalId}-closeModal" class="close">&times;</span>
      <h2 id="${modalId}-modalTitle">${tour.name}</h2>
      <p id="${modalId}-modalDescription">${tour.description}</p>
      <p><strong>Price:</strong> <span id="${modalId}-modalPrice">${tour.price}</span></p>
      <p><strong>Duration:</strong> <span id="${modalId}-modalDuration">${tour.duration}</span></p>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const closeModal = document.getElementById(`${modalId}-closeModal`);
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "transparent";
    modal.style.padding = "20px";
    modal.style.borderRadius = "10px";
    modal.style.zIndex = "9999";
  }

  // Обробник подій для кнопок "More Info"
  infoButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const tour = moreInfoTours[index];
      const modalId = `modal-${index}`;
      createModal(tour, modalId);
    });
  });

  // Обробник подій для кнопок "Buy Tour"
  buyButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const tour = moreInfoTours[index];
      const confirmationMessage = `Thank you for your purchase!\n\nTour: ${tour.name}\nPrice: ${tour.price}\nDuration: ${tour.duration}`;
      alert(confirmationMessage);
    });
  });
});
