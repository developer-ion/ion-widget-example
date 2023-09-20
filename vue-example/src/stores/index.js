import { defineStore } from "pinia";

import call from '@/helper/api';

export const usePhoneStore = defineStore('phones', {
    state: () => ({
        token:null,
        widget:{
            css:null,
            js:null
        }
    }),

    getters:{
      getToken: (state)=>state.token,
      getWidget: (state)=>state.widget,
    },
  
    actions: {
      async register(userkey) {
        try {
          let result = await call({url:'api/widget/',data:{userkey},method:'post'});
          
          if(result?.status){
            this.token = result?.token || null;
            this.widget = result?.widget || {};
          }

        } catch (error) {
          return error
        }
      },
    },
})