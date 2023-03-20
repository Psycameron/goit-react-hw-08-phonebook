import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './LoginForm.styled';
import Notiflix from 'notiflix';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
      Notiflix.Notify.warning('Please fill in all fields');
      return;
    }

    dispatch(logIn({ email, password }))
      .then(({ payload }) => {
        if (payload !== 'Request failed with status code 400') {
          form.reset();
          Notiflix.Notify.success('Login successful');
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        Notiflix.Notify.failure('Invalid email or password');
      });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
