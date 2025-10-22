import { ComponentItem } from '../../types'

/**
 * 构造组件列表
 */
export function buildComponentList(): ComponentItem[] {
  return [
    {
      frontId: 'c1',
      type: 'info',
      title: '问卷信息',
      isHidden: false,
      isLocked: false,
      props: { title: '问卷标题', description: '问卷描述...' },
    },
    {
      frontId: 'c2',
      type: 'title',
      title: '标题',
      isHidden: false,
      isLocked: false,
      props: { text: '个人信息调研', level: 1, isCenter: false },
    },
    {
      frontId: 'c3',
      type: 'input',
      title: '输入框1',
      isHidden: false,
      isLocked: false,
      props: { title: '你的姓名', placeholder: '请输入姓名...' },
    },
    {
      frontId: 'c4',
      type: 'input',
      title: '输入框2',
      isHidden: false,
      isLocked: false,
      props: { title: '你的电话', placeholder: '请输入电话...' },
    },
    {
      frontId: 'c5',
      type: 'textarea',
      title: '多行输入',
      isHidden: false,
      isLocked: false,
      props: { title: '你的爱好', placeholder: '请输入...' },
    },
    {
      frontId: 'c6',
      type: 'paragraph',
      title: '段落',
      isHidden: false,
      isLocked: false,
      props: { text: '一行段落1\n一行段落2', isCenter: false },
    },
    {
      frontId: 'c7',
      type: 'radio',
      title: '单选',
      isHidden: false,
      isLocked: false,
      props: {
        title: '单选标题',
        isVertical: false,
        options: ['选项1', '选项2', '选项3'],
        value: '',
      },
    },
    {
      frontId: 'c8',
      type: 'checkbox',
      title: '多选',
      isHidden: false,
      isLocked: false,
      props: {
        title: '多选标题',
        isVertical: false,
        options: ['选项1', '选项2', '选项3'],
        value: ['选项2', '选项3'],
      },
    },
  ]
}
