import React from 'react';
import { Form, Dropdown, Header } from 'semantic-ui-react'

class FeedbackForm extends React.Component {
  feedbackOptions = [
    {
      id : 1,
      text: 'Products we should review!',
      value: 'Products we should review!',
    },
    {
      id : 2,
      text: 'General Enquiry',
      value: 'General Enquiry',
    },
  ];

  render() {
    return (
      <div>
        <div className="feedbackheader">
        <Header as = 'h2'>
          TALK TO US
        </Header>
        </div>
        <Form>
          <Form.Dropdown
            placeholder='What do you have in mind?'
            fluid selection options={this.feedbackOptions}
          required />
          <Form.Field>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field required>
            <input placeholder='Email' />
          </Form.Field>
          <Form.TextArea
            placeholder='Type your message here...'
          required />
          <Form.Button
            content='Submit'
          />
        </Form>
      </div>
    );
  }
}

export default FeedbackForm;
