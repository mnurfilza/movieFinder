// import clubs from './clubs.js';

class DataSource {
    static async searchClub(keyword) {
        const key = "b7a9042e231189da42830ef64c564fb8"
        const baseUrl = "https://api.themoviedb.org/3/search/movie"
        try {
            const resp = await fetch(`${baseUrl}?api_key=${key}&query=${keyword}`)
            const respJson = await resp.json();

            if (respJson.results.length != 0) {
                return respJson.results
            } else {
                const err = new Error("Data Tidak Diketemukan");
                return err
            }
        } catch (error) {
            return error
        }
    }


   static async mostPopular(){
        const key = "b7a9042e231189da42830ef64c564fb8";
        const baseUrl ="https://api.themoviedb.org/3/movie/popular";
        try {
            const resp = await fetch(`${baseUrl}?api_key=${key}`);
            const respJson = await resp.json();

            if (respJson.results.length != 0) {                
                return respJson.results
            } else {
                const err = new Error("Request Error");
                return err
            }
        } catch (message) {
            return message
        }
    }

    static async movieDetail(id){
        const key = "b7a9042e231189da42830ef64c564fb8";
        const baseUrl ="https://api.themoviedb.org/3/movie/";
        try {
            const resp = await fetch(`${baseUrl}${id}?api_key=${key}`);
            const respJson = await resp.json();

            return respJson
        } catch (message) {
            return message
        }
    }


    
}

export default DataSource;