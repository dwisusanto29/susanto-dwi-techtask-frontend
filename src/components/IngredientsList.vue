<template>
    <b-container>
        <b-row>
      <b-col>
        <div class="filter">
         <label>Select Date</label>
                <b-form-datepicker v-model="tanggal"></b-form-datepicker>
        </div>
      </b-col>
    </b-row>
    <label>Please Select Ingredient </label>
    <b-row>
         <div v-for="category in filteredIngredients" :key="category.id" >
             
             <b-form-checkbox 
                v-model="selectedData.item" 
                :id="'category_ + category.title'" 
                :value="category.title" button>
             {{ category.title }}<br/>{{ category['use-by'] }}
             </b-form-checkbox>
         </div>

    </b-row>
    <label>{{ selectedData.item }}</label>

    <br/>
    <label>Name of Menu : </label>
        <b-row>
            
            <div v-if="resultsRecipe(recipe_list, selectedData.item)">
                <label>{{resultsRecipe}}</label>
            </div>
            
        </b-row>
    </b-container>
    
</template>

<script>

import IngredientServices  from "../services/getIngredients"
import recipeServices from "../services/getRecipes"

export default {
    
    data() {
        return {
            ingredients_list: [],
            ingredient_data: IngredientServices .getAll().then(response => {
                this.ingredients_list = response.data;
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            }),
            tanggal: new Date().toISOString().slice(0,10),
            selectedIngredient: null,
            selectedData: {
                item: []
            },
            recipe_list: [],
            recipe_data: recipeServices .getAll().then(response => {
                this.recipe_list = response.data;
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            }),
            filter: "All",
            fkey: "ingredients",


        }
    },
    computed: {
        filteredIngredients() {
        if (this.selectedIngredient === this.tanggal)
            return this.ingredients_list;
        else
            return this.ingredients_list.filter ( p => p['use-by'] > this.tanggal);
        },


    },
    methods: {
        resultsRecipe(entry) {
            if(this.filter  !== "All"){
                if (this.recipe_list.fkey==this.filter){
                    return entry;
                } else {
                    return entry;
                }
            }
        }
    }

    
    
}
</script>