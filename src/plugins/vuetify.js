
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// import 'https://fonts.googleapis.com/css2?family=Your+Font+Family&display=swap'

import { VPie } from 'vuetify/labs/VPie'
import colors from 'vuetify/util/colors'



// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
   theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.indigo.darken4, // 
          // 
          
        }
      },
    },
  },
  components: {
    VPie,
  },
}
  
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)






// // Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// // Vuetify
// import { createVuetify } from 'vuetify'

// export default createVuetify(
//   // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// )
