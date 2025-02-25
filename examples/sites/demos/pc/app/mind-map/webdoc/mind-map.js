export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      codeFiles: ['basic-usage.vue'],
      desc: {
        'zh-CN': '本示例介绍了脑图的基本使用方法',
        'en-US': 'This example introduces the basic usage of mind map'
      }
    },
    {
      demoId: 'export-data',
      name: { 'zh-CN': '导出数据', 'en-US': 'Export data' },
      codeFiles: ['export-data.vue'],
      desc: {
        'zh-CN': '本demo讲解了如何导入导出脑图',
        'en-US': 'This demo introduces how to import/exprot mind map data'
      }
    },
    {
      demoId: 'event',
      name: { 'zh-CN': '事件触发', 'en-US': 'Event' },
      codeFiles: ['event.vue'],
      desc: {
        'zh-CN': '本demo讲解了该组件的所有可触发事件',
        'en-US': 'This demo explains all the triggering events of the build'
      }
    }
  ],
  apis: [
    {
      name: 'mind-map',
      type: 'component',
      props: [
        {
          name: 'modelValue',
          type: 'NodeObj',
          defaultValue: '{}',
          desc: {
            'zh-CN': '默认节点数据',
            'en-US': 'Default node data'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'options',
          type: 'Options',
          defaultValue: '{contextMenu: false,toolBar: false,nodeMenu: false}',
          desc: {
            'zh-CN': '配置项',
            'en-US': 'options'
          }
        }
      ],
      events: [
        {
          name: 'operation',
          type: 'onOperation',
          'desc': {
            'zh-CN': '节点重新计算时, 例如将节点A拖拽到节点B, 使得节点A是节点B的子节点',
            'en-US':
              'When recalculating nodes, for example, dragging node A to node B so that node A is a child node of node B'
          }
        },
        {
          name: 'create',
          type: '(render:MindElixirInstance)=>void',
          'desc': {
            'zh-CN': 'mindmap创建时会触发该事件',
            'en-US': 'This event will be triggered when creating mindmap'
          }
        },
        {
          name: 'selectNode',
          type: 'onSelectNode',
          'desc': {
            'zh-CN': '选择任意一个节点时, 会触发该事件',
            'en-US': 'When selecting any node, this event will be triggered'
          }
        },
        {
          name: 'selectNewNode',
          type: 'onSelectNewNode',
          'desc': {
            'zh-CN': '创建新节点时',
            'en-US': 'when create new node'
          }
        },
        {
          name: 'selectNodes',
          type: 'onSelectNodes',
          'desc': {
            'zh-CN': '选择多个节点的时候会触发该事件',
            'en-US': 'When selecting multiple nodes, this event will be triggered'
          }
        },
        {
          name: 'unselectNode',
          type: 'onUnselectNode',
          'desc': {
            'zh-CN': '取消选择的时候会触发该事件',
            'en-US': 'When deselecting, this event will be triggered'
          }
        },
        {
          name: 'unselectNodes',
          type: 'onUnselectNode',
          'desc': {
            'zh-CN': '取消选择多个节点时会触发该事件',
            'en-US': 'This event will be triggered when multiple nodes are unselected'
          }
        },
        {
          name: 'expandNode',
          type: 'onExpandNode',
          'desc': {
            'zh-CN': '展开节点时会触发该事件',
            'en-US': 'This event will be triggered when expanding a node'
          }
        },
        {
          name: 'beforeImport',
          type: '({render, data}: {render:MindElixirInstance, data: })=>void',
          'desc': {
            'zh-CN': 'v-model更新前会触发',
            'en-US': 'Triggered before updating the v-model'
          }
        },
        {
          name: 'afterImport',
          type: '({render, data}: {render:MindElixirInstance, data: })=>void',
          'desc': {
            'zh-CN': 'v-model更新后会触发',
            'en-US': 'After updating the v-model, it will trigger'
          }
        }
      ]
    }
  ],
  types: [
    {
      'name': 'Options',
      type: 'interface',
      code: `
interface Options {
  direction?: number
  locale?: string
  draggable?: boolean
  editable?: boolean
  contextMenu?: boolean
  contextMenuOption?: any
  toolBar?: boolean
  keypress?: boolean
  mouseSelectionButton?: 0 | 2
  before?: Before
  newTopicName?: string
  allowUndo?: boolean
  overflowHidden?: boolean
  mainLinkStyle?: number
  subLinkStyle?: number
  mobileMenu?: boolean
  theme?: Theme
  nodeMenu?: boolean
}
`
    },
    {
      name: 'onOperation',
      type: 'type',
      code: `
type onOperation = ({render, info}: {render:MindElixirInstance, info: Operation}) => void
`
    },
    {
      name: 'onSelectNode',
      type: 'type',
      code: `
type onSelectNode = ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj}, e?: MouseEvent) => void
`
    },
    {
      name: 'onSelectNewNode',
      type: 'type',
      code: `
type selectNewNode: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj}) => void
`
    },
    {
      name: 'onSelectNodes',
      type: 'type',
      code: `
type selectNodes: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj[]}) => void
`
    },
    {
      name: 'onUnselectNode',
      type: 'type',
      code: `
type unselectNodes: ({render}: {render: MindElixirInstance}) => void
`
    },
    {
      name: 'onUnselectNodes',
      type: 'type',
      code: `
type unselectNodes: ({render}: {render: MindElixirInstance}) => void
`
    },
    {
      name: 'onExpandNode',
      type: 'type',
      code: `
type expandNode: ({render,nodeObj}: {render:MindElixirInstance,nodeObj:NodeObj}) => void
`
    },
    {
      name: 'NodeObj',
      type: 'interface',
      code: `
export interface NodeObj {
  topic: string
  id: Uid
  style?: {
    fontSize?: string
    color?: string
    background?: string
    fontWeight?: string
  }
  children?: NodeObj[]
  tags?: string[]
  icons?: string[]
  hyperLink?: string
  expanded?: boolean
  direction?: number
  root?: boolean
  image?: {
    url: string
    width: number
    height: number
  }
  branchColor?: string
  parent?: NodeObj
}
`
    }
  ]
}
