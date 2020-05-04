import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import main from "./script/view/main.js";
import search from "./script/view/search.js";
import Logo from "./images/4957155.jpg";
import AppLogo from "./images/3739210.jpg";

if (document.querySelector("#logo")!= null) {
    document.querySelector("#logo").src = AppLogo
}
document.addEventListener("DOMContentLoaded", main);

