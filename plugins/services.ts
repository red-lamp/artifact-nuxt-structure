import { FooService}  from '~/services/foo/foo.service'

export default (ctx: any, inject: any) => {
  const services = {
    user: new FooService(ctx.$axios, ctx.store),
  }

  inject('services', services);
}
