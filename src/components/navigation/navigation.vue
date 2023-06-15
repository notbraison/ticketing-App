<template>
<div class="topNav">
    <div :class="logo">Logo</div>

  <div class="routes"><!-- will be on right side of navbar and more prominent -->

<router-link to="/">home</router-link>
<router-link to="/events">Events</router-link><!-- ongoing events -->
<router-link to="/About" >About</router-link><!-- about us -->
<a href="">Contact Us</a><!-- helpdesk, inquiries etc. -->
<a href="">Help</a><!-- FAQ, etc -->
  </div>
   
  <div class="broutes"><!-- will be on left side of navbar and less prominent -->
    <a href="">Login</a>
    <a href="">Sign up</a>
    <a href="">check Ticket</a>
  </div>
  

</div>
</template>

<script>
export default{
  props:[//props for passing data from Home(parent) component to Navigation(child) component
        'msg',
        'title',
        'subtitle'
    ],
    data(){
        return{
            text:'twixt',
            logo:'logoStyling',
            Musician:"src/components/navigation/assets/images/musician.svg",
            age:0,
            car:"",
            sport:0,
            sportImage:"",
            hwImage:"https://images.pexels.com/photos/3684122/pexels-photo-3684122.jpeg?auto=compress&cs=tinysrgb&w=600",
            hwImage2:"https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
            fruits:['apple','banana','citrus','date','eggplant','fig'],//list of items
            movies:[//list of objects
                {id:0,
                name:'Game of thrones',//this is 1st object
                rating:7,
                yearOfProduction:2011,
                type:'fantasy'     
               },
               {
                id:1,
                name:'Fast and Furious: Tokyo Drift',//this is a second object
                rating:10,
                yearOfProduction:2003,
                type:'action'
               }
            ]//end of list
        }
    },

methods:{
        alterColor(){
            console.log('color is altered');
            this.logo = 'logoClicked';            
        },
        changeImage(){//function to change which image Musician is bound 
            console.log('image is changed');
            this.Musician = "src/components/navigation/assets/images/music.svg";
        },

        incAge(){//incement age 
            this.age++;//when age reaches 10 change image to toy car, 30 change image
            this.togCar()// we are using this.function bcoz togCar is an option accessing the data option so we have to make sure the compiler knows which one we want
        },

        decAge(){//this function decrease age
            this.age--;
            this.togCar()
        },
        ageReset(){//reset age to zero
            this.age=0;
        },

        //function to toggle between images depending on age of user 
        togCar(){
            if(this.age===10){//check if image is ===10, diplay toy car
                this.car="https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                
            }
            if(this.age>=18){//if image is >=18 display actual car
                this.car="https://images.pexels.com/photos/8740896/pexels-photo-8740896.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                
            }
            if(this.age<10){
                this.car=""
            }      
        },
        togfoot(){
            if(this.sport===10){//check if image is ===10, diplay toy car
                this.sportImage=this.hwImage;
                
            }
            if(this.sport>=18){//if image is >=18 display actual car
                this.sportImage=this.hwImage2;
            }
            if(this.sport<10){
                this.sportImage=""
            }      
        },
        incSport(){
            this.sport++;
            this.togfoot();
        },
        decSport(){
            this.sport--;
            this.togfoot();
        }
},
computed:{//new option type
    
}
}
</script>

<style>
*{
    background-color: whitesmoke;   
}

.logo {
    color:black;
    font-family: 'Times New Roman', Times, serif;
    font-size: larger;
}
.logoClicked {
    color:green;
    font-size: larger;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.ageDisplay, .sdis{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: large;
    display:block;
    margin:auto;
    color: black;
    font-weight: bolder;    
}
.routes a{
    display:block;
    padding:14px 16px;
    text-decoration: none;
    background-color: #333;
    color:white;
    text-align:center;
}
.routes a{
    float:left;
}
.routes a:hover{
    background-color: #111;
}
.fItems{
    margin-right: 10px;

}


</style>