import excuteQuery from '../../../lib/db'

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
      const result = await excuteQuery({
          query: 'INSERT INTO users(username, password) VALUES(?, ?)',
          values: [req.body.username, req.body.password],
      });
      console.log( "ttt",result );
  } catch ( error ) {
      console.log( error );
  }
  
  
  };