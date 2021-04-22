const app = Vue.createApp({
  data(){
    return{
      name: 'Roald',
      age: 29,
      imageLink: "https://via.placeholder.com/150"
    }
  },
  methods:{
    ageInFiveYears(){
      return this.age + 5
    },

    calculateFaveNumber(){
      return Math.random()
    }

  }
})

app.mount("#assignment")