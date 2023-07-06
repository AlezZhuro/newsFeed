import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {act, fireEvent, render} from '@testing-library/react-native';

import {SignIn} from '../ui';
import {setupStore} from 'app/store';
import {authModel} from 'entities';

describe('SignIn widget tests', () => {
  const store = setupStore();

  const widget = (
    <Provider store={store}>
      <NavigationContainer>
        <SignIn />
      </NavigationContainer>
    </Provider>
  );

  const propsForTest = {
    email: 'bullet2271293@gmail.com',
    pass: 'beta1234',
  };

  test('should all elements on the screen', async () => {
    jest.useFakeTimers();
    const view = render(widget);

    act(() => {
      jest.runAllTimers();
    });

    const inputs = view.getAllByTestId('text-input-outline');

    expect(inputs).toBeTruthy();
    expect(inputs).toHaveLength(2);

    const loginButton = view.getByTestId('button');

    expect(loginButton).toBeTruthy();
    expect(loginButton).toHaveTextContent('Login');
  });

  test('inputs should have changed text', async () => {
    jest.useFakeTimers();
    const view = render(widget);

    act(() => {
      jest.runAllTimers();
    });

    const emailInput = view.getByTestId('emailInput');
    const passwordInput = view.getByTestId('passInput');

    expect(emailInput).toBeOnTheScreen();
    expect(passwordInput).toBeOnTheScreen();

    const textToEnter = 'This is a random text';

    fireEvent.changeText(emailInput, textToEnter);
    fireEvent.changeText(passwordInput, textToEnter);

    expect(emailInput).toHaveAccessibilityValue(textToEnter);
    expect(passwordInput).toHaveAccessibilityValue(textToEnter);
  });

  test('should show error text after failed validation', async () => {
    jest.useFakeTimers();
    const view = render(widget);

    act(() => {
      jest.runAllTimers();
    });

    const emailInput = view.getByTestId('emailInput');
    const passwordInput = view.getByTestId('passInput');

    expect(emailInput).toBeOnTheScreen();
    expect(passwordInput).toBeOnTheScreen();

    const passwordToEnter = '111';

    fireEvent.changeText(passwordInput, passwordToEnter);
    expect(passwordInput).toHaveAccessibilityValue(passwordToEnter);

    await act(() => {
      fireEvent.press(view.getByTestId('button'));
    });

    expect(
      view.getByText('password must be at least 6 characters'),
    ).toBeOnTheScreen();
  });

  test('', async () => {
    jest.useFakeTimers();
    const view = render(widget);

    act(() => {
      jest.runAllTimers();
    });

    const emailInput = view.getByTestId('emailInput');
    const passwordInput = view.getByTestId('passInput');

    fireEvent.changeText(passwordInput, propsForTest.pass);
    expect(passwordInput).toHaveAccessibilityValue(propsForTest.pass);

    fireEvent.changeText(emailInput, propsForTest.email);
    expect(emailInput).toHaveAccessibilityValue(propsForTest.email);

    await act(() => {
      fireEvent.press(view.getByTestId('button'));
    });

    const result = await store.dispatch(
      authModel.login({
        email: propsForTest.email,
        password: propsForTest.pass,
      }),
    );

    const isAuth = result.payload;

    expect(result.type).toBe('authSlice/login/fulfilled');
    expect(isAuth).toBeFalsy();
  });
});
