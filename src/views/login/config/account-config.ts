export const rules = {
  name: [
    { required: true, message: '用户名不能为空~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个数字或者字母~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码不能为空~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的数字或者字母~',
      trigger: 'blur'
    }
  ]
}
