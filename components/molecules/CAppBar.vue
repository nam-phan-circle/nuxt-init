<template>
  <v-app-bar dark color="accent" fixed app flat>
    <v-container class="d-flex align-center">
      <v-toolbar-title class="text-body-1">
        株式会社武蔵野
      </v-toolbar-title>
      <v-spacer />
      <template v-if="user">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          text
          :to="item.to"
          @click="item.action ? item.action() : false"
        >
          <img class="mr-2" :src="item.icon">
          <span class="font-weight-regular"> {{ item.text }} </span>
        </v-btn>
      </template>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      items: [
        {
          icon: '/images/icon_account_edit.svg',
          text: 'アカウント編集',
          to: ''
        },
        {
          icon: '/images/icon_company_edit.svg',
          text: '企業情報の編集',
          to: ''
        },
        {
          icon: '/images/icon_logout.svg',
          text: 'ログアウト',
          action: this.logout
        }
      ]
    }
  },
  computed: {
    user () {
      const user = this.$store.state.auth.user
      return Object.keys(user).length == 0 ? null : user
    }
  },

  methods: {
    ...mapActions('auth', {
      logout (d) {
        d('logout').then(() => {
          this.$router.push('/sign-in')
        })
      }
    })
  }
}
</script>

<style></style>
