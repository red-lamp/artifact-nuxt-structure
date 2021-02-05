export class BaseService {
  protected $axios: any;
  protected store: any;

  constructor ($axios: any, store: any) {
    this.$axios = $axios;
    this.store = store;
  }
}