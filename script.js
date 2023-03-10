//  Constructor

function Movie(title, genre, description, year, seen, id) {
    this.title = title;
    this.genre = genre;
    this.description = description;
    this.year = year;
    this.seen = seen;
    this.id = id;
  }


// Queries

const seenBoard = document.getElementById('seen-board');
const unseenBoard = document.getElementById('unseen-board');


// Entries

let filmLibrary = [
    new Movie("The Shining", "Horror", "Based on based on Stephen King's 1977 novel of the same name; an aspiring writer and recovering alcoholic accepts a position as the off-season caretaker of the isolated historic Overlook Hotel",
 "1980", "true", 1),
    new Movie("Big Trouble in Little China", "Fantasy, Action, Comedy", "Truck driver Jack Burton helps his friend Wang Chi rescue Wang's green-eyed fiancée from bandits in San Francisco's Chinatown",
"1986", "true", 2),
    new Movie("The Evil Dead", "Horror", "Five college students vacationing in an isolated cabin find an audio tape that, when played, releases a legion of demons and spirits",
"1981", "true", 3),
    new Movie("Demolition Man", "Science Fiction, Action", "A risk-taking police officer cryogenically frozen is awaken to help capture a extremely dangerous crime lord",
"1993", "true", 4),
    new Movie("Dredd", "Science Fiction, Action", "Judge Dredd, a law enforcer, and his apprentice partner, Judge Anderson, are forced to bring order to a 200-storey high-rise block of apartments and deal with its resident drug lord",
"2012", "true", 5),
    new Movie("The Running Man", "Action", "An man wrongly accused of a crime must participate in a television show where convicted criminal must escape death at the hands of professional killers",
"1987", "true", 6),
    new Movie("Blade Runner", "Science Fiction", "When a fugitive group of syntetic humans, or 'replicants', escapes to Earth, burnt-out cop Rick Deckard reluctantly agrees to hunt them down",
"1982", "false", 7),
    new Movie("Tron", "Science Fiction, Action, Adventure", "A computer programmer and video game developer is transported inside the software world, where he interacts with programs in his attempt to escape",
"1982", "false", 8),
    new Movie("Jaws", "Thriller", "A police chief, a marine biologist and a professional shark hunter persue a man-eating great white shark that attack beachgoers at a summer resort town",
"1975", "false", 9)]


// Functions

let toggleSeen = function(element, class0, class1) {
    element.classList.toggle(class0);
    element.classList.toggle(class1);
}

const seenMovie = function(button) {
    let id = Number(this.closest('.card').id);
    let movie = document.getElementById(id);
    let entry = Object.keys(filmLibrary).find(key => filmLibrary[key].id === id);
    if (filmLibrary[entry]['seen'] === 'true') {
        filmLibrary[entry]['seen'] = 'false';
        toggleSeen(movie, 'seen', 'unseen');
        button.src = 'static/seen.png';
        unseenBoard.appendChild(movie);
    }
    else if (filmLibrary[entry]['seen'] === 'false') {
        filmLibrary[entry]['seen'] = 'true';
        toggleSeen(movie, 'seen', 'unseen');
        button.src = 'static/unseen.png';
        seenBoard.appendChild(movie);
    };
};

const deleteMovie = function() {
    let id = Number(this.closest('.card').id);
    let movie = document.getElementById(id);
    let entry = Object.keys(filmLibrary).find(key => filmLibrary[key].id === id);
    let board = this.closest('.cards');
    filmLibrary.splice(entry, 1);
    board.removeChild(movie);
};

const editMovie = function() {
    let id = Number(this.closest('.card').id);
    let movie = document.getElementById(id);
    let entry = Object.keys(filmLibrary).find(key => filmLibrary[key].id === id);
    let board = this.closest('.cards');

    modal.style.display = 'block';

    // Get content
    let title = document.getElementById('entry-title');
    let genre = document.getElementById('entry-genre');
    let year = document.getElementById('entry-year');
    let desc = document.getElementById('entry-description');

    title.value = `${filmLibrary[entry]['title']}`;
    genre.value = `${filmLibrary[entry]['genre']}`;
    year.value = `${filmLibrary[entry]['year']}`;
    desc.value = `${filmLibrary[entry]['description']}`;

    if (filmLibrary[entry]['seen'] === 'true') {
        document.getElementById('seen-radio').checked = true;
    }
    else if (filmLibrary[entry]['seen'] === 'false') {
        document.getElementById('unseen-radio').checked = true;
    }

    // Delete old card
    saveMovie.addEventListener('submit', function() {
        board.removeChild(movie);
        filmLibrary.splice(entry, 1);
    });
}


// Create cards and add movies

let addMovieCard = function(library) {
    
    // Create card
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', `${library['id']}`)

    // Create elements
    let movieTitle = document.createElement('div');
    movieTitle.setAttribute('class', 'movie-title');
    let movieData = document.createElement('div');
    movieData.setAttribute('class', 'movie-data');
    let movieGenre = document.createElement('div');
    movieGenre.setAttribute('class', 'movie-genre');
    let movieYear = document.createElement('div');
    movieYear.setAttribute('class', 'movie-year');
    let movieDesc = document.createElement('div');
    movieDesc.setAttribute('class', 'movie-desc');
    let movieButtons = document.createElement('div');
    movieButtons.setAttribute('class', 'movie-buttons');

    let seenBtn = document.createElement('img');

    let editBtn = document.createElement('img');
    editBtn.classList.add('btn', 'edit');
    editBtn.src = 'static/edit.png';
    let deleteBtn = document.createElement('img');
    deleteBtn.classList.add('btn', 'delete');
    deleteBtn.src = 'static/delete.png';

    // Add content
    movieTitle.textContent = `${library['title']}`;
    movieGenre.textContent = `${library['genre']}`;
    movieYear.textContent = `${library['year']}`;
    movieDesc.textContent = `${library['description']}`;

    // Append containers
    card.appendChild(movieTitle);
    card.appendChild(movieData);
    card.appendChild(movieDesc);
    card.appendChild(movieButtons);

    movieData.appendChild(movieGenre);
    movieData.appendChild(movieYear);

    movieButtons.appendChild(editBtn);
    movieButtons.appendChild(deleteBtn);

    // Append to board
    if (library['seen'] === 'true') {
        card.classList.add('seen');

        seenBtn.src = 'static/unseen.png';
        seenBtn.classList.add('btn', 'seen-btn', 'seen');
        movieButtons.appendChild(seenBtn);
        
        seenBoard.appendChild(card);
    }
    else if (library['seen'] === 'false') {
        card.classList.add('unseen');
        
        seenBtn.src = 'static/seen.png';
        seenBtn.classList.add('btn', 'seen-btn', 'unseen');
        movieButtons.appendChild(seenBtn);
        
        unseenBoard.appendChild(card);
    };

    // Add event Listeners
    seenBtn.addEventListener('click', seenMovie);
    deleteBtn.addEventListener('click', deleteMovie);
    editBtn.addEventListener('click', editMovie);
};

function addMovie(object) {
    filmLibrary.push(object);
}

function addMovieToList(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let movieEntries = Object.values(Object.fromEntries(formData));
    let values = filmLibrary.map(object => object['id']);
    movieEntries[5] = Number(values.slice(-1)) + 1;
    
    let newMovie = new Movie();
    Object.keys(newMovie).forEach((element, index) => {
        newMovie[element] = movieEntries[index]});
    
    addMovie(newMovie);
    addMovieCard(newMovie);

    modal.style.display = 'none';
};


// Event Listener

let saveMovie = document.getElementById('form');
saveMovie.addEventListener('submit', addMovieToList);

// Define modal window

const modal = document.getElementById('movieForm');
const openBtn = document.getElementById('open-form');
const closeBtn = document.getElementById('close-btn');

openBtn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Call function

for (let i = 0; i < Object.keys(filmLibrary).length; i++) {
    addMovieCard(filmLibrary[i]);
};

// Form Validation

const formFields = document.querySelectorAll('.input-field');
const formYear = document.getElementById('entry-year');

formFields.forEach((form) => {
    form.addEventListener('input', (event) => {
        if (form.validity.tooShort) {
            form.setCustomValidity('You need to write at least 1 character!');
        } else {
            form.setCustomValidity('');
        }
    })
});

formYear.addEventListener('input', () => {
    if (formYear.validity.rangeUnderflow) {
        formYear.setCustomValidity(`The first movie was created in 1878, to this can\'t be possible. Check the release year!`);
    } else {
        formYear.setCustomValidity('');
    }
})