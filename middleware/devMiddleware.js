import devMiddleware from 'webpack-dev-middleware'

export default (compiler, opts) => {
  const expressMiddleware = devMiddleware(compiler, opts)
  return async (ctx, next) => { // eslint-disable-line
    await expressMiddleware(ctx.req, {
      end: (content) => {
        ctx.body = content
      },
      setHeader: ctx.set.bind(ctx)
    }, next)
  }
}
