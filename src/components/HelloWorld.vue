<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="sog-mod">
          <div
            class="sog-mod__item"
            data-sog-mod-type="circle"
            data-sog-mod-lock="0"
            data-sog-mod-item-set="0"
            data-sog-mod-guest-list=""
          >
            <div class="sog-mod__seats">
              <div
                data-sog-mod-seat-id=""
                data-sog-mod-seat-status="0"
                data-sog-mod-guest=""
                title=""
              >
                <span></span>
              </div>
              <div
                data-sog-mod-seat-id=""
                data-sog-mod-seat-status="0"
                data-sog-mod-guest=""
                title=""
              >
                <span></span>
              </div>
              <div
                data-sog-mod-seat-id=""
                data-sog-mod-seat-status="0"
                data-sog-mod-guest=""
                title=""
              >
                <span></span>
              </div>
              <div
                data-sog-mod-seat-id=""
                data-sog-mod-seat-status="0"
                data-sog-mod-guest=""
                title=""
              >
                <span></span>
              </div>
              <div
                data-sog-mod-seat-id=""
                data-sog-mod-seat-status="0"
                data-sog-mod-guest=""
                title=""
              >
                <span></span>
              </div>
              <div
                data-sog-mod-seat-id=""
                data-sog-mod-seat-status="0"
                data-sog-mod-guest=""
                title=""
              >
                <span></span>
              </div>
              <div
                data-sog-mod-seat-id=""
                data-sog-mod-seat-status="0"
                data-sog-mod-guest=""
                title=""
              >
                <span></span>
              </div>
              <div
                data-sog-mod-seat-id=""
                data-sog-mod-seat-status="0"
                data-sog-mod-guest=""
                title=""
              >
                <span></span>
              </div>
            </div>
            <div class="sog-mod__table">
              <div class="sog-mod__icon-add"></div>
              <div class="sog-mod__table-name"><span>Стол #</span></div>
              <div class="sog-mod__table-btn">
                <a
                  href="#"
                  data-sog-mod-action="list"
                  class="sog-mod__table-icon-btn icon-sog-mod__list"
                  title="Список гостей/Настройка"
                ></a>
                <a
                  href="#"
                  data-sog-mod-action="lock"
                  class="sog-mod__table-icon-btn icon-sog-mod__lock"
                  title="Закреплено/Открепить"
                ></a>
                <a
                  href="#"
                  data-sog-mod-action="unlock"
                  class="sog-mod__table-icon-btn icon-sog-mod__unlock"
                  title="Откреплено/Закрепить"
                ></a>
                <a
                  href="#"
                  data-sog-mod-action="remote"
                  class="sog-mod__table-icon-btn icon-sog-mod__remote"
                  title="Очистить"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HelloWorld extends Vue {
  msg!: string;
}
</script>
