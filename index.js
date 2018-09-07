export const checker = (...validators) =>
  target => {
    for (let i = 0; i < validators.length; i++) {
      const check = validators[i]
      if (!check(target)) return check.message
    }
  }

export const validator = (message, fun) => {
  const f = (...args) => fun(...args)
  f.message = message
  return f
}
