import React from 'react';
import {Link} from 'react-router';
import PageBase from '../components/PageBase';

const TablePage = () => {

 /* const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey500
    },
    columns: {
      id: {
        width: '10%'
      },
      name: {
        width: '40%'
      },
      price: {
        width: '20%'
      },
      category: {
        width: '20%'
      },
      edit: {
        width: '10%'
      }
    }
  };
*/
  return (
    <PageBase title="Table Page"
              navigation="">

      <Link to="/form" >

      </Link>


    </PageBase>
  );
};

export default TablePage;
