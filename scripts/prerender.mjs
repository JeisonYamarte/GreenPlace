import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

async function prerender() {
  // Carga el bundle SSR generado por `vite build --ssr`
  const { render } = await import(resolve(root, 'dist/server/entry-server.js'))

  // Lee el HTML del bundle cliente
  const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

  // Renderiza la app a string
  const appHtml = await render()

  // Inyecta el HTML pre-renderizado en el div raíz
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  writeFileSync(resolve(root, 'dist/index.html'), html)
  console.log('✓ Pre-render completado — dist/index.html actualizado')
}

prerender().catch((e) => {
  console.error('Error en pre-render:', e)
  process.exit(1)
})
