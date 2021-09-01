<template>
  <v-container fluid class="main-bg">
    <v-row>
      <v-col cols="12" class="btn-col">
        <div class="btn-pdf">
          <v-btn variant="outlined" @click="downloadPDF">PDF</v-btn>
        </div>
        <div class="btn-zoom">
          <v-btn variant="outlined" @click="handleZoomIn">+</v-btn>
          <v-btn variant="outlined" @click="handleZoomOut">-</v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <vue3-simple-html2pdf
          ref="constructorPDF"
          :options="pdfOptions"
          :filename="exportFilename"
        >
          <Drawer ref="constructorDrawer" :userData="activeData" />
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
  @Ref() readonly constructorDrawer!: any;

  exportFilename = "";
  pdfOptions = {
    margin: 0,
    image: {
      type: "png",
      quality: 1,
    },
    enableLinks: false,
    html2canvas: {
      scale: 2,
      useCORS: true,
    },
    jsPDF: {
      format: "a4",
      orientation: "l",
    },
  };

  beforeMount() {
    this.exportFilename = this.activeData.title;
  }

  downloadPDF() {
    this.constructorPDF.download();
  }
  handleZoomIn() {
    this.constructorDrawer.panZoom.$panZoomInstance.smoothZoom(0, 0, 1.25);
  }
  handleZoomOut() {
    this.constructorDrawer.panZoom.$panZoomInstance.smoothZoom(0, 0, 0.75);
  }
}
</script>

<style scoped lang="scss">
.btn-col {
  display: flex;
  justify-content: space-between;
}
</style>
