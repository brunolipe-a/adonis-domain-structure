import path from 'node:path'
import fs from 'node:fs'

export function importRoutes() {
  const baseDir = path.resolve('app')

  for (const module of fs.readdirSync(baseDir)) {
    const routesPath = path.join(baseDir, module, 'routes.ts')

    if (!fs.existsSync(routesPath)) continue

    import(`#app/${module}/routes`)
  }
}
