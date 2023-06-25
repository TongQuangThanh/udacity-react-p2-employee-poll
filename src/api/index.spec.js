import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddPool from "../Pages/Pools/AddPool";
import { _saveQuestion, _saveQuestionAnswer, formatQuestion } from "./index";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const optionOneText = "have horrible short term memory";
const optionTwoText = "have horrible long term memory";
const author = "sarahedo";
const authenticatedUser = author;
const qid = "8xf0y6ziyjabvozdd253nd";
const answer = "optionOne";
const dumQuestion = { optionOneText, optionTwoText, author };

const store = mockStore({
  message: 'sample text',
});

describe('Snapshot testing', () => {
  it('will return correct Add pool page', () => {
    const component = render(
      <Provider store={store}>
        <AddPool />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('DOM test which uses the fireEvent function', () => {
  it('will return correct Add pool page', () => {
    const component = render(
      <Provider store={store}>
        <AddPool />
      </Provider>
    );
    const submitButton = component.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(component.getByTestId('invalid-feedback')).toBeInTheDocument();
  });
});

describe('formatQuestion', () => {
  it('will return Question in format', () => {
    const results = formatQuestion(dumQuestion);
    expect(results.optionOne.votes.length).toEqual(0);
    expect(results.optionTwo.votes.length).toEqual(0);
    expect(results.optionOne.text).toEqual(optionOneText);
    expect(results.optionTwo.text).toEqual(optionTwoText);
  });
});

describe('_saveQuestion', () => {
  it('will return correct question format', async () => {
    const results = await _saveQuestion(dumQuestion);
    expect(results.optionOne.votes.length).toEqual(0);
    expect(results.optionTwo.votes.length).toEqual(0);
    expect(results.optionOne.text).toEqual(optionOneText);
    expect(results.optionTwo.text).toEqual(optionTwoText);
  });

  it('will return error when it not has author info', async () => {
    _saveQuestion({
      optionOneText,
      optionTwoText,
    }).catch(
      err => expect(err).toEqual("Question info not complete")
    );
  });
});


describe('_saveQuestionAnswer', () => {
  it('will return correct question format', async () => {
    const results = await _saveQuestionAnswer({ authenticatedUser, qid, answer });
    expect(results.optionOne.votes.length).toEqual(2);
    expect(results.optionTwo.votes.length).toEqual(0);
    expect(results.optionOne.text).toEqual(optionOneText);
    expect(results.optionTwo.text).toEqual(optionTwoText);
  });

  it('will return error when it not has Answer info', async () => {
    _saveQuestionAnswer({ authenticatedUser, qid, answer: null })
      .catch(err => expect(err).toEqual("Answer info not complete"));
  });
});
