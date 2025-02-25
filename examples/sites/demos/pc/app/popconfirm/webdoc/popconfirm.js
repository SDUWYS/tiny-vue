export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>title</code> 设置标题内容， <code>content</code> 设置正文内容，通过 <code>reference</code> 插槽自定义触发显示的元素。</p>',
        'en-US':
          'Set the title content through <code>title</code> , set the body content through <code>content</code> , and customize the elements that trigger display through <code>reference</code> slots.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'trigger',
      'name': { 'zh-CN': '触发方式', 'en-US': 'Trigger' },
      'desc': {
        'zh-CN': '<p>通过 <code>trigger</code> 设置触发显示气泡确认框的方式。</p>',
        'en-US': '<p> <code>trigger</code> Sets hot to show the pop confirm. </p>'
      },
      'codeFiles': ['trigger.vue']
    },
    {
      'demoId': 'type',
      'name': { 'zh-CN': '图标类型', 'en-US': 'Type' },
      'desc': {
        'zh-CN': '<p>通过 <code>type</code> 设置提示的图标类型，或者传入自定义图标。</p>',
        'en-US': '<p> <code>type</code> Sets the icon type. </p>'
      },
      'codeFiles': ['type.vue']
    },
    {
      'demoId': 'placement',
      'name': { 'zh-CN': '提示框显示位置', 'en-US': 'Display position of prompt box' },
      'desc': {
        'zh-CN': '<p>通过 <code>placement</code> 设置提示框显示位置。</p>',
        'en-US': '<p>Set the display position of the prompt box through<code>placement</code>.</p>'
      },
      'codeFiles': ['placement.vue']
    },
    {
      'demoId': 'custom-class',
      'name': { 'zh-CN': '自定义类名', 'en-US': 'Custom class' },
      'desc': {
        'zh-CN': '<p>通过 <code>custom-class</code> 自定义气泡提示框的类名。</p>',
        'en-US': '<p>Customize the class name of the bubble prompt box through<code>custom class</code>.</p>'
      },
      'codeFiles': ['custom-class.vue']
    },
    {
      'demoId': 'slot-footer',
      'name': { 'zh-CN': '底部插槽', 'en-US': 'Footer slot' },
      'desc': {
        'zh-CN': '<p>通过 <code>footer</code> 插槽自定义底部内容。</p>',
        'en-US': '<p>Customize the bottom content through the<code>footer</code>slot.</p>'
      },
      'codeFiles': ['slot-footer.vue']
    },
    {
      'demoId': 'width',
      'name': { 'zh-CN': '宽度', 'en-US': 'Set width' },
      'desc': {
        'zh-CN': '<p>通过 <code>width</code> 设置提示框宽度。</p>',
        'en-US': '<p>Set the width of the prompt box through<code>width</code></ P>'
      },
      'codeFiles': ['width.vue']
    },
    {
      'demoId': 'cancel-button',
      'name': { 'zh-CN': '隐藏取消按钮', 'en-US': 'Hide Cancel Button' },
      'desc': {
        'zh-CN': '<p>通过 <code>cancel-button</code> 设置是否展示取消按钮。</p>',
        'en-US': '<p>Set whether to display the cancel button through<code>cancel button</code></ P>'
      },
      'codeFiles': ['cancel-button.vue']
    },
    {
      'demoId': 'event',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<p>当气泡确认框显示时触发 <code>show</code> 事件，当确认框隐藏时触发 <code>hide</code> 事件。<br />当点击底部确认按钮时会同时触发 <code>hide</code> 和 <code>confirm</code> 事件。</p>',
        'en-US':
          '<p>The<code>show</code>event is triggered when the bubble confirmation box is displayed, and the<code>hide</code>event is triggered when the confirmation box is hidden< When clicking the confirm button at the bottom, both the<code>hide</code>and<code>confirm</code>events will be triggered simultaneously.</p>'
      },
      'codeFiles': ['event.vue']
    }
  ],
  apis: [
    {
      'name': 'popconfirm',
      'type': 'component',
      'props': [
        {
          'name': 'cancel-button',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否展示取消按钮',
            'en-US': 'Is show the cancel button'
          },
          'demoId': 'cancel-button'
        },
        {
          'name': 'content',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '气泡提示框的内容',
            'en-US': 'Set the pop confirm content'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'placement',
          'type': 'IPplacement',
          'typeAnchorName': 'IPplacement',
          'defaultValue': "'top'",
          'desc': {
            'zh-CN': '气泡提示框显示位置',
            'en-US': 'Set the pop confirm placement'
          },
          'demoId': 'placement'
        },
        {
          'name': 'custom-class',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '为气泡提示框自定义类名',
            'en-US': 'Set the pop confirm popper class name'
          },
          'demoId': 'custom-class'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置气泡提示框的标题',
            'en-US': 'Set the pop confirm title'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'trigger',
          'type': "'click' | 'hover'",
          'defaultValue': "'hover'",
          'desc': {
            'zh-CN': '气泡提示框显示触发方式',
            'en-US': 'How to show the pop confirm'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'type',
          'type': 'IPtype',
          'typeAnchorName': 'IPtype',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '提示图标类型，可以传入自定义图标',
            'en-US': 'Prompt icon type, custom icons can be passed in'
          },
          'demoId': 'type'
        },
        {
          'name': 'width',
          'type': 'string | number',
          'defaultValue': '350',
          'desc': {
            'zh-CN': '气泡提示框宽度',
            'en-US': 'Set the pop confirm box with'
          },
          'demoId': 'width'
        }
      ],
      'events': [
        {
          'name': 'confirm',
          'type': '(visible: boolean) => void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '点击确认按钮时触发',
            'en-US': 'Triggered when confirm button is clicked'
          },
          'demoId': 'event'
        },
        {
          'name': 'hide',
          'type': '(visible: boolean) => void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '气泡确认框关闭时触发',
            'en-US': 'Triggered when pop confirm hide'
          },
          'demoId': 'event'
        },
        {
          'name': 'show',
          'type': '(visible: boolean) => void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '气泡确认框显示时触发',
            'en-US': 'Triggered when pop confirm show'
          },
          'demoId': 'event'
        }
      ],
      'slots': [
        {
          'name': 'footer',
          'type': '',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '底部插槽',
            'en-US': 'default slot'
          },
          'demoId': 'slot-footer'
        },
        {
          'name': 'reference',
          'type': '',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '触发气泡提示框显示的 HTML 元素',
            'en-US': 'reference slot'
          },
          'demoId': 'basic-usage'
        }
      ]
    }
  ],

  types: [
    {
      name: 'IPplacement',
      type: 'type',
      code: "type IPplacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'"
    },
    {
      name: 'IPtype',
      type: 'type',
      code: "type IPtype = 'info' | 'success' | 'warning' | 'error' | Component"
    }
  ]
}
