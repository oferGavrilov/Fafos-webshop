

export const userService = {
      getEmptyUser
}

function getEmptyUser() {
      return {email:'', password:'', firstName:'', lastName:'', street:'', city:'', state:'', zip:''}
}