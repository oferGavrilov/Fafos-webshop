

// eslint-disable-next-line import/prefer-default-export
export const userService = {
      getEmptyUser
}

function getEmptyUser() {
      return {email:'', password:'', firstName:'', lastName:'', street:'', city:'', state:'', zip:''}
}