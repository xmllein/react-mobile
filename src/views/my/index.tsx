import { Button, Form, Input, Space } from 'antd-mobile'
import api from '@/api'
import storage from '@/utils/storage'
import { useStore } from '@/store'
import { User } from 'types/index'
function PersonalCenter() {
  const [form] = Form.useForm()

  const { updateUserInfo, updateToken, token } = useStore()

  // 登录
  const onSubmit = async () => {
    const values = form.getFieldsValue()
    // 请求接口
    const result = await api.login(values)
    storage.setItem('token', result.token)
    // 更新状态
    updateUserInfo(result)
    updateToken(result.token)
  }

  // 退出
  const onLogout = () => {
    storage.clearItem('token')
    updateUserInfo({} as User)
    updateToken('')
  }

  return (
    <>
      {token ? (
        <>
          <Space direction="vertical">
            <div> 已登录</div>
            <Button
              block
              type="submit"
              color="danger"
              onClick={onLogout}
              size="large"
            >
              退出
            </Button>
          </Space>
        </>
      ) : (
        <Form
          form={form}
          initialValues={{
            userName: 'admin',
            userPwd: '123456',
          }}
          layout="horizontal"
          footer={
            <Button
              block
              loading="auto"
              type="submit"
              color="primary"
              onClick={onSubmit}
              size="large"
            >
              提交
            </Button>
          }
        >
          <Form.Item
            label="用户名"
            name="userName"
            rules={[{ required: true, message: '用户名不能为空' }]}
          >
            <Input placeholder="请输入用户名" clearable />
          </Form.Item>
          <Form.Item
            label="密码"
            name="userPwd"
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input placeholder="请输入密码" clearable type="password" />
          </Form.Item>
        </Form>
      )}
    </>
  )
}
export default PersonalCenter
