<template>
    <b-container>
        <b-row>
      <b-col>
        <div class="filter">
         <label>Select Date</label>
                <b-form-datepicker v-model="tanggal"  ></b-form-datepicker>
               
        </div>
      </b-col>
    </b-row>
    <label>Please Select Ingredient </label>
    <b-row>
         <div v-for="category in filteredIngredients" :key="category.id" >
             <b-form-checkbox 
             :v-model="selectedData.item"
             :id="'category_ + category.title'" 
             :value="category.title"
             button
             >
             {{ category.title }}<br/>{{ category['use-by'] }}
             </b-form-checkbox>
         </div>

    </b-row>
    <label>{{ selectedData.item }}</label>
    </b-container>
    
</template>

<script>
import IngredientServices from "@/services/getIngredients"
import recipesServices from "@/services/getrecipes"

export default {
    
    data() {
        return {
            ingredients_list:[],
            ingredient_data: IngredientServices.getAll().then(response => {
                this.ingredients_list = response.data;
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            }),
            
            tanggal: new Date().toISOString().slice(0,10),
            selectedIngredient: this.tanggal,
            selectedData: {
                item: []
            }
        }
    },
    computed: {
        filteredIngredients() {
        if (this.selectedIngredient === this.tanggal)
            return this.ingredients_list;
        else
            return this.ingredients_list.filter(p => p['use-by'] > this.tanggal);

        }
    },

    methods:{
        
        retriveRecipe(){
             recipesServices.get().then(response =>{
                    this.recipes_list = response.data.id
                    console.log(response.data);
                }).catch(e=>{
                    console.log(e);
                })
        },
    }

    
}



</script>