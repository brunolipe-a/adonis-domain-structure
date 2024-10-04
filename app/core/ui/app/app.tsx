/// <reference path="../../../../adonisrc.ts" />
/// <reference path="../../../../config/inertia.ts" />

import '../css/app.css'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { nameToModulePage } from '../lib/utils'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    const { module, pagePath } = nameToModulePage(name)

    console.log(module, pagePath)

    return resolvePageComponent(
      `/app/${module}/ui/pages/${pagePath}.tsx`,
      import.meta.glob('/app/*/ui/pages/**/*.tsx')
    )
  },

  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
