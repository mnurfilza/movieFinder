import '../component/search-bar.js';
import '../component/movie-list.js';
import '../component/slider-list.js';
import '../component/popular-item.js';
import '../component/movie-detail.js';

import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const popularElement = document.querySelector("popular-item");
    const sliderList = document.querySelector("slider-list");
    const movieList = document.querySelector("movie-list");
    const movieDetail = document.querySelector("movie-detail");
    const searchId = window.location.search

    console.log(movieList);
    const loadPopular = async () => {
        try {
            const res = await DataSource.mostPopular()
            renderPopular(res)
        } catch (error) {
            console.log(error);
        }
    };

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            console.log(result);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const onChangeDetailPage = async (searchId) =>{
        if (searchId != "") {
           let data = searchId.split("=")
           
           try {
               const res = await DataSource.movieDetail(data[data.length - 1])
               renderDetail(res)
           } catch (message) {
               console.log(message);
           }
        }
        const err = new Error("ID Tidak Terdefinisikan");
        return err
    }

    onChangeDetailPage(searchId)

    const renderDetail = res => {
        console.log(res);
        movieDetail.movie = res
    }

    const renderPopular = popular => {
        sliderList.movies = popular
    };

    const renderResult = result => {
        movieList.movies = result
    };

    const fallbackResult = message => {
        movieList.renderError(message)
    };

    if (searchElement != null) {
        searchElement.clickEvent = onButtonSearchClicked;
    }

    

    if (sliderList != null) {
        loadPopular();
    }
};

export default main;