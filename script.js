// Banner com slides
updateBanner()

let width = document.querySelector('.banner-item').offsetWidth;
let totalSlides = document.querySelectorAll('.banner-item').length;
let currentSlide = 0;

let widthBannerSlides = document.querySelector('.banner-slide');
widthBannerSlides.style.width = `${width * totalSlides}px`;

function updateBanner () {

    document.querySelector('.left').addEventListener('click', () => {
        currentSlide--
        if(currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        updateMargin();
    }) 

    document.querySelector('.right').addEventListener('click', () => {
        currentSlide++
        if(currentSlide > (totalSlides - 1)) {
            currentSlide = 0;
        }
        updateMargin();
    })
}


function updateMargin() {
    let newMargin = (currentSlide * width);
    document.querySelector('.banner-slide').style.marginLeft = `-${newMargin}px`;
}

function updateSlide () {
    currentSlide++
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

setInterval(updateSlide, 5000);

/*--------------------------------------------------------------------*/

const movies = document.querySelector('.content.movies');
const seriesContent = document.querySelector('.content.series');
const animesContent = document.querySelector('.content.animes');
const moviesButtons = document.querySelector('.movies-buttons');
const seriesButtons = document.querySelector('.series-buttons');
const animesButtons = document.querySelector('.animes-buttons');

// Carregar catálogo de filmes, séries e animes na página

fillMovies()
fillSeries()
fillAnimes()

function fillMovies () {
    filmes.map((item, index) => {
        movies.innerHTML += `
            <div class="movie-content">
                <div class="movie">
                    <img src="${filmes[index].image}">
                </div>
                <div class="movie-sinopse">
                    <p class="title">${filmes[index].nome}</p>
                    <p class="description">${filmes[index].sinopse}</p>
                </div>
            </div>
        `   
    })
    
    moviesButtons.innerHTML += `
        <button class="movies-btn-left"><</button>
        <button class="movies-btn-right">></button>    
    `
}

function fillSeries() {
    series.map((item, index) => {
        seriesContent.innerHTML += `
            <div class="serie-content">
                <div class="serie">
                    <img src="${series[index].image}">
                </div>
                <div class="serie-sinopse">
                    <p class="title">${series[index].nome}</p>
                    <p class="description">${series[index].sinopse}</p>
                </div>
            </div>
        `
    })
    
    seriesButtons.innerHTML += `
        <button class="series-btn-left"><</button>
        <button class="series-btn-right">></button>
    `
}

function fillAnimes() {
    animes.map((item, index) => {
        animesContent.innerHTML += `
            <div class="anime-content">
                <div class="anime">
                    <img src="${animes[index].image}">
                </div>
                <div class="anime-sinopse">
                    <p class="title">${animes[index].nome}</p>
                    <p class="description">${animes[index].sinopse}</p>
                </div>
            </div>
        `
    })
    
    animesButtons.innerHTML += `
        <button class="animes-btn-left"><</button>
        <button class="animes-btn-right">></button>
    `
}

// Mostrar título e sinopse ao passar o mouse por cima

/* ------------------------------------ Filmes ------------------- */

let movieContentImg = document.querySelectorAll('.movie-content .movie');
let movieContent = document.querySelectorAll('.movie-content');
let movieSinopse = document.querySelectorAll('.movie-sinopse')

movieContentImg.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        movieSinopse[index].style.display = "block"
        movieContent[index].style.transform = "scale(1.1)"
        movieContent[index].style.border = "2px solid cyan"
    })
})

movieContentImg.forEach((item, index) => {
    item.addEventListener('mouseout', () => {
        movieSinopse[index].style.display = "none"
        movieContent[index].style.transform = "none"
        movieContent[index].style.border = "none"
    })
})

/* ---------------------------------------------------------------- */


/* ------------------------------------ Séries ------------------- */

let allSeriesImg = document.querySelectorAll('.serie-content .serie');
let allSeries = document.querySelectorAll('.serie-content');
let serieSinopse = document.querySelectorAll('.serie-sinopse')

allSeriesImg.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        serieSinopse[index].style.display = "block"
        allSeries[index].style.transform = "scale(1.1)"
        allSeries[index].style.border = "2px solid cyan"
    })

})

allSeriesImg.forEach((item, index) => {
    item.addEventListener('mouseout', () => {
        serieSinopse[index].style.display = "none"
        allSeries[index].style.transform = "none"
        allSeries[index].style.border = "none"
    })
})

/* ---------------------------------------------------------------- */


/* ------------------------------------ Animes ------------------- */

let animeContentImg = document.querySelectorAll('.anime-content .anime');
let animeContent = document.querySelectorAll('.anime-content');
let animeSinopse = document.querySelectorAll('.anime-sinopse')

animeContentImg.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        animeSinopse[index].style.display = "block"
        animeContent[index].style.transform = "scale(1.1)"
        animeContent[index].style.border = "2px solid cyan"
    })
})

animeContentImg.forEach((item, index) => {
    item.addEventListener('mouseout', () => {
        animeSinopse[index].style.display = "none"
        animeContent[index].style.transform = "none"
        animeContent[index].style.border = "none"
    })
})

/* ---------------------------------------------------------------- */


// Abrir modal e preenhcer os dados

/* --------------------------------------------------------------- */

let video = document.querySelector('iframe');
let yearInfo = document.querySelector('.year');
let seasonsInfo = document.querySelector('.seasons');
let durationInfo = document.querySelector('.duration');
let episodesInfo = document.querySelector('.episodes');
let genreInfo = document.querySelector('.genre');
let castingInfo = document.querySelector('.casting');
let charactersInfo = document.querySelector('.characters');


movieContentImg.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector('.modal').style.display = "flex"
        video.src = filmes[index].trailer
        yearInfo.innerHTML = `Ano de Lançamento:<br/>${filmes[index].year}`
        durationInfo.innerHTML = `Duração do Filme:<br/>${filmes[index].duration}`
        genreInfo.innerHTML = `Gênero:<br/>${filmes[index].genre}`
        castingInfo.innerHTML = `Elenco:<br/>${filmes[index].casting}`
    })
})

allSeriesImg.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector('.modal').style.display = "flex"
        video.src = series[index].trailer
        yearInfo.innerHTML = `Ano de lançamento:<br/>${series[index].year}`
        seasonsInfo.innerHTML = `Número de temporadas:<br/>${series[index].seasons}`
        genreInfo.innerHTML = `Gênero:<br/>${series[index].genre}`
        castingInfo.innerHTML = `Elenco:<br/>${series[index].casting}`
    })
})

animeContentImg.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector('.modal').style.display = "flex"
        video.src = animes[index].trailer
        yearInfo.innerHTML = `Ano de lançamento:<br/>${animes[index].year}`
        episodesInfo.innerHTML = `Número de episódios:<br/>${animes[index].numberOfEpisodes}`
        genreInfo.innerHTML = `Gênero:<br/>${animes[index].genre}`
        castingInfo.innerHTML = `Personagens:<br/>${animes[index].characters}`
    })
})

document.querySelector('.close').addEventListener('click', () => {
    video.src = '';
    document.querySelector('.modal').style.display = 'none';
})

/* ---------------------------------------------------------------- */


// Mover os catálogos para direita e esquerda

/* ------------------------------------------------ Filmes ---------------------*/

let buttonLeftMovies = document.querySelector('.movies-btn-left')
let buttonRightMovies = document.querySelector('.movies-btn-right')
let moviesCatalog = document.querySelector('.content.movies');

let currentWidthMovies = 0;
let currentScreenIndexMovies = 1;

let movieWidth = document.querySelector('.movie').offsetWidth
let moviesOnScreen = (moviesCatalog.offsetWidth / movieWidth)
let numberOfMovies = document.querySelectorAll('.movie').length

let numberOfClicksMovies = 0

if (numberOfClicksMovies === 0) {
    buttonLeftMovies.style.display = "none";
}

buttonLeftMovies.addEventListener('click', () => {
    
    currentWidthMovies -= moviesCatalog.offsetWidth; 
    moviesCatalog.scrollTo(currentWidthMovies, 0)
    
    numberOfClicksMovies--
    currentScreenIndexMovies--

    if (numberOfClicksMovies === 0) {
    buttonLeftMovies.style.display = "none"
    }

    let amountMoviesOnScreen = currentScreenIndexMovies * moviesOnScreen

    if(amountMoviesOnScreen <= numberOfMovies) {
        buttonRightMovies.style.display = "block" 
    }

})

buttonRightMovies.addEventListener('click', () => {
    
    currentWidthMovies += moviesCatalog.offsetWidth;
    moviesCatalog.scrollTo(currentWidthMovies, 0)
    
    numberOfClicksMovies++
    currentScreenIndexMovies++

    if(numberOfClicksMovies > 0) {
        buttonLeftMovies.style.display = "block"
    }
    
    let amountMoviesOnScreen = currentScreenIndexMovies * moviesOnScreen
    
    if (amountMoviesOnScreen >= numberOfMovies) {
        buttonRightMovies.style.display = "none" 
    }

})

/* -----------------------------------------------------------------------------*/


/* ------------------------------------------------ Séries ---------------------*/

let buttonLeftSeries = document.querySelector('.series-btn-left')
let buttonRightSeries = document.querySelector('.series-btn-right')
let seriesCatalog = document.querySelector('.content.series');

let currentWidthSeries = 0;
let currentScreenIndexSeries = 1;

let serieWidth = document.querySelector('.serie').offsetWidth
let seriesOnScreen = (seriesCatalog.offsetWidth / serieWidth)
let numberOfSeries = document.querySelectorAll('.serie').length

let numberOfClicksSeries = 0

if (numberOfClicksSeries === 0) {
    buttonLeftSeries.style.display = "none";
}

buttonLeftSeries.addEventListener('click', () => {
    
    currentWidthSeries -= seriesCatalog.offsetWidth; 
    seriesCatalog.scrollTo(currentWidthSeries, 0)
    
    numberOfClicksSeries--
    currentScreenIndexSeries--

    if (numberOfClicksSeries === 0) {
    buttonLeftSeries.style.display = "none"
    }

    let amountSeriesOnScreen = currentScreenIndexSeries * seriesOnScreen

    if(amountSeriesOnScreen <= numberOfSeries) {
        buttonRightSeries.style.display = "block" 
    }

})

buttonRightSeries.addEventListener('click', () => {
    
    currentWidthSeries += seriesCatalog.offsetWidth;
    seriesCatalog.scrollTo(currentWidthSeries, 0)
    
    numberOfClicksSeries++
    currentScreenIndexSeries++

    if(numberOfClicksSeries > 0) {
        buttonLeftSeries.style.display = "block"
    }
    
    let amountSeriesOnScreen = currentScreenIndexSeries * seriesOnScreen
    
    if (amountSeriesOnScreen >= numberOfSeries) {
        buttonRightSeries.style.display = "none" 
    }

})

/* -----------------------------------------------------------------------------*/


/* ------------------------------------------------ Séries ---------------------*/

let buttonLeftAnimes = document.querySelector('.animes-btn-left')
let buttonRightAnimes = document.querySelector('.animes-btn-right')
let animesCatalog = document.querySelector('.content.animes');

let currentWidthAnimes = 0;
let currentScreenIndexAnimes = 1;

let animeWidth = document.querySelector('.anime').offsetWidth
let animesOnScreen = (animesCatalog.offsetWidth / serieWidth)
let numberOfAnimes = document.querySelectorAll('.anime').length

let numberOfClicksAnimes = 0

if (numberOfClicksAnimes === 0) {
    buttonLeftAnimes.style.display = "none";
}

buttonLeftAnimes.addEventListener('click', () => {
    
    currentWidthAnimes -= animesCatalog.offsetWidth; 
    animesCatalog.scrollTo(currentWidthAnimes, 0)
    
    numberOfClicksAnimes--
    currentScreenIndexAnimes--

    if (numberOfClicksAnimes === 0) {
    buttonLeftAnimes.style.display = "none"
    }

    let amountAnimesOnScreen = currentScreenIndexAnimes * animesOnScreen

    if(amountAnimesOnScreen <= numberOfAnimes) {
        buttonRightAnimes.style.display = "block" 
    }

})

buttonRightAnimes.addEventListener('click', () => {
    
    currentWidthAnimes += animesCatalog.offsetWidth;
    animesCatalog.scrollTo(currentWidthAnimes, 0)
    
    numberOfClicksAnimes++
    currentScreenIndexAnimes++

    if(numberOfClicksAnimes > 0) {
        buttonLeftAnimes.style.display = "block"
    }
    
    let amountAnimesOnScreen = currentScreenIndexAnimes * animesOnScreen
    
    if (amountAnimesOnScreen >= numberOfAnimes) {
        buttonRightAnimes.style.display = "none" 
    }

})

/* -----------------------------------------------------------------------------*/
