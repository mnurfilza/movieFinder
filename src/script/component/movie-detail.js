class MovieDetail extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set movie(movie){
        console.log("object");
        this._movie = movie
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = ` 
        <style>
       

        .content{
            display:flex;
            width:100%;
            color:black;
            padding:20px 50px 20px 50px;
            border: 2px solid black;

        }

        .fan-art-movie{
            width:250px;
        }

        .content-right{
            margin-left: 70px;
        }

        .content-right > p {
            font-size: 20px;
            font-weight: 300px;
        }
        
        .content-right > h1{
            font-size: 30px;
            width:100%;
        }
        
        </style>
            <div class="content">
                <div class="content-left">
                    <img class="fan-art-movie" src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="Fan Art">
                </div>

                <div class="content-right">
                    <h1>${this._movie.title}</h1>
                    <p>${this._movie.tagline}</p>
                    <p>Release : ${this._movie.release_date}</p>
                    <p>${this._movie.overview}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("movie-detail", MovieDetail);