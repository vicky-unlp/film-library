let filmLibrary = [];

function Movie(title, genre, description, director, year, seen) {
  this.title = title;
  this.genre = genre;
  this.description = description;
  this.director = director;
  this.year = year;
  this.seen = seen;
}

function addMovie(object) {
  filmLibrary.push(object);
}

// Create cards

const board = document.querySelector('cards');

function showMovies() {
    for (let i = 0; i < filmLibrary.lenght ; i++) {


    }
    

}







// Entries

const movie1 = new Movie(
    "The Shining",
    "Psycological Horror",
    "Based on based on Stephen King's 1977 novel of the same name; an aspiring writer and recovering alcoholic accepts a position as the off-season caretaker of the isolated historic Overlook Hotel",
    "Stanley Kubrick",
    "1980",
    true
);

addMovie(movie1);

const movie2 = new Movie(
    "Big Trouble in Little China",
    "Fantasy, Action, Comedy",
    "Truck driver Jack Burton helps his friend Wang Chi rescue Wang's green-eyed fiancée from bandits in San Francisco's Chinatown",
    "John Carpenter",
    "1986",
    true
);

addMovie(movie2);

const movie3 = new Movie(
    "The Evil Dead",
    "Supernatural Horror",
    "Five college students vacationing in an isolated cabin find an audio tape that, when played, releases a legion of demons and spirits",
    "Sam Raimi",
    "1981",
    true
);

addMovie(movie3);

const movie4 = new Movie(
    "Demolition Man",
    "Science Fiction, Action",
    "A risk-taking police officer cryogenically frozen is awaken to help capture a extremely dangerous crime lord",
    "Marco Brambilla",
    "1993",
    true
);

addMovie(movie4);

const movie5 = new Movie(
    "Dredd",
    "Science Fiction, Action",
    "Judge Dredd, a law enforcer, and his apprentice partner, Judge Anderson, are forced to bring order to a 200-storey high-rise block of apartments and deal with its resident drug lord",
    "Pete Travis",
    "2012",
    true
);

addMovie(movie5);

const movie6 = new Movie(
    "The Running Man",
    "Action",
    "An man wrongly accused of a crime must participate in a television show where convicted criminal must escape death at the hands of professional killers",
    "Paul Michael Glaser",
    "1987",
    true
);

addMovie(movie6);
  
// To be seen

const movie7 = new Movie(
    "Blade Runner",
    "Science Fiction",
    "When a fugitive group of syntetic humans, or 'replicants', escapes to Earth, burnt-out cop Rick Deckard reluctantly agrees to hunt them down",
    "Ridley Scott",
    "1982",
    false
);

addMovie(movie7);

const movie8 = new Movie(
    "Tron",
    "Science Fiction, Action, Adventure",
    "A computer programmer and video game developer is transported inside the software world, where he interacts with programs in his attempt to escape",
    "Ridley Scott",
    "1982",
    false
);

addMovie(movie8);

const movie9 = new Movie(
    "Jaws",
    "Thriller",
    "A police chief, a marine biologist and a professional shark hunter persue a man-eating great white shark that attack beachgoers at a summer resort town",
    "Steven Spielberg",
    "1975",
    false
);

addMovie(movie9);
