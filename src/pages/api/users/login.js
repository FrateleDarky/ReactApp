import excuteQuery from '../../../lib/db'

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
      const result = await excuteQuery({
          query: 'SELECT username, password, id FROM users WHERE username = ? AND password = ?',
          values: [req.body.username, req.body.password],
      });
      console.log( "ttt",result );
      if(result) {
        res.send({
            username: result.username,
            password: result.password
        })
        
      }
  } catch ( error ) {
      console.log( error );
  }
  
  
  };