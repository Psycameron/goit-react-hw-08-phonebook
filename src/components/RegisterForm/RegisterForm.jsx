import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          pattern=".{4,}"
          title="The name must contain at least 4 characters"
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          pattern=".{6,}"
          title="The password must contain at least 6 characters"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
