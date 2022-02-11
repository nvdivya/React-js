import React from 'react';
import Faker from 'faker';
function CommentBox (props)
{
    return(
        <div className="ui cards">
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" alt='' src={Faker.image.image()} />
      <div className="header">
        {props.name}
      </div>
      <div className="meta">
        Friends of Veronika
      </div>
      <div className="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
  </div>
</div>
    );
}
export default CommentBox;