import { Component } from 'react';
import './BookMarketplacePage.css';
import Navbar from '../Navbar/navbar';


const booksList = 
  [
    {
      "id": 1,
      "title": "The White Tiger",
      "author": "Aravind Adiga",
      "price": "350",
      "description": "A novel about a young man from a rural village in India who rises to become a successful entrepreneur in the city.",
      "cover": "https://covers.openlibrary.org/b/id/6574576-L.jpg"
    },
    {
      "id": 3,
      "title": "The Immortals of Meluha",
      "author": "Amish Tripathi",
      "price": "250",
      "description": "The first book in the Shiva Trilogy, a mythological fiction series that reimagines the life of the Hindu deity Shiva.",
      "cover": "https://covers.openlibrary.org/b/id/8285875-L.jpg"
    },
    {
      "id": 4,
      "title": "Half Girlfriend",
      "author": "Chetan Bhagat",
      "price": "200",
      "description": "A romance novel about a young man from Bihar and his relationship with a girl from a higher social class.",
      "cover": "https://covers.openlibrary.org/b/id/8285462-L.jpg"
    },
    {
      "id": 5,
      "title": "The Palace of Illusions",
      "author": "Chitra Banerjee Divakaruni",
      "price": "320",
      "description": "A retelling of the Indian epic Mahabharata from the perspective of Draupadi.",
      "cover": "https://covers.openlibrary.org/b/id/6786049-L.jpg"
    },
    {
      "id": 6,
      "title": "Train to Pakistan",
      "author": "Khushwant Singh",
      "price": "280",
      "description": "A novel set during the partition of India, depicting the violence and chaos of the time.",
      "cover": "https://covers.openlibrary.org/b/id/8202062-L.jpg"
    },
    {
      "id": 7,
      "title": "The Guide",
      "author": "R.K. Narayan",
      "price": "270",
      "description": "A novel about a tour guide in a small town in India and his journey to self-discovery.",
      "cover": "https://covers.openlibrary.org/b/id/7585854-L.jpg"
    },
    {
      "id": 8,
      "title": "Midnight’s Children",
      "author": "Salman Rushdie",
      "price": "380",
      "description": "A novel that follows the life of Saleem Sinai, born at the stroke of midnight on the day of India’s independence.",
      "cover": "https://covers.openlibrary.org/b/id/8703260-L.jpg"
    },
    {
      "id": 9,
      "title": "A Suitable Boy",
      "author": "Vikram Seth",
      "price": "450",
      "description": "A sprawling novel set in post-independence India, focusing on a mother’s search for a suitable groom for her daughter.",
      "cover": "https://covers.openlibrary.org/b/id/8274522-L.jpg"
    },
    {
      "id": 10,
      "title": "The Namesake",
      "author": "Jhumpa Lahiri",
      "price": "310",
      "description": "A novel about the experiences of a Bengali American immigrant family in the United States.",
      "cover": "https://covers.openlibrary.org/b/id/8301584-L.jpg"
    },
    {
      "id": 11,
      "title": "The Lowland",
      "author": "Jhumpa Lahiri",
      "price": "280",
      "description": "A novel about two brothers growing up in Kolkata and their divergent paths in life.",
      "cover": "https://covers.openlibrary.org/b/id/8220541-L.jpg"
    },
    {
      "id": 12,
      "title": "Interpreter of Maladies",
      "author": "Jhumpa Lahiri",
      "price": "220",
      "description": "A collection of short stories exploring themes of love, identity, and belonging among Indian and Indian American characters.",
      "cover": "https://covers.openlibrary.org/b/id/7757641-L.jpg"
    },
    {
      "id": 13,
      "title": "The Argumentative Indian",
      "author": "Amartya Sen",
      "price": "290",
      "description": "A collection of essays on Indian history, culture, and identity by Nobel laureate Amartya Sen.",
      "cover": "https://covers.openlibrary.org/b/id/7916099-L.jpg"
    },
    {
      "id": 14,
      "title": "The Great Indian Novel",
      "author": "Shashi Tharoor",
      "price": "330",
      "description": "A satirical novel that reimagines the Indian epic Mahabharata in the context of modern Indian politics.",
      "cover": "https://covers.openlibrary.org/b/id/8285229-L.jpg"
    },
    {
      "id": 15,
      "title": "Sacred Games",
      "author": "Vikram Chandra",
      "price": "360",
      "description": "A crime thriller set in Mumbai, India, exploring themes of corruption, politics, and the underworld.",
      "cover": "https://covers.openlibrary.org/b/id/8202657-L.jpg"
    },
    {
      "id": 16,
      "title": "The Shadow Lines",
      "author": "Amitav Ghosh",
      "price": "280",
      "description": "A novel that explores the interconnectedness of individuals and nations across borders, set against the backdrop of India and Bangladesh.",
      "cover": "https://covers.openlibrary.org/b/id/8275628-L.jpg"
    },
    {
      "id": 17,
      "title": "Five Point Someone",
      "author": "Chetan Bhagat",
      "price": "200",
      "description": "A novel about three engineering students at an Indian institute and their struggles with academics and relationships.",
      "cover": "https://covers.openlibrary.org/b/id/8261634-L.jpg"
    },
    {
      "id": 18,
      "title": "The Secret Wishlist",
      "author": "Preeti Shenoy",
      "price": "220",
      "description": "A novel about a woman who makes a secret wishlist of things she wants to achieve in life, and the journey she embarks on to fulfill her dreams.",
      "cover": "https://covers.openlibrary.org/b/id/8302039-L.jpg"
    },
    {
      "id": 19,
      "title": "The Monk Who Sold His Ferrari",
      "author": "Robin Sharma",
      "price": "270",
      "description": "A self-help book that offers insights on personal growth, happiness, and fulfillment, inspired by the author’s own spiritual journey.",
      "cover": "https://covers.openlibrary.org/b/id/8280190-L.jpg"
    },
    {
      "id": 20,
      "title": "The Rozabal Line",
      "author": "Ashwin Sanghi",
      "price": "250",
      "description": "A thriller that weaves together elements of religion, mythology, and conspiracy theories, set in India and the Middle East.",
      "cover": "https://covers.openlibrary.org/b/id/8279281-L.jpg"
    },
    {
      "id": 21,
      "title": "2 States: The Story of My Marriage",
      "author": "Chetan Bhagat",
      "price": "240",
      "description": "A romance novel that follows the journey of a couple from different states of India as they navigate cultural differences and family expectations.",
      "cover": "https://covers.openlibrary.org/b/id/8268619-L.jpg"
    },
    {
      "id": 22,
      "title": "Life is What You Make It",
      "author": "Preeti Shenoy",
      "price": "200",
      "description": "A novel about a young woman battling mental illness and finding the strength to overcome adversity and pursue her dreams.",
      "cover": "https://covers.openlibrary.org/b/id/8269367-L.jpg"
    },
    {
      "id": 23,
      "title": "The Oath of the Vayuputras",
      "author": "Amish Tripathi",
      "price": "310",
      "description": "The final book in the Shiva Trilogy, which concludes the epic story of the Hindu deity Shiva and his battle against evil.",
      "cover": "https://covers.openlibrary.org/b/id/8285864-L.jpg"
    },
    {
      "id": 24,
      "title": "The Inheritance of Loss",
      "author": "Kiran Desai",
      "price": "290",
      "description": "A novel set in India and the United States, exploring themes of identity, belonging, and the legacy of colonialism.",
      "cover": "https://covers.openlibrary.org/b/id/8237587-L.jpg"
    },
    {
      "id": 25,
      "title": "The Great Indian Novel",
      "author": "Shashi Tharoor",
      "price": "330",
      "description": "A satirical novel that reimagines the Indian epic Mahabharata in the context of modern Indian politics.",
      "cover": "https://covers.openlibrary.org/b/id/8285229-L.jpg"
    },
    {
      "id": 26,
      "title": "The Inheritance of Loss",
      "author": "Kiran Desai",
      "price": "290",
      "description": "A novel set in India and the United States, exploring themes of identity, belonging, and the legacy of colonialism.",
      "cover": "https://covers.openlibrary.org/b/id/8237587-L.jpg"
    },
    {
      "id": 27,
      "title": "Revolution 2020: Love, Corruption, Ambition",
      "author": "Chetan Bhagat",
      "price": "250",
      "description": "A novel that explores themes of love, corruption, and ambition against the backdrop of India’s education system.",
      "cover": "https://covers.openlibrary.org/b/id/8269969-L.jpg"
    },
    {
      "id": 28,
      "title": "The Zoya Factor",
      "author": "Anuja Chauhan",
      "price": "260",
      "description": "A romantic comedy about a young woman who becomes a lucky charm for the Indian cricket team.",
      "cover": "https://covers.openlibrary.org/b/id/8269785-L.jpg"
    },
    {
      "id": 29,
      "title": "The Krishna Key",
      "author": "Ashwin Sanghi",
      "price": "320",
      "description": "A thriller that combines elements of mythology, history, and mystery, centered around the figure of Lord Krishna.",
      "cover": "https://covers.openlibrary.org/b/id/8279391-L.jpg"
    },
    {
      "id": 30,
      "title": "The White Tiger",
      "author": "Aravind Adiga",
      "price": "350",
      "description": "A novel about a young man from a rural village in India who rises to become a successful entrepreneur in the city.",
      "cover": "https://covers.openlibrary.org/b/id/6574576-L.jpg"
    }  
]

class BookMarketplacePage extends Component {

  render() {

    return (
      <>
      <Navbar />
      <div className="container">
        <h2>Book Marketplace</h2>
        <ul className="book-container-list">
          {booksList.map((book) => (
            <li key={book.id} className="book-item">
              <img src={book.cover} alt={book.title} className="book-img" />
              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Author: {book.author}</p>
                <p className="book-price">Price: {book.price}/-</p>
                <p className="book-description">{book.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </>
    );
  }
}

export default BookMarketplacePage;
