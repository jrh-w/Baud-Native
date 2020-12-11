
import bcrypt from 'react-native-bcrypt';

checkData() {

  let usernameRegEx = new RegExp(/^(?=[a-zA-Z0-9._-]{8,40}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$/);
  let passwordRegEx = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&%+_-])[A-Za-z\d@$!%*?&%+_-]{8,}$/);
  let emailRegEx = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);

  let usernameTest = usernameRegEx.test(this.state.username);
  let passwordTest = passwordRegEx.test(this.state.password);
  let emailTest = emailRegEx.test(this.state.email);
  let passwordsMatch = (this.state.password === this.state.confirmPassword);

  switch(false) {
    case usernameTest:
      this.props.setErrorText('username');
      return false;
    case emailTest:
      this.props.setErrorText('email');
      return false;
    case passwordTest:
      this.props.setErrorText('password');
      return false;
    case passwordsMatch:
      this.props.setErrorText('confirmPassword');
      return false;
    default:
      return true;
  }

}

register() {

  let test = this.checkData();
  this.setState({ invalidData: !test });

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(this.state.password, salt);

  if(test) {
    axios.post('https://evening-oasis-01489.herokuapp.com/register', {
      email: this.state.email,
      username: this.state.username,
      password: hash
    })
    .then(function (response) {
      console.log(response.data);
      return this.props.navigation.navigate('Login');
    })
    .catch(function (error) {
      let errorCode = error.response.status;

      if(errorCode == 452) this.props.setErrorText('emailServer'); // Email taken
      else if (errorCode == 453) this.props.setErrorText('usernameServer'); // Username taken
      else this.props.setErrorText('connection'); // Connection error

      return false;
    });
  }

}
