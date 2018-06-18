import React from 'react';
import { Container, Header } from 'semantic-ui-react';

class DisplayCategories extends React.Component {
  categories = [
    {
      text: 'HAIR',
      url: '/hair',
    },
    {
      text: 'LASHES',
      url: '/lashes',
    },
    {
      text: 'NAILS',
      url: '/nails',
    },
    {
      text: 'FACIAL',
      url: '/facial',
    },
  ]
  render() {
    const CategoryList = this.categories.map((category) =>
    {
      return (
        <div className="categories">
          <p>
            {category.text}
          </p>
        </div>
      )
    })

    return(
      <div>
        <Container>
          {CategoryList}
        </Container>
      </div>
    );
  }
}

export default DisplayCategories;
