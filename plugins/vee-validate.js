import { extend, setInteractionMode } from 'vee-validate'
import {
  required,
  alpha,
  alpha_num,
  email
} from 'vee-validate/dist/rules'

setInteractionMode('custom', (context) => {
  if (context.value === null || context.value === '') {
    return {
      on: []
    }
  }
  //
  if (context.errors.length) {
    return {
      on: ['input', 'change']
    }
  }

  return {
    on: ['change', 'blur']
  }
})

extend('required', {
  ...required,
  message: 'The field is required'
})
extend('password', {
  validate (value) {
    return value.length >= 8 && alpha_num.validate(value)
  },
  message: 'Please enter a valid password'
})
extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters'
})
extend('email', {
  ...email,
  message: 'Please enter a valid email address'
})
extend('min', {
  validate (value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: 'The {_field_} must have at least {length} characters'
})
extend('max', {
  validate (value, { length }) {
    return value.length <= length
  },
  params: ['length'],
  message: 'The {_field_} must be less than {length} characters'
})
