import https from "../http-common";

class getDataServices {
    getIngredients() {
        return https.get("/ingredients");
    }
    getRecipes() {
        return https.get('/recipes?ingredients=${id}');
    }

}

export default new getDataServices();