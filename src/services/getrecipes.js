import http from "../http-common"

class recipeDataService {
    get() {
        return http.get('/recipes?ingredients=${id}');
    }
}

export default new recipeDataService();