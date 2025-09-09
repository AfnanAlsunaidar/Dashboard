<template>
  <v-container
    fluid
    class="bg-indigo-accent-2 d-flex justify-center"
    height="100vh"
  >
    <v-layout class="layout fluid rounded-xl position-relative" height="85vh">
      <v-row no-gutters dense class="  ">
        <v-col cols="1" class="">
          <v-sheet>
            <div class="">
              <NavigationBar />
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="8" class="">
          <v-sheet class="pa-15" style="background: #f2f4fc" height="85vh">
            <div class="" style="background: #f2f4fc">
              <v-container fluid height="440" class="d-flex align-start dash">
                <div class="cont">
                  <div class="title text-primary">
                    <h2>Business Dashboard</h2>

                    <div class="icons">
                      <v-icon icon="mdi-magnify " class="one"> </v-icon>
                      <v-icon icon="mdi-calendar-blank" class="two"> </v-icon>
                    </div>
                  </div>

                  <div class="row">
                    <v-row
                      class="mt-3 pl-15 pr-15 fill-heigh"
                      no-gutters
                      style="width: 800px"
                    >
                      <v-col cols="4" class="pa-2 rcol">
                        <v-card
                          class="d-flex card-color text-caption"
                          height="65"
                          width="210"
                        >
                          <div>
                            <p class="text-white mt-3 ml-5 mr-0">CUSTOMERS</p>
                            <p
                              class="text-white mt-1 ml-6 text-caption font-weight-thin"
                            >
                              54,235
                            </p>
                          </div>

                          <v-icon
                            class="ml-10 opacity-50 mt-0"
                            icon="mdi-account-supervisor "
                            color="white"
                            size="70"
                          >
                          </v-icon>
                        </v-card>
                      </v-col>
                      <v-col cols="4" class="pa-2 rcol">
                        <v-card
                          class="d-flex card-color text-caption"
                          height="65"
                          width="210"
                        >
                          <div>
                            <p class="text-white mt-3 ml-5 mr-9">INCOME</p>
                            <p
                              class="text-white mt-1 ml-6 text-caption font-weight-thin"
                            >
                              $980,632
                            </p>
                          </div>

                          <v-icon
                            class="ml-10 opacity-50 mt-1"
                            icon="mdi-cards"
                            color="white"
                            size="60"
                          >
                          </v-icon>
                        </v-card>
                      </v-col>

                      <v-col cols="4" class="pa-2 rcol mr-10">
                        <v-card
                          class="d-flex card-color text-caption"
                          height="65"
                          width="210"
                        >
                          <div>
                            <p class="text-white mt-3 ml-5 mr-0">
                              PRODUCTS SOLD
                            </p>
                            <p
                              class="text-white mt-1 ml-6 text-caption font-weight-thin"
                            >
                              5,490
                            </p>
                          </div>

                          <v-icon
                            class="ml-5 opacity-50 mt-4"
                            icon="mdi-arrow-top-left"
                            color="white"
                            size="35"
                          >
                          </v-icon>
                          <v-icon
                            class="ml-0 opacity-50 mt-5"
                            icon="mdi-arrow-top-left"
                            color="white"
                            size="25"
                          >
                          </v-icon>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>

                  <div class="market">
                    <h5 class="text-primary">Marketplace</h5>

                    <v-row class="ml-1 mt-2" gutter>
                      <v-col class="mr-15 pa-8 ml-1" cols="6" width="100">
                        <div class="card-market">
                          <v-card height="110" class="mb-6">
                            <div class="all">
                              <h5 class="mt-4 ml-6 data text-primary">
                                Data Analytics Overview
                              </h5>
                              <p
                                class="mt-1 ml-6"
                                style="
                                  font-size: 12px;
                                  color: rgb(130, 127, 127);
                                  width: 190px;
                                  font-weight: lighter;
                                "
                              >
                                See how your account grow and how you can boost
                                it.
                              </p>
                            </div>

                            <div class="pie-chart-container">
                              <v-pie
                                hide-slice
                                :inner-cut="92"
                                :palette="['#f1f0f6', '#5d5ee1']"
                                tooltip
                                reveal
                                :items="items"
                                density="compact"
                                size="75"
                              >
                                <template v-slot:center>
                                  <div class="text-center">
                                    <div
                                      class="text-caption font-weight-bold"
                                      style="color: #5d5ee1"
                                    >
                                      START
                                    </div>
                                  </div>
                                </template>
                              </v-pie>
                            </div>
                          </v-card>

                          <v-card height="110">
                            <div class="chart">
                              <h5 class="mt-4 ml-6 data text-primary">
                                Finance Flow
                              </h5>
                              <p class="mt-5 ml-6  ">$2,530</p>
                              <p
                                class="mt-1 ml-6"
                                style="
                                  font-size: 12px;
                                  color: rgb(130, 127, 127);
                                  width: 190px;
                                  font-weight: lighter;
                                "
                              >
                                September 2021
                              </p>
                            </div>
                            <ColumnChart />
                          </v-card>
                        </div>
                      </v-col>

                      <v-col class="ml-4" cols="3">
                        <v-card
                          class="border mr-15 ml-0"
                          width="180"
                          height="242"
                        >
                          <v-card-title
                            class="text-caption font-weight-medium d-flex justify-center"
                            style="color: #5d5ee1"
                            density="compact"
                          >
                            UPGRADE TO PRO
                          </v-card-title>

                          <v-divider length="180" class="ml-3 mr-3"></v-divider>

                          <v-img
                            class="align-end text-white ml-12 mt-5"
                            height="80"
                            width="90"
                            src="@/imges/icons/d.png"
                            cover
                          >
                          </v-img>

                          <v-container
                            class="d-flex justify-center mt-1"
                            height="70"
                          >
                            <div style="">
                              <v-text class="d-flex justify-center text-primary"
                                >$29 p/m</v-text
                              >
                              <p class="paragraph">
                                100% insurance for your goods
                              </p>
                            </div>
                          </v-container>
                        </v-card>
                        <!-- <v-card class=" d-flex justify-center " height="220">

                                   <v-card-title 
                                   
                                   class="mt-3 text-caption font-weight-medium border " 
                                   style="color:#5d5ee1;"
                                   
                                   >
                                    
                                    UPGRADE TO PRO 
                                 
                                  </v-card-title>

                                  <v-container class="border">
                                    hello
                                  </v-container>
                                 
                              </v-card> -->
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-container>

              <v-container fluid class="mt-10" height="150">
                <v-table
                  class="header-comfortable body-compact mr-10"
                  style="background: #f2f4fc"
                >
                  <thead>
                    <tr>
                      <th
                        class="text-left"
                        v-for="item in headers"
                        :key="item.key"
                        :style="
                          item.title === 'SEE ALL'
                            ? 'font-weight:750' && 'font-size: 12px'
                            : 'font-weight:bold'
                        "
                        :class="
                          item.title === 'SEE ALL'
                            ? 'text-indigo-accent-3'
                            : 'text-primary'
                        "
                      >
                        {{ item.title }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in desserts"
                      :key="item.name"
                      density="compact"
                    >
                      <td>{{ item.name }}</td>
                      <td :style="{ color: 'gray' }">{{ item.speed }}</td>
                      <td :style="{ color: 'gray' }">
                        {{ date.format(item.year, "fullDate") }}
                      </td>
                      <td :style="{ color: 'gray' }">
                        {{ formatPrice(item.price) }}
                      </td>
                      <td
                        :class="{
                          'text-red': item.length === 'Canceled',
                          'text-green': item.length === 'Delivered',
                        }"
                      >
                        {{ item.length }}
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-container>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="3">
          <v-sheet class="pa-16" height="85vh">
            <v-container fluid class="d-flex summary">
              <h2 class="text-start text-primary">Summary</h2>
            </v-container>
            <v-card
              class="mt-5 mr-15 border position-relative"
              width="220"
              height="120"
            >
              <v-card-text>
                <div class="balance d-flex">
                  Your Balance

                  <v-spacer></v-spacer>
                  <v-menu>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        icon="mdi-dots-vertical"
                        color="grey-lighten-1"
                        size="15"
                        variant="text"
                        v-bind="props"
                      ></v-btn>
                    </template>

                    <v-list density="compact">
                      <v-list-item
                        density="compact"
                        v-for="(item, i) in menu"
                        :key="i"
                        :value="i"
                        class="list"
                      >
                        <v-list-item-title class="listTitle">{{
                          item.title
                        }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>

                  <!-- <v-icon
                    icon="mdi-dots-vertical"
                    color="grey-lighten-1"
                    size="15"
                     @click="show"
                  ></v-icon>

                   <v-menu
                  v-model="showMenu"
                  :offset="[-8, -12]"
                  :target="menuTarget"
                  location="bottom end"
                  scroll-strategy="close"
                  class="menu"
                >
                  <v-list
                    :items="menuItems"
                    class="py-0"
                    density="compact"
                    item-value="code"
                    item-props
                    slim
                  >
                    <template v-slot:prepend>
                      <v-icon class="mr-n2" size="small"></v-icon>
                    </template>
                  </v-list>
                </v-menu> -->
                </div>

                <p class="text-h6 font-weight-black mt-3 mb-0 text-black">
                  $10 632.00
                </p>

                <v-container fluid class="d-flex mt-0">
                  <v-icon
                    class="mt-1 mr-1 triangle"
                    color="success"
                    icon="mdi-triangle"
                    size="10"
                  ></v-icon>
                  <p class="font-weight-thin text-caption">$3.250.07</p>
                  <v-icon
                    class="ml-10 mt-1 mr-1"
                    color="red"
                    icon="mdi-triangle"
                    size="10"
                  ></v-icon>
                  <p class="font-weight-thin text-caption">$1.62.90</p>
                </v-container>
              </v-card-text>
            </v-card>

            <div class="plus">
              <v-icon color="white" icon="mdi-plus" size="10" class="mt-1">
              </v-icon>
            </div>

            <v-container class="mt-5 ma-auto" height="170" width="250">
              <div class="d-flex mr-2">
                <h5 class="font-weight-bold" style="color: darkblue">
                  Activity
                </h5>
                <v-spacer></v-spacer>
                <a
                  href="#"
                  class="mt-1"
                  style="
                    font-size: 9px;
                    font-weight: 750;
                    text-decoration: none;
                    color: #5d5ee1;
                  "
                  >SEE ALL</a
                >
              </div>
              <v-divider length="220" class="ml-1 mr-0 mt-2"></v-divider>

              <v-container width="260" class="mt-2">
                <div class="d-flex">
                  <v-icon
                    icon="mdi-wallet"
                    color="white"
                    class="wallet"
                    size="18"
                    style="
                      width: 35px;
                      height: 35px;
                      border-radius: 10px;
                      background-color: #5d5ee1;
                    "
                  >
                  </v-icon>
                  <div>
                    <p class="ml-2 font-weight-bold" style="font-size: 10px">
                      Withdraw Earning
                    </p>
                    <p
                      class="ml-2"
                      style="font-size: 10px; color: rgb(130, 127, 127)"
                    >
                      12:40 am
                    </p>
                  </div>

                  <span style="font-size: 10px; margin-left: 60px" class="mt-2"
                    >$4,120</span
                  >
                </div>

                <div class="d-flex mt-5">
                  <v-icon
                    icon="mdi-checkbook"
                    color="white"
                    class="wallet"
                    size="18"
                    style="
                      width: 35px;
                      height: 35px;
                      border-radius: 10px;
                      background-color: #5d5ee1;
                    "
                  >
                  </v-icon>
                  <div>
                    <p class="ml-2 font-weight-bold" style="font-size: 10px">
                      Paying Website tax
                    </p>
                    <p
                      class="ml-2"
                      style="font-size: 10px; color: rgb(130, 127, 127)"
                    >
                      10:20 am
                    </p>
                  </div>

                  <span style="font-size: 10px; margin-left: 55px" class="mt-2"
                    >- $230</span
                  >
                </div>
              </v-container>
              <v-container class="top">
                <p
                  class="mr-10"
                  style="font-size: 13px; font-weight: bold; color: darkblue"
                >
                  Top Categories
                </p>
                <p
                  style="font-size: 10px; color: rgb(130, 127, 127)"
                  class="mt-2"
                >
                  Explore your top categories and keep shopping with cashback
                </p>
              </v-container>
              <v-container class="d-flex top2" width="300">
                <div class="box1">
                  <v-icon
                    icon="mdi-shoe-print"
                    class="mt-3 ml-4"
                    color="amber-darken-1"
                  ></v-icon>
                  <div>
                    <p
                      class="text-center mt-3 text-primary"
                      style="font-size: 12px; font-weight: bold"
                    >
                      Footerwear
                    </p>
                    <p
                      class="ml-5 mt-1"
                      style="font-size: 10px; color: rgb(130, 127, 127)"
                    >
                      18 941 units
                    </p>
                  </div>
                </div>
                <div class="box2">
                  <v-icon
                    icon="mdi-mixed-martial-arts"
                    class="mt-3 ml-4"
                    color="teal-accent-4"
                  ></v-icon>

                  <div>
                    <p
                      class="mt-3 text-center text-primary"
                      style="font-size: 12px; font-weight: bold"
                    >
                      Accessories
                    </p>
                    <p
                      class="ml-5 mt-1"
                      style="font-size: 10px; color: rgb(130, 127, 127)"
                    >
                      26 061 units
                    </p>
                  </div>
                </div>
              </v-container>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-layout>

    <v-card class="overlay-card">
      <v-container class="d-flex flex-column align-center justify-center pa-2">
        <div class="avatar-container mb-1 mt-10">
          <v-avatar size="40">
            <v-img alt="John" src="@/imges/icons/b.jpg"></v-img>
          </v-avatar>
        </div>
        <v-text
          class="text-caption mb-0 mt-0 text-primary"
          style="font-weight: 500"
        >
          Sally Hawkins
        </v-text>
        <v-card-actions class="pa-2 mb-4 mt-0">
          <v-btn
            variant="tonal"
            style="font-weight: 600"
            color="pink-accent-4"
            class="rounded-xl pt-1 override-button mb-5"
            size="x-small"
          >
            Upgrade
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<!-- <template>

  <v-container fluid class="bg-indigo-accent-2 d-flex justify-center align-center "
    style="height: 100vh;width: 100%;">

    <v-layout class="   ml-10 mr-10  fluid border main " height="700" >

      <div class="  border " >

        <NavigationBar />

      </div>




      <div class="" style="background: #f2f4fc;" >
        <v-container fluid height="360" class=" d-flex align-start    ">
                 <div class="cont">
                  <div class="title"> 
                  <h2 >
                      Business Dashboard
                 </h2>

                 <div class="icons">
                  <v-icon icon="mdi-magnify "
                   class="one"
                  >
                 

                  </v-icon>
                   <v-icon icon="mdi-calendar-blank"
                   class="two"
                   ></v-icon>
                 </div>
                 </div>
                  <div class="cards">
                      

                 </div>
                 </div>

                
             
          
             
      
        </v-container>

          <v-container fluid class="" height="150">
             <v-table class="header-comfortable body-compact ml-2" style="background: #f2f4fc;">
          <thead>
            <tr>
              <th class="text-left " v-for="item in headers" :key="item.key" style="font-weight: bolder;"
              :class="{
          'text-purple': item.title === 'SEE ALL',
          
        }"
              >
                {{ item.title }}
              </th>
            </tr>
          </thead>
          <tbody         >
            <tr v-for="item in desserts" :key="item.name" density="compact"  >
              <td >{{ item.name }}</td>
              <td :style="{ color: 'gray' }">{{ item.speed }}</td> 
               <td :style="{ color: 'gray' }">{{ date.format(item.year, 'fullDate') }}</td>
               <td :style="{ color: 'gray' }">{{ formatPrice(item.price) }}</td>
              <td :class="{
          'text-red': item.length === 'Canceled',
          'text-green': item.length === 'Delivered'
        }">{{ item.length }}</td>
              
            
            </tr>
          </tbody>
        </v-table>
          </v-container>

       
      </div>

      <div class="" style=" background: #f8f8fc;">
        <v-container class=" d-flex align-start mt-5 ml-5 ">
           <h2  
        class=" "
         >
         Summary</h2>
        </v-container>
      </div>














    </v-layout>

  </v-container>


</template> -->

<script setup>
// import Chart from "chart.js/auto";

import NavigationBar from "./NavigationBar.vue";
import ColumnChart from "./ColumnChart.vue";
import { useDate } from "vuetify";
// import { onMounted } from "vue";
// import ApexCharts from "apexcharts";
// import { onMounted } from "vue";

const menu = [{ title: "Copy" }, { title: "Delete" }, { title: "Edit" }];

// onMounted(() => {
//   var options = {
//     chart: {
//       type: "bar",
//     },
//     series: [
//       {
//         name: "sales",
//         data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
//       },
//     ],
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//     },
//   };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);

//   chart.render();
// });
/*

   menu




const showMenu = ref(false)
  const menuTarget = ref(null)

  const menuItems = [
    { title: 'Create', prependIcon: 'mdi-plus-circle-outline', code: 'add' },
    { type: 'divider' },
    { title: 'Modify', prependIcon: 'mdi-pencil-outline', code: 'edit' },
    { type: 'divider' },
    { title: 'Remove', prependIcon: 'mdi-trash-can-outline', code: 'delete' },
  ]

  async function show (evt) {
    if (showMenu.value) {
      showMenu.value = false
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    menuTarget.value = evt.target.closest('.v-icon-btn')
    showMenu.value = true
  }*/

// onMounted(() => {
//   const ctx = document.getElementById("myChart");
//   console.log(ctx);

//   new Chart(ctx, {
//     type: "bar",
//     attached: true,

//     aspectRatio: 10,
//     data: {
//       labels: [
//         "Red",
//         "Blue",
//         "Yellow",
//         "Green",
//         "Purple",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//         "Orange",
//       ],
//       datasets: [
//         {
//           data: [
//             65, 59, 80, 81, 56, 40, 100, 90, 55, 60, 70, 80, 88, 77, 99, 66, 44,
//             89, 79, 59,
//           ],
//           borderWidth: 0,
//           barPercentage: 1,
//           categoryPercentage: 1,
//           clip: 100,
//           grouped: true,
//           barThickness: 3,
//           backgroundColor: ["rgb(232, 231, 248)", "rgb(92, 106, 237)"],

//           minBarLength: 5,
//         },
//       ],
//     },
//     options: {
//       barPercentage: 0.5,
//       categoryPercentage: 0.6,
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//         x: {},
//       },
//     },
//   });
// });
const date = useDate();

const foot = date.format("2010-04-13", "fullDate");
console.log(foot);

const items = [
  { key: 1, title: "Yes", value: 50 },
  { key: 2, title: "No", value: 50 },
];

const headers = [
  { title: "Recent Orders", align: "start", key: "name" },
  { title: " ", align: "end", key: "speed" },
  { title: " ", align: "end", key: "length" },
  { title: " ", align: "end", key: "price" },
  { title: "SEE ALL", align: "end", key: "year" },
];
const desserts = [
  {
    name: "#1235465",
    speed: "DJI Mavic Pro 2",
    length: "Delivered",
    price: 300000,
    year: "12-3-2018",
  },
  {
    name: "#1235469",
    speed: "iPad Pro 2017 Model",
    length: "Canceled",
    price: 500000,
    year: "2018",
  },
];

function formatPrice(value) {
  return `$${value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,")}`;
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}

* {
  font-family: "Pippins", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  border: none;
}

.header-comfortable {
  --v-table-header-height: 56px !important;
}

.body-compact {
  --v-table-row-height: 36px !important;
}
/* .v-btn__content{
  --v-btn__content-color:inherit !important;
  --v-btn__content-background-color:inherit !important;
  --v-btn__content-color: pink-accent-4;
  --v-btn__content-background-color: pink-accent-4;
} */
.title {
  width: 600px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.cards {
  border: 1px solid black;
  width: 600px;
  padding: 30px;
  margin-top: 20px;
}

.dash {
  display: flex;
  justify-content: space-between;
  margin-top: -58px;
}

.cont {
  display: block;
}

.icons {
  margin-right: -100px;
}

.icons .one,
.two {
  margin-right: 10px;

  border: 1px solid rgb(229, 226, 226);
  padding: 20px;
  border-radius: 10px;
}

.overlay-card {
  z-index: 1000;
  position: absolute;
  bottom: 70px;
  left: 50px;
  width: 110px;
  height: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-container {
  display: flex;
  justify-content: center;
}

/* .pink-btn {
  background-color: #E91E63 !important;
  color: #E91E63 !important;
}

.pink-btn:hover {
  background-color: #C2185B !important;
} */

/* Add this to override the button specifically */
.override-button {
  color: inherit !important;
}

/* Or be more specific with Vuetify's button classes */
/* .v-btn.override-button {
  color: inherit !important;
} */

/* Alternative: Target the pink color specifically */
/* .v-btn.v-btn--variant-tonal.v-btn--color-pink-accent-4 {
  color: inherit !important;
} */

.layout {
  margin-top: 50px;
  margin-bottom: 60px;
  margin-left: 60px;
  margin-right: 60px;
}

/* Additional styling for the cards */
.v-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Ensure cards take full height of their container */
.fill-height {
  height: 100%;
}

.row {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  margin: auto;
  margin-left: -10px;
}

.rcol {
  margin-left: -50px;
  margin-right: 55px;
}

.card-color {
  background-color: #5d5ee1;
  color: #fff;
}

.market {
  padding-bottom: 12px;
  margin-top: 25px;
  margin-left: 10px;
  font-weight: bolder;

  height: 300px;
}

.card-market {
  margin-top: -20px;

  width: 460px;
  margin-left: -31px;
}

.paragraph {
  font-size: small;
  font-weight: normal;
  color: rgb(172, 170, 170);
  margin-left: 16px;
  text-align: center;

  width: 120px;
}

/* NEW STYLES FOR SMALLER PIE CHART */
.pie-chart-container {
  width: 100px;
  height: 100px;
  margin-left: 360px;
  margin-top: -80px;
}

/* Adjust the center text size for the smaller chart */
.pie-chart-container .text-caption {
  font-size: 0.7rem;
}

.plus {
  border: 1px solid red;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50%;
  background: red;
  color: white;

  position: fixed;
  bottom: 510px;
  left: 1365px;
}

.balance {
  font-size: 11px;
  color: black;
}

.triangle {
  margin-left: -12px;
}

.summary {
  margin-top: -50px;
  margin-left: -20px;
}

.menu {
  bottom: 1px;
}

.list {
  margin-top: -15px;
}
.listTitle {
  font-size: 10px;
  color: rgb(113, 113, 113);
}

.wallet {
  margin-left: -15px;
}

.top {
  margin-left: -16px;
}
.top2 {
  margin-left: -16px;
  margin-top: -10px;
}

.box1 {
  width: 90px;
  height: 90px;
  background: rgba(255, 166, 0, 0.237);
  border-radius: 5px;
}

.box2 {
  min-width: 90px;
  height: 90px;
  background: rgba(3, 135, 3, 0.169);
  border-radius: 5px;
  margin-left: 25px;
}

.data {
  width: 150px;
}

.all {
  width: 250px;
}

.chart {
  width: 100px;
}
</style>
