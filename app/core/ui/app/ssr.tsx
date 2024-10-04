import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import { nameToModulePage } from '../lib/utils'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const { module, pagePath } = nameToModulePage(name)

      const pages = import.meta.glob('/app/*/ui/pages/**/*.tsx', { eager: true })
      return pages[`/app/${module}/ui/pages/${pagePath}.tsx`]
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}
