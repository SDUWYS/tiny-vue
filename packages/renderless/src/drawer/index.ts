import debounce from '../common/deps/debounce'
import { addClass, removeClass } from '../common/deps/dom'
import type { IDrawerState, IDrawerProps, IDrawerApi, IDrawerCT, ISharedRenderlessParamUtils } from '@/types'

export const close =
  ({ emit, state }: { emit: ISharedRenderlessParamUtils['emit']; state: IDrawerState }) =>
  () => {
    state.toggle = false
    emit('close', state)
  }

export const watchVisible =
  ({ state }: { state: IDrawerState }) =>
  (bool) => {
    setTimeout(() => {
      state.toggle = bool
    }, 0)
  }

export const watchToggle =
  ({ emit }: { emit: ISharedRenderlessParamUtils['emit'] }) =>
  (bool: boolean) => {
    setTimeout(() => {
      emit('update:visible', bool)
    }, 0)
  }

export const confirm =
  ({ emit, state }: { emit: ISharedRenderlessParamUtils['emit']; state: IDrawerState }) =>
  () => {
    state.toggle = false
    emit('confirm', state)
  }

export const mousedown =
  ({ state, vm }: { vm: ISharedRenderlessParamUtils<IDrawerCT>['vm']; state: IDrawerState }) =>
  (event) => {
    event.preventDefault()

    const touch = event.touches ? event.touches[0] : event
    const drawerBox = vm.$refs.drawerBox

    state.dragEvent.isDrag = true
    state.dragEvent.x = touch.clientX
    state.dragEvent.offsetWidth = drawerBox.offsetWidth
  }

export const mousemove = ({ state, props }: { state: IDrawerState; props: IDrawerProps }) =>
  debounce(1, (event) => {
    if (!state.dragEvent.isDrag) {
      return
    }

    event.preventDefault()

    const { placement } = props
    const {
      dragEvent: { x, offsetWidth }
    } = state
    const { touches, targetTouches, changedTouches } = event
    const touch =
      (touches && touches[0]) || (targetTouches && targetTouches[0]) || (changedTouches && changedTouches[0])
    const { clientX } = touch || event
    const offsetX = clientX - x

    if (placement === 'left') {
      state.width = offsetWidth + offsetX
    } else if (placement === 'right') {
      state.width = offsetWidth - offsetX
    }
  }) as Parameters<Document['removeEventListener']>['1']

export const mouseup =
  ({ state }: { state: IDrawerState }) =>
  () => {
    if (!state.dragEvent.isDrag) {
      return
    }

    ;(event as any).preventDefault()
    state.dragEvent.isDrag = false
  }

export const addDragEvent =
  ({ api, vm }: { api: IDrawerApi; vm: ISharedRenderlessParamUtils<IDrawerCT>['vm'] }) =>
  () => {
    const el = vm.$refs.dragBar

    el.addEventListener('mousedown', api.mousedown)
    document.addEventListener('mousemove', api.mousemove)
    document.addEventListener('mouseup', api.mouseup)

    el.addEventListener('touchstart', api.mousedown)
    el.addEventListener('touchmove', api.mousemove)
    el.addEventListener('touchend', api.mouseup)
  }

export const removeDragEvent =
  ({ api, vm }: { api: IDrawerApi; vm: ISharedRenderlessParamUtils<IDrawerCT>['vm'] }) =>
  () => {
    const el = vm.$refs.dragBar

    el.removeEventListener('mousedown', api.mousedown)
    document.removeEventListener('mousemove', api.mousemove)
    document.removeEventListener('mouseup', api.mouseup)

    el.removeEventListener('touchstart', api.mousedown)
    el.removeEventListener('touchmove', api.mousemove)
    el.removeEventListener('touchend', api.mouseup)
  }

export const showScrollbar = (lockScrollClass) => () => {
  addClass(document.body, lockScrollClass)
}

export const hideScrollbar = (lockScrollClass) => () => {
  removeClass(document.body, lockScrollClass)
}

export const watchVisibleNotImmediate =
  ({ api, props }: { api: IDrawerApi; props: IDrawerProps }) =>
  (visible: boolean) => {
    if (props.lockScroll) {
      visible ? api.showScrollbar() : api.hideScrollbar()
    }
  }
