<template>
  <v-container fluid class="main-bg">
    <v-row>
      <v-col>
        <v-btn @click="downloadPDF">PDF</v-btn>
        <vue3-simple-html2pdf
          ref="constructorPDF"
          :options="pdfOptions"
          :filename="exportFilename"
        >
          <Drawer :userData="activeData" />
        </vue3-simple-html2pdf>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf/src/vue3-simple-html2pdf.vue";
import { IUserData } from "@/components/constructor/types";
import { Model, Ref } from "vue-property-decorator";
import Drawer from "@/components/constructor/components/main/Drawer.vue";

@Options({
  name: "Main",
  components: {
    Drawer,
    Vue3SimpleHtml2pdf,
  },
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;
  @Ref() readonly constructorPDF!: any;

  exportFilename = "heeheee";
  pdfOptions = {
    margin: 0,
    image: {
      type: "jpeg",
      quality: 2,
    },
    enableLinks: false,
    html2canvas: {
      scale: 1,
      useCORS: true,
    },
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "landscape",
    },
  };

  downloadPDF() {
    this.constructorPDF.download();
  }
}
</script>

<style scoped lang="scss"></style>
