import axios from "axios";
import { useState } from "react";



export default class PostService {
    static async getAll(search) {
        const response = await axios.get('https://www.googleapis.com/books/v1/volu4mes?q=' + search + '&key=AIzaSyCx2BcUwuuF2FP2F458G11d_HCiLhGqR00')
        return response
    }
}
