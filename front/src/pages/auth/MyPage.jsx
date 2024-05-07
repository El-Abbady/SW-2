import React from 'react';

class MyPage extends React.Component {
  handleClickButton1 = () => {
  };

  handleClickButton2 = () => {
  };

  render() {
    return (
      <div>
               <Link to="/Login">
                <Button variant="primary" style={{ margin: '1rem' }}>Book</Button>
              </Link>       
              <Link to="/Login">
                <Button variant="primary" style={{ margin: '1rem' }}>Book</Button>
              </Link>      </div>
    );
  }
}

export default MyPage;
