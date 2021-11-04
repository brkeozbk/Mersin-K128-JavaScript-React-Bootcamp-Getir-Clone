import { GET_NEWS } from "../constants/GetNews";
import axios  from "axios";
export function getNews(categoryName){
    const query = categoryName; // Router'dan çekilecek.
    const language = "tr";
    const API_KEY = "577c92927f1345d99f9d19ee80db4b1c"; // News API sitesinden key alınacak    
    return {
        type: GET_NEWS.GET_NEWS,
        payload: axios.get(`https://newsapi.org/v2/everything?language=${language}&q=${query}&apiKey=${API_KEY}`, [])

    }
 
    
}