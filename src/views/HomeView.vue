<template>
  <div>
    <div>
      <div>
        <AppHeader />
      </div>
      <div class="container-fluid">
        <div class="main--layout">
          <div class="">
            <LeftSide />
          </div>
          <div class="">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AppHeader from "@/components/appHeader.vue";
import LeftSide from "@/components/leftSide.vue";
import RightSide from "@/components/rightSide.vue";
export default {
  components: { AppHeader, LeftSide, RightSide },
};
</script>