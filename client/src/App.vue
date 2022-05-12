<script>
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
        "/assets/45-453988_mountain-lion-wallpapers-4k.jpg"
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