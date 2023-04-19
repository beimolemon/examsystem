<template>
  <div class="has-logo">
    <logo  :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        <div class="menu-wrapper">
          <li class="el-submenu">
            <div class="el-submenu__title" style="padding-left: 20px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);">
              <!-- <svg t="1671024725099" class="svg-zhibo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2727" width="200" height="200"><path d="M866.3 723.2c19.6 0 35.5-15.9 35.5-35.5 0-0.7 0.1-1 0.1-1.4V345.1c0-0.4-0.1-0.7-0.1-1.4 0-19.6-15.9-35.5-35.5-35.5-6 0-11.6 1.5-16.5 4.1h-0.2l-108.3 58.5v-87c0-49.3-39.9-89.2-89.2-89.2h-446c-49.3 0-89.2 39.9-89.2 89.2v446c0 49.3 39.9 89.2 89.2 89.2h446c49.3 0 89.2-39.9 89.2-89.2v-69.3l108.9 58.8c4.9 2.3 10.3 3.9 16.1 3.9z" fill="#bfcad9" p-id="2728"></path></svg> -->
              <svg t="1671024996968" class="svg-zhibo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3776" width="200" height="200"><path d="M869.445818 162.909091h-210.781091l58.577455-107.682909c8.564364-15.709091 4.002909-37.655273-10.775273-48.942546-15.732364-8.96-34.653091-0.558545-45.032727 16.779637L584.634182 162.909091h-165.469091L342.085818 22.016c-10.356364-17.082182-29.137455-24.552727-44.753454-15.592727-15.057455 11.566545-19.618909 33.675636-10.775273 49.780363L344.994909 162.909091H149.410909C67.095273 162.909091 0 229.329455 0 315.159273v549.911272C0 950.900364 67.095273 1024 149.410909 1024h720.034909C954.670545 1024 1024 953.809455 1024 865.070545V315.019636C1024 229.189818 951.761455 162.909091 869.445818 162.909091z m-140.753454 474.554182c-5.655273 3.025455-22.365091 12.939636-49.989819 29.346909l-1.792 1.093818c-33.419636 19.851636-79.290182 47.127273-134.260363 79.104-30.673455 16.663273-58.693818 33.466182-79.685818 46.010182-14.498909 8.541091-29.416727 17.501091-32.465455 18.594909l-2.769454 0.954182-2.071273 2.210909c-5.515636 5.655273-12.055273 8.541091-22.272 8.541091-31.883636 0-54.295273-25.064727-54.295273-58.274909V418.234182c0-33.908364 23.505455-61.463273 54.295273-61.463273 9.797818 0 19.060364 2.746182 29.160727 7.982546 2.769455 1.396364 15.755636 9.239273 34.257455 19.991272l0.488727 0.418909c19.456 11.287273 44.939636 26.181818 72.145454 41.890909 96.139636 54.830545 172.753455 99.351273 188.346182 109.102546l0.256 0.139636c15.872 9.518545 26.228364 29.346909 26.507637 50.711273-0.023273 21.364364-10.24 41.192727-25.856 50.455273z" p-id="3777" fill="#bfcbd9"></path></svg>
              <!-- <span>课堂互动</span> -->
              <a href="https://global.talk-cloud.net/room/roomlist.html" target="_blank">课堂互动</a>
            </div>
          </li>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar',
      'routes'
    ]),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables () {
      return variables
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>
<style scoped>
.svg-zhibo {
  margin-right: 16px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
