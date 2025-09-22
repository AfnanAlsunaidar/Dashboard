<template>
    <!-- <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
      <v-toolbar-title>Responsive Vuetify Layout</v-toolbar-title>
    </v-app-bar> -->
  <v-navigation-drawer
    
    
    variant="outlined"
    :width="lgAndUp?'160':''"
    
    :style="lgAndUp?'background: #f2f4fc;border-radius: 24px 0 0 24px;' : 'background: #f2f4fc;border-radius: none;background: rgb(255, 255, 255);height:110vh;width:40vw; margin-bottom:680px'"
    class="text-primary  "
    :location="$vuetify.display.mdAndDown ? 'bottom' : undefined"
    
   
  >
    <v-container fluid class="d-flex align-center" height="100">
      <div class="logo">)<span class="mt-1">2</span>(</div>
      <p class="brand">O2O BRAND PROTECTOR</p>
    </v-container>

    <v-container fluid class="d-flex justify-center align-center content">
      <v-list class="text-caption" density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          density="compact"
        >
          <template v-slot:prepend>
            <v-icon
              :icon="item.icon"
              :color="item.icon === 'mdi-chart-pie' ? 'primary' : 'grey'"
            ></v-icon>
          </template>

          <v-list-item-title
            class="nav-item text-caption"
            :class="item.text === 'SUMMARY' ? 'text-primary' : 'text-grey'"
          >
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-container>
      <v-card :class="lgAndUp?'overlay-card':'mt-16'"
      
      >
      <v-container class="d-flex flex-column align-center justify-center pa-2">
        <div class="avatar-container mb-1 mt-10">
          <v-avatar size="40">
            <v-img alt="John" src="@/imges/icons/b.jpg"></v-img>
          </v-avatar>
        </div>
        <p
          class="text-caption mb-0 mt-0 text-primary"
          style="font-weight: 500"
        >
          Sally Hawkins
      </p>
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
  </v-navigation-drawer>

</template>

<script setup>
//import { ref } from "vue";

//const drawer = ref(false);
import { useDisplay } from "vuetify";

// Destructure only the keys you want to use
const { lgAndUp } = useDisplay();

const items = [
  { text: "SUMMARY", icon: "mdi-chart-pie" },
  { text: "TRANSACTION", icon: "mdi-swap-horizontal" },
  { text: "STATISTIC", icon: "mdi-chart-line" },
  { text: "PROJECT", icon: "mdi-cart" }, // Fixed icon
  { text: "CATEGORY", icon: "mdi-border-all" },
];


</script>

<style scoped>
/* Import Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.content {
  margin-top: 65px;
}

.nav-item {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

/* Reduce spacing between icon and text */
::v-deep(.v-list-item__prepend .v-list-item__spacer) {
  width: 10px !important;
}

/* Optional: Further reduce overall list item padding */
::v-deep(.v-list-item) {
  padding-left: 6px !important;
  padding-right: 6px !important;
}

.logo {
  width: 40px;
  height: 40px;
  background: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40%;
  font-weight: 1000;
  font-size: large;
}

.logo span {
  font-weight: 700;
  font-size: large;
}

.brand {
  width: 40px;
  margin-left: 10px;
  font-size: 8px;
  font-weight: 1000;
  margin-top: 3px;
}

.overlay-card {
  z-index: 1000;
  position: absolute;
  bottom: 25px;
  left: -25px;
  width: 110px;
  height: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay-card2{
  z-index: 1000;
  position: absolute;
  bottom: 25px;
  left: 0;
  right:10px;
  width: 110px;
  height: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<!-- <template>
  <v-app>
  App Bar 
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
      <v-toolbar-title>Responsive Vuetify Layout</v-toolbar-title>
    </v-app-bar>

    Navigation Drawer 
    <v-navigation-drawer
      v-model="drawer"
      app
      :temporary="$vuetify.display.smAndDown"
      :permanent="$vuetify.display.mdAndUp"
    >
      <v-list>
        <v-list-item v-for="item in menu" :key="item.title" link>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    Main Content 
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 8" :key="n">
            <v-card class="pa-4" outlined>
              <v-card-title>Card {{ n }}</v-card-title>
              <v-card-text>
                This card resizes automatically on different screens.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

const menu = [
  { title: "Home" },
  { title: "About" },
  { title: "Services" },
  { title: "Contact" },
];
</script> -->
