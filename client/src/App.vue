<script>
import lion from '../public/assets/lion.jpg?url'
export default {
  setup() {
    return {};
  },

  data() {
    return {
      ready: false,
      src: null,
    };
  },

  created() {
    this.getPic();
  },

  methods: {
    async getPic() {
      const req = await fetch(
        lion
      );
      const res = await req.blob();
      this.ready = true;
      this.src = URL.createObjectURL(res);
    },
  },
};
</script>
<template>
  <div>
    <h2>A mountain lion</h2>
    <img v-if="ready" v-bind:src="src" />
  </div>
</template>