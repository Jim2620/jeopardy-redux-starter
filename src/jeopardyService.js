import axios from 'axios';

class JeopardyService {

    constructor(url = 'http://jservice.io/api/', client = axios.create()){
        this.url = url;
        this.client = client;
    }

    getQuestion(category){
        if(category){
            return this.client.get(this.url + "clues", {params:{"category": category}});
        }
        return this.client.get(this.url + "random");
    }

    getCategories(count = 1){
        return this.client.get(this.url + "categories", {params: {"count": count, "offset": this.generateOffset(1, 200)}});
    }

    generateOffset(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

}

export default JeopardyService;