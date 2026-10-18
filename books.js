
function renderBooks(filter) {

    const books = getBooks();
    const booksWrapper = document.querySelector(".books");

    if(filter === 'LOW_TO_HIGH') {

        books.sort((a, b) => a.originalPrice - b.originalPrice);
    }
    else if (filter === 'HIGH_TO_LOW') {
        books.sort((a, b) => b.originalPrice - a.originalPrice);
    }
    else if (filter === 'RATING') {
        books.sort((a, b) => b.rating - a.rating);
    }


    const booksHtml = books
        .map((book) => {
            return `<div class="book">
            <figure class="book__img--wrapper">
                <img class="book__img" src="${book.url}" alt="">
            </figure>
            <div class="book__title">
                ${book.title}
            </div>
            <div class="book__ratings">
                ${ratingsHTML(book.rating)}
            </div>
            <div class="book__price">
                <span>$${book.originalPrice.toFixed(2)}</span>
            </div>
        </div>`;
        })
        .join("");

    booksWrapper.innerHTML = booksHtml;
}


function ratingsHTML(rating) {
    let ratingHTML = "";
    for (i = 0; i < Math.floor(rating); ++i) {
        ratingHTML += '<i class="fas fa-star"></i>\n';
    }
    if (!Number.isInteger(rating)) {
        ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
    }
    return ratingHTML;
}


function filterBooks(event) {
    const selectedFilter = event.target.value;

    renderBooks(selectedFilter);
}

setTimeout(() => {
    renderBooks();
}, 0);




// FAKE DATA

function getBooks() {
  return [
        {
          id: 1,
          title: "To Kill A Mockingbird",
          url: "assets/book_cover_1.webp",
          originalPrice: 28.99,
          salePrice: 14.95,
          rating: 5,
        },
        {
          id: 2,
          title: "Where The Wild Things Are",
          url: "assets/book_cover_2.jpg",
          originalPrice: 20.99,
          salePrice: 13.95,
          rating: 5,
        },
        {
          id: 3,
          title: "The Giver",
          url: "assets/book_cover_3.webp",
          originalPrice: 38.99,
          salePrice: 16.95,
          rating: 5,
        },
        {
          id: 4,
          title: "A Wrinkle In Time",
          url: "assets/book_cover_4.jpg",
          originalPrice: 22.99,
          salePrice: 12.95,
          rating: 4.5,
        },
        {
          id: 5,
          title: "There Is No Place For Us",
          url: "assets/book_cover_5.jpg",
          originalPrice: 44.99,
          salePrice: 19.95,
          rating: 4.5,
        },
        {
          id: 6,
          title: "Murderland",
          url: "assets/book_cover_6.avif",
          originalPrice: 30.99,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 7,
          title: "One Day, Everyone Will Be Against This",
          url: "assets/book_cover_7.jpg",
          originalPrice: 34.99,
          salePrice: 22.95,
          rating: 5,
        },
        {
          id: 8,
          title: "The Revolutionary Life Of The Black Bookstore",
          url: "assets/book_cover_8.jpg",
          originalPrice: 39.99,
          salePrice: 19.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "We Do Not Part",
          url: "assets/book_cover_9.jpg",
          originalPrice: 39.99,
          salePrice: 19.95,
          rating: 5,
        },
        {
          id: 10,
          title: "Nobody's Girl",
          url: "assets/book_cover_10.jpg",
          originalPrice: 44.99,
          salePrice: 24.95,
          rating: 4.5,
        },
        {
          id: 11,
          title: "Hellions",
          url: "assets/book_cover_11.jpg",
          originalPrice: 44.99,
          salePrice: 24.95,
          rating: 4.5,
        },
        {
          id: 12,
          title: "Taiwan Travelouge",
          url: "assets/book_cover_12.webp",
          originalPrice: 32.99,
          salePrice: 16.95,
          rating: 4.5,
        }
      ]
}
