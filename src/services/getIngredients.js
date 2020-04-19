import https from "../http-common";

class ingredientsDataServices {
    getAll() {
        return https.get("/ingredients");
    }
}

export default new ingredientsDataServices();