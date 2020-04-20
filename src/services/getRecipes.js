import https from "../http-common";

class ingredientsDataServices {
    getAll() {
        return https.get("/recipes?ingredients=");
    }
}

export default new ingredientsDataServices();