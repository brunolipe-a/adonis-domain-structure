import path from 'node:path'
import fs from 'node:fs'

export function migrationPaths() {
  const baseDir = path.resolve('app')

  const migrationPathsArray = []

  for (const module of fs.readdirSync(baseDir)) {
    const migrationPath = path.join('app', module, 'database/migrations')

    if (!fs.existsSync(migrationPath)) continue

    migrationPathsArray.push(migrationPath)
  }

  return migrationPathsArray
}
