<template>
  <div>
    <p>场景1： 默认悬浮时触发下拉</p>
    <tiny-dropdown>
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item><tiny-icon-plus></tiny-icon-plus> 黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item><tiny-icon-plus-circle></tiny-icon-plus-circle> 狮子头</tiny-dropdown-item>
          <tiny-dropdown-item><tiny-icon-plus-square></tiny-icon-plus-square> 螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item><tiny-icon-checked-linear></tiny-icon-checked-linear> 双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item><tiny-icon-checked-sur></tiny-icon-checked-sur> 蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>

    <p>场景2： 设置点击时触发下拉</p>
    <tiny-dropdown trigger="click">
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item :icon="tinyIconPlus">黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item :icon="tinyIconPlusCircle">狮子头</tiny-dropdown-item>
          <tiny-dropdown-item :icon="tinyIconPlusSquare">螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item :icon="tinyIconCheckedLinear">双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item :icon="tinyIconCheckedSur">蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script setup>
import { iconPlus, iconPlusCircle, iconPlusSquare, iconCheckedLinear, iconCheckedSur } from '@opentiny/vue-icon'
import {
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem
} from '@opentiny/vue'

const tinyIconPlus = iconPlus()
const tinyIconPlusCircle = iconPlusCircle()
const tinyIconPlusSquare = iconPlusSquare()
const tinyIconCheckedLinear = iconCheckedLinear()
const tinyIconCheckedSur = iconCheckedSur()
</script>

<style lang="less" scoped>
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
