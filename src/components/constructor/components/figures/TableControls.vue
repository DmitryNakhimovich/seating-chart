<template>
  <div class="sog-mod__table">
    <div class="sog-mod__icon-add"></div>
    <div class="sog-mod__table-name"><span>Стол #</span></div>
    <div class="sog-mod__table-btn">
      <span
        data-sog-mod-action="list"
        class="sog-mod__table-icon-btn icon-sog-mod__list"
        title="Список гостей/Настройка"
        >Список гостей/Настройка</span
      >
      <span
        data-sog-mod-action="lock"
        class="sog-mod__table-icon-btn icon-sog-mod__lock"
        title="Закреплено/Открепить"
      ></span>
      <span
        data-sog-mod-action="unlock"
        class="sog-mod__table-icon-btn icon-sog-mod__unlock"
        title="Откреплено/Закрепить"
      ></span>
      <span
        data-sog-mod-action="remote"
        class="sog-mod__table-icon-btn icon-sog-mod__remote"
        title="Очистить"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "TableControls",
})
export default class extends Vue {}
</script>
