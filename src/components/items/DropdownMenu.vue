<template>
    <div
            class="dropdown z-40"
            :class="{ dropup: top }"
            @mouseleave="mouseLeave"
            @mouseover="mouseOver"
            @mouseenter="mouseEnter"
            @click="toggleMenu"
    >
        <slot></slot>
        <transition :name="transition">
            <div
                    v-if="isVisible"
                    class="dropdown-menu show"
                    :class="{ 'dropdown-menu-right': right}"
                    :style="styles"
                    @mouseleave="startTimer"
                    @mouseenter="stopTimer"
                    @click.stop
                    ref="dropdown"
            >
                <slot name="dropdown"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
  export default {
    props: {
      value: Boolean,
      right: Boolean,
      hover: Boolean,
      hover_time: {
        type: Number,
        default: 100
      },
      hover_timeout: {
        type: Number,
        default: 500
      },
      styles: {
        type: Object,
        default () {
          return {}
        }
      },
      interactive: { //whether should stay open until clicked outside
        type: Boolean,
        default: false,
      },
      transition: {
        type: String,
        default: '',
      },
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        hovering: false,
        top: false,
        isVisible: this.value,
      }
    },
    unmounted () {
      document.body.removeEventListener('click', this.closeMenu)
    },
    methods: {
      mouseEnter () {
        // console.log('mouseEnter', $event.target)
        this.stopTimer()
        if (this.hover && this.hover_time > 0 && !this.isVisible) {
          // console.log('start open timer', this.hover_time)
          this.hoverOpenTimer = setTimeout(() => {
            this.isVisible = true
            //disable for a moment
            this.hovering = true
            setTimeout(() => {
              this.hovering = false
            }, this.hover_timeout)
          }, this.hover_time)
        }
        if (this.hover && !this.isVisible && this.hover_time === 0) {
          this.hovering = true
          setTimeout(() => {
            this.hovering = false
          }, this.hover_timeout)
          this.isVisible = true
        }
      },
      mouseLeave () {
        // console.log('mouseLeave', $event.target)
        if (!this.hoverTimer) { //left the link and no time active
          this.startTimer()
        }
        if (this.hover_time > 0 && this.hover) {
          // console.log('clear hover timer')
          clearTimeout(this.hoverOpenTimer)
        }
      },
      mouseOver () {
        this.stopTimer()
        // console.log('mouseOver')
      },
      closeMenu ($event) {
        if (!$event || !this.$el.contains($event.target)) {
          if (this.isVisible && this.closeOnClickOutside) {
            this.isVisible = false
          }
        }
      },
      toggleMenu () {
        if (this.hovering)
          return
        if (this.isVisible && this.hover)
          return
        this.isVisible = !this.isVisible
      },
      stopTimer () {
        // console.log('stop timer')
        clearTimeout(this.hoverTimer)
        this.hoverTimer = null
      },
      startTimer () {
        // console.log('start timer')
        if (!this.interactive)
          this.hoverTimer = setTimeout(this.closeMenu, this.hover_timeout)
      },
    },
    watch: {
      interactive: {
        handler (isVisible) {
          if(typeof document === "object")
            isVisible ? document.body.addEventListener('click', this.closeMenu) : document.body.removeEventListener('click', this.closeMenu)
        },
        immediate: true
      }
    }
  }
</script>

<style>
.dropdown {
  cursor: pointer;

}
.dropdown-menu {
  cursor: pointer;
  position: absolute;
}
</style>