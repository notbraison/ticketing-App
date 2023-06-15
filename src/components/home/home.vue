<template>
<!-- top navigation -->

<div>
        <Navigation :msg="'Welcome to the ticketing app'" :subtitle="'Get your ticket today'" title="Ticketing App"/><!-- using the imported element -->
        <!-- msg is a prop that has been defined in navigation and its value is defined here -->
    </div>
    
    <!-- center section -->
    <!-- bottom section -->

</template>


<script> //options API
//1.import components
//2.build option object
//import is outside export default
//import components to Home page i.e navigation.vue
import Navigation from '../navigation/navigation.vue'//in order to use navigation in our home page

export default {
components:{//explicitly say which are your imported elements , otherwise it won't work for options api
Navigation//Navigation component
}

}


</script>

<style scoped>


</style>