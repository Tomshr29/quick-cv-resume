import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import { Layout } from '../components/layout/app'
import { ReactNode } from 'react'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      const page = pages[`../pages/${name}.tsx`]

      // @ts-expect-error - `page` is guaranteed to be defined
      page.default.layout = page.default.layout || ((page: ReactNode) => <Layout children={page} />)

      return page
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}
