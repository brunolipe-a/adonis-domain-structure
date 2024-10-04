export function nameToModulePage(name: string) {
  const nameParts = name.split('/')

  return { module: nameParts[0], pagePath: nameParts.slice(1).join('/') }
}
