<template>
  <v-navigation-drawer
    variant="outlined"
    width="160"
    style="background: #f2f4fc"
    class="text-primary"
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
              :color="
                item.icon === 'mdi-chart-pie' ? 'primary' : 'grey'
              "
            ></v-icon>
          </template>

          <v-list-item-title class="nav-item text-caption"
          :class="item.text==='SUMMARY' ? 'text-primary' : 'text-grey'"
          >
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup>
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
</style>
