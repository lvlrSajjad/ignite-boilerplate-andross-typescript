// @cliDescription  Generates a component, styles, and an optional test.

module.exports = async function (context) {
  // grab some features
  const {parameters, strings, print, ignite} = context
  const {pascalCase, isBlank} = strings
  const config = ignite.loadIgniteConfig()
  const {tests} = config

  const options = parameters.options || {}

  const hasFolder = !isBlank(options.folder)
  const rtlSupport = options.rtlsupport !== undefined
  // validation
  if (isBlank(parameters.first) && !hasFolder) {
    print.info(`${context.runtime.brand} generate component <name>\n`)
    print.info('A name is required.')
    return
  }

  let componentPath = hasFolder ? `${options.folder}/${parameters.first || 'index'}` : parameters.first

  let pathComponents = componentPath.split('/').map(pascalCase)
  let name = pathComponents.pop()
  if (name === 'Index') { name = 'index' }
  const relativePath = pathComponents.length ? pathComponents.join('/') + '/' : ''

  const props = {name}
  let jobs = []
  if (rtlSupport) {
    jobs = [{
      template: 'directionComponent/component.ltr.ejs',
      target: `js/App/Components/${relativePath}${name}/${name}.ltr.tsx`
    }, {
      template: 'directionComponent/component.rtl.ejs',
      target: `js/App/Components/${relativePath}${name}/${name}.rtl.tsx`
    }, {
      template: 'directionComponent/style/style.ltr.ejs',
      target: `js/App/Components/${relativePath}${name}/Styles/${name}Style.ltr.tsx`
    }, {
      template: 'directionComponent/style/style.rtl.ejs',
      target: `js/App/Components/${relativePath}${name}/Styles/${name}Style.rtl.tsx`
    }, {
      template: 'directionComponent/index.ejs',
      target: `js/App/Components/${relativePath}${name}/index.tsx`
    }]

  } else {
    jobs = [{
      template: 'component/component.ejs',
      target: `js/App/Components/${relativePath}${name}/${name}.tsx`
    }, {
      template: 'component/style/style.ejs',
      target: `js/App/Components/${relativePath}${name}/Styles/${name}Style.tsx`
    }, {
      template: 'component/index.ejs',
      target: `js/App/Components/${relativePath}${name}/index.tsx`
    }]
  }
  await ignite.copyBatch(context, jobs, props)
}
