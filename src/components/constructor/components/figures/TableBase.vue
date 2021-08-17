<template>
  <div className="sog-mod">
    <div
      className="sog-mod__item"
      data-sog-mod-type="circle"
      data-sog-mod-lock="0"
      data-sog-mod-item-set="0"
      data-sog-mod-guest-list=""
    >
      <div className="sog-mod__seats">
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
      <div className="sog-mod__table">
        <div className="sog-mod__icon-add"></div>
        <div className="sog-mod__table-name"><span>Стол #</span></div>
        <div className="sog-mod__table-btn">
          <a
            href="#"
            data-sog-mod-action="list"
            className="sog-mod__table-icon-btn icon-sog-mod__list"
            title="Список гостей/Настройка"
          ></a>
          <a
            href="#"
            data-sog-mod-action="lock"
            className="sog-mod__table-icon-btn icon-sog-mod__lock"
            title="Закреплено/Открепить"
          ></a>
          <a
            href="#"
            data-sog-mod-action="unlock"
            className="sog-mod__table-icon-btn icon-sog-mod__unlock"
            title="Откреплено/Закрепить"
          ></a>
          <a
            href="#"
            data-sog-mod-action="remote"
            className="sog-mod__table-icon-btn icon-sog-mod__remote"
            title="Очистить"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "TableBase",
})
export default class extends Vue {}
</script>
