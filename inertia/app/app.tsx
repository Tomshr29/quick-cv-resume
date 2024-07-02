import '../css/app.css'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { ReactNode } from 'react'
import { Layout } from '../components/layout/app'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

void createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  async resolve(name) {
    const page = await resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx')
    )

    // @ts-expect-error - `page` is guaranteed to be defined
    page.default.layout = page.default.layout || ((page: ReactNode) => <Layout children={page} />)

    return page
  },

  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})

/// <reference path="../../config/inertia.ts" />
