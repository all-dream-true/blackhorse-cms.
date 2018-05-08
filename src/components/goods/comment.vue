<template>
  <div class="page">
    <comment :id="$route.params.id"></comment>
  </div>
</template>

<script>
import comment from "../common/comment";

export default {
  components: {
    comment
  } 
}
</script>

<style>

</style>


