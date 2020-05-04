class PopularItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        movie.title = this.checkTitle(movie.title)
        this._movie = movie; 
        this.render();
    }


    checkTitle(title){
    if (title.length > 20) {
        return title.substring(0, 21)    
     }
     return title
    }

    render(){
        this.shadowDOM.innerHTML = `
        
        <style>
            *{
                margin: 0;
                padding: 0;
            }
            .card {
                margin-left:20px;
                margin-bottom: 18px;
                padding: 0 0 16px 0;
                color: #757575;
                border-radius: 5px;
                background-color: #fff;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                
            }

            .poster{
                width:200px;
            }
           
            .content{
                height:fit-content;
                margin-left: 10px;
                color:black;
                padding-bottom: 35px;
            }

            .content h3{
                font-size: 16px;
                font-weight: 900;
            }
            
            .button{
                text-decoration: none;
                color: white;
                background-color: #82b1ff;
                cursor: pointer;
                position: relative;
                top: 25px;
                padding: 10px 20px 10px 20px;
                border-radius: 10px;
                width:200px;
            }

        </style>
        <div class="card">
            <img class="poster" src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="Fan Art">
                <div class="content">
                    <h3>${this._movie.title}</h3>
                    <p>${this._movie.vote_average}</p>
                    <a class="button" href="detail.html?id=${this._movie.id}">Find Detail</a>
                </div>           
        </div>`;

        this.shadowDOM.querySelector('.button').addEventListener("click",this._clickEvent)
    }
}

customElements.define("popular-item", PopularItem)