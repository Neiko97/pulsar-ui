import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import OAMEntryPage from '@/components/OAMEntryPage'
import SearchPage from '@/components/SearchPage'
import Map from '@/components/Map'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Password from '@/components/Password'
import Witnesses from '@/components/Witnesses'
import Vote from '@/components/elections/Vote'
//import Results from '@/components/elections/Results'
import Page404 from '@/components/Page404'

// Explorer
import HomeExplorer from '@/components/explorer/Home'
import AccountExplorer from '@/components/explorer/Account'
import PostExplorer from '@/components/explorer/Post'
import BlockExplorer from '@/components/explorer/Block'
import TransactionExplorer from '@/components/explorer/Transaction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/oam-portal",
      name: "OAMEntryPage",
      component: OAMEntryPage
    },
    {
      path: "/search.html",
      name: "SearchPage",
      component: SearchPage
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq
    },
    {
      path: "/map",
      name: "Map",
      component: Map
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/password",
      name: "Password",
      component: Password
    },
    {
      path: "/witnesses",
      name: "Witnesses",
      component: Witnesses
    },
    {
      path: "/elections/vote",
      name: "Vote",
      component: Vote
    },
    {
      path: "/elections/results",
      name: "Results",
      component: () => import('@/components/elections/Results')
    },
    {
      path: "/explorer",
      name: "Explorer",
      component: HomeExplorer
    },
    {
      path: '/explorer/@:account',
      name: 'Account',
      component: AccountExplorer
    },{
      path: '/explorer/@:account/:permlink',
      name: 'Post',
      component: PostExplorer
    },{
      path: '/explorer/b/:id',
      name: 'Block',
      component: BlockExplorer
    },{
      path: '/explorer/b/:id/:tx',
      name: 'Transaction',
      component: TransactionExplorer
    },{
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})
