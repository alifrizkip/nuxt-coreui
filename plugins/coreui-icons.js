import Vue from 'vue';
import { iconsSet as icons } from '~/plugins/_icons';

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true;
  Vue.mixin({
    alifrizkip: true,
    icons,
  });
}
