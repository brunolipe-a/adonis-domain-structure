import router from '@adonisjs/core/services/router'

router.on('login').renderInertia('auth/login')
