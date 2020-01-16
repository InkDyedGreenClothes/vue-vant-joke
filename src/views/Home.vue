<template lang="pug">
  .login
    h1.login__title.ml15 注册/登陆
    .login__form.mt15.ml15
      van-field.login__form__input(placeholder="输入手机号" v-model="phone")
      .login__form__protocol.mt15
        .login__form__protocol__tips.dib.text-weak 注册或登录即表示同意
        .login__form__protocol__name.dib.color-orange 《用户协议》
      //- app-button.mt15(size="large"
      //-   theme="orange"
      //-   :disabled="phone.length !== 11"
      //-   @click="handleSubmit"
      //- ) 下一步
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      phone: ""
    };
  },
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handleSubmit() {
      alert(33);
    }
  }
};
</script>
