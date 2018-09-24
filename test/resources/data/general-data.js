module.exports = {
  HEADINGS: {
    'STEP 1': 'Let\'s activate your account!',
    'STEP 2': 'Let\'s secure your account!',
    'STEP 3': 'Success! You\'re all done!',
    'My Account': 'Welcome to My Account',
  },
  PASSWORD_REQUIREMENTS: {
    'Is at least 8 characters with no spaces': 'A13455',
    'Is not common or obvious' : '1234567A',
    'Has at least 1 number and 1 uppercase letter' : 'absafhjas',
    'Is at least 8 characters with no spaces & Has at least 1 number and 1 uppercase letter' : 'abytw',
    'Is at least 8 characters with no spaces & Is not common or obvious' : '12345AB',
    'Has at least 1 number and 1 uppercase letter & Is not common or obvious' : 'abcdefgh',
    'Is at least 8 characters with no spaces & Has at least 1 number and 1 uppercase letter & Is not common or obvious' : '12345'
  },
  URLS: {
    'STEP 3': '/success.html'
  },
  PASSWORD_BULLET_CLASSES: {
    'Is at least 8 characters with no spaces': ['fail','pass','pass'],
    'Is not common or obvious' : ['pass','pass','fail'],
    'Has at least 1 number and 1 uppercase letter' : ['pass','fail','pass'],
    'Is at least 8 characters with no spaces & Has at least 1 number and 1 uppercase letter' : ['fail','fail','pass'],
    'Is at least 8 characters with no spaces & Is not common or obvious' : ['fail','pass','fail'],
    'Has at least 1 number and 1 uppercase letter & Is not common or obvious' : ['pass','fail','fail'],
    'Is at least 8 characters with no spaces & Has at least 1 number and 1 uppercase letter & Is not common or obvious' : ['fail','fail','fail']
  },
  ERROR_MESSAGES: {
    'global error':'Oops... Something went wrong. You will need to come back another time to register for My Account. In the meantime return to TELUS.com'
  }
}