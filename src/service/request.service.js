export const validateRequest = (request, schema) => {
    const { body } = request
  
    for (const key in schema) {
      const rules = schema[key]
      const value = body[key]
  
      if (value === undefined || value === null || value === '') {
        console.log(`❌ Missing required field: ${key}`)
        return false
      }
  
      // Type check
      if (rules.type === 'string' && typeof value !== 'string') {
        console.log(`❌ Field ${key} must be a string`)
        return false
      }
  
      if (rules.type === 'number' && !/^\d+$/.test(value)) {
        console.log(`❌ Field ${key} must be numeric only`)
        return false
      }
  
      if (rules.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          console.log(`❌ Field ${key} must be a valid email`)
          return false
        }
      }
  
      // Length check
      if (rules.min && value.length < rules.min) {
        console.log(`❌ Field ${key} must be at least ${rules.min} characters`)
        return false
      }
  
      if (rules.max && value.length > rules.max) {
        console.log(`❌ Field ${key} must be at most ${rules.max} characters`)
        return false
      }
  
      if (rules.length && value.length !== rules.length) {
        console.log(`❌ Field ${key} must be exactly ${rules.length} digits`)
        return false
      }
    }
  
    return true
  }
  