<template>
  <PrincipalPage>
    <router-view />
  </PrincipalPage>
</template>

<script>
import PrincipalPage from './components/PrincipalPage.vue'

export default {
  name: 'App',
  components: {
    PrincipalPage
  }
}
</script>

