export interface Msg {
  type: 'user' | 'bot' | 'sys'
  message: string
}
