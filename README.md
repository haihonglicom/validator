使用例子:

  import {checker, validator} from 'validator'
  const check = checker(
    validator('用户名不能为空', obj => !!obj.userName),
    validator('用户名长度不能少于6位', obj => typeof obj.userName === 'string' && obj.userName.length >= 6),
    validator('密码不能为空', obj => !!obj.password),
    validator('密码长度不能少于6位', obj => typeof obj.password === 'string' && obj.password.length >= 6),
    validator('手机号码不能为空', obj => !!obj.phoneNumber),
    validator('手机号码格式不正确', obj => typeof obj.phoneNumber === 'string' && /^\d{11}$/.test(obj.phoneNumber)),
  )

  const obj = {
    userName: '',
    password: '',
    phoneNumber: '',
  }

  const errorMessage = check(obj)
