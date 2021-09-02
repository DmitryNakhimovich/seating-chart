<template>
  <v-container fluid class="main-bg">
    <v-row>
      <v-col cols="12" class="btn-col">
        <div class="btn-pdf">
          <v-btn variant="outlined" @click="downloadPDF">
            <span class="icon-sog-mod__download">
              <svg
                width="25"
                height="21"
                viewBox="0 0 25 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.341 8.84958C22.975 8.84958 22.6821 9.14245 22.6821 9.50853V15.5026C22.6821 17.1329 21.3544 18.4557 19.729 18.4557H5.27101C3.6407 18.4557 2.31791 17.128 2.31791 15.5026V9.41091C2.31791 9.04482 2.02504 8.75195 1.65896 8.75195C1.29287 8.75195 1 9.04482 1 9.41091V15.5026C1 17.8602 2.91829 19.7736 5.27101 19.7736H19.729C22.0866 19.7736 24 17.8553 24 15.5026V9.50853C24 9.14733 23.7071 8.84958 23.341 8.84958Z"
                  fill="#037486"
                  stroke="#037486"
                  stroke-width="0.5"
                />
                <path
                  d="M12.0368 17.0834C12.1638 17.2103 12.3346 17.2786 12.5006 17.2786C12.6665 17.2786 12.8374 17.2152 12.9643 17.0834L17.1523 12.8954C17.411 12.6367 17.411 12.2218 17.1523 11.9631C16.8936 11.7044 16.4787 11.7044 16.22 11.9631L13.1595 15.0284V1.65896C13.1595 1.29287 12.8666 1 12.5006 1C12.1345 1 11.8416 1.29287 11.8416 1.65896V15.0284L8.77623 11.9631C8.51753 11.7044 8.10263 11.7044 7.84393 11.9631C7.58523 12.2218 7.58523 12.6367 7.84393 12.8954L12.0368 17.0834Z"
                  fill="#037486"
                  stroke="#037486"
                  stroke-width="0.5"
                />
              </svg>
            </span>
          </v-btn>
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
.btn-zoom {
  .v-btn {
    background-color: #037486;
    color: white;
    font-size: 20px;
  }
}
</style>
