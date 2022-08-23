import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '@/views/front/FrontLayout.vue'
import FrontHomeView from '@/views/front/HomeView.vue'
import NotFoundView from '@/views/NotFound.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: '喜樂芽牙科',
            login:false,
            admin:false
          }
        },
        {
          path: 'information',
          name: 'information',
          component: () => import('@/views/front/InformationView.vue'),
          meta: {
            title: '喜樂芽牙科 | 診所資訊',
            login:false,
            admin:false
          }
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('@/views/front/TeamView.vue'),
          meta: {
            title: '喜樂芽牙科 | 醫師介紹',
            login:false,
            admin:false
          }
        },
        {
          path: 'article',
          name: 'article',
          component: () => import('@/views/front/ArticleView.vue'),
          meta: {
            title: '喜樂芽牙科 | 保健文章',
            login:false,
            admin:false
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/front/ContactView.vue'),
          meta: {
            title: '喜樂芽牙科 | 聯絡我們',
            login:false,
            admin:false
          }
        },
      ]
    },
    {
      path: '/admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-member-setting',
          component: () => import('@/views/admin/AdminMemberSettingView.vue'),
          meta: {
            title: '喜樂芽牙科 | 會員管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'admin-member-search/:id',
          name: 'admin-member-search/:id',
          component: () => import('@/views/admin/AdminMemberSearchView.vue'),
          meta: {
            title: '喜樂芽牙科 | 會員查看',
            login:true,
            admin:true
          }
        },
        {
          path: 'admin-article-setting',
          name: 'admin-article-setting',
          component: () => import('@/views/admin/AdminArticleSettingView.vue'),
          meta: {
            title: '喜樂芽牙科 | 文章管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'admin-article-editor-setting',
          name: 'admin-article-editor-setting',
          component: () => import('@/views/admin/AdminArticleEditorSettingView.vue'),
          meta: {
            title: '喜樂芽牙科 | 文章編輯',
            login:true,
            admin:true
          }
        },
        {
          path: 'admin-reserve-setting',
          name: 'admin-reserve-setting',
          component: () => import('@/views/admin/AdminReserveSettingView.vue'),
          meta: {
            title: '喜樂芽牙科 | 預約管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'admin-doctor-setting',
          name: 'admin-doctor-setting',
          component: () => import('@/views/admin/AdminDoctorSettingView.vue'),
          meta: {
            title: '喜樂芽牙科 | 醫生管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'admin-doctor-editor-setting',
          name: 'admin-doctor-editor-setting',
          component: () => import('@/views/admin/AdminDoctorEditorSetting.vue'),
          meta: {
            title: '喜樂芽牙科 | 醫生編輯',
            login:true,
            admin:true
          }
        },
        {
          path: 'admin-home-setting',
          name: 'admin-home-setting',
          component: () => import('@/views/admin/AdminHomeSettingView.vue'),
          meta: {
            title: '喜樂芽牙科 | 首頁管理',
            login:true,
            admin:true
          }
        },

      ]
    },
    {
      path: '/member',
      component: () => import('@/views/member/MemberLayout.vue'),
      children:[
        {
          path: '',
          name: 'member-member-setting',
          component: () => import('@/views/member/MemberMemberSettingView.vue'),
          meta: {
            title: '喜樂芽牙科 | 會員資料',
            login:true,
            admin:false
          }
        },
        {
          path: 'member-resever',
          name: 'member-resever',
          component: () => import('@/views/member/MemberReseverView.vue'),
          meta: {
            title: '喜樂芽牙科 | 查看預約',
            login:true,
            admin:false
          }
        },
        {
          path: 'member-check-resever',
          name: 'member-check-resever',
          component: () => import('@/views/member/MemberCheckReseverView.vue'),
          meta: {
            title: '喜樂芽牙科 | 查看預約',
            login:true,
            admin:false
          }
        },
      ]

    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '喜樂芽牙科 | 404',
        login:false,
        admin:false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin){
    next('/')
  } else {
    next()
  }
})


export default router
