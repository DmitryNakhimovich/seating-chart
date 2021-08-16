<template>
  <Header :userData="activeData" />

  <v-container fluid class="main-bg">
    <v-row>
      <v-col>
        <v-btn @click="downloadPDF">PDF</v-btn>
        <vue3-simple-html2pdf
          ref="constructorPDF"
          :options="pdfOptions"
          :filename="exportFilename"
        >
          <div>
            <Draggable>
              <table-circle-small />
            </Draggable>
            <Draggable>
              <table-circle-small />
            </Draggable>
          </div>
        </vue3-simple-html2pdf>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableCircleSmall from "@/components/constructor/components/figures/TableCircleSmall.vue";
import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf/src/vue3-simple-html2pdf.vue";
import { IUserData } from "@/components/constructor/types";
import Header from "@/components/constructor/components/header/Header.vue";
import { Model } from "vue-property-decorator";

@Options({
  name: "SeatingConstructor",
  components: {
    Header,
    TableCircleSmall,
    Vue3SimpleHtml2pdf,
  },
})
export default class extends Vue {
  @Model("userData") activeData!: IUserData;

  $refs!: {
    constructorPDF: any;
  };
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
    this.$refs.constructorPDF.download();
  }
}
</script>

<style scoped lang="scss"></style>
