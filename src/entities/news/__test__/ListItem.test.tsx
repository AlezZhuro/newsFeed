import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';

import {ListItem, NewsListItem} from 'entities/news';

describe('ListItem tests', () => {
  const pressCallback = jest.fn();
  const props = {
    id: 123,
    short_text: '<p>test short_text</p>',
    title: 'test title',
  } as NewsListItem;

  test('should render on the screen', () => {
    render(<ListItem pressHandler={pressCallback} {...props} />);

    expect(screen.getByTestId('card-container')).toBeOnTheScreen();
  });

  test('should render with props value', async () => {
    const pressCallback = jest.fn();
    const props = {
      id: 123,
      short_text: '<p>test short_text</p>',
      title: 'test title',
    } as NewsListItem;

    render(<ListItem pressHandler={pressCallback} {...props} />);

    const title = screen.getByText(props.title);

    expect(title).not.toBeNull();
    expect(title).toBeOnTheScreen();
    expect(title).toHaveTextContent(props.title);

    const short_text = screen.getByTestId('p');

    expect(short_text).not.toBeNull();
    expect(short_text).toBeOnTheScreen();

    const shortTextMatches = props.short_text.match(/>([^<]*)</);
    const shortText = shortTextMatches && shortTextMatches[1];

    expect(shortText).toBeTruthy();
    expect(short_text).toHaveTextContent(shortText as string);
  });

  test('should callback call', async () => {
    render(<ListItem pressHandler={pressCallback} {...props} />);

    const card = screen.getByTestId('card-container');
    expect(card).toBeOnTheScreen();
    fireEvent.press(card);

    expect(pressCallback).toBeCalled();
  });
});
