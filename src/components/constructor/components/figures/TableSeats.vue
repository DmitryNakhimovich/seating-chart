<template>
  <div class="sog-mod__seats">
    <div
      v-for="user in tableData.users"
      :key="user.id"
      :data-sog-mod-seat-id="user.userIndex"
      data-sog-mod-seat-status="1"
      data-sog-mod-guest=""
      title=""
    >
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ISeatingData } from "@/components/constructor/types";

@Options({
  name: "TableSeats",
})
export default class extends Vue {
  @Prop() readonly tableData!: ISeatingData;
}
</script>
